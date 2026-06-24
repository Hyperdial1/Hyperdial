import type { Doc } from "@/lib/content";

export const docs: Doc[] = [
  {
    slug: "introduction",
    title: "Introduction",
    description: "What HyperDial is and how the pieces fit together.",
    category: "Getting started",
    body: `## Welcome

HyperDial is an AI voice platform that handles calls, learns from your best
agents, and gets smarter with every conversation. These docs cover setup,
configuration, and the concepts behind the Agent Intelligence Process.

## How it fits together

A HyperDial deployment has three parts: a **knowledge source** the AI answers
from, a set of **actions** it can take, and the **Agent Intelligence Process** that observes
human-handled calls and turns what works into approved patterns.

## Next steps

Start with Quickstart, then read Guardrails before enabling any actions, and
How it learns to understand the Agent Intelligence Process loop.`,
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
