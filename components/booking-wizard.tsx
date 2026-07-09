"use client";

import { useState, useEffect, useCallback } from "react";
import { isFreeEmail, FREE_EMAIL_ERROR } from "@/lib/business-email";

type Step = 1 | 2 | 3 | 4 | 5;

type WizardData = {
  first_name: string;
  last_name: string;
  work_email: string;
  phone: string;
  country: string;
  job_title: string;
  company: string;
  company_website: string;
  company_size: string;
  annual_support_volume: string;
  needs: string[];
  current_solution: string;
  timeline: string;
};

const initialData: WizardData = {
  first_name: "",
  last_name: "",
  work_email: "",
  phone: "",
  country: "",
  job_title: "",
  company: "",
  company_website: "",
  company_size: "",
  annual_support_volume: "",
  needs: [],
  current_solution: "",
  timeline: "",
};


const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Australia",
  "Singapore",
  "UAE",
  "Other",
];

const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-500", "500+"];

const SUPPORT_VOLUMES = [
  "Less than 1,000",
  "1,000-5,000",
  "5,000-20,000",
  "20,000+",
];

const NEEDS = [
  "AI Voice Agent",
  "AI Chat Agent",
  "Omnichannel Support",
  "Call Center",
  "WhatsApp Support",
  "Automation Workflows",
  "Analytics",
  "Other",
];

const CURRENT_SOLUTIONS = [
  "Zendesk",
  "Freshdesk",
  "Intercom",
  "Zoho Desk",
  "Salesforce",
  "No solution",
  "Other",
];

const TIMELINES = ["Immediately", "1 month", "3 months", "6+ months"];

const STEP_META = [
  { label: "About you", desc: "Who's joining the call" },
  { label: "Company details", desc: "A bit about your team" },
  { label: "Business needs", desc: "What you want to automate" },
  { label: "Schedule", desc: "Pick a time that works" },
];

