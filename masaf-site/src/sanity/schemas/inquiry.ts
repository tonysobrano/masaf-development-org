import { defineField, defineType } from "sanity";

export const inquiry = defineType({
  name: "inquiry",
  title: "Inquiry",
  type: "document",
  readOnly: true,
  fields: [
    defineField({
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Partner", value: "partner" },
          { title: "Contact", value: "contact" },
          { title: "Volunteer", value: "volunteer" },
        ],
      },
    }),
    defineField({ name: "name", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "organization", type: "string" }),
    defineField({ name: "message", type: "text", rows: 6 }),
    defineField({ name: "submittedAt", type: "datetime" }),
    defineField({ name: "source", type: "string" }),
  ],
  orderings: [
    {
      title: "Submitted (newest first)",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "type", description: "email" },
    prepare: ({ title, subtitle, description }) => ({
      title: title ?? "(anonymous)",
      subtitle: subtitle ? `${subtitle} · ${description ?? ""}` : description,
    }),
  },
});
