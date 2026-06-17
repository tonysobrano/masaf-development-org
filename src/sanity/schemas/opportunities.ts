import { defineField, defineType } from "sanity";

export const opportunities = defineType({
  name: "opportunities",
  title: "Opportunities",
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
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Job", value: "Job" },
          { title: "Internship", value: "Internship" },
          { title: "Youth Opportunity", value: "Youth Opportunity" },
          { title: "Program Call", value: "Program Call" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({ name: "deadline", type: "date" }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Feature in Announcement Banner",
      description: "Show this opportunity in the homepage announcement banner",
      initialValue: false,
    }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
  ],
  orderings: [
    {
      title: "Deadline (Soonest First)",
      name: "deadlineAsc",
      by: [{ field: "deadline", direction: "asc" }],
    },
  ],
});
