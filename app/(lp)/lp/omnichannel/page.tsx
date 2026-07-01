import type { Metadata } from "next";
import { LpHeader } from "@/components/lp/lp-header";
import { LpHero } from "@/components/lp/lp-hero";
import { LpProblem } from "@/components/lp/lp-problem";
import { LpHowItWorks } from "@/components/lp/lp-how-it-works";
import { AopLoop } from "@/components/lp/aop-loop";
import { LpDemoForm } from "@/components/lp/lp-demo-form";

export const metadata: Metadata = {
  title: "Omnichannel AI Support Platform | HyperDial",
  description:
    "Voice, chat, email, social, and ticketing — unified under one AOP-powered platform that learns continuously from your team.",
  robots: { index: false, follow: false },
};

const problems = [
  {
    icon: "🧩",
    text: "You're running support across 5 different tools — Zendesk, Intercom, a phone system, social DMs, and email. None of them talk to each other.",
  },
  {
    icon: "👤",
    text: "Your agents switch between tabs all day. No single view of the customer. Same issue, solved three different ways by three different people.",
  },
  {
    icon: "🔌",
    text: "Every AI you've tried is smart on one channel but useless on another. Point solutions that don't compound.",
  },
];

const steps = [
  {
    number: "1",
    title: "Connect all your channels",
    description:
      "Voice, chat, email, social, and ticketing — all piped into one platform. Integrates with your existing stack.",
  },
  {
    number: "2",
    title: "One AI brain handles everything",
    description:
      "A single intelligence layer responds consistently across every channel. Same answer, same tone, same quality — everywhere.",
  },
  {
    number: "3",
    title: "AOP compounds across every interaction",
    description:
      "Every conversation on every channel feeds the learning loop. The more you use it, the smarter it gets — across all of them.",
  },
];

const channels = [
  { icon: "📞", label: "Voice" },
  { icon: "💬", label: "Live Chat" },
  { icon: "📧", label: "Email" },
  { icon: "📱", label: "Social DMs" },
  { icon: "🎫", label: "Ticketing" },
  { icon: "🔗", label: "Integrations" },
];

export default function OmnichannelLp() {
  return (
    <>
      <LpHeader />

      <LpHero
        eyebrow="Omnichannel AI Platform"
        headline="One AI brain. Every channel. Gets smarter every day."
        subhead="Voice, chat, email, social, and ticketing — unified under one AOP-powered platform. Replace the patchwork of tools your team is duct-taping together, and run support from a single intelligent system."
        ctaLabel="Book a Demo"
      />

      <LpProblem points={problems} />

      {/* Channels grid */}
      <section className="py-14 bg-white border-b border-line">
        <div className="wrap max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted mb-8">Everything your team touches, in one place</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {channels.map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 rounded-xl border border-line bg-surface p-4">
                <span className="text-2xl">{icon}</span>
                <span className="text-xs font-medium text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              "You're running support across multiple tools and losing context between channels",
              "You want one platform to handle voice, chat, email, and social — with one AI brain",
              "You've outgrown point solutions and need something that scales with your business",
              "You want AI that learns continuously, not a bot you configure once and hope for the best",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                <span className="mt-0.5 text-brand font-bold">✓</span>
                <p className="text-sm text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest note */}
      <section className="py-10 bg-surface border-b border-line">
        <div className="wrap max-w-2xl mx-auto text-center">
          <p className="text-sm text-muted italic leading-relaxed">
            &ldquo;Setting this up takes 2 weeks, not 2 hours. But once it&rsquo;s running, you won&rsquo;t need anything else.&rdquo;
          </p>
          <p className="mt-2 text-xs text-faint">— HyperDial founding team</p>
        </div>
      </section>

      {/* Book a Demo */}
      <section id="book-demo" className="py-20 bg-surface">
        <div className="wrap max-w-xl mx-auto text-center mb-10">
          <p className="eyebrow mb-3">Book a Demo</p>
          <h2 className="font-display text-3xl font-semibold text-ink mb-3">
            See the full platform live
          </h2>
          <p className="text-muted">
            20 minutes with our founding team. We&rsquo;ll show you exactly how the platform works across all channels — and what it would look like for your specific stack.
          </p>
        </div>
        <LpDemoForm source="lp_omni" />
      </section>

      <footer className="border-t border-line py-6 text-center text-xs text-faint bg-white">
        © {new Date().getFullYear()} HyperDial · <a href="/privacy" className="hover:text-brand">Privacy</a> · <a href="/terms" className="hover:text-brand">Terms</a>
      </footer>
    </>
  );
}
