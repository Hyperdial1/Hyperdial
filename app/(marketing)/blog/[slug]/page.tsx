import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Article } from "@/components/article";
import { getBySlug, getSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getSlugs("blog");
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBySlug("blog", params.slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBySlug("blog", params.slug);
  if (!post) notFound();

  return (
    <article className="wrap max-w-2xl py-16">
      <Link href="/blog" className="text-sm link-quiet">
        ← Blog
      </Link>
      <div className="mt-6 flex items-center gap-3 text-xs text-faint">
        <span className="font-medium uppercase tracking-wider text-teal-dark">
          {post.category}
        </span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight">
        {post.title}
      </h1>
      <p className="mt-4 text-lg leading-7 text-muted">{post.description}</p>
      <hr className="my-9 border-line" />
      <Article body={post.body} />
    </article>
  );
}
