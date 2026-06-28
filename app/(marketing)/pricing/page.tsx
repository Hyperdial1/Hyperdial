import { Fragment } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { tiers, featureMatrix } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Predictable per-seat pricing for AI that gets smarter with every conversation.",
};

export default function PricingPage() {
  return (
    <div className="wrap py-16">
      <div className="max-w-2xl">
        <span className="eyebrow">Pricing</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Predictable per-seat pricing
        </h1>
        <p className="mt-5 text-lg leading-7 text-muted">
          AI that gets smarter with every customer conversation. Pick the plan
          that matches how much of your stack you want HyperDial to run.
        </p>
      </div>

      {/* Tier cards */}
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.id}
            className={`flex flex-col rounded-xl2 border p-8 ${
              t.featured ? "border-brand bg-deep text-white" : "border-line bg-white"
            }`}
          >
            {t.featured && (
              <span className="mb-3 inline-flex w-fit items-center rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                Most popular
              </span>
            )}
            <h2 className="font-display text-lg font-semibold">{t.name}</h2>
            <p className={`mt-2 text-sm leading-6 ${t.featured ? "text-slate-soft" : "text-muted"}`}>
              {t.tagline}
            </p>

            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="font-display text-3xl font-semibold">{t.pricePerSeat}</span>
              <span className={`text-sm ${t.featured ? "text-slate-soft" : "text-faint"}`}>{t.priceNote}</span>
            </div>
            <p className={`mt-1 text-xs ${t.featured ? "text-slate-soft" : "text-faint"}`}>{t.monthlyTenSeats}</p>
            {t.earlyAccess && (
              <p className="mt-2 text-xs font-medium text-brand">{t.earlyAccess}</p>
            )}

            <Link
              href="/demo"
              className={`btn mt-6 w-full ${
                t.featured ? "bg-white text-brand hover:bg-brand-light hover:text-white" : "btn-primary"
              }`}
            >
              Talk to us
            </Link>

            <p className={`mt-7 text-xs font-semibold uppercase tracking-wider ${t.featured ? "text-brand-light" : "text-faint"}`}>
              {t.highlightLabel}
            </p>
            <ul className={`mt-3 flex-1 space-y-2.5 text-sm ${t.featured ? "text-slate-soft" : "text-muted"}`}>
              {t.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className={t.featured ? "text-brand-light" : "text-brand"}>✓</span>
                  {h}
                </li>
              ))}
            </ul>

            <a
              href="#full-features"
              className={`mt-5 text-sm font-medium ${t.featured ? "text-brand-light" : "text-brand"} hover:underline`}
            >
              View all features →
            </a>
          </div>
        ))}
      </div>

      {/* Who it's for / comparison strip */}
      <div className="mt-16 grid gap-5 sm:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.id} className="card p-6">
            <h3 className="font-display text-sm font-semibold text-brand">{t.name.split(" — ")[0]}</h3>
            <p className="mt-2 text-sm leading-6 text-muted"><span className="font-medium text-ink">Who it&rsquo;s for:</span> {t.who}</p>
            <p className="mt-3 text-sm leading-6 text-muted"><span className="font-medium text-ink">Closest comparison:</span> {t.comparison}</p>
            <p className="mt-3 text-sm leading-6 text-muted"><span className="font-medium text-ink">Deployment:</span> {t.deployment}</p>
          </div>
        ))}
      </div>

      {/* Full feature matrix */}
      <section id="full-features" className="mt-20 scroll-mt-24">
        <span className="eyebrow">Full feature matrix</span>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">Every feature, by plan</h2>
        <div className="mt-8 overflow-x-auto rounded-xl2 border border-line">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-line/40">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-muted">Feature</th>
                <th className="px-4 py-3 text-center font-medium text-muted">Pilot</th>
                <th className="px-4 py-3 text-center font-medium text-brand">Growth</th>
                <th className="px-4 py-3 text-center font-medium text-muted">Scale</th>
              </tr>
            </thead>
            <tbody>
              {featureMatrix.map((section) => (
                <Fragment key={section.section}>
                  <tr className="bg-deep/5">
                    <td colSpan={4} className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand">
                      {section.section}
                    </td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr key={row.feature} className="border-t border-line">
                      <td className="px-4 py-2.5 text-ink">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-muted">{row.pilot}</td>
                      <td className="px-4 py-2.5 text-center font-medium text-brand">{row.growth}</td>
                      <td className="px-4 py-2.5 text-center text-muted">{row.scale}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20">
        <div className="rounded-xl2 bg-gradient-to-br from-deep via-deep-600 to-brand px-8 py-16 text-center text-white">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Not sure which plan fits?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-slate-soft">
            Tell us your stack and volume — we&rsquo;ll recommend a tier and walk
            you through it live.
          </p>
          <Link href="/demo" className="btn mt-8 bg-white text-brand hover:bg-brand-light hover:text-white">
            Talk to us
          </Link>
        </div>
      </section>

      <p className="mt-8 text-center text-sm text-faint">
        HyperDial is in early access. Pricing is finalised with each pilot
        customer.
      </p>
    </div>
  );
}
