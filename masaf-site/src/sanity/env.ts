/**
 * Environment read from Next.js. Falls back to empty strings so builds
 * don't fail before the Sanity project is linked. Studio (/studio) and the
 * inquiry server action check for these at runtime and degrade gracefully.
 */
export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-11-01";
export const sanityReadToken = process.env.SANITY_API_READ_TOKEN ?? "";
export const sanityWriteToken = process.env.SANITY_API_WRITE_TOKEN ?? "";

export function sanityIsConfigured(): boolean {
  return Boolean(sanityProjectId);
}
