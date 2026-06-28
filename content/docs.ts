import type { Doc } from "@/lib/content";

export const docs: Doc[] = [
  {
    slug: "introduction",
    title: "Introduction",
    description: "What HyperDial is, how it's structured, and where to start.",
    category: "Getting started",
    body: `## What HyperDial is

HyperDial is an AI customer service platform that handles conversations across
voice, live chat, email, and social — and gets measurably better at handling
them over time. Most AI support tools are trained once and left alone, which
means they fail the same way on the same questions indefinitely. HyperDial is
built around a different idea: every conversation your human agents handle is
a source of knowledge, and that knowledge should make the AI smarter instead
of disappearing the moment the call ends.

In practice, that means two things are always running side by side: the AI
handling the volume it already knows how to handle, and a learning system
watching everything your team handles that the AI doesn't yet, extracting the
parts that worked, and turning them into something the AI can do next time —
after a human signs off on it.

## The three building blocks

Every HyperDial deployment is made up of the same three pieces, regardless of
which channels you're using:

**A knowledge source.** This is whatever you connect — your help center, a
docs site, internal FAQs, policy documents. The AI only ever answers from what
you've explicitly connected; it doesn't draw on anything outside that scope.
Over time, this knowledge source grows on its own: every call your team
resolves can become a new article, pending your review.

**A set of actions.** These are the things HyperDial is allowed to actually do
— look up an order, create a support ticket, send a text, issue a refund. Each
action carries a risk tier (read, reversible write, or irreversible write),
and you decide deliberately which tiers are switched on. New deployments start
read-only: the AI can answer questions and open tickets, but it can't take any
action that could cause real damage until you turn that capability on. See
**Security & guardrails** for how those tiers work.

**The Agent Intelligence Process.** This is the learning system itself — the
mechanism that watches how your best agents actually resolve the calls the AI
can't yet handle, drafts a reusable pattern from what worked, and — once a
manager approves it — deploys that pattern so the AI handles the same
situation correctly from then on. It runs continuously, on every channel, in
the background. See **How it learns** for the full loop, including how
HyperDial detects when a previously-good pattern starts to go stale.

## How a deployment usually goes

Most teams move through the same four stages, roughly in this order:

1. **Connect channels.** Forward calls, embed the chat widget, link your inbox
   and social accounts. None of this requires migrating off your existing
   phone system or help desk — HyperDial sits alongside what you already have.
2. **Connect a knowledge source** so the AI has something real to answer from
   on day one.
3. **Run read-only** for an initial period, so you can see exactly how the AI
   behaves before it's allowed to take any action that changes a record or
   spends money.
4. **Turn on the Agent Intelligence Process** and let it start learning from
   the conversations your team is already having. This is also when you'll
   start approving or rejecting the first candidate patterns it surfaces.

## Where to go next

If you're setting this up for the first time, start with **Quickstart** —
it walks through connecting your first channel and knowledge source. Read
**Security & guardrails** before turning on anything beyond read-only access,
since that's where you decide what HyperDial is and isn't allowed to do
unsupervised. **How it learns** explains the Agent Intelligence Process loop
in detail, including Signal Gaps and pattern decay. And once you have
something live, **Evaluation** covers how to test it against the calls that
actually matter, not just the easy ones.`,
  },
  {
    slug: "quickstart",
    title: "Quickstart",
    description: "Forward your calls and go live in days.",
    category: "Getting started",
    body: `## Before you begin

You keep your existing phone system. You'll just forward calls to HyperDial — no
porting, no rip-and-replace.

## Steps

### 1. Forward your calls

Point your number (or a subset of calls) at HyperDial. Nothing else in your
stack changes.

### 2. Connect a knowledge source

Add your help center, docs, or FAQs. The AI answers only from what you connect —
and the knowledge base also grows itself from real calls.

### 3. Start read-only

Begin with read-only answers plus ticket creation. The AI never takes an action
that could break anything until you allow it.

### 4. Let Agent Intelligence Process learn

As your agents handle calls, the Agent Intelligence Process drafts patterns from what works. Your
manager approves them and the AI starts handling those cases the same way.

## What's next

Read Guardrails to expand what the AI can do safely.`,
  },
  {
    slug: "how-it-learns",
    title: "How it learns (Agent Intelligence Process)",
    description: "The observe, learn, verify, deploy loop.",
    category: "Concepts",
    body: `## The Agent Intelligence Process loop

The Agent Intelligence Process closes the gap between what your humans
know and what your AI does.

### Observe

Every human-handled call is captured and classified.

### Learn

HyperDial extracts how your best agents actually resolve calls — the phrasing,
the sequence, the offers that work.

### Verify

Nothing goes live automatically. Your manager approves each candidate pattern.

### Deploy

Approved patterns fire on future calls — the same way, forever.

## Signal Gaps

When the AI hits a question it can't answer, that's a Signal Gap. It hands off to
a human, observes the resolution, and learns it — so the same gap doesn't recur.

## Decay detection

A pattern that converts well today can fade as markets and language shift.
HyperDial flags patterns whose success rate is dropping before they hurt
results.`,
  },
  {
    slug: "guardrails",
    title: "Security & guardrails",
    description: "Deciding what the AI is allowed to do.",
    category: "Configuration",
    body: `## Read-only by default

HyperDial starts read-only: it answers questions and creates tickets, but takes
no action that could break anything. You expand its capabilities deliberately.

## The three tiers

### Read

Look up an order, check a policy. Low risk — enable freely.

### Reversible write

Send a text, draft a ticket, update a CRM note. Medium risk — every action is
logged.

### Irreversible write

Refunds, account changes. High risk — set limits or require human approval.

## Limits over bans

Set boundaries, not blanket bans: "callback offers up to X", "escalate above
Y". Boundaries scale where prohibitions don't.

## Auditing

Every action is logged with the call, the inputs, and the outcome. Review the
irreversible ones regularly.`,
  },
  {
    slug: "evaluation",
    title: "Evaluation",
    description: "Testing the AI against real and adversarial calls.",
    category: "Configuration",
    body: `## Why evaluate

An AI that works on easy calls can still fail where it matters. Evaluation finds
those failures before customers do.

## Build an adversarial suite

Most test cases should be hard: ambiguous requests, callers pushing for more than
they're owed, and unexpected turns mid-call.

## What to measure

Track resolution, escalation, and re-contact together. Any one alone can be
gamed; together they tell the truth.

## Re-run on every change

Treat the evaluation suite like a test suite — run it whenever you change
knowledge, actions, or approved patterns.`,
  },
];
