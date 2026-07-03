import type { Metadata } from "next";
import { LpHeader } from "@/components/lp/lp-header";
import { LpHero } from "@/components/lp/lp-hero";
import { LpProblem } from "@/components/lp/lp-problem";
import { LpHowItWorks } from "@/components/lp/lp-how-it-works";
import { AopLoop } from "@/components/lp/aop-loop";
import { LpPopup } from "@/components/lp/lp-popup";
import { LpFloatingCta } from "@/components/lp/lp-floating-cta";

export const metadata: Metadata = {
  title: "Automate Customer Support | HyperDial",
  description:
    "HyperDial automates the repetitive 80% of your support workload — so your team can focus on the conversations that actually need a human.",
  robots: { index: false, follow: false },
};

const problems = [
  {
    icon: "🔁",
    text: "Your team answers the same 10 questions 50 times a day. That's not support — that's wasted time that could be automated.",
  },
  {
    icon: "🐢",
    text: "Response times are slipping. SLAs are breaking. CSAT is falling. And hiring more agents isn't fixing it fast enough.",
  },
  {
    icon: "💀",
    text: "You've tried a chatbot. It gave wrong answers, frustrated customers, and got switched off within a month.",
  },
];

const steps = [
  {
    number: "1",
    title: "Connect your support channels",
    description:
      "Chat, email, social, ticketing — HyperDial plugs into what you already use. No migration, no disruption.",
  },
  {
    number: "2",
    title: "Automate the repetitive 80%",
    description:
      "FAQs, order status, refunds, onboarding — resolved instantly and accurately, 24/7, without a human touch.",
  },
  {
    number: "3",
    title: "Gets smarter from your best agents",
    description:
      "Every time a human resolves something new, HyperDial's AOP layer captures it and handles it automatically next time.",
  },
];

export default function AutomateSupportLp() {
  return (
    <>
      <LpPopup source="lp_automate_support" variant="support" />
      <LpFloatingCta label="Book a Demo" />

      <LpHeader />

      <LpHero
        eyebrow="Customer Support Automation"
        headline="Automate the 80% so your team can focus on the 20% that matters."
        subhead="HyperDial handles your repeat tickets automatically — across chat, email, and social — and learns from every resolution your best agents make. No static scripts. No retraining. Just support that gets better every day."
        ctaLabel="See How It Works — Free"
      />

      <LpProblem points={problems} />

      {/* Stats strip */}
      <section className="py-12 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto">
          <dl className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: "80%", label: "of tickets resolved without human touch" },
              { stat: "60%", label: "improvement in agent productivity" },
              { stat: "< 2 days", label: "average time to go live" },
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

      <AopLoop />

      <section className="py-16 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold text-ink mb-8">
            This is built for you if…
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Your support team spends most of their day answering the same questions repeatedly",
              "You're running a helpdesk on chat, email, or social and response times are slipping",
              "You've tried a chatbot before and it failed because it couldn't learn from your team",
              "You want automation that improves continuously — not a static bot you deploy and forget",
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
