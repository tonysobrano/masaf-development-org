import imageUrlBuilder from "@sanity/image-url";
import { sanityProjectId, sanityDataset } from "./env";

const builder = imageUrlBuilder({
  projectId: sanityProjectId || "",
  dataset: sanityDataset || "",
});

export function sanityImageUrl(
  source: unknown,
  width?: number,
  height?: number,
): string {
  if (!source) return "";
  
  if (typeof source === "string" && (source.startsWith("/") || source.startsWith("http://") || source.startsWith("https://"))) {
    if (!source.includes("cdn.sanity.io")) {
      return source;
    }
  }

  try {
    let imageBuilder = builder.image(source as Parameters<typeof builder.image>[0]);
    if (width) imageBuilder = imageBuilder.width(width);
    if (height) imageBuilder = imageBuilder.height(height);
    if (width && height) {
      imageBuilder = imageBuilder.fit("crop");
    }
    return imageBuilder.auto("format").url();
  } catch (error) {
    console.error("Error building Sanity image URL:", error);
    if (typeof source === "string") return source;
    return "";
  }
}

export function getImageDimensions(source: unknown): { width: number; height: number; aspect: number } | null {
  if (!source) return null;
  let ref: string | null = null;
  
  if (typeof source === "string") {
    ref = source;
  } else if (typeof source === "object") {
    const obj = source as Record<string, unknown>;
    const asset = obj.asset as Record<string, unknown> | undefined;
    if (asset) {
      if (typeof asset.url === "string") {
        ref = asset.url;
      } else if (typeof asset._ref === "string") {
        ref = asset._ref;
      } else if (typeof asset._id === "string") {
        ref = asset._id;
      }
    } else if (typeof obj._ref === "string") {
      ref = obj._ref;
    } else if (typeof obj._id === "string") {
      ref = obj._id;
    }
  }

  if (!ref) return null;

  const match = ref.match(/[_-](\d+)x(\d+)[._-]/);
  if (match) {
    const width = parseInt(match[1], 10);
    const height = parseInt(match[2], 10);
    if (!isNaN(width) && !isNaN(height) && height > 0) {
      return { width, height, aspect: width / height };
    }
  }

  const parts = ref.split("/");
  const lastPart = parts[parts.length - 1];
  if (lastPart) {
    const filenameParts = lastPart.split("-");
    if (filenameParts.length >= 2) {
      for (const part of filenameParts) {
        const dotSplit = part.split(".")[0];
        const submatch = dotSplit.match(/^(\d+)x(\d+)$/);
        if (submatch) {
          const width = parseInt(submatch[1], 10);
          const height = parseInt(submatch[2], 10);
          if (!isNaN(width) && !isNaN(height) && height > 0) {
            return { width, height, aspect: width / height };
          }
        }
      }
    }
  }

  return null;
}
