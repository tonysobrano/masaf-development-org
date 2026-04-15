import { createClient, type SanityClient } from "next-sanity";
import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
  sanityReadToken,
  sanityWriteToken,
  sanityIsConfigured,
} from "./env";

let cachedRead: SanityClient | null = null;
let cachedWrite: SanityClient | null = null;

export function getReadClient(): SanityClient | null {
  if (!sanityIsConfigured()) return null;
  if (cachedRead) return cachedRead;
  cachedRead = createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    useCdn: true,
    token: sanityReadToken || undefined,
    perspective: "published",
  });
  return cachedRead;
}

export function getWriteClient(): SanityClient | null {
  if (!sanityIsConfigured() || !sanityWriteToken) return null;
  if (cachedWrite) return cachedWrite;
  cachedWrite = createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    useCdn: false,
    token: sanityWriteToken,
  });
  return cachedWrite;
}
