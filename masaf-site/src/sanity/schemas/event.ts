import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({ name: "date", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Feature in Announcement Banner",
      description: "Show this event in the homepage announcement banner",
      initialValue: false,
    }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "gallery", type: "array", of: [{ type: "image" }] }),
  ],
});
