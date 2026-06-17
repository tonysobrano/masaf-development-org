import { defineField, defineType } from "sanity";

export const successStories = defineType({
  name: "successStories",
  title: "Success Stories",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({ name: "coverImage", type: "image" }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Feature in Announcement Banner",
      description: "Show this success story in the homepage announcement banner",
      initialValue: false,
    }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
  ],
  orderings: [
    {
      title: "Published (newest first)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
