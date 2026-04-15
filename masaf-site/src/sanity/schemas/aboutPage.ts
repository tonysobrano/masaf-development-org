import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "heroHeading", type: "string" }),
    defineField({ name: "heroBody", type: "text", rows: 4 }),
    defineField({ name: "foundingHeading", type: "string" }),
    defineField({ name: "foundingBody", type: "text", rows: 6 }),
    defineField({ name: "missionStatement", type: "text", rows: 4 }),
    defineField({
      name: "objectives",
      type: "array",
      of: [{ type: "namedItem" }],
    }),
    defineField({
      name: "coreValues",
      type: "array",
      of: [{ type: "valueItem" }],
    }),
    defineField({
      name: "approach",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "teamBody", type: "text", rows: 4 }),
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
});
