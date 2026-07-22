import Link from "next/link";
import type { Metadata } from "next";
import { ModuleFaq } from "@/components/module-faq";
import { ComparisonTable } from "@/components/comparison-table";

export const metadata: Metadata = {
  title: "Conversation Intelligence",
  description:
    "Recording, transcripts, sentiment and call CSAT on every call — included in HyperDial, not sold as a separate product.",
};

const taxonomy = [
  { name: "Speech analytics", icon: "🎙️", body: "What was actually said, searchable across every call — keywords, phrases, and the objections that come up again and again." },
  { name: "Real-time analytics", icon: "📊", body: "Live dashboards during the call itself, so supervisors can see volume and outcomes as they happen." },
  { name: "Post-call analytics", icon: "📝", body: "Recording, transcript and summary generated automatically the moment a call ends." },
  { name: "Sentiment analytics", icon: "💡", body: "How the call actually felt to the customer, not just how long it lasted." },
];

const features = [
  { name: "Recording & transcripts", icon: "📝", body: "Every call recorded, transcribed and summarized automatically — included on every plan, not just the top tier." },
  { name: "Sentiment analysis", icon: "💡", body: "Understand how a call actually went, not just how long it lasted." },
  { name: "Call CSAT", icon: "⭐", body: "Post-call satisfaction signal tied directly to the conversation that produced it." },
  { name: "Full intent & outcome analytics", icon: "🎯", body: "See what callers actually wanted and whether they got it, aggregated across your whole team." },
  { name: "Report builder", icon: "📈", body: "Pre-built reports out of the box, with a builder for anything custom your team needs to track." },
  { name: "Feeds AIP directly", icon: "🔁", body: "Every recorded call is also a training signal — conversation intelligence is what AIP learns from, not a separate silo." },
];

const comparison = {
  columns: ["HyperDial", "Gong", "CallRail"],
  rows: [
    { feature: "Core conversation intelligence", values: ["Included", "$108–133/user/mo", "$45–135/mo flat"] },
    { feature: "Full-featured bundle", values: ["Included", "Often $240–250/user/mo", "$135/mo top tier"] },
    { feature: "Requires separate phone system", values: ["No — built in", "Yes", "Yes"] },
    { feature: "Feeds a self-learning AI layer", values: ["✓ (AIP)", "—", "—"] },
    { feature: "Call recording & transcripts", values: ["✓ every plan", "✓ (add-on tier)", "✓ (add-on tier)"] },
  ],
  note:
    "Gong and CallRail pricing based on published 2026 rates for their conversation-intelligence products, sold standalone on top of your existing phone system. HyperDial includes equivalent capability as part of the platform, not a separate purchase.",
};

const faqs = [
  { q: "Is this the same as call recording?", a: "Call recording is one input. Conversation intelligence goes further — transcribing, scoring sentiment, and surfacing what actually happened across every call, not just storing the audio." },
  { q: "Do I need a separate tool for this?", a: "No — it's included in HyperDial's platform, not sold as an add-on the way it is with most standalone call-analytics vendors." },
  { q: "How is this different from AIP?", a: "Conversation intelligence captures and analyzes what happened on a call. AIP is the layer that turns those patterns into approved changes in how the AI handles the next call — intelligence feeds learning." },
  { q: "Can I export this data?", a: "Yes — data export and report building are available, so this isn't a closed system you can't get information out of." },
];

export default function ConversationIntelligencePage() {
  return (
    <div className="wrap py-16">
      <Link href="/product" className="text-sm link-quiet">← Platform</Link>
      <div className="mt-6 max-w-2xl">
        <span className="eyebrow">Module 04</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Conversation Intelligence
        </h1>
        <p className="mt-5 text-lg leading-7 text-muted">
          Every call becomes a searchable, reviewable record — recorded,
          transcribed and scored automatically, included on every plan.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/demo" className="btn-primary">Talk to us</Link>
          <Link href="/pricing" className="btn-ghost">See pricing</Link>
        </div>
      </div>

      <section className="mt-16">
        <span className="eyebrow">Four kinds of insight</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          What "conversation intelligence" actually covers
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {taxonomy.map((t) => (
            <div key={t.name} className="card p-6">
              <span className="text-2xl" aria-hidden>{t.icon}</span>
              <h3 className="mt-3 font-display text-base font-semibold">{t.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <span className="eyebrow">What's included</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Built in, not bolted on
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.name} className="card p-6">
              <span className="text-2xl" aria-hidden>{f.icon}</span>
              <h3 className="mt-3 font-display text-base font-semibold">{f.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <span className="eyebrow">How it compares</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Most teams pay for this twice. You won't.
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Conversation intelligence is usually a separate line item on top
          of your phone bill. HyperDial includes it — and feeds it straight
          into AIP instead of leaving it in a dashboard nobody opens.
        </p>
        <div className="mt-8">
          <ComparisonTable table={comparison} />
        </div>
      </section>

      <section className="mt-16">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Common questions
        </h2>
        <div className="mt-8">
          <ModuleFaq items={faqs} />
        </div>
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link href="/demo" className="btn-primary">Talk to us</Link>
        <Link href="/product" className="btn-ghost">← Back to Platform overview</Link>
      </div>
    </div>
  );
}
