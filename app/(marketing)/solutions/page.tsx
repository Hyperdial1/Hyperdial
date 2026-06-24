import Link from "next/link";
import type { Metadata } from "next";
import { getAll } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "The same problem in every industry — and how HyperDial solves it for each.",
};

export default function SolutionsIndex() {
  const verticals = getAll("solutions");
  return (
    <div className="wrap py-16">
      <span className="eyebrow">Solutions</span>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
        Same problem, different language
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Every industry feels the cost of calls that disappear and agents who
        answer differently. Here&rsquo;s how HyperDial fits yours.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {verticals.map((v) => (
          <Link
            key={v.slug}
            href={`/solutions/${v.slug}`}
            className="card group flex flex-col p-6 transition-colors hover:border-teal-dark"
          >
            <h2 className="font-display text-lg font-semibold group-hover:text-teal-dark">
              {v.title}
            </h2>
            <p className="mt-2 flex-1 text-sm italic leading-6 text-muted">
              &ldquo;{v.description}&rdquo;
            </p>
            <span className="mt-4 text-sm font-medium text-teal-dark">
              How we help →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
