import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description:
    "HyperDial handles voice, chat, email, and social — and learns from your best agents with every conversation.",
};

const channels = [
  { name: "Voice", icon: "📞", body: "Inbound and outbound calls, handled end to end or handed off cleanly." },
  { name: "Live chat", icon: "💬", body: "Real-time answers on your site or app, in the same voice as your team." },
  { name: "Email", icon: "✉️", body: "Drafts and sends replies, or queues them for a quick human check." },
  { name: "Social", icon: "💡", body: "DMs and comments answered with the same knowledge as every other channel." },
];

const whoFor = [
  {
    title: "Support teams drowning in repeat questions",
    body: "Order status, policy questions, account basics — the volume that eats agent time without needing a human touch.",
  },
  {
    title: "Teams that already tried a bot and gave up",
    body: "If the last AI project felt frozen in time, the difference here is the learning loop — it's covered on the next page.",
  },
  {
    title: "Operations leads who can't add headcount",
    body: "Handle more volume on the team you already have, with a clear read-only-by-default safety model.",
  },
];

const howItWorks = [
  {
    n: "1",
    title: "Connect what you already have",
    body: "Forward calls, embed chat, connect your inbox and social accounts. No rip-and-replace, no migration project.",
  },
  {
    n: "2",
    title: "Point it at a knowledge source",
    body: "Your help center, docs, or FAQs. The AI only answers from what you connect — and the knowledge base grows itself from real conversations over time.",
  },
  {
    n: "3",
    title: "Start read-only",
    body: "It answers questions and creates tickets first. No action that could break anything until you deliberately allow it.",
  },
  {
    n: "4",
    title: "Let it learn from your team",
    body: "As your agents handle the cases the AI can't yet, it studies what worked and turns that into approved, repeatable patterns — the Agent Intelligence Process, covered in depth on the next page.",
  },
];

export default function ProductPage() {
  return (
    <div className="wrap py-16">
      <div className="max-w-2xl">
        <span className="eyebrow">Product</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          AI customer service that learns from your best people
        </h1>
        <p className="mt-5 text-lg leading-7 text-muted">
          Most AI support handles the simple stuff and fails on everything else —
          then fails the same way next time. HyperDial is built to close that
          loop, across voice, chat, email, and social.
        </p>
      </div>

      {/* Channels */}
      <section className="mt-14">
        <span className="eyebrow">One brain, every channel</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Voice, chat, email, and social — not four disconnected tools
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
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
          Built for teams who&rsquo;ve outgrown a static bot
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

      {/* Cross-link to the differentiator */}
      <section className="mt-16 rounded-xl2 bg-deep p-8 text-white sm:p-12">
        <span className="eyebrow text-brand-light">The differentiator</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          What actually makes it get smarter over time
        </h2>
        <p className="mt-3 max-w-xl text-slate-soft">
          Most AI support is frozen the day it ships. HyperDial isn&rsquo;t — and the
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
