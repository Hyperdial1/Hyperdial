import Link from "next/link";
import type { Metadata } from "next";
import { ModuleFaq } from "@/components/module-faq";

export const metadata: Metadata = {
  title: "Virtual Numbers",
  description:
    "Buy local and toll-free numbers, or bring your own, with global coverage across 180+ countries.",
};

const howItWorks = [
  { n: "1", title: "Pick a number", body: "Search local or toll-free numbers by country and area code, or bring one you already own." },
  { n: "2", title: "Assign it", body: "Attach the number to a team, an IVR flow, or a specific rep — no carrier paperwork." },
  { n: "3", title: "Start taking calls", body: "The number is live immediately, with recording, routing and AIP learning switched on from the first call." },
  { n: "4", title: "Track performance", body: "See volume, connect rate and outcomes per number in the same dashboard as the rest of your calling data." },
];

const benefits = [
  { title: "Global reach without carrier contracts", icon: "🌍", body: "180+ countries covered, so you can pick up a local presence anywhere your customers are." },
  { title: "Local numbers lift answer rates", icon: "📈", body: "Callers are more likely to pick up a number that looks local — a real, well-documented effect in outbound calling." },
  { title: "Bring your own or buy new", icon: "📞", body: "Forward calls from numbers you already own, or provision new ones directly — no porting project required either way." },
  { title: "Custom caller ID & greetings", icon: "🪪", body: "Every number can carry its own caller ID and greeting, so each line sounds like it belongs to your business." },
];

const faqs = [
  { q: "Is a virtual number the same as a VoIP number?", a: "They overlap heavily — a virtual number routes calls over the internet rather than a physical line, which is what makes it possible to answer a local-market number from anywhere." },
  { q: "Can I use a virtual number on my personal phone?", a: "Yes — calls route through the HyperDial app on any device, so you don't need separate hardware." },
  { q: "Do I need a different number for every country?", a: "Only if you want a local presence in that market. Toll-free numbers can also cover multiple regions from one line, depending on your setup." },
  { q: "What happens if I already have business numbers?", a: "Forward them to HyperDial — you keep your existing numbers and add everything else (routing, recording, AIP) on top." },
  { q: "How many numbers can I have?", a: "As many as your plan and use case need — most teams start with one per market or per team and add more as they expand." },
];

export default function VirtualNumbersPage() {
  return (
    <div className="wrap py-16">
      <Link href="/product" className="text-sm link-quiet">← Platform</Link>
      <div className="mt-6 max-w-2xl">
        <span className="eyebrow">Module 02</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Virtual Numbers
        </h1>
        <p className="mt-5 text-lg leading-7 text-muted">
          A number for every market you operate in, without a carrier
          contract — buy new, bring your own, and go live the same day.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/demo" className="btn-primary">Talk to us</Link>
          <Link href="/pricing" className="btn-ghost">See pricing</Link>
        </div>
      </div>

      <section className="mt-16">
        <span className="eyebrow">How it works</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          From search to first call in minutes
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

      <section className="mt-16">
        <span className="eyebrow">Why it matters</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Local presence, global reach
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="card p-6">
              <span className="text-2xl" aria-hidden>{b.icon}</span>
              <h3 className="mt-3 font-display text-base font-semibold">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{b.body}</p>
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
