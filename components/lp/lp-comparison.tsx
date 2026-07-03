interface LpComparisonProps {
  heading: string;
  columns: string[]; // competitor column labels; HyperDial column is added last
  rows: { label: string; values: string[]; hyperdial: string }[];
}

export function LpComparison({ heading, columns, rows }: LpComparisonProps) {
  return (
    <section className="py-16 bg-white border-b border-line">
      <div className="wrap max-w-4xl mx-auto">
        <p className="eyebrow mb-4 text-center">Why HyperDial</p>
        <h2 className="font-display text-3xl font-semibold text-ink mb-10 text-center">
          {heading}
        </h2>
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full text-sm bg-white">
            <thead>
              <tr className="bg-surface">
                <th className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider text-muted" />
                {columns.map((col) => (
                  <th key={col} className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider text-muted">
                    {col}
                  </th>
                ))}
                <th className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider text-brand">
                  HyperDial
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <td className="px-5 py-3.5 text-ink font-medium">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="px-5 py-3.5 text-muted">{v}</td>
                  ))}
                  <td className="px-5 py-3.5 font-semibold text-brand">{row.hyperdial}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
