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
  title: "Omnichannel AI Support Platform | HyperDial",
  description:
    "Voice, chat, email and social — resolved by one AI that learns from every interaction, on the tools you already use.",
  robots: { index: false, follow: false },
};

const problems = [
  {
    icon: "🧩",
    text: "You're running support across 5 different tools — Zendesk, Intercom, a phone system, social DMs, and email. None of them talk to each other.",
  },
  {
    icon: "👤",
    text: "Your agents switch between tabs all day. No single view of the customer. Same issue, solved three different ways by three different people.",
  },
  {
    icon: "🔌",
    text: "Every AI you've tried is smart on one channel but useless on another. Point solutions that don't compound.",
  },
];

const steps = [
  {
    number: "1",
    title: "Connect all your channels",
    description:
      "Voice, chat, email, social, and ticketing — all piped into one platform. Integrates with your existing stack.",
  },
  {
    number: "2",
    title: "One AI brain handles everything",
    description:
      "A single intelligence layer responds consistently across every channel. Same answer, same tone, same quality — everywhere.",
  },
  {
    number: "3",
    title: "AOP compounds across every interaction",
    description:
      "Every conversation on every channel feeds the learning loop. The more you use it, the smarter it gets — across all of them.",
  },
];

const comparisonRows = [
  {
    label: "One AI brain across every channel",
    values: ["Single channel only", "Channels bolted together"],
    hyperdial: "Built as one system",
  },
  {
    label: "Context follows the customer between channels",
    values: ["No", "Partially — separate histories"],
    hyperdial: "Always — zero context lost",
  },
  {
    label: "Learns from every interaction, everywhere",
    values: ["Per-tool learning", "No shared learning"],
    hyperdial: "One loop, compounds across channels",
  },
  {
    label: "Works with your existing stack",
    values: ["Replaces tools", "Rip-and-replace suite"],
    hyperdial: "Layers on what you have",
  },
  {
    label: "Time to value",
    values: ["Weeks per channel", "Months of migration"],
    hyperdial: "< 2 days",
  },
];

const faqItems = [
  {
    q: "Do we have to replace our existing tools?",
    a: "No. HyperDial layers on top of your current phone system, help desk, chat, email and social tools. Nothing to migrate.",
  },
  {
    q: "Does the AI really share learning across channels?",
    a: "Yes — that's the point. A resolution learned from an email thread applies instantly to the same question asked on WhatsApp, voice, or chat.",
  },
  {
    q: "Does anything go live without our approval?",
    a: "No. Every candidate pattern sits in a review queue until a manager approves it — one approval covers every channel.",
  },
  {
    q: "How long does implementation take?",
    a: "Most teams connect their first channels in under two days. You can start with one channel and add the rest as you go.",
  },
  {
    q: "Is our customer data used to train models for anyone else?",
    a: "No. Your resolution patterns are learned from your conversations and used only for your workspace.",
  },
];

const channels = [
  { icon: "📞", label: "Voice" },
  { icon: "💬", label: "Live Chat" },
  { icon: "📧", label: "Email" },
  { icon: "📱", label: "Social DMs" },
  { icon: "🎫", label: "Ticketing" },
  { icon: "🔗", label: "Integrations" },
];

export default function OmnichannelLp() {
  const schedulerUrl = process.env.NEXT_PUBLIC_GCAL_SCHEDULE_URL;
  return (
    <>
      <LpPopup source="lp_omni" variant="omni" />
      <LpFloatingCta label="Book a Demo" />

      <LpHeader />

      <LpHero
        eyebrow="Omnichannel AI Platform"
        headline="Every channel. One resolution engine."
        subhead="Voice, chat, email and social — resolved by one AI that learns from every interaction, on the tools you already use. Replace the patchwork of point solutions with a single brain that remembers everything."
      />

      <LpProblem
        points={problems}
        heading="Five tools. Five conversations. Zero memory."
        kicker="Your customer is one person — your stack treats them like five strangers."
      />

      <section className="py-14 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted mb-8">Everything your team touches, in one place</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {channels.map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 rounded-xl border border-line bg-surface p-4">
                <span className="text-2xl">{icon}</span>
                <span className="text-xs font-medium text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LpHowItWorks steps={steps} />

      <AopLoop />

      {/* Stats strip */}
      <section className="py-12 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto">
          <dl className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: "1 brain", label: "across voice, chat, email & social" },
              { stat: "0", label: "context lost between channels" },
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

      <LpComparison
        heading="Point solutions vs. one resolution engine"
        columns={["Point solutions", "Suite tools"]}
        rows={comparisonRows}
      />

      <LpInlineFormSection
        source="lp_omni"
        variant="omni"
        eyebrow="Book a Demo"
        title="See it unify your channels live"
        subtitle="Bring a real conversation from any of your channels — we'll show you exactly how one AI brain handles it end to end."
      />

      <section className="py-16 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold text-ink mb-8">
            This is built for you if…
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "You're running support across multiple tools and losing context between channels",
              "You want one platform to handle voice, chat, email, and social — with one AI brain",
              "You've outgrown point solutions and need something that scales with your business",
              "You want AI that learns continuously, not a bot you configure once and hope for the best",
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
        heading="See one conversation cross three channels — resolved by one brain."
        subtitle="30 minutes with the founding team. Bring a real customer journey and we'll show the loop running across your channels."
      />

      <section className="py-10 bg-surface border-b border-line">
        <div className="wrap max-w-2xl mx-auto text-center">
          <p className="text-sm text-muted italic leading-relaxed">
            &ldquo;Setting this up takes 2 weeks, not 2 hours. But once it&rsquo;s running, you won&rsquo;t need anything else.&rdquo;
          </p>
          <p className="mt-2 text-xs text-faint">— HyperDial founding team</p>
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
