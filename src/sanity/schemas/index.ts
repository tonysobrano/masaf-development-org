import type { SchemaTypeDefinition } from "sanity";
import { post } from "./post";
import { event } from "./event";
import { resource } from "./resource";
import { opportunities } from "./opportunities";
import { successStories } from "./successStories";

export const schemaTypes: SchemaTypeDefinition[] = [
  post,
  event,
  resource,
  opportunities,
  successStories,
];

export const singletonIds = [] as const;

