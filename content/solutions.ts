import type { Doc } from "@/lib/content";

// Verticals from the HyperDial positioning framework, expanded with real
// depth per industry — pulled from the positioning doc, pitch deck, and
// investor materials rather than generic AI-support copy.
export const solutions: Doc[] = [
  {
    slug: "insurance",
    title: "Insurance",
    description: "Agents quote the same objections wrong every time.",
    category: "Vertical",
    body: `## The problem in your words

"Agents quote the same objections wrong every time."

Every insurance call runs into the same handful of objections — premium is
too high, coverage doesn't seem worth it, "I need to think about it." Your
top-performing agent has a way of handling each of these that consistently
keeps the conversation moving toward a policy. Your average agent doesn't.
The difference isn't effort or training — it's that the best agent's exact
phrasing, sequencing, and timing live only in their head. They've never been
written down, and your AI bot — if you have one — has certainly never
learned them. Every team also carries a second, quieter risk: verification
and disclosure calls that vary by agent create real compliance exposure,
because there's no consistent record of what was actually said.

## How HyperDial helps

The Agent Intelligence Process watches every human-handled call your team
takes, including the ones that end in a sale and the ones that don't, and
extracts what the converting calls actually had in common — not a generic
best-practice guess, but the real phrasing your own best agent used on your
own real objections. Once your manager reviews and approves a pattern, it
deploys across every future call where that objection comes up, on every
channel a customer might call in on.

On the compliance side, every verification and disclosure conversation
follows the same structure and is fully transcribed, so you have a
consistent, reviewable record instead of a patchwork of agent-dependent
calls. Where the AI hits a question outside its current knowledge — a
specific underwriting edge case, an unusual claim scenario — it hands off to
a human immediately with full context, watches how it gets resolved, and
that exact gap won't need a human a second time.

## What changes

Within the first few weeks, you'll see the gap between your best and average
agent's close rate start to narrow — not because every agent suddenly got
better, but because the patterns that already worked are now available to
all of them, on every call, not just the ones your top performer happens to
take.`,
  },
  {
    slug: "real-estate",
    title: "Real estate",
    description: "Leads go cold because follow-ups are manual.",
    category: "Vertical",
    body: `## The problem in your words

"Leads go cold because follow-ups are manual."

A buyer calls, the conversation goes well, interest is real — and then
nothing happens fast enough. "I'll send you the listing." "Let's book a
viewing for this weekend." "I'll follow up Monday." These are the moments
that decide whether a warm lead becomes a closed deal or goes cold, and
they're handled manually, inconsistently, and — often — forgotten entirely
once the call ends and the next one starts. The call itself was good. It's
the follow-through that breaks.

## How HyperDial helps

HyperDial treats after-call work as part of the call, not a separate task
someone has to remember to do later. The listing gets sent, the viewing gets
booked, the CRM gets updated — triggered by what was actually said on the
call, the moment it ends, every time, for every lead, not just the ones an
agent has time to follow up with personally.

The Agent Intelligence Process also watches which conversations actually
turn into booked viewings and closed deals, and surfaces what your best
agents do differently — the way they qualify a buyer's timeline, the
language that gets someone to commit to a viewing slot on the spot. That
becomes a pattern every agent's calls benefit from, not just the top
performer's.

## What changes

The lag between "interested buyer" and "booked viewing" shrinks from
whenever-someone-gets-to-it to immediate. Leads that used to leak out during
the follow-up gap get captured while the interest is still fresh.`,
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Patients hang up before getting the right info.",
    category: "Vertical",
    body: `## The problem in your words

"Patients hang up before getting the right info."

Hold times and IVR menus cost patients before they ever reach an answer —
and outside business hours, there's frequently no answer at all. For a
healthcare practice, a missed call isn't just a lost lead the way it might
be for a retailer; it's a patient who needed something and didn't get it,
and who may not call back. At the same time, every call carries weight that
a typical support call doesn't: the wrong information given confidently is
worse than no information, which is exactly why call quality and
consistency matter more here than almost anywhere else.

## How HyperDial helps

HyperDial answers immediately, around the clock, for the routine questions
that make up most call volume — appointment scheduling, hours, insurance and
billing questions, prescription refill status — and resolves them on the
first call without a hold queue. Anything sensitive, ambiguous, or outside
what the AI is confident about routes to a human immediately, with the full
conversation already summarized so the patient doesn't have to repeat
themselves.

Because HyperDial starts read-only by default, it never takes an action
that could affect patient care or records without a human in the loop — it
answers and routes, and any capability beyond that is something your team
enables deliberately, at the pace you're comfortable with.

## What changes

After-hours calls get an answer instead of a dial tone. Routine questions
stop competing with urgent ones for the same queue, and the calls that do
need a person reach one faster because the AI has already filtered out
everything that didn't.`,
  },
  {
    slug: "edtech",
    title: "EdTech",
    description: "Counsellors don't know why some students enroll and others don't.",
    category: "Vertical",
    body: `## The problem in your words

"Counsellors don't know why some kids enroll and others don't."

Two counsellors can have what looks like the same conversation with two
similar prospective students — same course, same price, same objections —
and get completely different outcomes. The difference is pattern, not
effort: one counsellor has internalized what actually moves a hesitant
parent or student toward enrolling, and the other hasn't, and neither of
them could fully explain why if you asked. That knowledge is real, it's
valuable, and right now it's completely invisible to everyone except the
counsellor who has it.

## How HyperDial helps

The Agent Intelligence Process makes that invisible pattern visible. It
watches which conversations end in enrollment and which don't, extracts what
your highest-converting counsellors are actually saying — how they handle
the "let me think about it," how they frame outcomes, the specific moment
they ask for commitment — and turns it into an approved pattern available on
every call, not just the ones your best counsellor happens to take.

It also picks up the repetitive volume that eats counsellor time without
needing judgment: course details, fee structure, batch timings, eligibility
questions. Those get answered immediately and consistently, freeing your
counsellors to spend their time on the conversations that actually need a
human's judgment.

## What changes

You stop guessing why enrollment works for some calls and not others, and
start being able to point to it — and once you can point to it, you can
repeat it across the whole team instead of it living in one person's head.`,
  },
  {
    slug: "lending-bfsi",
    title: "Lending / BFSI",
    description: "Verification calls are inconsistent and compliance is a risk.",
    category: "Vertical",
    body: `## The problem in your words

"Verification calls are inconsistent and compliance is a risk."

Every verification call is supposed to follow the same script, capture the
same fields, and create the same kind of record — and in practice, it
doesn't. Agents phrase questions differently, skip steps under time
pressure, and the variation that results isn't just a quality problem, it's
a compliance exposure. When a regulator or auditor asks what was actually
said on a specific call, "it depends which agent took it" is not a
comfortable answer.

## How HyperDial helps

HyperDial runs verification calls the same way every time — the same
required fields, the same sequence, the same disclosures — and keeps a full,
searchable transcript of exactly what was said and confirmed on every call.
Patterns and required steps live inside the live conversation itself, firing
automatically at the right moment, rather than sitting in a compliance
document nobody has open while they're mid-call with a customer.

Where a call needs a human judgment call — an unusual income source, a
borderline eligibility case — it escalates immediately with full context,
and the resolution gets captured so the next similar case doesn't need an
escalation at all.

## What changes

Consistency stops depending on which agent happens to take the call. You get
a complete, reviewable record of every verification conversation by default,
not as a separate compliance project layered on top of how calls already
work.`,
  },
  {
    slug: "d2c-ecommerce",
    title: "D2C / E-commerce",
    description: "Support calls spike and agents give different answers.",
    category: "Vertical",
    body: `## The problem in your words

"Support calls spike and agents give different answers."

Support volume for a D2C brand is spiky by nature — a sale, a shipping
delay, a viral moment can triple call volume overnight — and the handful of
questions that make up most of that volume (where's my order, what's your
return policy, is this the right size) get answered differently depending
on which agent picks up. Inconsistent answers on simple questions erode
trust faster than almost anything else, and during a spike, hiring or
training your way to consistency isn't fast enough to matter.

## How HyperDial helps

HyperDial absorbs the repetitive volume — order status, returns, product
questions, shipping issues — with the same accurate answer every time,
grounded in a knowledge base that builds itself from your real product
catalog, policies, and past conversations rather than a static FAQ page that
goes stale. Because it's not a fixed headcount, a volume spike doesn't
require a hiring scramble; the AI absorbs the surge while your team focuses
on the exceptions that actually need a person — a damaged item, an angry
customer, an edge-case return.

The Agent Intelligence Process also picks up on what your best support
agents do when a routine question turns into something more — a customer
who's frustrated, an order that's genuinely gone wrong — and makes those de-
escalation patterns available across the whole team.

## What changes

Volume spikes stop being a staffing emergency. The same handful of questions
that dominate your queue get a fast, identical answer regardless of channel
or time of day, and your human team's time shifts toward the conversations
that actually need judgment.`,
  },
  {
    slug: "travel",
    title: "Travel",
    description: "Booking-to-call drop is high and no one knows why.",
    category: "Vertical",
    body: `## The problem in your words

"Booking-to-call drop is high and no one knows why."

A customer calls with real booking intent, the conversation happens, and
then the booking never completes — and across hundreds of calls a week,
nobody has visibility into where in that conversation things actually fall
apart. Is it a pricing objection? A date availability issue? A trust concern
about cancellation policy? Without classifying calls by intent and outcome,
that drop-off stays a mystery you can feel in your numbers but can't see in
any specific call.

## How HyperDial helps

HyperDial classifies every call by intent and by outcome, so the booking
drop-off that used to be invisible becomes a pattern you can actually see —
which objections come up most, at what point in the call bookings start
falling apart, which responses from your best agents reliably get a customer
to commit. Those winning patterns get reinforced and deployed across every
call; the moments that reliably lose a booking get flagged so you can see
exactly where to fix the conversation.

Because the AI handles routine booking questions — availability, pricing,
itinerary changes — directly and consistently, your human agents spend more
of their time on the calls where a customer is close to booking and just
needs the right push, rather than splitting attention across every call
equally.

## What changes

Booking-to-call drop-off stops being a number you can only watch get worse.
You get visibility into exactly where it happens and what your best agents
do differently on the calls that don't drop off — and that becomes
repeatable instead of lucky.`,
  },
  {
    slug: "collections",
    title: "Collections",
    description: "Right-party contact rate is low and scripts don't adapt.",
    category: "Vertical",
    body: `## The problem in your words

"Right-party contact rate is low and scripts don't adapt."

A static collections script doesn't adjust to what the person on the other
end of the line actually says — their tone, their excuse, their willingness
to engage — and that rigidity shows up directly in your numbers: low
right-party contact rates, low resolution rates, and agents falling back on
the same approach regardless of whether it's working for this particular
call. Markets, customer language, and what actually gets someone to engage
shift over time, and a script written once doesn't shift with them.

## How HyperDial helps

HyperDial adapts in real time within the conversation rather than running a
fixed script, and the Agent Intelligence Process continuously learns which
approaches actually reach the right party and lead to a resolution — not in
theory, but based on what's working on your own calls right now. Approaches
that are working get reinforced and deployed more broadly; approaches that
are starting to decay get flagged through decay detection before they drag
your contact and resolution rates down further, rather than discovering the
problem a quarter later in a report.

Every call is fully logged and consistent in what it captures, which matters
as much for internal quality review as it does for the compliance
expectations collections work carries.

## What changes

Right-party contact and resolution rates stop being something you find out
went down after the fact. Decay gets caught while it's happening, and the
approaches that are actually working get scaled across every call instead of
staying confined to whichever agent happened to discover them.`,
  },
  {
    slug: "hr-recruitment",
    title: "HR / Recruitment",
    description: "Candidate screening calls have no structure or memory.",
    category: "Vertical",
    body: `## The problem in your words

"Candidate screening calls have no structure or memory."

Screening calls vary by recruiter — different questions, different depth,
different things captured — which means two recruiters can come away from
similar candidates with completely incomparable notes. There's no consistent
record to refer back to later, no institutional memory of what was actually
asked and answered, and no way to compare candidates fairly against each
other when the calls that produced your impressions of them weren't
structured the same way to begin with.

## How HyperDial helps

HyperDial runs structured screening calls that ask the same core questions
and capture the same signals every time, regardless of which recruiter — or
the AI itself — handles the call. Every conversation becomes a searchable,
comparable record instead of disappearing into a recruiter's personal notes
or memory the moment the call ends.

The Agent Intelligence Process also surfaces what your strongest recruiters
do differently when a screening call uncovers something important — the
follow-up questions that reveal whether a candidate is actually a fit — and
makes those questioning patterns available across the whole team, so
screening quality doesn't depend entirely on which recruiter happens to take
the call.

## What changes

Every screening call adds to an institutional memory your team can actually
search and compare, instead of disappearing the moment the call ends.
Candidate evaluation stops depending on which recruiter happened to ask what.`,
  },
];
