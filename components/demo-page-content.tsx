"use client";

import { useState } from "react";
import Link from "next/link";
import { BookingWizard } from "@/components/booking-wizard";

// This page is an intentional duplicate of /book-a-demo, per project decision
// to keep them as two separate physical pages with identical content rather
// than one page or a redirect. If you update one, update the other to match.
const steps = [
  { n: "1", title: "Pick a slot", body: "Choose whatever time works — no back-and-forth." },
  { n: "2", title: "We confirm instantly", body: "A calendar invite with a video link, right away." },
  { n: "3", title: "See it live", body: "30 minutes, on your real calls." },
];

const covers = [
  {
    title: "How it handles a real, messy call",
    body: "We use examples from your industry, not a canned script — including the calls your current setup fails on today.",
  },
  {
    title: "How it learns from your best reps",
    body: "See how a top performer's phrasing and decisions get captured, approved, and deployed on every call.",
  },
  {
    title: "Where humans stay in the loop",
    body: "Read-only and ticket-based by default — we show exactly where AI hands off, and where it never acts alone.",
  },
  {
    title: "What it costs to get live",
    body: "Setup time, integration effort, and pricing for your volume — straight answers, no follow-up call required.",
  },
];

const loop = [
  { n: "1", title: "Observe", body: "Captures every call your reps handle." },
  { n: "2", title: "Learn", body: "Extracts how your best reps win calls." },
  { n: "3", title: "Verify", body: "Your manager approves each pattern." },
  { n: "4", title: "Deploy", body: "The AI handles the next call the same way — every time." },
];

const trust = [
  { title: "Keep your numbers & stack", body: "Bring your own number or forward calls — no rip-and-replace, no migration project." },
  { title: "No huge setup", body: "It learns from your real calls. The knowledge base builds itself." },
  { title: "Zero risk", body: "Read-only + tickets. The AI never takes an action that could break anything." },
  { title: "Live in days", body: "Switched on fast, and it gets smarter every week on its own." },
];

const testimonials = [
  {
    quote: "We went from missing calls every day to answering all of them in two weeks. The handoff to humans is seamless.",
    who: "Ops lead, D2C brand",
  },
  {
    quote: "It learns from our actual agents, not a generic script. That's the difference.",
    who: "Support manager, fintech",
  },
  {
    quote: "Setup took an afternoon. We were live the same week.",
    who: "Founder, travel startup",
  },
];

const faqs = [
  {
    q: "How long is the demo?",
    a: "30 minutes, focused on your real calls — not a generic slide deck.",
  },
  {
    q: "Is there a cost to the demo?",
    a: "No — it's a free walkthrough with no commitment required.",
  },
  {
    q: "Who should join from my side?",
    a: "Whoever owns support quality or operations — the demo is most useful with someone who sees real tickets or calls day to day.",
  },
  {
    q: "Do you need access to our systems beforehand?",
    a: "No — for the first demo we use representative examples from your industry. Live integration happens later, on your terms.",
  },
  {
    q: "What happens after the demo?",
    a: "No hard pitch. If it's a fit, we'll outline a pilot scoped to your volume — if not, no follow-up pressure.",
  },
];

export function DemoPageContent() {
  const [open, setOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-deep text-white">
        <div className="pointer-events-none absolute -right-32 top-0 h-[460px] w-[460px] rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[360px] w-[360px] rounded-full bg-brand-indigo/20 blur-3xl" />
        <div className="wrap relative py-20 text-center md:py-24">
          <span className="eyebrow justify-center text-brand-light">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
            Talk to us
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            See HyperDial handle your real calls — not a script
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-7 text-slate-soft">
            30 minutes, live on the kind of calls your current phone setup
            struggles with. No slides, no commitment.
          </p>
          <button onClick={() => setOpen(true)} className="btn-primary mt-8">
            Talk to us
          </button>
          <p className="mt-3 text-sm text-slate-soft">
            <span className="text-amber-400">★★★★★</span> Trusted by support
            teams switching off generic bots
          </p>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n}>
                <span className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-white/10 font-display text-sm font-semibold text-brand-light">
                  {s.n}
                </span>
                <p className="mt-3 text-sm font-medium text-white">{s.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-soft">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL SEE */}
      <section className="wrap py-16">
        <div className="max-w-xl">
          <span className="eyebrow">What you&rsquo;ll see</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            Built to answer what your team actually asks
          </h2>
          <p className="mt-3 text-muted">
            Different people on the call care about different things — here&rsquo;s
            what we walk through.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {covers.map((c) => (
            <div key={c.title} className="card p-6">
              <h3 className="font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AGENT INTELLIGENCE PROCESS LOOP */}
      <section className="bg-deep text-white">
        <div className="wrap py-16">
          <div className="max-w-xl">
            <span className="eyebrow text-brand-light">How it gets smarter</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              Agent Intelligence Processing (AIP): observe, learn, verify, deploy
            </h2>
            <p className="mt-3 text-slate-soft">
              This is the part most demos skip — and the part that matters
              most six months in.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {loop.map((s) => (
              <div key={s.n} className="rounded-xl2 border border-white/10 bg-deep-800 p-6">
                <span className="font-display text-2xl font-semibold text-brand-light">{s.n}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-soft">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="wrap py-16">
        <div className="max-w-xl">
          <span className="eyebrow">Low risk, low lift</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            Why this is an easy yes for IT and procurement
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="card p-6">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">✓</span>
              <h3 className="mt-3 font-display text-base font-semibold">{t.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="wrap pb-16">
        <div className="max-w-xl">
          <span className="eyebrow">From teams who switched</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            What changed after the first month
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.who} className="card p-6 text-sm leading-6 text-muted">
              &ldquo;{t.quote}&rdquo;
              <div className="mt-3 text-[13px] font-medium text-ink">— {t.who}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap pb-20">
        <div className="max-w-xl">
          <span className="eyebrow">Before you book</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            Common questions
          </h2>
        </div>
        <div className="mt-8 max-w-2xl">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-line">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between py-4 text-left text-[15px] font-medium"
              >
                {f.q}
                <span
                  className={`text-faint transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>
              {openFaq === i && (
                <p className="max-w-xl pb-4 text-sm leading-6 text-muted">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECOND CTA */}
      <section className="wrap pb-24">
        <div className="relative overflow-hidden rounded-xl2 bg-gradient-to-br from-deep via-deep-600 to-brand px-8 py-16 text-center text-white">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            See HyperDial on your real calls
          </h2>
          <p className="mx-auto mt-4 max-w-md text-slate-soft">
            Bring the calls your current setup struggles with —
            that&rsquo;s the demo worth watching.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="btn mt-8 bg-white text-brand hover:bg-brand-light hover:text-white"
          >
            Talk to us
          </button>
          <p className="mt-5 text-sm text-slate-soft">
            Prefer to grab a slot straight off the calendar?{" "}
            <Link href="/book-a-demo" className="underline hover:text-white">
              Book a demo instead →
            </Link>
          </p>
        </div>
      </section>

      <BookingWizard
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
