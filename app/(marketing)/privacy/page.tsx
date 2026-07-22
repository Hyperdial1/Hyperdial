import type { Metadata } from "next";
import { Article } from "@/components/article";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How HyperDial collects, uses, and protects personal information.",
};

const body = `_Last updated: June 29, 2026_

This Privacy Policy explains how **Hyperdial** ("HyperDial", "we", "us", "our")
collects, uses, discloses, and protects personal information when you visit
our website, request a demo, or use our AI customer service platform —
including our AI Voice Agents, AI Chat Agents, omnichannel customer support,
call center software, WhatsApp integration, email support, social media
support, and analytics and reporting features (together, the "Services").

This policy is written to meet the requirements of the EU/UK General Data
Protection Regulation ("GDPR"), the California Consumer Privacy Act as
amended by the California Privacy Rights Act ("CCPA/CPRA"), and India's
Digital Personal Data Protection Act, reflecting the fact that we serve
customers in India, the United States, the European Union, and globally.

## 1. Who we are

HyperDial is operated by **Hyperdial**, registered in Ahmedabad, India. For
any privacy question, request,
or complaint, contact us at **deepak@hyperdial.io**.

Where HyperDial processes personal data on behalf of a business customer —
for example, call recordings or chat transcripts generated when that
customer's end users contact them — HyperDial acts as a **data processor**
(or "service provider" under the CCPA), and our business customer is the
**data controller**. This policy describes our practices in both roles; where
a distinction matters, it says so explicitly.

## 2. Information we collect

**Information you give us directly.** When you request a demo, book a call,
or contact us, we collect your name, work email, phone number, company name,
job title, company size, industry, and any details you choose to share about
what you're looking to automate.

**Customer contact data.** When a business customer uses the Services to
support their own customers, we process the personal data of those end
users on the customer's behalf — names, contact details, and the content of
their support interactions.

**Call recordings and voice data.** Where call recording is enabled by a
business customer, the Services capture and process **call audio recordings**
and the associated metadata (call duration, time, routing information).
**Call recording is configurable per customer and per deployment** — it is
not on by default for every customer, and our business customers are
responsible for configuring it in line with the consent rules in section 7.

**Chat transcripts and support tickets.** Conversations handled over chat,
email, WhatsApp, SMS, or social channels are logged as transcripts, alongside
any support tickets created from them.

**AI processing data.** To generate responses, the Services send relevant
conversation content to third-party AI model providers (see section 5) and
process it through our own Agent Intelligence Processing (AIP) — the system that
observes how human agents resolve conversations and turns successful
resolutions into approved patterns the AI can reuse. Section 6 explains this
in more detail.

**Device and technical data.** Standard web analytics: IP address, device and
browser type, pages visited, and cookies — see section 9.

## 3. How we use information

- To provide, operate, and improve the Services
- To respond to demo requests, set up new customers, and provide support
- To train and improve our own Agent Intelligence Processing (AIP) models on a
  customer's own data, within the scope of that customer's agreement with us
  (see section 6 for how this works and what it does *not* include)
- To detect, prevent, and investigate fraud, abuse, or security incidents
- To comply with legal obligations, and to enforce our agreements

We do **not** sell personal information, and we do not share it with third
parties for their own independent marketing purposes.

## 4. Legal bases for processing (GDPR)

Where GDPR applies, we rely on the following legal bases: **performance of a
contract** (providing the Services to our business customers and their
users), **legitimate interests** (securing and improving the Services,
preventing fraud), **consent** (where required — for example, certain
call-recording or marketing-cookie scenarios), and **legal obligation**
(tax, accounting, and regulatory recordkeeping).

## 5. Sub-processors and integrations

We rely on a limited set of trusted sub-processors to deliver the Services.
As of the date above, this includes:

- **AI model providers** — OpenAI, Anthropic, and Google (Gemini) — to
  generate AI responses and power Agent Intelligence Processing (AIP)
- **Telephony** — Twilio, for call routing, recording, and transcription
- **Messaging** — Meta (WhatsApp Business Platform), for WhatsApp support
- **Cloud hosting and infrastructure** — AWS, GCP, and/or Azure, depending on
  deployment region
- **Payments** — Stripe and/or Razorpay, for billing
- **Analytics** — Google Analytics (GA4) and Mixpanel
- **CRM and workflow tools** — HubSpot and Salesforce, where a customer
  connects these integrations themselves

Each sub-processor is bound by a data processing agreement requiring
protections at least as strong as those in this policy. A current,
itemised list is available on request at **deepak@hyperdial.io**.

## 6. How Agent Intelligence Processing (AIP) uses your data

Agent Intelligence Processing (AIP) is the system that makes HyperDial's AI get
better over time. It works like this: when a human agent resolves a
conversation the AI couldn't yet handle, our system extracts the pattern of
that resolution and turns it into a candidate the AI can use on similar
future conversations — after a manager at that business approves it.

**This learning happens within a single customer's own data.** Patterns
learned from one business customer's conversations are not applied to, or
shared with, any other business customer, and we do not use a customer's
data to train shared or general-purpose models on their behalf. We also do
**not** allow third-party AI providers we integrate with (OpenAI, Anthropic,
Google) to use data submitted through HyperDial to train their own
general-purpose models, where their commercial terms allow us to disable
this.

## 7. Call recording and consent

The Services can record and transcribe calls. **Where call recording is
enabled, our business customer — not HyperDial — is responsible for
providing any notice and obtaining any consent required by law** in the
jurisdictions where their calls take place, including one-party and
two-party consent rules that vary by region. We provide configuration
options to support recording notices, opt-outs, and consent capture, but
the legal responsibility to use them correctly sits with our business
customer as the data controller for their own end users' calls.

## 8. Data retention

- **Demo requests and sales inquiries** — kept for up to 1 year, unless you
  ask us to delete it sooner.
- **Call recordings and transcripts** — retained for 1 year by default, or as
  otherwise configured in the business customer's agreement with us.
- **Chat transcripts and support tickets** — retained for 1 year by default,
  or as otherwise configured in the business customer's agreement with us.
- **Account and billing records** — retained as required by applicable tax
  and accounting law.

We delete or anonymise personal data once it is no longer needed for the
purposes described in this policy, unless a longer period is required by
law or by a specific customer agreement.

## 9. Cookies and tracking

Our website uses cookies and similar technologies for: (a) essential site
functionality, (b) analytics (Google Analytics, Mixpanel) to understand how
visitors use our site, and (c) where applicable, marketing attribution. You
can control non-essential cookies through your browser settings or any
cookie banner presented on our site. Disabling essential cookies may affect
site functionality.

## 10. Your rights

Depending on where you live, you may have some or all of the following
rights: to access the personal data we hold about you, to correct it, to
delete it, to receive a portable copy of it, and to object to or restrict
certain kinds of processing.

- **EU/UK (GDPR):** the rights above, plus the right to lodge a complaint
  with your local data protection authority.
- **California (CCPA/CPRA):** the right to know, delete, and correct your
  personal information, to opt out of "sale" or "sharing" (we do not sell or
  share personal information as those terms are defined), and to non
  discrimination for exercising your rights.
- **India (DPDPA):** the right to access, correct, and erase your personal
  data, and to nominate another individual to exercise your rights in the
  event of death or incapacity.

To exercise any of these rights, email **deepak@hyperdial.io**. If you are
the end user of one of our business customers (for example, you called or
messaged a company that uses HyperDial), the fastest path is usually to
contact that business directly, since they control your data as set out in
section 2.

## 11. Children's privacy

The Services are intended for business use and are not directed to children.
We do not knowingly collect personal information from individuals under 16.
If you believe a child has provided us with personal information, contact us
at **deepak@hyperdial.io** and we will delete it.

## 12. Security

We use technical and organisational measures appropriate to the sensitivity
of the data we handle, including encryption in transit and at rest, access
controls, and regular review of our sub-processors' security practices. No
system is perfectly secure, and we cannot guarantee absolute security, but we
work to minimise risk and to respond quickly if something goes wrong.

## 13. International data transfers

We and our sub-processors may process personal data in countries other than
where you are located, including the United States, the European Union, and
India. Where we transfer personal data out of the EU/UK, we rely on
appropriate safeguards such as Standard Contractual Clauses or an applicable
adequacy decision.

## 14. Changes to this policy

We may update this policy from time to time to reflect changes in our
practices or in the law. Material changes will be posted here with an
updated date at the top of the page.

## 15. Contact us

**Hyperdial**
Ahmedabad, India
**deepak@hyperdial.io**`;

export default function PrivacyPage() {
  return (
    <div className="wrap max-w-2xl py-16">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
        Privacy policy
      </h1>
      <div className="mt-4 rounded-lg border border-teal/30 bg-teal/5 p-4 text-sm text-muted">
        This policy reflects HyperDial&rsquo;s current practices and the legal
        and integration details provided as of the date above. Have it
        reviewed by a qualified lawyer in your jurisdiction before relying on
        it, and update the bracketed publish date when you go live.
      </div>
      <hr className="my-8 border-line" />
      <Article body={body} />
    </div>
  );
}
