import type { Metadata } from "next";
import { LpHeader } from "@/components/lp/lp-header";
import { LpHero } from "@/components/lp/lp-hero";
import { LpProblem } from "@/components/lp/lp-problem";
import { LpHowItWorks } from "@/components/lp/lp-how-it-works";
import { AopLoop } from "@/components/lp/aop-loop";
import { LpPopup } from "@/components/lp/lp-popup";
import { LpFloatingCta } from "@/components/lp/lp-floating-cta";
import { LpInlineFormSection } from "@/components/lp/lp-inline-form-section";
import { LpComparison } from "@/components/lp/lp-comparison";
import { LpFaq } from "@/components/lp/lp-faq";
import { LpFinalCta } from "@/components/lp/lp-final-cta";

export const metadata: Metadata = {
  title: "AI Resolution Loop | HyperDial",
  description:
    "Every resolution makes the next one automatic. HyperDial's AI learns from every query your team resolves — and handles every repeat of it forever after.",
  robots: { index: false, follow: false },
};

const problems = [
  {
    icon: "🤖",
    text: "Static chatbots deflect, not resolve. Decision-tree bots frustrate customers, escalate anyway, and quietly burn your CSAT.",
  },
  {
    icon: "🔁",
    text: "Solved knowledge evaporates. Your best agents solve the same issue daily — and none of that resolution is ever captured or reused.",
  },
  {
    icon: "🧱",
    text: "Scripted automation doesn't scale. Manual flows go stale the day your product changes. Someone has to maintain every branch, forever.",
  },
];

const steps = [
  {
    number: "1",
    title: "Connect your channels",
    description:
      "Plug into your existing chat, email, social and ticketing stack in minutes. Nothing to migrate, nothing to rebuild.",
  },
  {
    number: "2",
    title: "Work exactly as you do today",
    description:
      "Your agents resolve new issues the normal way. HyperDial observes every resolution — silently, in the background.",
  },
  {
    number: "3",
    title: "Repeats resolve themselves",
    description:
      "The next time that issue appears — however it's phrased, on any channel — HyperDial resolves it end-to-end automatically.",
  },
];

const comparisonRows = [
  {
    label: "Learns from your team's real resolutions",
    values: ["No", "No"],
    hyperdial: "Yes — automatically",
  },
  {
    label: "Improves without manual maintenance",
    values: ["No", "No — flows go stale"],
    hyperdial: "Yes — every week",
  },
  {
    label: "Human approval before anything ships",
    values: ["—", "Author-dependent"],
    hyperdial: "Built in",
  },
  {
    label: "Works across chat, email, social, help desk",
    values: ["Chat only", "Per-channel builds"],
    hyperdial: "Every channel, one brain",
  },
  {
    label: "Time to value",
    values: ["Weeks of setup", "Months of authoring"],
    hyperdial: "< 2 days",
  },
];

const faqItems = [
  {
    q: "Does anything go live without our approval?",
    a: "No. Every candidate pattern sits in a review queue until a manager approves it. You control exactly what the AI is allowed to resolve.",
  },
  {
    q: "Do we have to replace our help desk?",
    a: "No. HyperDial layers on top of your existing chat, email, social and ticketing tools. Your team keeps working exactly where they work today.",
  },
  {
    q: "How long does implementation take?",
    a: "Most teams are live in under two days. There's nothing to script — the system starts learning from your very next resolved ticket.",
  },
  {
    q: "What happens to conversations the AI can't handle?",
    a: "They route straight to your team, exactly as they do now — and become the next thing HyperDial learns.",
  },
  {
    q: "Is our customer data used to train models for anyone else?",
    a: "No. Your resolution patterns are learned from your conversations and used only for your workspace.",
  },
];

export default function AutomateSupportLp() {
  return (
    <>
      <LpPopup source="lp_automate_support" variant="support" />
      <LpFloatingCta label="Book a Demo" />

      <LpHeader />

      <LpHero
        eyebrow="AI support automation for scaling teams"
        headline="Every resolution makes the next one automatic."
        subhead="The first time your team solves a query, HyperDial learns it. Every repeat after that — on chat, email, social and your help desk — resolves itself. No scripts. No decision trees. No stale chatbot."
        ctaLabel="See How It Works — Free"
        note="Free 20-minute walkthrough · live in under 2 days · works with your existing help desk"
      />

      <LpProblem
        points={problems}
        heading="Your team answers the same question 200 times a month."
        kicker="And your chatbot still can't answer it once."
      />

      {/* Stats strip */}
      <section className="py-12 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { stat: "70%", label: "of repeat queries resolved automatically" },
              { stat: "< 2 days", label: "average time to go live" },
              { stat: "6 sec", label: "median automated resolution" },
              { stat: "0", label: "scripts or decision trees to maintain" },
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

      <LpComparison
        heading="The maths of solving things once"
        columns={["Static chatbot", "Scripted automation"]}
        rows={comparisonRows}
      />

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
              "A meaningful share of your tickets are repeat questions your team has already answered",
              "You run support on chat, email or social — and want one automation layer across all of it",
              "You've tried a chatbot before and watched customers rage-click \"talk to a human\"",
              "You want resolutions captured automatically — not written into scripts somebody has to maintain",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                <span className="mt-0.5 text-brand font-bold">✓</span>
                <p className="text-sm text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LpFaq items={faqItems} />

      <LpFinalCta
        heading="Watch your top 10 repeat queries resolve themselves — live."
        subtitle="30 minutes with the founding team. We'll map your queue and show the loop running on your real use cases."
      />

      <footer className="border-t border-line py-6 text-center text-xs text-faint bg-white">
        © {new Date().getFullYear()} HyperDial ·{" "}
        <a href="/privacy" className="hover:text-brand">Privacy</a> ·{" "}
        <a href="/terms" className="hover:text-brand">Terms</a>
      </footer>
    </>
  );
}
