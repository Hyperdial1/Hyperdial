import type { Doc } from "@/lib/content";

export const blog: Doc[] = [
  {
    slug: "calls-happen-and-disappear",
    title: "Calls happen, and then they disappear",
    description:
      "Thousands of calls, zero institutional memory. The single biggest waste in most phone operations.",
    category: "Voice AI",
    date: "2026-06-10",
    readingTime: "5 min",
    body: `## The most expensive habit in support

Every day, a business runs hundreds of calls. Transcripts might exist, but they
sit unread. No one knows what customers actually asked, objected to, or needed.
The call ends — and so does the learning.

## Memory is the missing layer

The fix isn't more recording. It's turning calls into something that compounds:
patterns the whole team can use, a knowledge base that grows itself, and an AI
that knows more next week than it did this week.

> The call that taught your best agent something should teach the next call too.

That loop — observe, learn, verify, deploy — is the difference between a phone
line that drains knowledge and one that builds it.`,
  },
  {
    slug: "the-gap-between-your-best-and-average-agent",
    title: "The gap between your best and average agent",
    description:
      "Your top agent closes far more than your average one. The difference is pattern, not effort — and it's recoverable.",
    category: "Operations",
    date: "2026-05-28",
    readingTime: "6 min",
    body: `## It's not effort

Your best agent closes a high share of calls. Your average agent closes a
fraction of that. They work just as hard. The difference is that your best agent
found the right words — and those words are stuck in their head.

## Knowledge that never travels

That phrasing never makes it into a document, never gets trained into the AI,
and walks out the door when the agent leaves.

## Closing the gap automatically

The Agent Intelligence Process watches the calls that convert, extracts what worked, and — after
a manager approves it — makes it available on every call. The best agent's best
line becomes everyone's line, including the AI's.`,
  },
  {
    slug: "why-static-ai-voice-bots-fail",
    title: "Why static AI voice bots fail",
    description:
      "Most voice bots are deployed once and never updated. Six months later they make the same mistakes as day one.",
    category: "Voice AI",
    date: "2026-05-14",
    readingTime: "6 min",
    body: `## Frozen at deployment

The reason AI struggles in complex telephony isn't compute or voice quality.
It's that the systems are static — trained once, deployed, and left. Real calls
expose gaps immediately, but nothing flows back.

## The same gap, again and again

A caller asks about an integration the AI doesn't know. The call transfers. The
next caller asks the same thing. The AI still doesn't know. This repeats.

## Treat every failure as a lesson

A self-learning system treats that as a Signal Gap: hand off to a human, observe
the resolution, learn it, and never fail that way again. Static bots treat it as
a permanent script gap. That's the whole difference.`,
  },
  {
    slug: "after-call-work-breaks-the-funnel",
    title: "After-call work is where conversions die",
    description:
      "Send the brochure, book the follow-up, update the CRM. The actions that decide a deal are the ones most often skipped.",
    category: "Operations",
    date: "2026-04-29",
    readingTime: "4 min",
    body: `## A great call isn't enough

The conversation goes perfectly. Then comes the after-call work: send the
information, book the next step, update the record. These actions decide whether
the call converts — and they're done manually, inconsistently, or forgotten.

## Fold the follow-through into the call

When the AI handles the after-call work as part of the call itself, the moment
of intent doesn't leak away. The text goes out, the follow-up is booked, the CRM
is updated — every time, not just when someone remembers.`,
  },
];
