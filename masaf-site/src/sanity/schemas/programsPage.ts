import { defineField, defineType } from "sanity";

export const programsPage = defineType({
  name: "programsPage",
  title: "Programs Page",
  type: "document",
  fields: [
    defineField({ name: "heroHeading", type: "string" }),
    defineField({ name: "heroBody", type: "text", rows: 4 }),
    defineField({
      name: "thematicAreas",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: { prepare: () => ({ title: "Programs Page" }) },
});
