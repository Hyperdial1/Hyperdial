export type Doc = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date?: string;
  readingTime?: string;
  body: string;
};

import { blog } from "@/content/blog";
import { glossary } from "@/content/glossary";
import { docs } from "@/content/docs";
import { solutions } from "@/content/solutions";

const collections = { blog, glossary, docs, solutions };

export function getAll(key: keyof typeof collections): Doc[] {
  return collections[key];
}

export function getBySlug(
  key: keyof typeof collections,
  slug: string
): Doc | undefined {
  return collections[key].find((d) => d.slug === slug);
}

export function getSlugs(key: keyof typeof collections): { slug: string }[] {
  return collections[key].map((d) => ({ slug: d.slug }));
}
