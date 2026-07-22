import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "HyperDial is a cloud telephony platform built on six modules — Telephony, AIP, Virtual Numbers, Voice Models, Conversation Intelligence, and AI Receptionist.",
};

const modules = [
  { n: "01", label: "Telephony", href: "/product/telephony", icon: "📞", body: "The cloud phone system everything else builds on — numbers, routing, IVR and live monitoring." },
  { n: "02", label: "Virtual Numbers", href: "/product/virtual-numbers", icon: "🌍", body: "Local and toll-free numbers across 180+ countries, buy new or bring your own." },
  { n: "03", label: "Voice Models", href: "/product/voice-models", icon: "🗣️", body: "The AI voice your callers talk to — natural, multilingual by default, fully custom on Scale." },
  { n: "04", label: "Conversation Intelligence", href: "/product/conversation-intelligence", icon: "📝", body: "Recording, transcripts, sentiment and CSAT on every call — included, not a separate product." },
  { n: "05", label: "AI Receptionist", href: "/product/ai-receptionist", icon: "🎙️", body: "Answers, screens and routes every call like a dedicated front-desk rep, 24/7." },
  { n: "06", label: "Agent Intelligence Processing", href: "/product/how-it-learns", icon: "🔁", body: "The differentiator: AI that studies how your best reps handle calls and turns it into manager-approved, repeatable patterns." },
];

const whoFor = [
  {
    title: "SMBs whose phones ring more than their team can answer",
    body: "Missed calls are missed revenue. The AI Receptionist answers around the clock, resolves the routine, and hands the rest to your team with full context.",
  },
  {
    title: "Mid-market teams running calling ops on duct tape",
    body: "Numbers in one tool, recordings in another, notes nowhere. HyperDial puts telephony, virtual numbers, and conversation intelligence in one platform.",
  },
  {
    title: "Enterprises that need every call consistent and compliant",
    body: "SSO, custom roles, HIPAA support and audit trails — with AIP trained on your own reps, approved by your own managers.",
  },
];

export default function ProductPage() {
  return (
    <div className="wrap py-16">
      <div className="max-w-2xl">
        <span className="eyebrow">Platform</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          A phone system that gets better every time someone picks up
        </h1>
        <p className="mt-5 text-lg leading-7 text-muted">
          HyperDial is built on cloud telephony, not bolted onto it. Six
          modules work together — for teams of five and call centers of five
          hundred.
        </p>
      </div>

      {/* Module grid */}
      <section className="mt-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <Link
              key={m.label}
              href={m.href}
              className="card group flex flex-col p-7 transition-colors hover:border-brand"
            >
              <span className="text-2xl" aria-hidden>{m.icon}</span>
              <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-faint">Module {m.n}</span>
              <h2 className="mt-1 font-display text-lg font-semibold group-hover:text-brand">{m.label}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{m.body}</p>
              <span className="mt-4 text-sm font-medium text-brand">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="mt-16 max-w-2xl">
        <span className="eyebrow">Who it&rsquo;s for</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          From five phones to five hundred
        </h2>
        <div className="mt-8 space-y-5">
          {whoFor.map((w) => (
            <div key={w.title} className="border-l-2 border-brand pl-5">
              <h3 className="font-display text-base font-semibold">{w.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond calls — footnote weight */}
      <section className="mt-16 max-w-2xl">
        <span className="eyebrow">Also works everywhere else</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Calls first — but not calls only
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Chat, email, SMS, WhatsApp and social run on the same brain as your
          phone lines. What the AI learns on a call, it applies in every other
          channel — one platform, not six tools.
        </p>
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link href="/demo" className="btn-primary">Talk to us</Link>
        <Link href="/docs" className="btn-ghost">Read the docs</Link>
      </div>
    </div>
  );
}
