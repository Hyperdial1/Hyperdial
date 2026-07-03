import type { Metadata } from "next";
import { LpHeader } from "@/components/lp/lp-header";
import { LpHero } from "@/components/lp/lp-hero";
import { LpProblem } from "@/components/lp/lp-problem";
import { LpHowItWorks } from "@/components/lp/lp-how-it-works";
import { AopLoop } from "@/components/lp/aop-loop";
import { LpPopup } from "@/components/lp/lp-popup";
import { LpFloatingCta } from "@/components/lp/lp-floating-cta";

export const metadata: Metadata = {
  title: "Smart Business Calling System | HyperDial",
  description:
    "HyperDial is a business communication system that makes every call as good as your best rep — consistently, at scale, across every conversation.",
  robots: { index: false, follow: false },
};

const problems = [
  {
    icon: "📞",
    text: "Your phones ring faster than your team can answer. Missed calls mean missed revenue — and customers who don't call back.",
  },
  {
    icon: "📋",
    text: "Every rep handles calls differently. Your best agent closes 80% of the time. Your worst closes 30%. The gap is costing you.",
  },
  {
    icon: "📉",
    text: "Training takes months. New reps make the same mistakes. And by the time they're good, your best rep's playbook is already stale.",
  },
];

const steps = [
  {
    number: "1",
    title: "Connect in days, not months",
    description:
      "HyperDial plugs into your existing phone system. No rip-and-replace. No long implementation. Live in days.",
  },
  {
    number: "2",
    title: "Every call handled consistently",
    description:
      "Inbound queries answered instantly. Outbound follow-ups placed automatically. Every call sounds like your best rep made it.",
  },
  {
    number: "3",
    title: "Gets smarter with every conversation",
    description:
      "The AOP layer captures what your top performers do differently — and replicates it across every future call, automatically.",
  },
];

export default function SmartCallingLp() {
  return (
    <>
      <LpPopup source="lp_smart_calling" variant="voice" />
      <LpFloatingCta label="Book a Demo" />

      <LpHeader />

      <LpHero
        eyebrow="Business Communication System"
        headline="Every call handled like your best rep made it."
        subhead="HyperDial captures what your top performers do on calls, and replicates it across your entire team — consistently, at scale, without months of training."
        ctaLabel="See How It Works — Free"
      />

      <LpProblem points={problems} />

      {/* Stats strip */}
      <section className="py-12 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto">
          <dl className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: "4x", label: "conversion lift vs. untrained teams" },
              { stat: "60%", label: "faster rep ramp-up time" },
              { stat: "< 2 days", label: "average time to go live" },
            ].map(({ stat, label }, i) => (
              <div key={i} className="flex flex-col gap-1">
                <dt className="font-display text-4xl font-bold text-brand">{stat}</dt>
                <dd className="text-sm text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <LpHowItWorks steps={steps} />

      <AopLoop />

      <section className="py-16 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold text-ink mb-8">
            This is built for you if…
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "You handle 500+ calls a month and consistency across your team is a problem",
              "Your best rep outperforms the rest — and you want to close that gap",
              "You're in insurance, lending, real estate, healthcare, or collections",
              "You want AI that improves from your own team's conversations, not generic scripts",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                <span className="mt-0.5 text-brand font-bold">✓</span>
                <p className="text-sm text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-6 text-center text-xs text-faint bg-white">
        © {new Date().getFullYear()} HyperDial ·{" "}
        <a href="/privacy" className="hover:text-brand">Privacy</a> ·{" "}
        <a href="/terms" className="hover:text-brand">Terms</a>
      </footer>
    </>
  );
}
