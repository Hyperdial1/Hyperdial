"use client";

import { useRef, useState } from "react";

const verticals = [
  "Insurance", "Real estate", "Healthcare", "EdTech",
  "Lending / BFSI", "D2C / E-commerce", "Travel", "Collections",
  "HR / Recruitment", "Other",
];

interface LpDemoFormProps {
  source: string;
  inPopup?: boolean;
  schedulerUrl?: string;
}

export function LpDemoForm({ source, inPopup = false, schedulerUrl }: LpDemoFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");
  const [calReady, setCalReady] = useState(false);
  const submittingRef = useRef(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      submittingRef.current = false;
    }
  }

  if (status === "ok") {
    return (
      <div className="space-y-6">
        {/* Confirmation banner */}
        <div className="rounded-2xl bg-gradient-to-br from-brand/10 to-brand/5 border border-brand/20 p-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white text-xl font-bold shadow-lift">
            ✓
          </div>
          <h3 className="font-display text-lg font-bold text-ink">You&rsquo;re booked in!</h3>
          <p className="mt-1 text-sm text-muted">
            We&rsquo;ll reach out within one business day to confirm your walkthrough.
          </p>
        </div>

        {schedulerUrl ? (
          <div>
            <p className="text-xs font-semibold text-center text-muted uppercase tracking-wider mb-3">
              Or pick a time right now ↓
            </p>
            <div className="relative rounded-xl border border-line overflow-hidden" style={{ height: 500 }}>
              {/* Skeleton loader shown until iframe signals ready */}
              {!calReady && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface">
                  <div className="h-8 w-8 rounded-full border-2 border-brand border-t-transparent animate-spin" />
                  <p className="text-xs text-muted">Loading calendar…</p>
                </div>
              )}
              <iframe
                src={schedulerUrl}
                className="w-full h-full"
                style={{ opacity: calReady ? 1 : 0, transition: "opacity 0.3s" }}
                frameBorder="0"
                title="Book a time with HyperDial"
                onLoad={() => setCalReady(true)}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${inPopup ? "" : "card p-7 max-w-lg mx-auto"}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Full name" placeholder="Your name" required />
        <Field name="work_email" label="Work email" type="email" placeholder="you@company.com" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="company" label="Company" placeholder="Company name" required />
        <Field name="phone" label="Phone" placeholder="+1 ..." />
      </div>
      <Select name="vertical" label="Industry" options={verticals} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full py-3 text-base disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Book My Demo →"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-red-600">{error}</p>
      )}
      <p className="text-center text-xs text-faint">
        No commitment required. 20-minute walkthrough with the founding team.
      </p>
    </form>
  );
}

function Field({ name, label, type = "text", placeholder, required }: {
  name: string; label: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink" htmlFor={name}>{label}</label>
      <input
        id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand"
      />
    </div>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium text-ink" htmlFor={name}>{label}</label>
      <select
        id={name} name={name} defaultValue=""
        className="mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
