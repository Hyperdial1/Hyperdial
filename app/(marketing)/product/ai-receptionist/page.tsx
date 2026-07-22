import Link from "next/link";
import type { Metadata } from "next";
import { ModuleFaq } from "@/components/module-faq";
import { RoiCalculator } from "@/components/roi-calculator";

export const metadata: Metadata = {
  title: "AI Receptionist",
  description:
    "The AI Receptionist answers, screens and routes every inbound call like a dedicated front-desk rep — 24/7, and it learns from your team over time.",
};

const howItWorks = [
  { n: "1", title: "It answers", body: "Every inbound call is picked up immediately — no hold music, no voicemail black hole, day or night." },
  { n: "2", title: "It understands", body: "It figures out why someone's calling, using your connected knowledge base to answer routine questions on the spot." },
  { n: "3", title: "It routes or resolves", body: "Simple requests get handled end to end. Anything that needs a person gets routed there, immediately." },
  { n: "4", title: "It hands off with context", body: "When a human picks up, they see exactly what's already been discussed — the caller never repeats themselves." },
];

const industries = [
  { name: "E-commerce", body: "Order status, shipping questions and returns answered instantly, even during a sale-day volume spike." },
  { name: "Healthcare", body: "Appointment scheduling and routine questions handled around the clock, with sensitive matters routed to a person immediately." },
  { name: "Real estate", body: "Viewing requests booked and qualified the moment a buyer calls, instead of going to voicemail." },
  { name: "Professional services", body: "Intake questions answered and calls routed to the right team member without a receptionist on payroll." },
];

const faqs = [
  { q: "How is this different from an IVR or auto-attendant?", a: "An IVR routes based on a fixed menu of button presses. The AI Receptionist actually understands what's being asked, answers what it can from your knowledge base, and only routes what genuinely needs a person — no \"press 1 for sales\" required." },
  { q: "What happens on a call it can't handle?", a: "It hands off to a human immediately with full context. AIP then studies how that call was resolved, so the same gap doesn't need a human a second time." },
  { q: "Will callers know they're talking to AI?", a: "The voice and pacing are built for natural conversation, but HyperDial doesn't hide that it's an AI Receptionist if asked directly — the goal is a call that gets resolved well, not a deception." },
  { q: "Can it make outbound calls too?", a: "Yes — the same AI Receptionist capability handles outbound follow-ups and reminders on Growth and Scale plans." },
  { q: "Does it get better over time?", a: "Yes — that's the core difference from a static voice bot. Every call it can't yet handle becomes a learning input through AIP, and the AI reflects that the next time a similar call comes in." },
];

export default function AiReceptionistPage() {
  return (
    <div className="wrap py-16">
      <Link href="/product" className="text-sm link-quiet">← Platform</Link>
      <div className="mt-6 max-w-2xl">
        <span className="eyebrow">Module 05</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          AI Receptionist
        </h1>
        <p className="mt-5 text-lg leading-7 text-muted">
          The first voice a caller hears — and the reason no call goes
          unanswered. It answers, screens and routes every inbound call
          like a dedicated front-desk rep, 24/7.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/demo" className="btn-primary">Talk to us</Link>
          <Link href="/pricing" className="btn-ghost">See pricing</Link>
        </div>
      </div>

      <section className="mt-16">
        <span className="eyebrow">How it works</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Answers, understands, routes, hands off
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((s) => (
            <div key={s.n} className="card p-6">
              <span className="font-display text-sm font-semibold text-brand">{s.n}</span>
              <h3 className="mt-2 font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <span className="eyebrow">Estimate your savings</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          What does this actually save you?
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Adjust the sliders to match your call volume and team — this is
          an estimate to help you size the opportunity, not a quote.
        </p>
        <div className="mt-8">
          <RoiCalculator />
        </div>
      </section>

      <section className="mt-16">
        <span className="eyebrow">Where it fits</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Built for the calls that make up most of your volume
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {industries.map((i) => (
            <div key={i.name} className="card p-6">
              <h3 className="font-display text-base font-semibold">{i.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{i.body}</p>
            </div>
          ))}
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
