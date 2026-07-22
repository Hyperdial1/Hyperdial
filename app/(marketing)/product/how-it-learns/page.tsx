import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Intelligence Processing (AIP)",
  description:
    "Agent Intelligence Processing (AIP) — how HyperDial turns your best reps' calls into AI that gets smarter every week, and the guardrails that keep it safe.",
};

const aopProblems = [
  { p: "AI is frozen at deployment", s: "Most voice bots are trained once and left. HyperDial keeps learning from every real call." },
  { p: "The same gap hits again and again", s: "A question the AI can't answer becomes a Signal Gap — resolved through human handoff, then learned so it never recurs." },
  { p: "Best responses never reach the AI", s: "Your top agent's winning phrases get extracted, approved, and deployed instead of leaving when they do." },
  { p: "Playbooks live in documents, not calls", s: "Patterns fire inside the live conversation, the moment the customer says something unexpected." },
  { p: "Nobody notices when a pattern stops working", s: "Decay detection flags a pattern whose success rate is dropping before it drags results down." },
  { p: "KB articles are manual and stale", s: "HyperDial auto-drafts a knowledge article after every call — your manager approves, the AI knows it forever." },
];

const loop = [
  {
    n: "1",
    title: "Observe",
    body: "Every human-handled conversation is captured and classified automatically — no extra work for your agents.",
  },
  {
    n: "2",
    title: "Learn",
    body: "HyperDial extracts how your best agents actually resolve the call: the phrasing, the sequence, the offers that work — not a generic best-practice guess.",
  },
  {
    n: "3",
    title: "Verify",
    body: "Nothing goes live on its own. A candidate pattern sits in a queue until your manager approves it — a human always signs off before the AI repeats it.",
  },
  {
    n: "4",
    title: "Deploy",
    body: "Once approved, the pattern fires the same way on every future call that matches — and carries over to chat, email, and social too.",
  },
];

export default function HowItLearnsPage() {
  return (
    <div className="wrap py-16">
      <div className="max-w-2xl">
        <Link href="/product" className="text-sm link-quiet">
          ← Platform
        </Link>
        <span className="eyebrow mt-6 block">The differentiator</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Agent Intelligence Processing (AIP)
        </h1>
        <p className="mt-5 text-lg leading-7 text-muted">
          AI calling doesn&rsquo;t usually fail because of the model. It fails
          because it&rsquo;s static — deployed once, never updated — while your
          human reps learn something new on every single call, and that
          knowledge goes nowhere. The Agent Intelligence Process is the layer
          that closes the loop between human expertise and AI execution.
        </p>
      </div>

      {/* The loop */}
      <section className="mt-14 rounded-xl2 bg-deep p-8 text-white sm:p-12">
        <span className="eyebrow text-brand-light">The loop</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Observe, learn, verify, deploy
        </h2>
        <p className="mt-3 max-w-2xl text-slate-soft">
          Four steps, running continuously, on every call your team
          handles.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loop.map((s) => (
            <div key={s.n} className="rounded-xl border border-white/10 bg-deep-800 p-6">
              <span className="font-display text-2xl font-semibold text-brand-light">{s.n}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What it fixes */}
      <section className="mt-16">
        <span className="eyebrow">What it actually fixes</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          The problems every static bot eventually runs into
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {aopProblems.map((item) => (
            <div key={item.p} className="card p-6">
              <h3 className="font-display text-base font-semibold">{item.p}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{item.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signal Gap */}
      <section className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <span className="eyebrow">When the AI doesn&rsquo;t know</span>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
            Signal Gaps turn failure into a one-time event
          </h2>
          <p className="mt-4 leading-7 text-muted">
            Every AI hits questions it can&rsquo;t answer — that&rsquo;s not the
            problem. The problem is what happens next. A static bot fails the
            same way forever. HyperDial calls that moment a{" "}
            <strong className="text-ink">Signal Gap</strong>: it hands the
            conversation to a human, watches how they resolve it, and learns
            the resolution. The same gap doesn&rsquo;t come back twice.
          </p>
        </div>
        <div>
          <span className="eyebrow">When a pattern stops working</span>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
            Decay detection catches it before it costs you
          </h2>
          <p className="mt-4 leading-7 text-muted">
            A pattern that resolved calls well last quarter can quietly fade as
            language and expectations shift — that&rsquo;s{" "}
            <strong className="text-ink">pattern decay</strong>. Most
            automation platforms have no idea it&rsquo;s happening. HyperDial
            tracks each pattern&rsquo;s success rate continuously and flags
            decay before it drags results down, so your manager can review
            and refresh it.
          </p>
        </div>
      </section>

      {/* Security & guardrails */}
      <section className="mt-16 max-w-2xl">
        <span className="eyebrow">Security &amp; guardrails</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Read-only by default, every deployment
        </h2>
        <p className="mt-4 leading-7 text-muted">
          Every new HyperDial deployment starts read-only: the AI can answer
          from your connected knowledge base and open tickets, but it can&rsquo;t
          take an action that changes a record, spends money, or otherwise
          can&rsquo;t be undone. You turn on capabilities deliberately, one at a
          time, once you&rsquo;ve seen how it behaves — the same discipline that
          governs how AIP itself learns and deploys new patterns.
        </p>
        <Link href="/docs/guardrails" className="mt-4 inline-block text-sm font-medium text-brand hover:underline">
          Read the full security &amp; guardrails doc →
        </Link>
      </section>

      {/* The moat */}
      <section className="mt-16 max-w-2xl">
        <span className="eyebrow">The compounding moat</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          The longer it runs, the harder it is to replace
        </h2>
        <ul className="mt-6 space-y-3 text-muted">
          <li className="flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />Every call becomes a new pattern candidate.</li>
          <li className="flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />Every approved pattern makes the AI smarter.</li>
          <li className="flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />Every resolved Signal Gap means that gap never returns.</li>
          <li className="flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />Every published article grows a knowledge base unique to you.</li>
        </ul>
        <p className="mt-5 leading-7 text-muted">
          That pattern library is built from your own calls. It compounds over
          time and doesn&rsquo;t transfer to a competitor — which is exactly
          what makes it a moat, not just a feature.
        </p>
      </section>

      {/* Cross-link to technical docs */}
      <section className="mt-16 card p-8">
        <span className="eyebrow">For your technical team</span>
        <h2 className="mt-3 font-display text-xl font-semibold">
          Want the implementation-level detail?
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          The docs cover the same loop from a builder&rsquo;s point of view —
          what gets logged, how approval works, and how decay detection is
          configured.
        </p>
        <Link href="/docs/how-it-learns" className="mt-4 inline-block text-sm font-medium text-brand hover:underline">
          Read the technical docs →
        </Link>
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link href="/demo" className="btn-primary">Talk to us</Link>
        <Link href="/product" className="btn-ghost">← Back to platform overview</Link>
      </div>
    </div>
  );
}
