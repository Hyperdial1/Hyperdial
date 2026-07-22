import Link from "next/link";
import { Wordmark } from "@/components/wordmark";

const groups = [
  {
    title: "Platform",
    links: [
      { label: "Telephony", href: "/product#telephony" },
      { label: "AIP", href: "/product/how-it-learns" },
      { label: "Pricing", href: "/pricing" },
      { label: "Docs", href: "/docs" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Insurance", href: "/solutions/insurance" },
      { label: "Real estate", href: "/solutions/real-estate" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "All verticals", href: "/solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Glossary", href: "/glossary" },
      { label: "Talk to us", href: "/demo" },
      { label: "Book a demo", href: "/book-a-demo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/docs/guardrails" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.5fr_repeat(4,1fr)]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            The AI voice platform that gets smarter with every call. Your best
            agent&rsquo;s best call, replicated across every call, forever.
          </p>
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-faint">
              {g.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm link-quiet">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap border-t border-line py-5">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5 text-faint">
          <span className="inline-flex items-center gap-1.5 font-medium text-muted">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2 4 5v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V5l-8-3Z" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            Encrypted in transit and at rest, hosted on AWS, and GDPR-aligned.
          </span>
          We never share your data or use it to train models for anyone else
          &mdash; your patterns are yours alone.
        </p>
      </div>
      <div className="wrap flex flex-col items-start justify-between gap-3 border-t border-line py-6 text-xs text-faint sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} HyperDial. All rights reserved.</p>
        <a href="mailto:deepak@hyperdial.io" className="hover:text-ink">
          deepak@hyperdial.io
        </a>
      </div>
    </footer>
  );
}
