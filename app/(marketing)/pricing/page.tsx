import Link from "next/link";
import type { Metadata } from "next";
import { tiers, featureMatrix } from "@/content/pricing";
import {
  PricingExpandProvider,
  ViewAllFeaturesLink,
  FeatureAccordion,
} from "@/components/pricing-accordion";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Plans built around how much of your stack you want HyperDial to run.",
};

export default function PricingPage() {
  return (
    <PricingExpandProvider>
      <div className="wrap py-16">
        <div className="max-w-2xl">
          <span className="eyebrow">Pricing</span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Plans built around how you want to run support
          </h1>
          <p className="mt-5 text-lg leading-7 text-muted">
            Every plan includes the Agent Intelligence Process — the only
            difference is how much of your stack HyperDial runs. Talk to us
            and we&rsquo;ll recommend the right fit for your volume.
          </p>
        </div>

        {/* Tier cards — staircase layout: Pilot shortest, Scale tallest */}
        <div className="mt-14 grid items-end gap-5 lg:grid-cols-3">
          {tiers.map((t, i) => {
            const stepMinHeight = ["lg:min-h-[420px]", "lg:min-h-[480px]", "lg:min-h-[540px]"][i] ?? "";
            return (
              <div
                key={t.id}
                className={`flex flex-col rounded-xl2 border p-8 ${stepMinHeight} ${
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

                {t.earlyAccess && (
                  <p className="mt-4 text-xs font-medium text-brand">{t.earlyAccess}</p>
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
                  {t.highlights.slice(0, 4 + i).map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className={t.featured ? "text-brand-light" : "text-brand"}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <ViewAllFeaturesLink tier={t} />
              </div>
            );
          })}
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

        <FeatureAccordion featureMatrix={featureMatrix} />

        {/* CTA */}
        <section className="mt-20">
          <div className="rounded-xl2 bg-gradient-to-br from-deep via-deep-600 to-brand px-8 py-16 text-center text-white">
            <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Not sure which plan fits?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-slate-soft">
              Tell us your stack and volume — we&rsquo;ll recommend a tier and
              walk you through it live.
            </p>
            <Link href="/demo" className="btn mt-8 bg-white text-brand hover:bg-brand-light hover:text-white">
              Talk to us
            </Link>
          </div>
        </section>

        <p className="mt-8 text-center text-sm text-faint">
          HyperDial is in early access — every plan is scoped and confirmed
          when you talk to us.
        </p>
      </div>
    </PricingExpandProvider>
  );
}
