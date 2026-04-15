import { defineField, defineType } from "sanity";

export const partner = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "logo", type: "image" }),
    defineField({
      name: "type",
      type: "string",
      options: {
        list: ["Donor", "NGO", "UN Agency", "Government", "Private Sector"],
      },
    }),
    defineField({ name: "url", type: "url" }),
  ],
});
