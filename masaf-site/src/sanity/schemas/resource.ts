import { defineField, defineType } from "sanity";

export const resource = defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          "Annual Reports",
          "Organizational Profile",
          "Theory of Change",
          "Policies & Governance",
          "Strategic Plan",
        ],
      },
    }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "file", type: "file" }),
    defineField({ name: "publishedAt", type: "date" }),
  ],
});
