import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "News", value: "news" },
          { title: "Success Story", value: "story" },
        ],
      },
      initialValue: "news",
    }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({ name: "coverImage", type: "image" }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Feature in Announcement Banner",
      description: "Show this post in the homepage announcement banner",
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
