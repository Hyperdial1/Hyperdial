import type { Metadata } from "next";
import { LpHeader } from "@/components/lp/lp-header";
import { LpHero } from "@/components/lp/lp-hero";
import { LpProblem } from "@/components/lp/lp-problem";
import { LpHowItWorks } from "@/components/lp/lp-how-it-works";
import { AopLoop } from "@/components/lp/aop-loop";
import { LpDemoForm } from "@/components/lp/lp-demo-form";

export const metadata: Metadata = {
  title: "AI Voice Agent that Learns | HyperDial",
  description:
    "HyperDial's AI voice agent handles inbound and outbound calls — and gets smarter from every conversation your best agents resolve.",
  robots: { index: false, follow: false },
};

const problems = [
  {
    icon: "📞",
    text: "Your phones ring 400 times a day. Your team can handle 200. The rest go to voicemail — and never come back.",
  },
  {
    icon: "🤖",
    text: "You tried an IVR. Customers hated it. Press 1 for frustration, press 2 to repeat the same question to a human.",
  },
  {
    icon: "📉",
    text: "Your last AI voice tool sounded robotic, gave wrong answers, and got stale the moment it shipped.",
  },
];

const steps = [
  {
    number: "1",
    title: "Connect your phone system",
    description:
      "HyperDial integrates with your existing telephony stack in days — no rip-and-replace required.",
  },
  {
    number: "2",
    title: "AI handles calls instantly",
    description:
      "Inbound queries answered, outbound follow-ups placed. Sounds natural, stays on-brand, escalates when needed.",
  },
  {
    number: "3",
    title: "AOP learns from every handoff",
    description:
      "Every time a human agent resolves something the AI couldn't, the AOP layer studies it and gets better.",
  },
];

export default function VoiceAgentLp() {
  return (
    <>
      <LpHeader />

      <LpHero
        eyebrow="AI Voice Agent + AOP Layer"
        headline="A voice agent that learns from your best rep — on every single call."
        subhead="HyperDial handles inbound and outbound calls, then uses the AOP layer to get smarter from every conversation your human agents resolve. No stale scripts. No robotic answers. Compounding intelligence."
        ctaLabel="Book a Demo"
      />

      <LpProblem points={problems} />

      <LpHowItWorks steps={steps} />

      <AopLoop />

      {/* Who it's for */}
      <section className="py-16 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold text-ink mb-8">
            This is built for you if…
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "You're handling 500+ calls a month and struggling to staff for it",
              "You've tried IVR or chatbots and your customers pushed back",
              "You want AI that sounds human and stays current automatically",
              "You're in insurance, lending, healthcare, collections, or e-commerce",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                <span className="mt-0.5 text-brand font-bold">✓</span>
                <p className="text-sm text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Demo */}
      <section id="book-demo" className="py-20 bg-surface">
        <div className="wrap max-w-xl mx-auto text-center mb-10">
          <p className="eyebrow mb-3">Book a Demo</p>
          <h2 className="font-display text-3xl font-semibold text-ink mb-3">
            See the voice agent live
          </h2>
          <p className="text-muted">
            20 minutes with our founding team. We&rsquo;ll show you the AOP loop in action on a real call scenario from your industry.
          </p>
        </div>
        <LpDemoForm source="lp_voice" />
      </section>

      <footer className="border-t border-line py-6 text-center text-xs text-faint bg-white">
        © {new Date().getFullYear()} HyperDial · <a href="/privacy" className="hover:text-brand">Privacy</a> · <a href="/terms" className="hover:text-brand">Terms</a>
      </footer>
    </>
  );
}
