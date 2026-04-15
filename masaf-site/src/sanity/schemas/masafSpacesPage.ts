import { defineField, defineType } from "sanity";

export const masafSpacesPage = defineType({
  name: "masafSpacesPage",
  title: "MASAF Spaces Page",
  type: "document",
  fields: [
    defineField({ name: "heroHeading", type: "string" }),
    defineField({ name: "heroSubheading", type: "text", rows: 3 }),
    defineField({ name: "overviewBody", type: "text", rows: 6 }),
    defineField({ name: "whyProblem", type: "text", rows: 4 }),
    defineField({ name: "whySolution", type: "text", rows: 4 }),
    defineField({ name: "whyImpact", type: "text", rows: 4 }),
    defineField({
      name: "services",
      type: "array",
      of: [{ type: "namedItem" }],
    }),
    defineField({
      name: "physicalDescription",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "digitalDescription",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "digitalStatus",
      type: "string",
      initialValue: "Coming Soon",
    }),
    defineField({ name: "youthLeadershipBody", type: "text", rows: 4 }),
    defineField({ name: "visionBody", type: "text", rows: 4 }),
  ],
  preview: { prepare: () => ({ title: "MASAF Spaces Page" }) },
});
