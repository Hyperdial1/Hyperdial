import Link from "next/link";
import type { Metadata } from "next";
import { ModuleFaq } from "@/components/module-faq";

export const metadata: Metadata = {
  title: "Voice Models",
  description:
    "The AI voice your callers talk to — natural, multilingual by default, and fully custom on enterprise plans.",
};

const pipeline = [
  { n: "1", title: "Listen", body: "Speech recognition converts what the caller says into text in real time." },
  { n: "2", title: "Understand", body: "The model interprets intent — not just words, but what the caller is actually trying to get done." },
  { n: "3", title: "Respond", body: "A response is generated grounded in your connected knowledge base and the patterns AIP has learned from your team." },
  { n: "4", title: "Speak", body: "Text becomes voice through a model tuned for natural pacing and tone, not a flat IVR read-out." },
];

const features = [
  { name: "Natural AI voices", icon: "🗣️", body: "Voices built for real conversation, not a robotic IVR menu — tuned for tone and pacing that doesn't tire callers out." },
  { name: "Multilingual by default", icon: "🌐", body: "Core language coverage on every plan, expanding to 60+ languages and full customization on Scale." },
  { name: "Custom brand voice", icon: "🎚️", body: "Enterprise plans can commission a fully custom AI voice matched to your brand." },
  { name: "Consistent across channels", icon: "🔁", body: "The same voice model and knowledge base power your phone lines, so tone stays consistent whether a call is answered by AI or handed to a human." },
];

const faqs = [
  { q: "Does the AI voice sound robotic?", a: "No — the models are tuned specifically for conversational pacing and tone, which is a large part of why callers stay on the line instead of hanging up on an obvious bot." },
  { q: "Can we use our own custom voice?", a: "Yes, on Scale — enterprise plans can commission a fully custom AI voice matched to your brand." },
  { q: "What languages are supported?", a: "Core language coverage ships on every plan. Growth expands that coverage, and Scale supports 60+ languages with custom options." },
  { q: "Does the voice model learn over time?", a: "The voice itself is consistent, but what it says comes from AIP — the patterns your best reps use get folded into how the AI responds, so the conversation quality keeps improving even as the voice stays the same." },
];

export default function VoiceModelsPage() {
  return (
    <div className="wrap py-16">
      <Link href="/product" className="text-sm link-quiet">← Platform</Link>
      <div className="mt-6 max-w-2xl">
        <span className="eyebrow">Module 03</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Voice Models
        </h1>
        <p className="mt-5 text-lg leading-7 text-muted">
          The voice your callers actually talk to — natural enough that
          they forget they&rsquo;re not speaking to a person, until they need one.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/demo" className="btn-primary">Talk to us</Link>
          <Link href="/pricing" className="btn-ghost">See pricing</Link>
        </div>
      </div>

      <section className="mt-16">
        <span className="eyebrow">How it works</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Listen, understand, respond, speak
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pipeline.map((s) => (
            <div key={s.n} className="card p-6">
              <span className="font-display text-sm font-semibold text-brand">{s.n}</span>
              <h3 className="mt-2 font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <span className="eyebrow">What's included</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Voice that matches your brand, not a generic assistant
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.name} className="card p-6">
              <span className="text-2xl" aria-hidden>{f.icon}</span>
              <h3 className="mt-3 font-display text-base font-semibold">{f.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          Common questions
        </h2>
        <div className="mt-8">
          <ModuleFaq items={faqs} />
        </div>
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link href="/demo" className="btn-primary">Talk to us</Link>
        <Link href="/product" className="btn-ghost">← Back to Platform overview</Link>
      </div>
    </div>
  );
}
