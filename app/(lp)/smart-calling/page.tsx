import type { Metadata } from "next";
import { LpHeader } from "@/components/lp/lp-header";
import { LpHero } from "@/components/lp/lp-hero";
import { LpProblem } from "@/components/lp/lp-problem";
import { LpHowItWorks } from "@/components/lp/lp-how-it-works";
import { LpPopup } from "@/components/lp/lp-popup";
import { LpFloatingCta } from "@/components/lp/lp-floating-cta";
import { LpInlineFormSection } from "@/components/lp/lp-inline-form-section";

export const metadata: Metadata = {
  title: "AI-Powered Business Phone System | HyperDial",
  description:
    "HyperDial is a cloud business phone system with AI built in — calling, routing, and follow-ups handled automatically. Live in minutes, not months.",
  robots: { index: false, follow: false },
};

const problems = [
  {
    icon: "📞",
    text: "Every missed call is a lead calling your competitor next. And most business phone systems make it easy to miss calls.",
  },
  {
    icon: "🔀",
    text: "Multiple numbers, forwarding rules, voicemail boxes — managing your phone setup shouldn't need a full-time ops person.",
  },
  {
    icon: "📝",
    text: "Your team is manually logging calls, chasing follow-ups, and losing context the moment someone hangs up.",
  },
];

const steps = [
  {
    number: "1",
    title: "Get your number live in minutes",
    description:
      "Port your existing number or get a new one. No hardware, no IT ticket, no waiting on a vendor.",
  },
  {
    number: "2",
    title: "AI answers, routes, and follows up",
    description:
      "Inbound calls answered instantly and routed to the right person. Outbound follow-ups placed automatically — nothing falls through.",
  },
  {
    number: "3",
    title: "Every call logged, automatically",
    description:
      "Transcripts, call notes, and follow-up tasks generated the moment a call ends. No manual logging, ever.",
  },
];

export default function SmartCallingLp() {
  return (
    <>
      <LpPopup source="lp_smart_calling" variant="voice" />
      <LpFloatingCta label="Book a Demo" />

      <LpHeader />

      <LpHero
        eyebrow="Cloud Business Phone System"
        headline="More calls answered. Zero leads lost."
        subhead="HyperDial is an AI-powered business phone system for calling, routing, and follow-ups. Set up in minutes, works with your existing number, and makes sure no call falls through the cracks."
        ctaLabel="Get Started — Free"
      />

      <LpProblem points={problems} />

      {/* Stats strip */}
      <section className="py-12 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto">
          <dl className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: "< 5 min", label: "to get your number live" },
              { stat: "99.9%", label: "uptime, every call connects" },
              { stat: "0", label: "missed calls with auto-routing" },
            ].map(({ stat, label }, i) => (
              <div key={i} className="flex flex-col gap-1">
                <dt className="font-display text-4xl font-bold text-brand">{stat}</dt>
                <dd className="text-sm text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <LpHowItWorks steps={steps} />

      <LpInlineFormSection
        source="lp_smart_calling"
        variant="voice"
        eyebrow="Book a Demo"
        title="See your number live in 20 minutes"
        subtitle="No commitment, no sales pitch — we'll set up a working number on the call and show you exactly how routing and follow-ups work."
      />

      <section className="py-16 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold text-ink mb-8">
            This is built for you if…
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "You're juggling multiple numbers, extensions, or forwarding rules",
              "Missed calls are costing you leads and you don't know why",
              "You want call automation and follow-ups without hiring more ops",
              "You need a phone system that's live in minutes, not months",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                <span className="mt-0.5 text-brand font-bold">✓</span>
                <p className="text-sm text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-6 text-center text-xs text-faint bg-white">
        © {new Date().getFullYear()} HyperDial ·{" "}
        <a href="/privacy" className="hover:text-brand">Privacy</a> ·{" "}
        <a href="/terms" className="hover:text-brand">Terms</a>
      </footer>
    </>
  );
}
