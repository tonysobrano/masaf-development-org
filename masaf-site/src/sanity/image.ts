import { sanityProjectId, sanityDataset } from "./env";

export function sanityImageUrl(
  source: unknown,
  width?: number,
  height?: number,
): string {
  if (!sanityProjectId || !source) return "";
  const id = extractImageId(source);
  if (!id) return "";
  const base = `https://cdn.sanity.io/images/${sanityProjectId}/${sanityDataset}/${id}`;
  const params: string[] = [];
  if (width) params.push(`w=${width}`);
  if (height) params.push(`h=${height}`);
  params.push("fit=max", "auto=format");
  return params.length ? `${base}?${params.join("&")}` : base;
}

function extractImageId(source: unknown): string | null {
  if (!source || typeof source !== "object") return null;
  const obj = source as Record<string, unknown>;
  if (obj.asset && typeof obj.asset === "object") {
    const asset = obj.asset as Record<string, unknown>;
    if (asset._ref && typeof asset._ref === "string") return refToPath(asset._ref);
    if (asset._id && typeof asset._id === "string") return refToPath(asset._id);
  }
  return null;
}

function refToPath(ref: string): string {
  const parts = ref.replace(/^image-/, "").split("-");
  const fmt = parts.pop();
  const dims = parts.pop();
  return `${dims}-${fmt}`;
}
