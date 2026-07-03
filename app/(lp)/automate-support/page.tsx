import type { Metadata } from "next";
import { LpHeader } from "@/components/lp/lp-header";
import { LpHero } from "@/components/lp/lp-hero";
import { LpProblem } from "@/components/lp/lp-problem";
import { LpHowItWorks } from "@/components/lp/lp-how-it-works";
import { AopLoop } from "@/components/lp/aop-loop";
import { LpPopup } from "@/components/lp/lp-popup";
import { LpFloatingCta } from "@/components/lp/lp-floating-cta";
import { LpInlineFormSection } from "@/components/lp/lp-inline-form-section";

export const metadata: Metadata = {
  title: "AI Resolution Loop | HyperDial",
  description:
    "Every resolution makes the next one automatic. HyperDial's AI learns from every query your team resolves — and handles every repeat of it forever after.",
  robots: { index: false, follow: false },
};

const problems = [
  {
    icon: "🤖",
    text: "Static chatbots deflect, they don't resolve. Customers get frustrated and ask for a human anyway.",
  },
  {
    icon: "🔁",
    text: "Your team resolves the same question over and over — and nothing is captured, so the next repeat still needs a human.",
  },
  {
    icon: "⚙️",
    text: "Traditional automation means someone writes scripts and rules by hand. That doesn't scale, and it goes stale fast.",
  },
];

const steps = [
  {
    number: "1",
    title: "Connect your support channels",
    description:
      "Chat, email, social, ticketing — HyperDial plugs into what you already use. No migration, no disruption.",
  },
  {
    number: "2",
    title: "Your team resolves it once",
    description:
      "The first time a question comes in, it's handled the normal way — your agent answers it like they always have.",
  },
  {
    number: "3",
    title: "AI handles every repeat, automatically",
    description:
      "From the second time that query shows up, HyperDial resolves it instantly — no scripting, no setup, it just learned.",
  },
];

export default function AutomateSupportLp() {
  return (
    <>
      <LpPopup source="lp_automate_support" variant="support" />
      <LpFloatingCta label="Book a Demo" />

      <LpHeader />

      <LpHero
        eyebrow="AI Resolution Loop"
        headline="Every resolution makes the next one automatic."
        subhead="The first time your team solves a query, HyperDial learns it. Every repeat after that — on every channel — gets resolved automatically. No scripts. No retraining. Just a loop that keeps getting faster."
        ctaLabel="See How It Works — Free"
      />

      <LpProblem points={problems} />

      {/* Stats strip */}
      <section className="py-12 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto">
          <dl className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: "1st resolution", label: "handled by your team" },
              { stat: "Every one after", label: "resolved automatically" },
              { stat: "< 2 days", label: "average time to go live" },
            ].map(({ stat, label }, i) => (
              <div key={i} className="flex flex-col gap-1">
                <dt className="font-display text-3xl sm:text-4xl font-bold text-brand">{stat}</dt>
                <dd className="text-sm text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <LpHowItWorks steps={steps} />

      <AopLoop />

      <LpInlineFormSection
        source="lp_automate_support"
        variant="support"
        eyebrow="Book a Demo"
        title="See it learn in real time"
        subtitle="Bring a real repeat question from your queue — we'll show you exactly how HyperDial resolves it after the first handoff."
      />

      <section className="py-16 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold text-ink mb-8">
            This is built for you if…
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Your support team resolves the same questions over and over",
              "You're running a helpdesk on chat, email, or social and repeats are piling up",
              "You've tried a chatbot before and it failed because it couldn't learn",
              "You want automation that captures resolutions automatically — no scripting required",
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
