import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Article } from "@/components/article";
import { getBySlug, getSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getSlugs("solutions");
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const v = getBySlug("solutions", params.slug);
  if (!v) return {};
  return {
    title: `${v.title} — voice AI that learns`,
    description: v.description,
  };
}

export default function SolutionPage({
  params,
}: {
  params: { slug: string };
}) {
  const v = getBySlug("solutions", params.slug);
  if (!v) notFound();

  return (
    <article className="wrap max-w-2xl py-16">
      <Link href="/solutions" className="text-sm link-quiet">
        ← Solutions
      </Link>
      <span className="mt-6 block text-xs font-medium uppercase tracking-wider text-teal-dark">
        For {v.title.toLowerCase()} teams
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
        {v.title}
      </h1>
      <hr className="my-8 border-line" />
      <Article body={v.body} />

      <div className="mt-12 rounded-xl2 bg-navy p-8 text-center text-white">
        <p className="font-display text-xl font-semibold">
          See it on your {v.title.toLowerCase()} calls
        </p>
        <Link href="/demo" className="btn-primary mt-5">
          Talk to us
        </Link>
      </div>
    </article>
  );
}
