import type { MetadataRoute } from "next";
import { siteSettings } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteSettings.url;
  const staticRoutes = [
    "",
    "/about",
    "/masaf-spaces",
    "/programs",
    "/news",
    "/resources",
    "/get-involved",
  ];

  return staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
