"use client";

import { useEffect, useRef, useState } from "react";
import { LpDemoForm, LpPhase, LpVariant } from "@/components/lp/lp-demo-form";

interface LpPopupProps {
  source: string;
  variant: LpVariant;
}

const HEADER_COPY: Record<LpPhase, { title: string; subtitle: string }> = {
  form: {
    title: "Book a 20-min Demo",
    subtitle: "No commitment. We’ll show you exactly how it works.",
  },
  calendar: {
    title: "Pick a time",
    subtitle: "Choose whatever slot works best for you.",
  },
  booked: {
    title: "You’re all set!",
    subtitle: "A calendar invite is on its way to your inbox.",
  },
};

export function LpPopup({ source, variant }: LpPopupProps) {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<LpPhase>("form");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function dismiss() {
    setOpen(false);
    setPhase("form");
    // Cancel the auto-open timer if user closes before it fires
    if (timerRef.current) clearTimeout(timerRef.current);
    // Remember dismissal so timer doesn't reopen in same session
    try { sessionStorage.setItem("hd-popup-seen", "1"); } catch {}
  }

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-demo-popup", handler);

    // Auto-open after 2s — but only if not already dismissed this session
    try {
      if (!sessionStorage.getItem("hd-popup-seen")) {
        timerRef.current = setTimeout(() => setOpen(true), 2000);
      }
    } catch {
      timerRef.current = setTimeout(() => setOpen(true), 2000);
    }

    return () => {
      window.removeEventListener("open-demo-popup", handler);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book a Demo"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-deep/70 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-surface shadow-lift overflow-hidden animate-fade-up max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between bg-white px-7 py-5 border-b border-line sticky top-0 z-10">
          <div className="transition-all duration-200">
            <h2 className="font-display text-lg font-semibold text-ink">{HEADER_COPY[phase].title}</h2>
            <p className="text-xs text-muted mt-0.5">{HEADER_COPY[phase].subtitle}</p>
          </div>
          <button
            onClick={dismiss}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-muted hover:border-brand hover:text-brand transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className={phase === "calendar" ? "" : "px-6 pb-6 pt-4"}>
          <LpDemoForm source={source} variant={variant} inPopup onPhaseChange={setPhase} />
        </div>
      </div>
    </div>
  );
}
