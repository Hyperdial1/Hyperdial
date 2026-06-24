import type { Metadata } from "next";
import { Article } from "@/components/article";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How HyperDial collects, uses, and protects personal information.",
};

// NOTE FOR THE OWNER:
// This is a solid starting template tuned for a voice-AI product that records
// and transcribes calls. Replace every [BRACKETED] value and have a lawyer
// review it before launch. Jurisdiction assumed: New Zealand (Privacy Act 2020),
// with GDPR-style rights for any EU/UK callers.
const body = `_Last updated: [DATE]_

This Privacy Policy explains how **[LEGAL ENTITY NAME]** ("HyperDial", "we", "us")
collects, uses, discloses, and protects personal information when you use our
website and voice AI services (the "Services").

## Who we are

HyperDial is operated by [LEGAL ENTITY NAME], [COMPANY NUMBER], registered at
[REGISTERED ADDRESS]. For any privacy question, contact us at
**privacy@hyperdial.io**.

## Information we collect

**Information you give us.** When you request a demo or contact us, we collect
your name, work email, company, phone number, industry, call volume, and any
details you include in a message.

**Call data.** When the Services handle a phone call, we may process call audio,
transcripts, caller phone numbers, and related metadata on behalf of our
business customers. For calls handled for a customer, that customer is the data
controller and HyperDial acts as a processor under their instructions.

**Technical data.** Standard website analytics such as device, browser, and
pages visited.

## Call recording and consent

The Services record and transcribe calls. Where you are our business customer,
**you are responsible for obtaining any consent or providing any notice required
by law** in the jurisdictions where your calls take place (for example,
one-party or two-party consent rules). We provide configuration to support
notices and recording controls.

## How we use information

- To respond to demo requests and provide the Services
- To operate, secure, and improve the Services
- To extract and improve conversation patterns (the Agent Intelligence Process), within the
  scope of our customer agreements
- To comply with legal obligations

We do **not** sell personal information.

## Sub-processors

We use trusted third parties to deliver the Services, which may include cloud
hosting, telephony, speech-to-text, and large-language-model providers, and
email delivery. A current list is available on request at privacy@hyperdial.io.

## Data retention

We keep personal information only as long as needed for the purposes above or as
required by law. Call recordings and transcripts are retained per the
configuration agreed with each business customer. Demo-request details are kept
for up to [RETENTION PERIOD] unless you ask us to delete them sooner.

## Your rights

Depending on where you live, you may have the right to access, correct, delete,
or port your information, and to object to or restrict certain processing. To
exercise these rights, email **privacy@hyperdial.io**. New Zealand individuals
may also contact the Office of the Privacy Commissioner.

## Security

We use technical and organisational measures appropriate to the sensitivity of
the data, including encryption in transit. No system is perfectly secure, and we
cannot guarantee absolute security.

## International transfers

Your information may be processed in countries other than your own. Where it is,
we take steps to ensure an appropriate level of protection.

## Changes

We may update this policy from time to time. Material changes will be posted
here with an updated date.

## Contact

[LEGAL ENTITY NAME], [REGISTERED ADDRESS] — privacy@hyperdial.io`;

export default function PrivacyPage() {
  return (
    <div className="wrap max-w-2xl py-16">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
        Privacy policy
      </h1>
      <div className="mt-4 rounded-lg border border-teal/30 bg-teal/5 p-4 text-sm text-muted">
        Template starting point — replace the bracketed values and have a lawyer
        review before launch. Tuned for a product that records and transcribes
        calls.
      </div>
      <hr className="my-8 border-line" />
      <Article body={body} />
    </div>
  );
}
