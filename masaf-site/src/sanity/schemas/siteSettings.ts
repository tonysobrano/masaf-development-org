import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", type: "string", initialValue: "Masaf Development Organization" }),
    defineField({ name: "shortName", type: "string", initialValue: "MASAF" }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({
      name: "nav",
      title: "Primary Navigation",
      type: "array",
      of: [{ type: "cta" }],
    }),
    defineField({
      name: "contactEmails",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "email", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "contactPhones",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "phone", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "address",
      type: "object",
      fields: [
        { name: "street", type: "string" },
        { name: "city", type: "string" },
        { name: "region", type: "string" },
        { name: "country", type: "string" },
      ],
    }),
    defineField({
      name: "socials",
      type: "object",
      fields: [
        { name: "facebook", type: "url" },
        { name: "linkedin", type: "url" },
        { name: "instagram", type: "url" },
        { name: "twitter", type: "url" },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
