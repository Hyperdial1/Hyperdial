import type { Doc } from "@/lib/content";

// Verticals from the HyperDial positioning framework.
// Each uses the customer's own language for the problem.
export const solutions: Doc[] = [
  {
    slug: "insurance",
    title: "Insurance",
    description: "Agents quote the same objections wrong every time.",
    category: "Vertical",
    body: `## The problem in your words

"Agents quote the same objections wrong every time."

Objection handling lives in your best agents' heads. The phrasing that closes a policy never reaches the rest of the team, and your AI bot certainly never learns it.

## How HyperDial helps

The Agent Intelligence Process watches every human-handled call, extracts the responses that actually move a quote forward, and — once your manager approves the pattern — deploys it so every call handles that objection the same way. The best agent's best line becomes everyone's line.`,
  },
  {
    slug: "real-estate",
    title: "Real estate",
    description: "Leads go cold because follow-ups are manual.",
    category: "Vertical",
    body: `## The problem in your words

"Leads go cold because follow-ups are manual."

The call goes well, then the follow-up is forgotten, delayed, or done inconsistently. A great conversation dies in the follow-through.

## How HyperDial helps

HyperDial handles the after-call work as part of the call itself — sending the listing, booking the viewing, updating the CRM — so the moment of intent doesn't leak away. Every promising lead gets the same fast, consistent follow-up.`,
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Patients hang up before getting the right info.",
    category: "Vertical",
    body: `## The problem in your words

"Patients hang up before getting the right info."

Hold times and IVR menus lose patients before they reach an answer. After-hours, there's often no answer at all.

## How HyperDial helps

HyperDial answers immediately, around the clock, and routes anything sensitive to a human with full context. Routine questions get resolved on the first call; the cases that need a person reach one faster.`,
  },
  {
    slug: "edtech",
    title: "EdTech",
    description: "Counsellors don't know why some students enroll and others don't.",
    category: "Vertical",
    body: `## The problem in your words

"Counsellors don't know why some kids enroll and others don't."

The difference between a counsellor who converts and one who doesn't is pattern, not effort — and that pattern is invisible.

## How HyperDial helps

Agent Intelligence Process surfaces what your top counsellors actually say on the calls that convert, turns it into approved patterns, and makes it available on every call. You stop guessing why enrollment works and start repeating it.`,
  },
  {
    slug: "lending-bfsi",
    title: "Lending / BFSI",
    description: "Verification calls are inconsistent and compliance is a risk.",
    category: "Vertical",
    body: `## The problem in your words

"Verification calls are inconsistent and compliance is a risk."

Every verification call should follow the same script and capture the same fields. In practice they don't, and inconsistency is a compliance exposure.

## How HyperDial helps

HyperDial runs verification consistently every time and keeps a full record of what was said. Patterns live inside the conversation, not in a document nobody reads mid-call — so the right questions fire automatically.`,
  },
  {
    slug: "d2c-ecommerce",
    title: "D2C / E-commerce",
    description: "Support calls spike and agents give different answers.",
    category: "Vertical",
    body: `## The problem in your words

"Support calls spike and agents give different answers."

Volume is spiky, the same handful of questions repeat endlessly, and different agents answer them differently.

## How HyperDial helps

HyperDial absorbs the repetitive volume — order status, returns, product questions — with a consistent answer every time, grounded in a knowledge base that builds itself from your real calls. Your team handles the exceptions.`,
  },
  {
    slug: "travel",
    title: "Travel",
    description: "Booking-to-call drop is high and no one knows why.",
    category: "Vertical",
    body: `## The problem in your words

"Booking-to-call drop is high and no one knows why."

Calls that should convert to bookings don't, and without visibility across hundreds of calls you can't see where they fall apart.

## How HyperDial helps

HyperDial classifies every call's intent and outcome, so the drop-off becomes visible and addressable. The patterns that lead to a booking get reinforced; the ones that lose it get flagged.`,
  },
  {
    slug: "collections",
    title: "Collections",
    description: "Right-party contact rate is low and scripts don't adapt.",
    category: "Vertical",
    body: `## The problem in your words

"Right-party contact rate is low and scripts don't adapt."

Static scripts don't adjust to what the person on the line actually says, and right-party contact stays stubbornly low.

## How HyperDial helps

HyperDial adapts in real time to the conversation and learns which approaches reach the right party and lead to resolution. Patterns that work get deployed; patterns that decay get caught before they drag the rate down.`,
  },
  {
    slug: "hr-recruitment",
    title: "HR / Recruitment",
    description: "Candidate screening calls have no structure or memory.",
    category: "Vertical",
    body: `## The problem in your words

"Candidate screening calls have no structure or memory."

Screening calls vary by recruiter, capture different things, and leave no consistent record to compare against.

## How HyperDial helps

HyperDial runs structured screening calls, captures the same signals every time, and remembers them. Every call adds to an institutional memory instead of disappearing the moment it ends.`,
  },
];
