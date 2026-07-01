interface LpHeroProps {
  eyebrow: string;
  headline: string;
  subhead: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function LpHero({
  eyebrow,
  headline,
  subhead,
  ctaLabel = "Book a Demo",
  ctaHref = "#book-demo",
}: LpHeroProps) {
  return (
    <section className="bg-deep py-20 sm:py-28 text-white">
      <div className="wrap text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-light mb-6">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
          {headline}
        </h1>
        <p className="text-lg text-slate-soft leading-relaxed mb-10">
          {subhead}
        </p>
        <a href={ctaHref} className="btn-primary text-base px-8 py-3.5 shadow-lift">
          {ctaLabel} →
        </a>
        <p className="mt-4 text-xs text-white/40">No commitment. 20-minute walkthrough.</p>
      </div>
    </section>
  );
}
