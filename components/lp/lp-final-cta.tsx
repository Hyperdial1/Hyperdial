"use client";

interface LpFinalCtaProps {
  heading: string;
  subtitle: string;
  ctaLabel?: string;
}

export function LpFinalCta({ heading, subtitle, ctaLabel = "Book a Demo" }: LpFinalCtaProps) {
  return (
    <section className="py-16 bg-white border-b border-line">
      <div className="wrap max-w-3xl mx-auto">
        <div className="rounded-2xl bg-deep px-8 py-14 text-center text-white">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-light mb-5">
            Ready when you are
          </p>
          <h2 className="font-display text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-slate-soft mb-8 max-w-xl mx-auto">{subtitle}</p>
          <button
            onClick={() => window.dispatchEvent(new Event("open-demo-popup"))}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-9 py-3.5 text-base font-semibold text-white shadow-lift transition-all duration-200 hover:bg-brand-dark hover:scale-105"
          >
            {ctaLabel} →
          </button>
        </div>
      </div>
    </section>
  );
}
