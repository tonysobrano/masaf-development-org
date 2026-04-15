"use server";

import { z } from "zod";
import { Resend } from "resend";
import { getWriteClient } from "@/sanity/client";

const inquiryTypes = ["partner", "contact", "volunteer"] as const;
export type InquiryType = (typeof inquiryTypes)[number];

const schema = z.object({
  type: z.enum(inquiryTypes),
  name: z.string().trim().min(1, "Please share your name.").max(200),
  email: z.email("Please enter a valid email address."),
  organization: z.string().trim().max(200).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please write a slightly longer message (10+ characters).")
    .max(5000),
  source: z.string().trim().max(200).optional().or(z.literal("")),
  // Honeypot — should stay blank. Filter bots out silently.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type InquiryFieldErrors = Partial<
  Record<"name" | "email" | "organization" | "message" | "type", string[]>
>;

export type InquiryState = {
  ok: boolean;
  message: string;
  errors?: InquiryFieldErrors;
};

export const initialInquiryState: InquiryState = {
  ok: false,
  message: "",
};

function renderEmailHtml(input: z.infer<typeof schema>) {
  const rows: Array<[string, string]> = [
    ["Type", input.type],
    ["Name", input.name],
    ["Email", input.email],
    ["Organization", input.organization || "—"],
    ["Source", input.source || "—"],
  ];
  const rowHtml = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#42413d;font-weight:500;">${k}</td><td style="padding:4px 0;color:#3a3735;">${escapeHtml(v)}</td></tr>`,
    )
    .join("");
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#3a3735;">
    <h2 style="margin:0 0 16px;color:#0c2e1d;">New inquiry from masaf.co</h2>
    <table style="border-collapse:collapse;margin-bottom:16px;">${rowHtml}</table>
    <div style="background:#f9f7f2;padding:16px;border-radius:8px;white-space:pre-wrap;">${escapeHtml(
      input.message,
    )}</div>
  </div>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendNotificationEmail(input: z.infer<typeof schema>) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM ?? "Masaf Website <noreply@masaf.co>";
  const to = process.env.INQUIRY_NOTIFY_TO ?? "info@masaf.co";
  if (!apiKey) return;
  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: input.email,
      subject: `[${input.type}] New inquiry from ${input.name}`,
      html: renderEmailHtml(input),
    });
  } catch (err) {
    // Best-effort: don't fail the submission if email provider hiccups.
    console.error("[inquiry] Resend failed:", err);
  }
}

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const raw = {
    type: formData.get("type"),
    name: formData.get("name"),
    email: formData.get("email"),
    organization: formData.get("organization") ?? "",
    message: formData.get("message"),
    source: formData.get("source") ?? "",
    website: formData.get("website") ?? "",
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const flat = z.flattenError(parsed.error);
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      errors: flat.fieldErrors as InquiryFieldErrors,
    };
  }

  const input = parsed.data;

  // Honeypot — pretend success without doing anything.
  if (input.website) {
    return { ok: true, message: "Thanks — we'll be in touch." };
  }

  const client = getWriteClient();
  if (!client) {
    console.error("[inquiry] Sanity write client unavailable — check env.");
    return {
      ok: false,
      message:
        "We couldn't record your inquiry right now. Please email info@masaf.co directly.",
    };
  }

  try {
    await client.create({
      _type: "inquiry",
      type: input.type,
      name: input.name,
      email: input.email,
      organization: input.organization || undefined,
      message: input.message,
      source: input.source || undefined,
      submittedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[inquiry] Sanity write failed:", err);
    return {
      ok: false,
      message:
        "We couldn't save your inquiry. Please try again or email info@masaf.co.",
    };
  }

  await sendNotificationEmail(input);

  return {
    ok: true,
    message:
      "Thanks — your message is with the MASAF team. We'll reply within a few business days.",
  };
}
