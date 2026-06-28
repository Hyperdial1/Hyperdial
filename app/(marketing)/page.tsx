import Link from "next/link";
import { ChatDemo } from "@/components/chat-demo";
import { OutcomesCarousel } from "@/components/outcomes-carousel";
import { getAll } from "@/lib/content";

const channels = [
  { name: "Voice", icon: "📞" },
  { name: "Live chat", icon: "💬" },
  { name: "Email", icon: "✉️" },
  { name: "Social", icon: "💡" },
];

const benefits = [
  { title: "Learns from your best agents", body: "Captures the phrasing and decisions of your top performers and makes them available everywhere." },
  { title: "Smarter every conversation", body: "Continuously learns from real interactions, so quality compounds instead of going stale." },
  { title: "Faster, more consistent support", body: "The same high-quality answer every time, across every channel, day or night." },
  { title: "One brain, every channel", body: "Voice, chat, email, and social share the same intelligence — not four disconnected tools." },
];

const loop = [
  { n: "1", title: "Observe", body: "Captures every conversation your agents handle." },
  { n: "2", title: "Learn", body: "Extracts how your best agents resolve issues." },
  { n: "3", title: "Verify", body: "Your manager approves each pattern." },
  { n: "4", title: "Deploy", body: "AI handles it the same way — everywhere, forever." },
];

const trust = [
  { title: "Keep your existing stack", body: "Connect your channels — no rip-and-replace, no migration project." },
  { title: "No huge setup", body: "It learns from your real conversations. The knowledge base builds itself." },
  { title: "Zero risk", body: "Read-only + tickets. The AI never takes an action that could break anything." },
  { title: "Live in days", body: "Switched on fast, and it gets smarter every week on its own." },
];

export default function HomePage() {
  const verticals = getAll("solutions");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep text-white">
        <div className="pointer-events-none absolute -right-32 top-0 h-[460px] w-[460px] rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[360px] w-[360px] rounded-full bg-brand-indigo/20 blur-3xl" />
        <div className="wrap relative grid items-center gap-12 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <span className="eyebrow text-brand-light">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
              AI customer service · omnichannel
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
              AI that learns from your team and gets <span className="text-brand-light">smarter</span> with every conversation.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-7 text-slate-soft">
              HyperDial captures knowledge from your best-performing agents,
              continuously learns from customer interactions, and delivers
              faster, smarter, more consistent support across every channel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="btn-primary">Talk to us</Link>
              <Link href="/product" className="btn border border-white/20 text-white hover:border-brand-light hover:text-brand-light">
                See how it works
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-soft">
              {channels.map((c) => (
                <span key={c.name} className="flex items-center gap-1.5">
                  <span aria-hidden>{c.icon}</span> {c.name}
                </span>
              ))}
            </div>
          </div>
          <div className="md:pl-6">
            <ChatDemo />
          </div>
        </div>
      </section>

      {/* Tagline band */}
      <section className="border-b border-line bg-white">
        <div className="wrap py-10 text-center">
          <p className="font-display text-xl font-medium text-ink sm:text-2xl">
            Your best agent, <span className="text-brand">in every conversation.</span>
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="wrap py-20">
        <div className="max-w-2xl">
          <span className="eyebrow">Why HyperDial</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Knowledge that compounds, not conversations that disappear
          </h2>
          <p className="mt-3 text-muted">
            Most support tools start over on every interaction. HyperDial keeps
            the knowledge and puts it to work everywhere.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <div key={b.title} className="card p-7">
              <span className="font-display text-sm font-semibold text-brand">0{i + 1}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{b.title}</h3>
              <p className="mt-2 leading-7 text-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agent Intelligence Process loop */}
      <section className="bg-deep text-white">
        <div className="wrap py-20">
          <div className="max-w-2xl">
            <span className="eyebrow text-brand-light">How it gets smarter</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              The Agent Intelligence Process: observe, learn, verify, deploy
            </h2>
            <p className="mt-3 text-slate-soft">
              Every conversation makes it smarter. The knowledge base builds itself.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <OutcomesCarousel />

      {/* Trust */}
      <section className="wrap py-20">
        <div className="max-w-2xl">
          <span className="eyebrow">Live in days — not months</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Low risk, low lift, fast to value
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

      {/* Verticals */}
      <section className="wrap pb-20">
        <div className="flex items-end justify-between">
          <div>
            <span className="eyebrow">Solutions</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Same problem, every industry
            </h2>
          </div>
          <Link href="/solutions" className="hidden text-sm link-quiet sm:inline">View all →</Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.slice(0, 6).map((v) => (
            <Link key={v.slug} href={`/solutions/${v.slug}`} className="card group p-6 transition-colors hover:border-brand">
              <h3 className="font-display text-base font-semibold group-hover:text-brand">{v.title}</h3>
              <p className="mt-1.5 text-sm italic leading-6 text-muted">&ldquo;{v.description}&rdquo;</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="wrap pb-24">
        <div className="relative overflow-hidden rounded-xl2 bg-gradient-to-br from-deep via-deep-600 to-brand px-8 py-16 text-center text-white">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            See HyperDial on your real conversations
          </h2>
          <p className="mx-auto mt-4 max-w-md text-slate-soft">
            Book a 30-minute walkthrough. Bring the conversations your current
            setup struggles with — that&rsquo;s the demo worth watching.
          </p>
          <Link href="/demo" className="btn mt-8 bg-white text-brand hover:bg-brand-light hover:text-white">
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
