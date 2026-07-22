import Link from "next/link";
import type { Metadata } from "next";
import { ModuleFaq } from "@/components/module-faq";
import { ComparisonTable } from "@/components/comparison-table";

export const metadata: Metadata = {
  title: "Telephony",
  description:
    "HyperDial's Telephony module: cloud calling, smart routing, IVR and live monitoring, with AIP learning from every call.",
};

const benefits = [
  { title: "One number, every device", body: "Calls follow your team across desktop, mobile and browser — no separate hardware or desk phone required." },
  { title: "Setup in days, not months", body: "Forward your existing numbers or buy new ones. No rip-and-replace, no carrier contract renegotiation." },
  { title: "Built for scale", body: "The same platform runs a five-person team and a five-hundred-seat contact center." },
  { title: "Compliant by default", body: "Encryption in transit and at rest, with SSO, audit trails and HIPAA support available on higher tiers." },
];

const features = [
  { name: "Smart routing & IVR", icon: "🎛️", body: "Voice workflows, team routing, overflow and callback — callers reach the right place the first time." },
  { name: "Live monitoring & call barging", icon: "📊", body: "Real-time dashboards let supervisors listen in and coach in the moment, not after the fact." },
  { name: "Call recording & transcripts", icon: "📝", body: "Every call captured and transcribed automatically, included on every plan." },
  { name: "Mute, hold & transfer", icon: "🔀", body: "The basics done right — every call can be held, muted or handed to the right teammate without dropping." },
  { name: "Standard & custom reports", icon: "📈", body: "Call volume, duration and outcome reporting out of the box, with custom reports on higher tiers." },
  { name: "CRM & helpdesk integrations", icon: "🔗", body: "Connects to Salesforce, HubSpot, Zendesk and more, so call activity lands where your team already works." },
];

const comparison = {
  columns: ["HyperDial", "RingCentral", "Vonage", "CloudTalk"],
  rows: [
    { feature: "Starting price (per seat/mo)", values: ["$20*", "$20–45", "$20–40", "$19–69"] },
    { feature: "Self-learning AI included", values: ["✓", "— (add-on)", "— (add-on)", "— (add-on)"] },
    { feature: "Call recording & transcripts", values: ["✓ every plan", "Higher tiers", "Higher tiers", "Higher tiers"] },
    { feature: "Conversation intelligence", values: ["✓ included", "Separate product", "Separate product", "Separate product"] },
    { feature: "Omnichannel (chat/email/SMS)", values: ["✓ included", "Separate product", "Separate product", "Separate product"] },
  ],
  note:
    "*HyperDial's Pilot tier starts at $20/seat/mo and includes AIP; a full-platform Growth tier is $32/seat/mo. Competitor base prices are for phone service alone — conversation intelligence and AI voice capability are typically separate paid products on top, based on published 2026 pricing.",
};

const faqs = [
  {
    q: "Do I need to change our phone numbers to switch?",
    a: "No. Forward your existing numbers to HyperDial, or buy new ones from us — either way, nothing about your current setup has to change on day one.",
  },
  {
    q: "Does this replace our CRM or helpdesk?",
    a: "Not unless you want it to. HyperDial can sit on top of your existing tools via webhook integration, or run your full calling operation natively — you choose the depth.",
  },
  {
    q: "What happens to calls the AI can't handle?",
    a: "They hand off to a human immediately with full context — the caller never has to repeat themselves, and the resolution gets fed back into AIP so the same gap doesn't recur.",
  },
  {
    q: "Is there a setup fee or contract?",
    a: "Every plan is scoped and confirmed when you talk to us — pricing and terms are transparent from the first conversation, no surprise fees.",
  },
];

export default function TelephonyPage() {
  return (
    <div className="wrap py-16">
      <Link href="/product" className="text-sm link-quiet">← Platform</Link>
      <div className="mt-6 max-w-2xl">
        <span className="eyebrow">Module 01 — the foundation</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Telephony
        </h1>
        <p className="mt-5 text-lg leading-7 text-muted">
          A cloud phone system built to carry every other module. Numbers,
          routing, recording and monitoring — running the same way whether
          you have five lines or five hundred.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/demo" className="btn-primary">Talk to us</Link>
          <Link href="/pricing" className="btn-ghost">See pricing</Link>
        </div>
      </div>

      <section className="mt-16">
        <span className="eyebrow">Why it matters</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          The phone system is the foundation everything else builds on
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="card p-6">
              <h3 className="font-display text-base font-semibold">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <span className="eyebrow">What's included</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Everything a call needs to reach the right place
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
          Lower starting price, and nothing extra to add later
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Most phone systems price the basics low, then charge extra the
          moment you need call analytics or an AI voice layer. HyperDial
          starts lower and bundles telephony, conversation intelligence and
          AIP into that same per-seat price — nothing to add later.
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
