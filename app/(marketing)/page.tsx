import Link from "next/link";
import { ChatDemo } from "@/components/chat-demo";
import { OutcomesCarousel } from "@/components/outcomes-carousel";
import { getAll } from "@/lib/content";

const stats = [
  { value: "60–80%", label: "of routine calls handled end to end by AI" },
  { value: "2–3x", label: "call volume on the same team size" },
  { value: "~2%", label: "of the cost of a human team" },
  { value: "Days", label: "to go live — not months" },
];

const products = [
  {
    icon: "🎙️",
    title: "AI Receptionist",
    body: "Answers, screens and routes every inbound call like a dedicated front-desk rep — 24/7, no hold music, no missed calls.",
  },
  {
    icon: "📞",
    title: "Business Communication Platform",
    body: "Local and toll-free numbers, caller ID, custom greetings, mute, hold and transfer — a full cloud phone system in the browser.",
  },
  {
    icon: "🎛️",
    title: "Contact Center Suite",
    body: "IVR and voice workflows, team routing, overflow and callback, live monitoring and call barging for supervisors.",
  },
  {
    icon: "🧠",
    title: "Conversation Intelligence",
    body: "Every call recorded, transcribed and summarised — with sentiment analysis and call CSAT built in.",
  },
  {
    icon: "🔁",
    title: "Agent Intelligence Processing (AIP)",
    body: "The differentiator: AI that studies how your best reps handle calls and turns it into manager-approved, repeatable patterns.",
  },
  {
    icon: "💬",
    title: "Omnichannel Inbox",
    body: "Chat, email, SMS, WhatsApp and social share the same brain as your phone lines — one platform, not six tools.",
  },
];

const loop = [
  { n: "1", title: "Observe", body: "Captures every call your reps handle." },
  { n: "2", title: "Learn", body: "Extracts how your best reps win calls." },
  { n: "3", title: "Verify", body: "Your manager approves each pattern." },
  { n: "4", title: "Deploy", body: "The AI handles the next call the same way — every time." },
];

const segments = [
  {
    tag: "Small business",
    size: "1–50 employees",
    title: "Every call answered",
    body: "No missed calls, no voicemail black hole. HyperDial sits on top of the tools you already use — live in days, priced per seat.",
    points: ["Sits on your existing stack", "AI answers around the clock", "Predictable per-seat pricing"],
  },
  {
    tag: "Mid-market",
    size: "50–500 employees",
    title: "Every call consistent",
    body: "Run your whole calling operation on HyperDial — numbers, routing, IVR, analytics — with AI learning from every conversation.",
    points: ["Full phone system + helpdesk", "Smart routing & IVR", "Full analytics & reporting"],
  },
  {
    tag: "Enterprise",
    size: "500+ employees",
    title: "Every call compliant",
    body: "SSO, custom roles, HIPAA support and audit trails — plus multi-brand workspaces, custom AI voice and a dedicated ROI partner.",
    points: ["SSO, custom roles, audit trail", "HIPAA support & compliance", "Dedicated account manager"],
  },
];

const integrations = ["Salesforce", "HubSpot", "Zendesk", "Slack", "Pipedrive", "Jira"];

const trust = [
  { title: "Keep your numbers & stack", body: "Bring your own number, or pick a new one from a wide directory of global local and toll-free numbers — no rip-and-replace, no migration project." },
  { title: "No huge setup", body: "It learns from your real calls. The knowledge base builds itself." },
  { title: "Zero risk", body: "Read-only + tickets by default. The AI never takes an action that could break anything." },
  { title: "Secure by design", body: "Data encrypted in transit and at rest, with SSO, custom roles and audit trail on enterprise plans." },
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
              AI-powered business calling
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
              The business phone system that gets <span className="text-brand-light">smarter</span> with every call.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-7 text-slate-soft">
              HyperDial answers, routes and makes calls with AI that learns from
              your best reps — so small teams never miss a call, and enterprises
              never miss a beat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="btn-primary">Talk to us</Link>
              <Link href="/book-a-demo" className="btn border border-white/20 text-white hover:border-brand-light hover:text-brand-light">
                Book a demo
              </Link>
            </div>
            <p className="mt-8 text-sm text-slate-soft">
              Calls first — with chat, email, SMS and social on the same brain.
            </p>
          </div>
          <div className="md:pl-6">
            <ChatDemo />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-line bg-white">
        <div className="wrap grid grid-cols-2 gap-8 py-10 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-semibold text-brand">{s.value}</p>
              <p className="mt-1 text-sm leading-5 text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core products */}
      <section className="wrap py-20">
        <div className="max-w-2xl">
          <span className="eyebrow">The platform</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything your calls need, in one place
          </h2>
          <p className="mt-3 text-muted">
            A complete calling platform — phone system, call center, intelligence
            — with one thing nobody else has: it learns from your best reps.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.title} className="card p-7">
              <span className="text-2xl" aria-hidden>{p.icon}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 leading-7 text-muted">{p.body}</p>
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
              Every call makes it smarter. The knowledge base builds itself.
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

      {/* Company-size segmentation */}
      <section className="wrap py-20">
        <div className="max-w-2xl">
          <span className="eyebrow">Built for your size</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            From first phone line to global call center
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {segments.map((s) => (
            <div key={s.tag} className="card flex flex-col p-7">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm font-semibold text-brand">{s.tag}</span>
                <span className="text-xs text-faint">{s.size}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{s.body}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-brand">✓</span> {p}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="mt-5 text-sm link-quiet">See plans →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="bg-surface py-20">
        <div className="wrap">
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
          <p className="mt-10 text-center text-sm text-muted">
            Works with{" "}
            {integrations.map((name, i) => (
              <span key={name} className="font-medium text-ink">
                {name}{i < integrations.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            and your own tools via webhooks &amp; API.
          </p>
        </div>
      </section>

      {/* Verticals */}
      <section className="wrap py-20">
        <div className="flex items-end justify-between">
          <div>
            <span className="eyebrow">Industries</span>
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
            Your AI phone system is one call away
          </h2>
          <p className="mx-auto mt-4 max-w-md text-slate-soft">
            Book a 30-minute walkthrough. Bring the calls your current setup
            struggles with — that&rsquo;s the demo worth watching.
          </p>
          <Link href="/demo" className="btn mt-8 bg-white text-brand hover:bg-brand-light hover:text-white">
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
