export const inquiryTypes = ["partner", "contact", "volunteer"] as const;
export type InquiryType = (typeof inquiryTypes)[number];

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
