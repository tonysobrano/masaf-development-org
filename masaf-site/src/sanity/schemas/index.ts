import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { masafSpacesPage } from "./masafSpacesPage";
import { programsPage } from "./programsPage";
import { program } from "./program";
import { post } from "./post";
import { event } from "./event";
import { resource } from "./resource";
import { partner } from "./partner";
import { inquiry } from "./inquiry";
import { cta, stat, valueItem, namedItem } from "./objects";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Singletons
  siteSettings,
  homePage,
  aboutPage,
  masafSpacesPage,
  programsPage,
  // Documents
  program,
  post,
  event,
  resource,
  partner,
  inquiry,
  // Shared objects
  cta,
  stat,
  valueItem,
  namedItem,
];

export const singletonIds = [
  "siteSettings",
  "homePage",
  "aboutPage",
  "masafSpacesPage",
  "programsPage",
] as const;
