import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes, singletonIds } from "./src/sanity/schemas";
import { structure } from "./src/sanity/structure";
import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from "./src/sanity/env";

export default defineConfig({
  name: "masaf",
  title: "Masaf Development Organization",
  basePath: "/studio",
  projectId: sanityProjectId || "placeholder",
  dataset: sanityDataset,
  schema: {
    types: schemaTypes,
    // Singletons: only creatable once (as a fixed document id)
    templates: (prev) =>
      prev.filter((t) => !singletonIds.includes(t.id as (typeof singletonIds)[number])),
  },
  document: {
    actions: (prev, { schemaType }) =>
      singletonIds.includes(schemaType as (typeof singletonIds)[number])
        ? prev.filter(
            ({ action }) =>
              action &&
              !["duplicate", "delete", "unpublish"].includes(action),
          )
        : prev,
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: sanityApiVersion }),
  ],
});
