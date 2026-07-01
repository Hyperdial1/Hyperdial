"use client";

import { useState } from "react";

const verticals = [
  "Insurance", "Real estate", "Healthcare", "EdTech",
  "Lending / BFSI", "D2C / E-commerce", "Travel", "Collections",
  "HR / Recruitment", "Other",
];

const volumes = [
  "Under 500 / month", "500–2,000 / month",
  "2,000–10,000 / month", "10,000+ / month",
];

export function LpDemoForm({ source }: { source: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "ok") {
    return (
      <div className="card p-10 text-center max-w-lg mx-auto">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-2xl text-brand">
          ✓
        </div>
        <h3 className="font-display text-xl font-semibold text-ink mb-2">
          You&rsquo;re on the list
        </h3>
        <p className="text-sm text-muted">
          We&rsquo;ll reach out within one business day to schedule your walkthrough.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-7 max-w-lg mx-auto space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Full name" placeholder="Your name" required />
        <Field name="work_email" label="Work email" type="email" placeholder="you@company.com" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="company" label="Company" placeholder="Company name" required />
        <Field name="phone" label="Phone" placeholder="+1 ..." />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select name="vertical" label="Industry" options={verticals} />
        <Select name="monthly_call_volume" label="Monthly volume" options={volumes} />
      </div>
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
