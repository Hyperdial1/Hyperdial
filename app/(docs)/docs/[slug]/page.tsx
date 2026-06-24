import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Article } from "@/components/article";
import { getBySlug, getSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getSlugs("docs");
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getBySlug("docs", params.slug);
  if (!page) return {};
  return { title: `${page.title} — Docs`, description: page.description };
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const page = getBySlug("docs", params.slug);
  if (!page) notFound();

  return (
    <article className="max-w-2xl">
      <span className="text-xs font-medium uppercase tracking-wider text-teal-dark">
        {page.category}
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
        {page.title}
      </h1>
      <hr className="my-8 border-line" />
      <Article body={page.body} />
    </article>
  );
}
