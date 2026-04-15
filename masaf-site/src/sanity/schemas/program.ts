import { defineField, defineType } from "sanity";

export const program = defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({
      name: "thematicArea",
      type: "string",
      options: {
        list: [
          "Skills Development & Lifelong Learning",
          "Entrepreneurship & MSME Support",
          "Youth Leadership & Civic Engagement",
          "Women's Economic Empowerment",
          "Workforce Development & Employability",
          "Digital Jobs & Innovation",
          "Financial Literacy & Inclusion",
          "Climate-Smart Livelihoods",
          "Community Resilience & IDP Support",
        ],
      },
    }),
    defineField({ name: "coverImage", type: "image" }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
  ],
});