export function BookingWizard({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<WizardData>(initialData);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Lock background scroll while modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Reset to step 1 each time the modal is freshly opened
  useEffect(() => {
    if (open) {
      setStep(1);
      setErrors({});
      setFormError(null);
      setSubmitError(null);
    }
  }, [open]);

  const set = useCallback(
    <K extends keyof WizardData>(key: K, value: WizardData[K]) => {
      setData((d) => ({ ...d, [key]: value }));
    },
    []
  );

  function toggleNeed(n: string) {
    setData((d) => ({
      ...d,
      needs: d.needs.includes(n)
        ? d.needs.filter((x) => x !== n)
        : [...d.needs, n],
    }));
  }

  const emailFormatValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.work_email.trim());
  const freeEmailBlocked = emailFormatValid && isFreeEmail(data.work_email);

  function validateStep1(): boolean {
    const next: Record<string, boolean> = {};
    if (!emailFormatValid || freeEmailBlocked) next.work_email = true;
    if (freeEmailBlocked) {
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "lead_blocked_free_email", { lp_source: "book_a_demo_wizard" });
    }
    if (!data.first_name) next.first_name = true;
    if (!data.last_name) next.last_name = true;
    if (!data.phone) next.phone = true;
    if (!data.country) next.country = true;
    setErrors(next);
    const ok = Object.keys(next).length === 0;
    setFormError(ok ? null : "Fill in the highlighted fields to continue.");
    return ok;
  }

  function validateStep2(): boolean {
    const next: Record<string, boolean> = {};
    if (!data.job_title) next.job_title = true;
    if (!data.company) next.company = true;
    if (!data.company_size) next.company_size = true;
    if (!data.annual_support_volume) next.annual_support_volume = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setErrors({});
    setFormError(null);
    setStep((s) => (s + 1) as Step);
  }
  function goBack() {
    setStep((s) => (s - 1) as Step);
  }

  async function handleSubmitAndShowScheduler() {
    // Step 3 has no required fields — just submit the lead, then move to the
    // scheduler. We submit here (rather than waiting for a calendar pick)
    // because the real scheduling happens inside Google's iframe, which we
    // can't intercept — so the lead record is what we control.
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: data.first_name,
          last_name: data.last_name,
          work_email: data.work_email,
          phone: data.phone,
          country: data.country,
          job_title: data.job_title,
          company: data.company,
          company_website: data.company_website,
          company_size: data.company_size,
          annual_support_volume: data.annual_support_volume,
          needs: data.needs,
          current_solution: data.current_solution,
          timeline: data.timeline,
          source: "book_a_demo_wizard",
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStep(4);
    } catch (e) {
      setSubmitError(
        e instanceof Error ? e.message : "Something went wrong — try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-deep/60 p-5"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[88vh] w-full max-w-[480px] overflow-y-auto rounded-xl2 bg-white shadow-lift">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full bg-surface text-muted transition-colors hover:bg-line hover:text-ink"
        >
          ×
        </button>

        <div className="px-7 pt-6">
          <span className="eyebrow text-[11px]">Book a demo</span>
          <h2 className="mt-2 font-display text-xl font-semibold">
            {step === 5 ? "You're all set" : "Let's set up your walkthrough"}
          </h2>
          <p className="mt-1 text-[13px] text-muted">
            {step === 5
              ? "We'll see you on the call."
              : "A few quick details, then pick a time."}
          </p>
        </div>

        {step !== 5 && (
          <div className="px-7 pt-4">
            <div className="flex justify-between text-[11.5px] text-muted">
              <span>Step {step} of 4</span>
              <span>{Math.round((step / 4) * 100)}%</span>
            </div>
            <div className="mt-1.5 flex gap-1.5">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`h-[3px] flex-1 rounded-full ${
                    n <= step ? "bg-brand" : "bg-line"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="px-7 pb-7 pt-5">
          {step === 1 && (
            <Step1
              data={data}
              set={set}
              errors={errors}
              formError={formError}
              freeEmailBlocked={freeEmailBlocked}
              onContinue={goNext}
            />
          )}
          {step === 2 && (
            <Step2
              data={data}
              set={set}
              errors={errors}
              onBack={goBack}
              onContinue={goNext}
            />
          )}
          {step === 3 && (
            <Step3
              data={data}
              set={set}
              toggleNeed={toggleNeed}
              onBack={goBack}
              onContinue={handleSubmitAndShowScheduler}
              submitting={submitting}
              submitError={submitError}
            />
          )}
          {step === 4 && (
            <Step4Schedule
              calName={[data.first_name, data.last_name].filter(Boolean).join(" ")}
              calEmail={data.work_email}
              onBack={goBack}
              onDone={() => setStep(5)}
            />
          )}
          {step === 5 && <StepSuccess onClose={onClose} />}

          <div className="mt-5 flex flex-wrap justify-center gap-3.5 border-t border-line pt-4 text-[11px] text-faint">
            <span>🔒 Encrypted in transit</span>
            <span>☁️ Hosted on AWS</span>
            <span>✓ GDPR-aligned</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Step 1 ---------------- */

function Step1({
  data,
  set,
  errors,
  formError,
  freeEmailBlocked,
  onContinue,
}: {
  data: WizardData;
  set: <K extends keyof WizardData>(key: K, value: WizardData[K]) => void;
  errors: Record<string, boolean>;
  formError: string | null;
  freeEmailBlocked: boolean;
  onContinue: () => void;
}) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3.5">
        <TextField
          label="First name"
          required
          value={data.first_name}
          onChange={(v) => set("first_name", v)}
          placeholder="Deepak"
          invalid={errors.first_name}
        />
        <TextField
          label="Last name"
          required
          value={data.last_name}
          onChange={(v) => set("last_name", v)}
          placeholder="Mehta"
          invalid={errors.last_name}
        />
      </div>

      <TextField
        label="Business email (no Gmail / Yahoo / Outlook)"
        required
        type="email"
        value={data.work_email}
        onChange={(v) => set("work_email", v)}
        placeholder="you@yourcompany.com"
        invalid={errors.work_email}
        error={
          errors.work_email
            ? freeEmailBlocked
              ? FREE_EMAIL_ERROR
              : "Enter a valid email address."
            : undefined
        }
        hint={freeEmailBlocked && !errors.work_email ? FREE_EMAIL_ERROR : undefined}
        hintTone="warn"
      />

      <div className="grid grid-cols-2 gap-3.5">
        <TextField
          label="Phone number"
          required
          type="tel"
          value={data.phone}
          onChange={(v) => set("phone", v)}
          placeholder="+91 98765 43210"
          invalid={errors.phone}
        />
        <SelectField
          label="Country"
          required
          value={data.country}
          onChange={(v) => set("country", v)}
          options={COUNTRIES}
          invalid={errors.country}
        />
      </div>

      {formError && (
        <p className="mb-2 mt-1 text-[12px] text-red-600">{formError}</p>
      )}

      <div className="mt-1 flex justify-end">
        <button onClick={onContinue} className="btn-primary">
          Continue
        </button>
      </div>
    </div>
  );
}

/* ---------------- Step 2 ---------------- */

function Step2({
  data,
  set,
  errors,
  onBack,
  onContinue,
}: {
  data: WizardData;
  set: <K extends keyof WizardData>(key: K, value: WizardData[K]) => void;
  errors: Record<string, boolean>;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <div>
      <TextField
        label="Job title"
        required
        value={data.job_title}
        onChange={(v) => set("job_title", v)}
        placeholder="Head of Customer Support"
        invalid={errors.job_title}
      />
      <TextField
        label="Company name"
        required
        value={data.company}
        onChange={(v) => set("company", v)}
        placeholder="Acme Inc."
        invalid={errors.company}
      />
      <TextField
        label="Company website"
        value={data.company_website}
        onChange={(v) => set("company_website", v)}
        placeholder="acme.com"
      />
      <div className="grid grid-cols-2 gap-3.5">
        <SelectField
          label="Company size"
          required
          value={data.company_size}
          onChange={(v) => set("company_size", v)}
          options={COMPANY_SIZES}
          invalid={errors.company_size}
        />
        <SelectField
          label="Annual support volume"
          required
          value={data.annual_support_volume}
          onChange={(v) => set("annual_support_volume", v)}
          options={SUPPORT_VOLUMES}
          invalid={errors.annual_support_volume}
        />
      </div>

      <div className="mt-1 flex justify-between">
        <button onClick={onBack} className="btn-ghost">
          Back
        </button>
        <button onClick={onContinue} className="btn-primary">
          Continue
        </button>
      </div>
    </div>
  );
}

/* ---------------- Step 3 ---------------- */

function Step3({
  data,
  set,
  toggleNeed,
  onBack,
  onContinue,
  submitting,
  submitError,
}: {
  data: WizardData;
  set: <K extends keyof WizardData>(key: K, value: WizardData[K]) => void;
  toggleNeed: (n: string) => void;
  onBack: () => void;
  onContinue: () => void;
  submitting: boolean;
  submitError: string | null;
}) {
  return (
    <div>
      <label className="mb-2 block text-[12.5px] font-medium text-ink">
        What are you looking for?
      </label>
      <div className="mb-3.5 grid grid-cols-2 gap-2">
        {NEEDS.map((n) => {
          const checked = data.needs.includes(n);
          return (
            <label
              key={n}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-2.5 py-2 text-[12.5px] transition-colors ${
                checked
                  ? "border-line bg-brand/[0.04]"
                  : "border-line hover:border-brand-light"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleNeed(n)}
                className="h-[15px] w-[15px] accent-brand"
              />
              <span>{n}</span>
            </label>
          );
        })}
      </div>

      <SelectField
        label="Current solution"
        value={data.current_solution}
        onChange={(v) => set("current_solution", v)}
        options={CURRENT_SOLUTIONS}
      />

      <label className="mb-2 mt-1 block text-[12.5px] font-medium text-ink">
        Expected timeline
      </label>
      <div className="mb-1 flex flex-wrap gap-2">
        {TIMELINES.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => set("timeline", t)}
            className={`rounded-full border px-3.5 py-1.5 text-[12.5px] transition-colors ${
              data.timeline === t
                ? "border-brand bg-brand text-white"
                : "border-line text-muted hover:border-brand-light"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {submitError && (
        <p className="mb-2 mt-2 text-[12px] text-red-600">{submitError}</p>
      )}

      <div className="mt-3 flex justify-between">
        <button onClick={onBack} className="btn-ghost" disabled={submitting}>
          Back
        </button>
        <button
          onClick={onContinue}
          className="btn-primary disabled:opacity-60"
          disabled={submitting}
        >
          {submitting ? "Saving…" : "Continue"}
        </button>
      </div>
    </div>
  );
}

/* ---------------- Step 4: Calendly ---------------- */

const CALENDLY_URL = "https://calendly.com/deepak-hyperdial/30min";

function Step4Schedule({
  calName,
  calEmail,
  onBack,
  onDone,
}: {
  calName?: string;
  calEmail?: string;
  onBack: () => void;
  onDone: () => void;
}) {
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.event === "calendly.event_scheduled") {
        setBooked(true);
        onDone();
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [onDone]);

  const params = new URLSearchParams();
  if (calName) params.set("name", calName);
  if (calEmail) params.set("email", calEmail);
  // embed_domain + embed_type are required for Calendly to postMessage
  // calendly.event_scheduled back to us — without them it just shows
  // its own branded confirmation screen inside the iframe.
  if (typeof window !== "undefined") {
    params.set("embed_domain", window.location.hostname);
    params.set("embed_type", "Inline");
  }
  params.set("hide_gdpr_banner", "1");
  const src = `${CALENDLY_URL}?${params.toString()}`;

  return (
    <div>
      <p className="mb-3 text-[12.5px] text-muted">
        Pick a slot below — you&rsquo;ll get an instant Google Meet confirmation.
      </p>
      <iframe
        src={src}
        title="Book a HyperDial demo"
        className="h-[500px] w-full rounded-xl border border-line bg-white"
      />
      <div className="mt-4 flex items-center justify-between">
        <button onClick={onBack} className="btn-ghost">
          Back
        </button>
        {!booked && (
          <button onClick={onDone} className="text-[12.5px] font-medium text-brand hover:underline">
            Already booked a time →
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------------- Success ---------------- */

function StepSuccess({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-3.5 grid h-[54px] w-[54px] place-items-center rounded-full bg-emerald-50 text-2xl text-emerald-600">
        ✓
      </div>
      <h3 className="font-display text-lg font-semibold">
        Your demo is confirmed
      </h3>
      <p className="mt-1.5 text-[13px] text-muted">
        A calendar invite is on its way to your inbox.
      </p>

      <div className="mt-5 text-left">
        <a
          href="mailto:deepak@hyperdial.io"
          className="block w-full rounded-full bg-brand px-5 py-2.5 text-center text-[13.5px] font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Need to talk to sales instead?
        </a>
      </div>

      <button
        onClick={onClose}
        className="mt-4 text-[12.5px] font-medium text-muted hover:text-ink"
      >
        Close
      </button>
    </div>
  );
}

/* ---------------- Shared field components ---------------- */

function TextField({
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
  invalid,
  error,
  hint,
  hintTone = "info",
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  invalid?: boolean;
  error?: string;
  hint?: string;
  hintTone?: "info" | "warn";
}) {
  return (
    <div className="mb-3.5">
      <label className="mb-1.5 block text-[12.5px] font-medium text-ink">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-[9px] border px-3 py-2.5 text-[13.5px] outline-none transition-colors focus:border-brand ${
          invalid ? "border-red-500" : "border-line"
        }`}
      />
      {error && <p className="mt-1 text-[11.5px] text-red-600">{error}</p>}
      {!error && hint && (
        <p
          className={`mt-1 text-[11.5px] ${
            hintTone === "warn" ? "text-amber-700" : "text-faint"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  required,
  value,
  onChange,
  options,
  invalid,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  invalid?: boolean;
}) {
  return (
    <div className="mb-3.5">
      <label className="mb-1.5 block text-[12.5px] font-medium text-ink">
        {label} {required && "*"}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-[9px] border bg-white px-3 py-2.5 text-[13.5px] outline-none transition-colors focus:border-brand ${
          invalid ? "border-red-500" : "border-line"
        }`}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
