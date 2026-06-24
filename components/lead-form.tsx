"use client";

import { useState } from "react";

const volumes = [
  "Under 500 calls / month",
  "500–2,000 calls / month",
  "2,000–10,000 calls / month",
  "10,000+ calls / month",
];

const verticals = [
  "Insurance",
  "Real estate",
  "Healthcare",
  "EdTech",
  "Lending / BFSI",
  "D2C / E-commerce",
  "Travel",
  "Collections",
  "HR / Recruitment",
  "Other",
];

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
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
        body: JSON.stringify({ ...data, source: "demo_form" }),
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
      <div className="card p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-teal/15 text-2xl text-teal-dark">
          ✓
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold">Thanks — we&rsquo;ll be in touch</h3>
        <p className="mt-2 text-sm text-muted">
          Your details are with the team. Pick a time on the scheduler to lock
          in your walkthrough.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Name" placeholder="Your name" required />
        <Field name="work_email" label="Work email" type="email" placeholder="you@company.com" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="company" label="Company" placeholder="Company name" required />
        <Field name="phone" label="Phone (optional)" placeholder="+64 ..." />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select name="vertical" label="Industry" options={verticals} />
        <Select name="monthly_call_volume" label="Monthly call volume" options={volumes} />
      </div>
      <div>
        <label className="text-sm font-medium" htmlFor="message">What do you want to automate?</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-teal-dark"
          placeholder="Tell us about your call volume and goals"
        />
      </div>
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Request demo"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-red-600">{error}</p>
      )}
      <p className="text-center text-xs text-faint">
        Your details are stored securely and used only to arrange your demo.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-teal-dark"
      />
    </div>
  );
}

function Select({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-teal-dark"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
