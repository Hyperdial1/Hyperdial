interface LpFaqProps {
  items: { q: string; a: string }[];
}

export function LpFaq({ items }: LpFaqProps) {
  return (
    <section className="py-16 bg-surface border-b border-line">
      <div className="wrap max-w-2xl mx-auto">
        <p className="eyebrow mb-4 text-center">FAQ</p>
        <h2 className="font-display text-3xl font-semibold text-ink mb-10 text-center">
          Before you ask —
        </h2>
        <div className="space-y-3">
          {items.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-line bg-white px-5">
              <summary className="flex cursor-pointer items-center justify-between py-4 font-semibold text-sm text-ink list-none [&::-webkit-details-marker]:hidden">
                {q}
                <span className="ml-4 text-brand text-lg group-open:hidden">+</span>
                <span className="ml-4 text-brand text-lg hidden group-open:inline">–</span>
              </summary>
              <p className="pb-4 text-sm text-muted leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
