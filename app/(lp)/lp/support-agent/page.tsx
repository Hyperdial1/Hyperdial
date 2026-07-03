import type { Metadata } from "next";
import { LpHeader } from "@/components/lp/lp-header";
import { LpHero } from "@/components/lp/lp-hero";
import { LpProblem } from "@/components/lp/lp-problem";
import { LpHowItWorks } from "@/components/lp/lp-how-it-works";
import { AopLoop } from "@/components/lp/aop-loop";
import { LpPopup } from "@/components/lp/lp-popup";
import { LpFloatingCta } from "@/components/lp/lp-floating-cta";

export const metadata: Metadata = {
  title: "AI Support Agent for Chat, Email & Social | HyperDial",
  description:
    "HyperDial's AI support agent handles repeat tickets across chat, email, and social — and gets smarter every time a human agent resolves something new.",
  robots: { index: false, follow: false },
};

const problems = [
  {
    icon: "🔁",
    text: "Your team writes the same answer to the same 10 questions, 50 times a day. That's not support — that's copy-paste.",
  },
  {
    icon: "🐢",
    text: "Response times are slipping. SLAs are breaking. CSAT is falling. And you can't hire your way out of it fast enough.",
  },
  {
    icon: "💀",
    text: "Your last chatbot gave wrong answers, damaged customer trust, and got turned off after a month.",
  },
];

const steps = [
  {
    number: "1",
    title: "Connect your channels",
    description:
      "Plug HyperDial into your existing chat, email, and social tools. No rip-and-replace — works alongside what you have.",
  },
  {
    number: "2",
    title: "AI handles repeat queries instantly",
    description:
      "Order status, refunds, FAQs, onboarding steps — resolved automatically, 24/7, without a human touch.",
  },
  {
    number: "3",
    title: "AOP learns from your best agents",
    description:
      "Every time a human resolves something new, the AOP layer studies it and adds it to the playbook — automatically.",
  },
];

export default function SupportAgentLp() {
  const schedulerUrl = process.env.NEXT_PUBLIC_GCAL_SCHEDULE_URL;
  return (
    <>
      <LpPopup source="lp_support" variant="support" />
      <LpFloatingCta label="Book a Demo" />

      <LpHeader />

      <LpHero
        eyebrow="AI Support Agent"
        headline="Handles the tickets your team writes the same answer to, every day."
        subhead="HyperDial's AI support agent works across chat, email, and social. It learns from your best agents' resolutions and handles repeat queries instantly — so your team can focus on the conversations that actually need a human."
      />

      <LpProblem points={problems} />

      <LpHowItWorks steps={steps} />

      <AopLoop />

      <section className="py-12 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto">
          <dl className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: "68%", label: "of tickets handled without human touch" },
              { stat: "< 2 days", label: "average time to go live" },
              { stat: "24/7", label: "coverage across every channel" },
            ].map(({ stat, label }, i) => (
              <div key={i} className="flex flex-col gap-1">
                <dt className="font-display text-4xl font-bold text-brand">{stat}</dt>
                <dd className="text-sm text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 bg-surface border-b border-line">
        <div className="wrap max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold text-ink mb-8">
            This is built for you if…
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "You run a SaaS or e-commerce business with a high volume of repeat support tickets",
              "Your team is spending most of their time on questions that could be answered automatically",
              "You've tried chatbots before and they failed — because they couldn't learn",
              "You want AI that improves continuously, not a static bot you deploy and forget",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4">
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
