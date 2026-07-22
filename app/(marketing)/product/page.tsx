import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "HyperDial is a cloud telephony platform built on six modules — Telephony, AIP, Virtual Numbers, Voice Models, Conversation Intelligence, and AI Receptionist.",
};

const modules = [
  { label: "Telephony", href: "#telephony" },
  { label: "AIP", href: "/product/how-it-learns" },
  { label: "Virtual Numbers", href: "#virtual-numbers" },
  { label: "Voice Models", href: "#voice-models" },
  { label: "Conversation Intelligence", href: "#conversation-intelligence" },
  { label: "AI Receptionist", href: "#ai-receptionist" },
];

const telephony = [
  { name: "Smart routing & IVR", icon: "🎛️", body: "Voice workflows, team routing, overflow and callback — callers reach the right place the first time." },
  { name: "Live monitoring", icon: "📊", body: "Real-time dashboards and call barging so supervisors coach in the moment, not after the fact." },
];

const virtualNumbers = [
  { name: "Buy or bring your own", icon: "📞", body: "Purchase local and toll-free numbers, or forward calls from numbers you already own — no porting project required." },
  { name: "Wide global coverage", icon: "🌍", body: "One of the largest directories of phone numbers available, covering markets well beyond your home country." },
  { name: "Caller ID & greetings", icon: "🪪", body: "Custom caller ID and greetings per number, so every line sounds like it belongs to your business." },
];

const voiceModels = [
  { name: "Natural AI voices", icon: "🗣️", body: "Voices built for real conversation, not a robotic IVR menu — tuned for tone and pacing that doesn't tire callers out." },
  { name: "Multilingual by default", icon: "🌐", body: "Core language coverage on every plan, expanding to 60+ languages and full customization on Scale." },
  { name: "Custom brand voice", icon: "🎚️", body: "Enterprise plans can commission a fully custom AI voice matched to your brand." },
];

const conversationIntelligence = [
  { name: "Recording & transcripts", icon: "📝", body: "Every call recorded, transcribed and summarized automatically — included on every plan, not just the top tier." },
  { name: "Sentiment analysis", icon: "💡", body: "Understand how a call actually went, not just how long it lasted." },
  { name: "Call CSAT", icon: "⭐", body: "Post-call satisfaction signal tied directly to the conversation that produced it." },
];

const aiReceptionist = [
  { name: "Always answers", icon: "🎙️", body: "Every inbound call gets picked up — no hold music, no voicemail black hole, day or night." },
  { name: "Screens & routes", icon: "🔀", body: "Understands why someone's calling and gets them to the right place, or the right person, immediately." },
  { name: "Hands off with context", icon: "🤝", body: "When a human is needed, the AI Receptionist passes the full conversation along — nobody repeats themselves." },
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

      {/* Module quick nav */}
      <div className="mt-8 flex flex-wrap gap-2">
        {modules.map((m) => (
          <Link
            key={m.label}
            href={m.href}
            className="rounded-full border border-line px-4 py-1.5 text-sm text-muted transition-colors hover:border-brand hover:text-brand"
          >
            {m.label}
          </Link>
        ))}
      </div>

      {/* Telephony */}
      <section id="telephony" className="mt-16 scroll-mt-24">
        <span className="eyebrow">Module 01 — the foundation</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Telephony
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          Everything a call needs to reach the right place, every time.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {telephony.map((c) => (
            <div key={c.name} className="card p-6">
              <span className="text-2xl" aria-hidden>{c.icon}</span>
              <h3 className="mt-3 font-display text-base font-semibold">{c.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Virtual Numbers */}
      <section id="virtual-numbers" className="mt-16 scroll-mt-24">
        <span className="eyebrow">Module 02</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Virtual Numbers
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          A number for every market you operate in, without a carrier contract.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {virtualNumbers.map((c) => (
            <div key={c.name} className="card p-6">
              <span className="text-2xl" aria-hidden>{c.icon}</span>
              <h3 className="mt-3 font-display text-base font-semibold">{c.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Voice Models */}
      <section id="voice-models" className="mt-16 scroll-mt-24">
        <span className="eyebrow">Module 03</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Voice Models
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          The voice your callers actually talk to.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {voiceModels.map((c) => (
            <div key={c.name} className="card p-6">
              <span className="text-2xl" aria-hidden>{c.icon}</span>
              <h3 className="mt-3 font-display text-base font-semibold">{c.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conversation Intelligence */}
      <section id="conversation-intelligence" className="mt-16 scroll-mt-24">
        <span className="eyebrow">Module 04</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Conversation Intelligence
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          Every call becomes a searchable, reviewable record — included on every plan.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {conversationIntelligence.map((c) => (
            <div key={c.name} className="card p-6">
              <span className="text-2xl" aria-hidden>{c.icon}</span>
              <h3 className="mt-3 font-display text-base font-semibold">{c.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Receptionist */}
      <section id="ai-receptionist" className="mt-16 scroll-mt-24">
        <span className="eyebrow">Module 05</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          AI Receptionist
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          The first voice a caller hears — and the reason no call goes unanswered.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiReceptionist.map((c) => (
            <div key={c.name} className="card p-6">
              <span className="text-2xl" aria-hidden>{c.icon}</span>
              <h3 className="mt-3 font-display text-base font-semibold">{c.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{c.body}</p>
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
        <span className="eyebrow text-brand-light">Module 06 — the differentiator</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Agent Intelligence Processing (AIP)
        </h2>
        <p className="mt-3 max-w-xl text-slate-soft">
          Most AI calling is frozen the day it ships. HyperDial isn&rsquo;t —
          and the mechanism for that, including how security and guardrails
          work, is worth understanding before you buy.
        </p>
        <Link href="/product/how-it-learns" className="btn mt-6 bg-white text-brand hover:bg-brand-light hover:text-white">
          See how AIP learns →
        </Link>
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link href="/demo" className="btn-primary">Talk to us</Link>
        <Link href="/docs" className="btn-ghost">Read the docs</Link>
      </div>
    </div>
  );
}
