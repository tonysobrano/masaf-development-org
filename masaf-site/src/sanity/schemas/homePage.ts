import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "body", title: "Body Sections" },
    { name: "partner", title: "Partner" },
  ],
  fields: [
    defineField({
      name: "heroTagline",
      type: "string",
      group: "hero",
      initialValue:
        "Empowering Youth. Expanding Opportunity. Building Resilient Communities.",
    }),
    defineField({
      name: "heroSubTaglines",
      type: "array",
      of: [{ type: "string" }],
      group: "hero",
    }),
    defineField({ name: "heroIdentity", type: "text", rows: 4, group: "hero" }),
    defineField({ name: "heroPrimaryCta", type: "cta", group: "hero" }),
    defineField({ name: "heroSecondaryCta", type: "cta", group: "hero" }),
    defineField({
      name: "whoWeAreHeading",
      type: "string",
      group: "body",
    }),
    defineField({ name: "whoWeAreBody", type: "text", rows: 4, group: "body" }),
    defineField({ name: "missionStatement", type: "text", rows: 3, group: "body" }),
    defineField({ name: "whyMasafHeading", type: "string", group: "body" }),
    defineField({
      name: "whyMasafPoints",
      type: "array",
      of: [{ type: "valueItem" }],
      validation: (r) => r.length(5).error("Exactly 5 points."),
      group: "body",
    }),
    defineField({
      name: "impactStats",
      type: "array",
      of: [{ type: "stat" }],
      group: "body",
    }),
    defineField({
      name: "masafSpacesCallout",
      type: "object",
      group: "body",
      fields: [
        { name: "heading", type: "string" },
        { name: "body", type: "text", rows: 4 },
        { name: "cta", type: "cta" },
      ],
    }),
    defineField({
      name: "programmaticFocusAreas",
      type: "array",
      of: [{ type: "string" }],
      group: "body",
    }),
    defineField({
      name: "partnerHeading",
      type: "string",
      group: "partner",
    }),
    defineField({ name: "partnerBody", type: "text", rows: 4, group: "partner" }),
    defineField({
      name: "partnershipTypes",
      type: "array",
      of: [{ type: "string" }],
      group: "partner",
    }),
    defineField({ name: "closingLine", type: "string", group: "partner" }),
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
});
