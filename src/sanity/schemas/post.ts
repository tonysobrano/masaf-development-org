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
      initialValue: "News",
    }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Feature in Announcement Banner",
      description: "Show this post in the homepage announcement banner",
      initialValue: false,
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Gallery Images",
      description: "Add up to 4 images to display inside the post.",
      of: [{ type: "image" }],
      validation: (rule) => rule.max(4),
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
