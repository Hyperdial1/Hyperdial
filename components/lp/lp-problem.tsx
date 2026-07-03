interface LpProblemProps {
  points: { icon: string; text: string }[];
}

export function LpProblem({ points }: LpProblemProps) {
  return (
    <section className="py-16 bg-white border-b border-line">
      <div className="wrap max-w-3xl mx-auto text-center">
        <p className="eyebrow mb-4">Sound familiar?</p>
        <h2 className="font-display text-3xl font-semibold text-ink mb-10">
          The problems that keep ops teams up at night
        </h2>
        <ul className="grid gap-5 sm:grid-cols-3 text-left">
          {points.map((p, i) => (
            <li key={i} className="card p-6 flex flex-col gap-3">
              <span className="text-3xl">{p.icon}</span>
              <p className="text-sm leading-relaxed text-muted">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
