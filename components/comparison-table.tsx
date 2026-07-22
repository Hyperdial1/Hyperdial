export type ComparisonRow = { feature: string; values: string[] };
export type ComparisonTable = { columns: string[]; rows: ComparisonRow[]; note?: string };

export function ComparisonTable({ table }: { table: ComparisonTable }) {
  return (
    <div>
      <div className="overflow-x-auto rounded-xl2 border border-line">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-line/40">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium text-muted">Feature</th>
              {table.columns.map((c, i) => (
                <th
                  key={c}
                  className={`px-4 py-3 text-center font-medium ${i === 0 ? "text-brand" : "text-muted"}`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.feature} className="border-t border-line">
                <td className="px-4 py-2.5 text-ink">{row.feature}</td>
                {row.values.map((v, i) => (
                  <td
                    key={i}
                    className={`px-4 py-2.5 text-center ${i === 0 ? "font-medium text-brand" : "text-muted"}`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && <p className="mt-3 text-xs text-faint">{table.note}</p>}
    </div>
  );
}
