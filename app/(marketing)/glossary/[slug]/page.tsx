import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Article } from "@/components/article";
import { getBySlug, getSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getSlugs("glossary");
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const term = getBySlug("glossary", params.slug);
  if (!term) return {};
  return {
    title: `${term.title} — definition`,
    description: term.description,
  };
}

export default function GlossaryTerm({
  params,
}: {
  params: { slug: string };
}) {
  const term = getBySlug("glossary", params.slug);
  if (!term) notFound();

  return (
    <article className="wrap max-w-2xl py-16">
      <Link href="/glossary" className="text-sm link-quiet">
        ← Glossary
      </Link>
      <span className="mt-6 block text-xs font-medium uppercase tracking-wider text-teal-dark">
        {term.category}
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
        {term.title}
      </h1>
      <p className="mt-4 text-lg leading-7 text-muted">{term.description}</p>
      <hr className="my-9 border-line" />
      <Article body={term.body} />
    </article>
  );
}
