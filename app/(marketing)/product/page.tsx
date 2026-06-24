import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description:
    "How HyperDial handles calls and how the Agent Intelligence Process makes it smarter with every conversation.",
};

const aopProblems = [
  { p: "AI is frozen at deployment", s: "Most voice bots are trained once and left. HyperDial keeps learning from every real call." },
  { p: "The same gap hits again and again", s: "A question the AI can't answer becomes a Signal Gap — resolved through human handoff, then learned so it never recurs." },
  { p: "Best responses never reach the AI", s: "Your top agent's winning phrases get extracted, approved, and deployed instead of leaving when they do." },
  { p: "Playbooks live in documents, not calls", s: "Patterns fire inside the live conversation, the moment the customer says something unexpected." },
  { p: "Nobody notices when a pattern stops working", s: "Decay detection flags a pattern whose success rate is dropping before it drags results down." },
  { p: "KB articles are manual and stale", s: "HyperDial auto-drafts a knowledge article after every call — your manager approves, the AI knows it forever." },
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

      {/* Agent Intelligence Process section */}
      <section id="intelligence" className="mt-16 scroll-mt-24 rounded-xl2 bg-navy p-8 text-white sm:p-12">
        <span className="eyebrow text-teal-bright">The differentiator</span>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
          Agent Intelligence Process — the Agent Observation &amp; Pattern layer
        </h2>
        <p className="mt-4 max-w-2xl text-slate-soft">
          AI support doesn&rsquo;t fail because of the model. It fails because it&rsquo;s
          static — deployed once, never updated.
          Meanwhile your human agents learn every day, and that knowledge goes
          nowhere. Agent Intelligence Process is the layer that closes the loop between human expertise
          and AI execution.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {aopProblems.map((item) => (
            <div key={item.p} className="rounded-xl border border-white/10 bg-navy-800 p-5">
              <h3 className="font-display text-base font-semibold text-teal-bright">{item.p}</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-soft">{item.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The moat */}
      <section className="mt-16 max-w-2xl">
        <span className="eyebrow">The compounding moat</span>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
          The longer it runs, the harder it is to replace
        </h2>
        <ul className="mt-6 space-y-3 text-muted">
          <li className="flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-dark" />Every call becomes a new pattern candidate.</li>
          <li className="flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-dark" />Every approved pattern makes the AI smarter.</li>
          <li className="flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-dark" />Every resolved Signal Gap means that gap never returns.</li>
          <li className="flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-dark" />Every published article grows a knowledge base unique to you.</li>
        </ul>
        <p className="mt-5 leading-7 text-muted">
          That pattern library is built from your own calls. It compounds over
          time and doesn&rsquo;t transfer to a competitor — which is exactly what
          makes it a moat.
        </p>
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link href="/demo" className="btn-primary">Talk to us</Link>
        <Link href="/docs" className="btn-ghost">Read the docs</Link>
      </div>
    </div>
  );
}
