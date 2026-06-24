import type { Doc } from "@/lib/content";

export const glossary: Doc[] = [
  {
    slug: "agent-intelligence-process",
    title: "Agent Intelligence Process",
    description:
      "The self-learning layer that turns human-handled calls into approved AI patterns.",
    category: "HyperDial",
    body: `## Definition

**Agent Intelligence Process** — the Agent Intelligence Process — is HyperDial's self-learning
system. It watches every human-handled call, extracts what worked, drafts it as a
pattern, and deploys it to the AI after a manager approves it.

## Why it matters

Most AI voice systems are static — deployed once and never updated. Agent Intelligence Process closes
the loop between human expertise and AI execution, so the platform gets smarter
with every call.

## Related terms

Signal Gap, pattern decay, knowledge base.`,
  },
  {
    slug: "signal-gap",
    title: "Signal Gap",
    description:
      "A question or situation the AI can't yet handle, which gets resolved and learned.",
    category: "HyperDial",
    body: `## Definition

A **Signal Gap** is a point where the AI lacks the knowledge to handle a call.
Instead of failing repeatedly, HyperDial hands off to a human, observes the
resolution, and learns it — so the same gap doesn't recur.

## Why it matters

Static bots treat every gap as a permanent script limitation. Treating it as a
Signal Gap turns each failure into a one-time event.

## Related terms

Agent Intelligence Process, escalation, knowledge base.`,
  },
  {
    slug: "pattern-decay",
    title: "Pattern decay",
    description:
      "When a previously high-performing pattern starts losing effectiveness.",
    category: "Metrics",
    body: `## Definition

**Pattern decay** is the decline in a pattern's success rate over time as
markets shift, objections change, and customer language evolves. A pattern that
converted at a high rate one month may fade the next.

## Why it matters

Without decay detection, you run a playbook that's already dead. HyperDial flags
decaying patterns before they drag results down.

## Related terms

Agent Intelligence Process, decay detection, intent detection.`,
  },
  {
    slug: "right-party-contact",
    title: "Right-party contact",
    description:
      "Reaching the actual person you intended to reach on a call.",
    category: "Metrics",
    body: `## Definition

**Right-party contact (RPC)** is the rate at which a call reaches the intended
person rather than voicemail, a wrong number, or someone else.

## Why it matters

Low RPC wastes call capacity. Scripts that don't adapt to what the person says
keep RPC low; conversations that adapt in real time lift it.

## Related terms

Containment, intent detection.`,
  },
  {
    slug: "average-handle-time",
    title: "Average handle time (AHT)",
    description: "The average duration of a call, including after-call work.",
    category: "Metrics",
    body: `## Definition

**Average handle time** is the mean time to handle a call end to end, including
talk time and after-call work like updating records.

## Why it matters

AHT is a core cost driver. Automating repetitive calls and folding after-call
work into the conversation reduces it without cutting quality.

## Related terms

After-call work, deflection rate.`,
  },
  {
    slug: "deflection-rate",
    title: "Deflection rate",
    description:
      "The share of calls resolved without a human agent.",
    category: "Metrics",
    body: `## Definition

**Deflection rate** is the percentage of calls handled entirely by the AI,
without a human.

## Why it matters

It's the headline automation metric, but on its own it can mislead — a caller who
gives up counts as deflected. Pair it with re-contact rate and outcomes.

## Related terms

Containment, resolution, re-contact rate.`,
  },
  {
    slug: "intent-detection",
    title: "Intent detection",
    description: "Identifying what a caller is trying to accomplish.",
    category: "AI",
    body: `## Definition

**Intent detection** maps a caller's words to the goal behind them — recognizing
"where's my stuff" as an order-status request.

## Why it matters

Every downstream action depends on getting intent right. It sets the ceiling for
everything else on the call.

## Related terms

Agent Intelligence Process, routing, outcome classification.`,
  },
  {
    slug: "after-call-work",
    title: "After-call work",
    description:
      "The tasks completed after a call ends — and where conversions often leak.",
    category: "Operations",
    body: `## Definition

**After-call work (ACW)** is everything done once the call ends: sending
information, booking follow-ups, updating the CRM.

## Why it matters

ACW decides whether a good call converts, yet it's done manually and
inconsistently. HyperDial folds it into the call so nothing is forgotten.

## Related terms

Average handle time, intent detection.`,
  },
];
