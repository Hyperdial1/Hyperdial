import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description:
    "HyperDial is an AI-powered business phone system that answers, routes and makes calls — and learns from your best reps on every one.",
};

const telephony = [
  { name: "Global numbers", icon: "📞", body: "Buy local and toll-free numbers, or bring your own and forward calls — no porting project required." },
  { name: "Smart routing & IVR", icon: "🎛️", body: "Voice workflows, team routing, overflow and callback — callers reach the right place the first time." },
  { name: "Recording & transcripts", icon: "📝", body: "Every call recorded, transcribed and summarised automatically, with sentiment and call CSAT." },
  { name: "Live monitoring", icon: "📊", body: "Real-time dashboards, call barging and live monitoring so supervisors coach in the moment." },
];

const whoFor = [
  {
    title: "SMBs whose phones ring more than their team can answer",
    body: "Missed calls are missed revenue. The AI answers around the clock, resolves the routine and hands the rest to your team with full context.",
  },
  {
    title: "Mid-market teams running calling ops on duct tape",
    body: "Numbers in one tool, recordings in another, notes nowhere. HyperDial puts the phone system, call center and analytics in one place.",
  },
  {
    title: "Enterprises that need every call consistent and compliant",
    body: "SSO, custom roles, HIPAA support and audit trails — with AI trained on your own reps, approved by your own managers.",
  },
];

const howItWorks = [
  {
    n: "1",
    title: "Connect your phone lines",
    body: "Buy numbers from HyperDial or forward your existing ones. No rip-and-replace, no migration project.",
  },
  {
    n: "2",
    title: "Point it at a knowledge source",
    body: "Your help center, docs, or FAQs. The AI only answers from what you connect — and the knowledge base grows itself from real calls over time.",
  },
  {
    n: "3",
    title: "Start read-only",
    body: "It answers calls and creates tickets first. No action that could break anything until you deliberately allow it.",
  },
  {
    n: "4",
    title: "Let it learn from your team",
    body: "As your reps handle the calls the AI can't yet, it studies what worked and turns that into approved, repeatable patterns — the Agent Intelligence Process, covered in depth on the next page.",
  },
];

export default function ProductPage() {
  return (
    <div className="wrap py-16">
      <div className="max-w-2xl">
        <span className="eyebrow">Product</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          A phone system that gets better every time someone picks up
        </h1>
        <p className="mt-5 text-lg leading-7 text-muted">
          Most business phone systems just move calls around. HyperDial answers
          them, learns from them, and makes the next one better — for teams of
          five and call centers of five hundred.
        </p>
      </div>

      {/* Telephony features */}
      <section className="mt-14">
        <span className="eyebrow">The phone system</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Everything you expect from cloud telephony — plus a brain
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {telephony.map((c) => (
            <div key={c.name} className="card p-6">
              <span className="text-2xl" aria-hidden>{c.icon}</span>
              <h3 className="mt-3 font-display text-base font-semibold">{c.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mt-16">
        <span className="eyebrow">How it works</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Live in days, not months
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {howItWorks.map((s) => (
            <div key={s.n} className="card p-6">
              <span className="font-display text-sm font-semibold text-brand">{s.n}</span>
              <h3 className="mt-2 font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{s.body}</p>
            </div>
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

      {/* Cross-link to the differentiator */}
      <section className="mt-16 rounded-xl2 bg-deep p-8 text-white sm:p-12">
        <span className="eyebrow text-brand-light">The differentiator</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          What actually makes it get smarter over time
        </h2>
        <p className="mt-3 max-w-xl text-slate-soft">
          Most AI calling is frozen the day it ships. HyperDial isn&rsquo;t — and the
          mechanism for that is worth understanding before you buy.
        </p>
        <Link href="/product/how-it-learns" className="btn mt-6 bg-white text-brand hover:bg-brand-light hover:text-white">
          See how it learns →
        </Link>
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link href="/demo" className="btn-primary">Talk to us</Link>
        <Link href="/docs" className="btn-ghost">Read the docs</Link>
      </div>
    </div>
  );
}
