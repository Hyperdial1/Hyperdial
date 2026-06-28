import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Book a demo",
  description: "Pick a time straight off the calendar — see HyperDial live in 30 minutes.",
};

const steps = [
  { n: "1", title: "Pick a slot", body: "Choose whatever time works — no back-and-forth." },
  { n: "2", title: "We confirm instantly", body: "You get a calendar invite with a video link right away." },
  { n: "3", title: "See it live", body: "30 minutes, on your real conversations, no slides." },
];

export default function BookADemoPage() {
  const schedulerUrl = process.env.NEXT_PUBLIC_GCAL_SCHEDULE_URL;

  return (
    <div className="bg-deep text-white">
      {/* Scheduler-first hero layout — the opposite emphasis of /demo */}
      <div className="wrap py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand-light justify-center">Book a demo</span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Grab a time. We&rsquo;ll show up.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-7 text-slate-soft">
            Skip the form-first flow — pick a slot straight off the calendar
            and we&rsquo;ll meet you there.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-4 text-center">
          {steps.map((s) => (
            <div key={s.n}>
              <span className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-white/10 font-display text-sm font-semibold text-brand-light">
                {s.n}
              </span>
              <p className="mt-3 text-sm font-medium text-white">{s.title}</p>
              <p className="mt-1 text-xs leading-5 text-slate-soft">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Scheduler — large and central, the visual anchor of this page */}
        <div className="mx-auto mt-12 max-w-3xl">
          {schedulerUrl ? (
            <iframe
              src={schedulerUrl}
              title="Book a HyperDial demo"
              className="h-[680px] w-full rounded-xl2 border border-white/10 bg-white"
              loading="lazy"
            />
          ) : (
            <div className="flex h-[420px] flex-col items-center justify-center rounded-xl2 border border-white/10 bg-deep-800 p-8 text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand/20 text-2xl">📅</span>
              <h3 className="mt-4 font-display text-lg font-semibold">Scheduler not connected yet</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-soft">
                Add your Google Calendar appointment-scheduling link as the
                <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5">NEXT_PUBLIC_GCAL_SCHEDULE_URL</code>
                environment variable in Vercel, then redeploy.
              </p>
            </div>
          )}
        </div>

        {/* Lead details — secondary, below the scheduler, optional context */}
        <div className="mx-auto mt-14 max-w-xl">
          <p className="text-center text-sm text-slate-soft">
            Already booked? Tell us a bit more so the call is useful from minute one — optional.
          </p>
          <div className="mt-6">
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}
