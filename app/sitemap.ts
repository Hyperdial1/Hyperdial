import type { MetadataRoute } from "next";
import { getAll } from "@/lib/content";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyperdial.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "", "/product", "/pricing", "/demo", "/solutions",
    "/blog", "/glossary", "/docs", "/privacy", "/terms",
  ];

  const collections: [string, ReturnType<typeof getAll>][] = [
    ["/blog", getAll("blog")],
    ["/glossary", getAll("glossary")],
    ["/solutions", getAll("solutions")],
    ["/docs", getAll("docs")],
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  for (const [prefix, items] of collections) {
    for (const item of items) {
      entries.push({ url: `${base}${prefix}/${item.slug}`, lastModified: new Date() });
    }
  }
  return entries;
}
