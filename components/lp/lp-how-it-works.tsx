interface Step {
  number: string;
  title: string;
  description: string;
}

export function LpHowItWorks({ steps }: { steps: Step[] }) {
  return (
    <section className="py-16 bg-surface border-b border-line">
      <div className="wrap max-w-4xl mx-auto text-center">
        <p className="eyebrow mb-4">How it works</p>
        <h2 className="font-display text-3xl font-semibold text-ink mb-12">
          Up and running in days, not months
        </h2>
        <ol className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li key={i} className="flex flex-col items-center text-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white font-display font-bold text-lg">
                {step.number}
              </span>
              <div>
                <h3 className="font-display font-semibold text-ink mb-1">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="hidden sm:block absolute" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
