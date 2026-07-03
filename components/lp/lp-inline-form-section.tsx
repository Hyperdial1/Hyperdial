import { LpDemoForm, LpVariant } from "@/components/lp/lp-demo-form";

interface LpInlineFormSectionProps {
  source: string;
  variant: LpVariant;
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function LpInlineFormSection({ source, variant, eyebrow, title, subtitle }: LpInlineFormSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-surface border-b border-line" id="book-a-demo">
      <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center max-w-5xl mx-auto">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand mb-4">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl font-bold text-ink mb-3">{title}</h2>
          <p className="text-muted leading-relaxed">{subtitle}</p>
        </div>
        <LpDemoForm source={source} variant={variant} />
      </div>
    </section>
  );
}
