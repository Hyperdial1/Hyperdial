import Link from "next/link";
import type { Metadata } from "next";
import { getAll } from "@/lib/content";

export const metadata: Metadata = {
  title: "Glossary",
  description: "Plain-language definitions of customer support and AI terms.",
};

export default function GlossaryIndex() {
  const terms = [...getAll("glossary")].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="wrap py-16">
      <span className="eyebrow">Glossary</span>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
        Support &amp; AI terms, defined
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Short, honest definitions of the words that get thrown around in
        automated support.
      </p>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {terms.map((t) => (
          <Link
            key={t.slug}
            href={`/glossary/${t.slug}`}
            className="card group p-5 transition-colors hover:border-teal-dark"
          >
            <h2 className="font-display text-base font-semibold group-hover:text-teal-dark">
              {t.title}
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-muted line-clamp-2">
              {t.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
