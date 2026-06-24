import type { Metadata } from "next";
import { Article } from "@/components/article";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms that govern use of HyperDial.",
};

const body = `_Last updated: [DATE]_

These Terms govern your access to and use of the HyperDial website and services
provided by **[LEGAL ENTITY NAME]** ("HyperDial", "we", "us"). By using the
Services you agree to these Terms.

## Use of the Services

You may use the Services only in compliance with these Terms and all applicable
laws, including telecommunications and recording-consent laws in the
jurisdictions where you operate.

## Accounts

You are responsible for activity under your account and for keeping your
credentials secure.

## Customer responsibilities

As a business customer, you are responsible for the lawfulness of the calls you
route through the Services, for providing required notices and obtaining
required consents, and for the content of your knowledge base and approved
patterns.

## Acceptable use

You may not use the Services to break the law, infringe others' rights, send
unlawful or deceptive communications, or attempt to disrupt or reverse-engineer
the Services.

## Intellectual property

We retain all rights in the Services. The pattern library generated from your
calls belongs to you as between you and us, subject to your customer agreement.

## Disclaimers

The Services are provided "as is" without warranties of any kind to the maximum
extent permitted by law.

## Limitation of liability

To the maximum extent permitted by law, HyperDial will not be liable for
indirect, incidental, or consequential damages, and our total liability is
limited as set out in your customer agreement.

## Changes

We may update these Terms from time to time; material changes will be posted
here with an updated date.

## Governing law

These Terms are governed by the laws of [JURISDICTION], and disputes are subject
to the courts of [JURISDICTION].

## Contact

[LEGAL ENTITY NAME], [REGISTERED ADDRESS] — legal@hyperdial.io`;

export default function TermsPage() {
  return (
    <div className="wrap max-w-2xl py-16">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
        Terms of service
      </h1>
      <div className="mt-4 rounded-lg border border-teal/30 bg-teal/5 p-4 text-sm text-muted">
        Template starting point — replace the bracketed values and have a lawyer
        review before launch.
      </div>
      <hr className="my-8 border-line" />
      <Article body={body} />
    </div>
  );
}
