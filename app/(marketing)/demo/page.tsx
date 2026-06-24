import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Talk to us",
  description: "Book a 30-minute HyperDial walkthrough on your real calls.",
};

export default function DemoPage() {
  const schedulerUrl = process.env.NEXT_PUBLIC_GCAL_SCHEDULE_URL;

  return (
    <div className="wrap py-16">
      <div className="max-w-2xl">
        <span className="eyebrow">Talk to us</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
          Let's talk about your support
        </h1>
        <p className="mt-5 text-lg leading-7 text-muted">
          Tell us what you&rsquo;re trying to automate, then pick a time. We&rsquo;ll
          show HyperDial handling your real conversations across voice, chat,
          email, and social.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <li className="flex items-center gap-2"><span className="text-teal-dark">&#10003;</span> 30-minute walkthrough</li>
          <li className="flex items-center gap-2"><span className="text-teal-dark">&#10003;</span> Tested on your real conversations</li>
          <li className="flex items-center gap-2"><span className="text-teal-dark">&#10003;</span> No commitment</li>
        </ul>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 font-display text-lg font-semibold">1. Tell us about you</h2>
          <LeadForm />
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg font-semibold">2. Pick a time</h2>
          {schedulerUrl ? (
            <iframe
              src={schedulerUrl}
              title="Book a HyperDial demo"
              className="h-[640px] w-full rounded-xl2 border border-line bg-white"
              loading="lazy"
            />
          ) : (
            <div className="card flex h-[640px] flex-col items-center justify-center p-8 text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-teal/15 text-2xl">&#128197;</span>
              <h3 className="mt-4 font-display text-lg font-semibold">Scheduler not connected yet</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                Add your Google Calendar appointment-scheduling link as the
                <code className="mx-1 rounded bg-navy/5 px-1.5 py-0.5">NEXT_PUBLIC_GCAL_SCHEDULE_URL</code>
                environment variable in Vercel, then redeploy. Setup steps are in the README.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
