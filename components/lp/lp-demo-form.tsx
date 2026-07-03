"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/deepak-hyperdial/30min";

const PLATFORMS = [
  "WhatsApp", "Instagram", "Facebook", "Email", "Live Chat",
  "Ticketing (Zendesk / Freshdesk)", "CRM (Salesforce / HubSpot)",
  "SMS", "Twitter / X", "Other",
];

const COUNTRIES = [
  "India", "USA", "UK", "UAE", "Canada", "Australia",
  "Singapore", "South Africa", "Other",
];

export type LpVariant = "voice" | "support" | "omni";

interface LpDemoFormProps {
  source: string;
  variant: LpVariant;
  inPopup?: boolean;
}

type Phase = "form" | "calendar" | "booked";

export function LpDemoForm({ source, variant, inPopup = false }: LpDemoFormProps) {
  const [phase, setPhase] = useState<Phase>("form");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [calUrl, setCalUrl] = useState("");
  const submittingRef = useRef(false);

  // Listen for Calendly booking confirmation
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.event === "calendly.event_scheduled") {
        setPhase("booked");
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    setStatus("sending");
    setError("");

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    // Build full name for Calendly pre-fill
    const fullName = `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim();
    const email = (data.work_email as string) ?? "";

    // Handle multi-select platforms as array
    const platforms = fd.getAll("platforms");
    const payload = { ...data, platforms, source, name: fullName };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");

      // Build Calendly URL with pre-filled fields
      const params = new URLSearchParams({ name: fullName, email });
      setCalUrl(`${CALENDLY_URL}?${params.toString()}`);
      setPhase("calendar");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      submittingRef.current = false;
    }
  }

  // ── Booked confirmation ──────────────────────────────────────────
  if (phase === "booked") {
    return (
      <div className="space-y-4 py-4 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white text-2xl shadow-lift">
          ✓
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-ink">You&rsquo;re booked in!</h3>
          <p className="mt-1 text-sm text-muted">
            A Google Meet invite is on its way to your inbox. See you soon.
          </p>
        </div>
      </div>
    );
  }

  // ── Calendly embed ───────────────────────────────────────────────
  if (phase === "calendar") {
    return (
      <div className="space-y-3">
        <div className="rounded-xl bg-brand/5 border border-brand/20 p-4 text-center">
          <p className="text-sm font-semibold text-ink">Details saved — now pick a time</p>
          <p className="text-xs text-muted mt-0.5">Your name and email are pre-filled below.</p>
        </div>
        <div className="rounded-xl border border-line overflow-hidden" style={{ height: 620 }}>
          <iframe
            src={calUrl}
            className="w-full h-full"
            frameBorder="0"
            title="Pick a time with HyperDial"
          />
        </div>
        <button
          onClick={() => setPhase("booked")}
          className="w-full text-center text-xs text-muted underline underline-offset-2 hover:text-brand transition-colors"
        >
          Already booked? Click here →
        </button>
      </div>
    );
  }

  // ── Form ─────────────────────────────────────────────────────────
  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${inPopup ? "" : "card p-7 max-w-lg mx-auto"}`}>

      {/* Name row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="first_name" label="First name" placeholder="First" required />
        <Field name="last_name" label="Last name" placeholder="Last" required />
      </div>

      {/* Contact row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="work_email" label="Work email" type="email" placeholder="you@company.com" required />
        <Field name="phone" label="Phone" type="tel" placeholder="+91 ..." required />
      </div>

      {/* Voice-specific fields */}
      {variant === "voice" && (
        <>
          <Field name="end_users" label="How many end users?" type="number" placeholder="e.g. 500" required />
          <MultiSelect name="countries" label="Which countries will you be calling?" options={COUNTRIES} />
        </>
      )}

      {/* Support-specific fields */}
      {variant === "support" && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="team_size" label="Support agents on team" type="number" placeholder="e.g. 20" required />
            <Field name="monthly_tickets" label="Monthly ticket volume" placeholder="e.g. 5,000" required />
          </div>
        </>
      )}

      {/* Omnichannel-specific fields */}
      {variant === "omni" && (
        <>
          <Field name="end_users" label="How many users?" type="number" placeholder="e.g. 1,000" required />
          <MultiSelect name="platforms" label="Which platforms do you want to integrate?" options={PLATFORMS} />
        </>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full py-3 text-base disabled:opacity-60"
      >
        {status === "sending" ? "Saving…" : "Book My Demo — Pick a Time →"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-600">{error}</p>
      )}

      <p className="text-center text-xs text-faint">
        No commitment. 30-minute walkthrough with the founding team.
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

function MultiSelect({ name, label, options }: { name: string; label: string; options: string[] }) {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(opt: string) {
    setSelected(prev =>
      prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]
    );
  }

  return (
    <div>
      <label className="text-sm font-medium text-ink">{label}</label>
      <p className="text-xs text-muted mb-2 mt-0.5">Select all that apply</p>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <label key={opt} className="cursor-pointer">
            <input
              type="checkbox"
              name={name}
              value={opt}
              checked={selected.includes(opt)}
              onChange={() => toggle(opt)}
              className="sr-only"
            />
            <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              selected.includes(opt)
                ? "border-brand bg-brand/10 text-brand"
                : "border-line bg-white text-muted hover:border-brand/50"
            }`}>
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
