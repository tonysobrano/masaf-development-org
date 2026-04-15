"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import {
  submitInquiry,
  initialInquiryState,
  type InquiryType,
} from "@/app/actions/inquiry";

const typeLabels: Record<InquiryType, string> = {
  partner: "Program Partnership",
  contact: "General Inquiry",
  volunteer: "Volunteer / Contribute",
};

export function InquiryForm({
  defaultType = "contact",
  source = "",
}: {
  defaultType?: InquiryType;
  source?: string;
}) {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialInquiryState,
  );

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-masaf-ink/20 bg-masaf-tan/5 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-masaf-tan text-masaf-cream">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="mt-4 text-lg font-medium text-masaf-red">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form id="contact-form" action={formAction} className="space-y-6">
      {state.errors && (
        <div className="rounded-xl bg-masaf-red/10 border border-masaf-red/20 px-5 py-4 text-sm text-masaf-red">
          {state.message}
        </div>
      )}

      <div>
        <label htmlFor="inquiry-type" className="block text-sm font-medium text-masaf-ink mb-2">
          Inquiry type
        </label>
        <select
          id="inquiry-type"
          name="type"
          defaultValue={defaultType}
          className="w-full rounded-full border border-masaf-ink/15 bg-white px-5 py-3 text-sm text-masaf-ink outline-none transition-colors focus:border-masaf-red focus:ring-2 focus:ring-masaf-red/20"
        >
          {(Object.entries(typeLabels) as [InquiryType, string][]).map(
            ([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ),
          )}
        </select>
      </div>

      <div>
        <label htmlFor="inquiry-name" className="block text-sm font-medium text-masaf-ink mb-2">
          Name <span className="text-masaf-ink">*</span>
        </label>
        <input
          id="inquiry-name"
          name="name"
          type="text"
          required
          maxLength={200}
          className="w-full rounded-full border border-masaf-ink/15 bg-white px-5 py-3 text-sm text-masaf-ink outline-none transition-colors focus:border-masaf-red focus:ring-2 focus:ring-masaf-red/20"
          aria-describedby={state.errors?.name ? "inquiry-name-error" : undefined}
        />
        {state.errors?.name && (
          <p id="inquiry-name-error" className="mt-1.5 text-xs text-masaf-red">
            {state.errors.name.join(" ")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="inquiry-email" className="block text-sm font-medium text-masaf-ink mb-2">
          Email <span className="text-masaf-ink">*</span>
        </label>
        <input
          id="inquiry-email"
          name="email"
          type="email"
          required
          className="w-full rounded-full border border-masaf-ink/15 bg-white px-5 py-3 text-sm text-masaf-ink outline-none transition-colors focus:border-masaf-red focus:ring-2 focus:ring-masaf-red/20"
          aria-describedby={state.errors?.email ? "inquiry-email-error" : undefined}
        />
        {state.errors?.email && (
          <p id="inquiry-email-error" className="mt-1.5 text-xs text-masaf-red">
            {state.errors.email.join(" ")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="inquiry-org" className="block text-sm font-medium text-masaf-ink mb-2">
          Organization <span className="text-masaf-ink-muted">(optional)</span>
        </label>
        <input
          id="inquiry-org"
          name="organization"
          type="text"
          maxLength={200}
          className="w-full rounded-full border border-masaf-ink/15 bg-white px-5 py-3 text-sm text-masaf-ink outline-none transition-colors focus:border-masaf-red focus:ring-2 focus:ring-masaf-red/20"
          aria-describedby={state.errors?.organization ? "inquiry-org-error" : undefined}
        />
        {state.errors?.organization && (
          <p id="inquiry-org-error" className="mt-1.5 text-xs text-masaf-red">
            {state.errors.organization.join(" ")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="inquiry-message" className="block text-sm font-medium text-masaf-ink mb-2">
          Message <span className="text-masaf-ink">*</span>
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={5000}
          className="w-full rounded-2xl border border-masaf-ink/15 bg-white px-5 py-3 text-sm text-masaf-ink outline-none transition-colors focus:border-masaf-red focus:ring-2 focus:ring-masaf-red/20 resize-y"
          aria-describedby={state.errors?.message ? "inquiry-message-error" : undefined}
        />
        {state.errors?.message && (
          <p id="inquiry-message-error" className="mt-1.5 text-xs text-masaf-red">
            {state.errors.message.join(" ")}
          </p>
        )}
      </div>

      <input type="hidden" name="source" value={source} />
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="inquiry-website">Do not fill this out</label>
        <input id="inquiry-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {pending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
