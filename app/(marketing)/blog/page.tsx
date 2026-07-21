import Link from "next/link";
import type { Metadata } from "next";
import { getAll } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on building and running AI-powered business calling.",
};

export default function BlogIndex() {
  const posts = getAll("blog");
  return (
    <div className="wrap py-16">
      <span className="eyebrow">Blog</span>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
        Field notes on AI calling
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        What we're learning about resolving calls, measuring honestly, and
        keeping AI on the phones safe.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="card group flex flex-col p-7 transition-colors hover:border-teal-dark"
          >
            <div className="flex items-center gap-3 text-xs text-faint">
              <span className="font-medium uppercase tracking-wider text-teal-dark">
                {p.category}
              </span>
              <span>·</span>
              <span>{p.readingTime}</span>
            </div>
            <h2 className="mt-3 font-display text-xl font-semibold leading-snug group-hover:text-teal-dark">
              {p.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted">
              {p.description}
            </p>
            <span className="mt-4 text-sm font-medium text-teal-dark">
              Read →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
