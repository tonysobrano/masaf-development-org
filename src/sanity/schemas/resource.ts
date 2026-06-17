import { defineField, defineType } from "sanity";

export const resource = defineType({
  name: "resource",
  title: "Resource Category",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({
      name: "status",
      title: "Status (Optional)",
      description: "E.g., 'In preparation.' If set, shows a badge instead of files.",
      type: "string",
    }),
    defineField({
      name: "files",
      title: "Files in this category",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", title: "File Name" }),
            defineField({ name: "file", type: "file", title: "File Upload" }),
            defineField({ name: "viewUrl", type: "url", title: "External View URL (Optional)" }),
            defineField({ name: "downloadUrl", type: "url", title: "External Download URL (Optional)" })
          ],
        },
      ],
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Feature in Announcement Banner",
      description: "Show this resource category in the homepage announcement banner",
      initialValue: false,
    }),
  ],
});
