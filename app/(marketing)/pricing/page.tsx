import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple per-team pricing that scales with your call volume.",
};

const tiers = [
  {
    name: "Pilot",
    price: "Founder pricing",
    note: "early customers",
    features: [
      "One team / phone line",
      "Read-only + ticket actions",
      "Agent Intelligence pattern library",
      "Knowledge base that builds itself",
      "Locked-in early-access rate",
    ],
    cta: "Talk to us",
    href: "/demo",
    highlight: true,
  },
  {
    name: "Growth",
    price: "Per team",
    note: "scales with volume",
    features: [
      "Multiple teams & numbers",
      "Inbound + outbound",
      "Full intent & outcome analytics",
      "Decay detection on patterns",
      "Email support",
    ],
    cta: "Talk to us",
    href: "/demo",
    highlight: false,
  },
  {
    name: "Scale",
    price: "Custom",
    note: "land & expand",
    features: [
      "Everything in Growth",
      "Expand to chat, email & social",
      "SSO and role-based access",
      "Full audit trail",
      "Dedicated support & SLAs",
    ],
    cta: "Contact us",
    href: "/demo",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="wrap py-16">
      <div className="max-w-2xl">
        <span className="eyebrow">Pricing</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Pricing that scales with conversations
        </h1>
        <p className="mt-5 text-lg leading-7 text-muted">
          Monthly per-team pricing that grows with your call volume. Early
          customers lock in founder pricing for life — start small, expand from
          calls to chat, email, and social on one brain.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex flex-col rounded-xl2 border p-8 ${
              t.highlight ? "border-teal-dark bg-navy text-white" : "border-line bg-white"
            }`}
          >
            <h2 className="font-display text-lg font-semibold">{t.name}</h2>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold">{t.price}</span>
              <span className={`text-sm ${t.highlight ? "text-slate-soft" : "text-faint"}`}>{t.note}</span>
            </div>
            <ul className={`mt-6 flex-1 space-y-2.5 text-sm ${t.highlight ? "text-slate-soft" : "text-muted"}`}>
              {t.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className={t.highlight ? "text-teal-bright" : "text-teal-dark"}>&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={t.href}
              className={`btn mt-8 ${t.highlight ? "bg-teal-dark text-white hover:bg-teal" : "btn-ghost"}`}
            >
              {t.cta}
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-faint">
        HyperDial is in early access. Pricing is finalised with each pilot
        customer.
      </p>
    </div>
  );
}
