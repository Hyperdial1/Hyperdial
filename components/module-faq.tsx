"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export function ModuleFaq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="max-w-2xl">
      {items.map((f, i) => (
        <div key={f.q} className="border-b border-line">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between py-4 text-left text-[15px] font-medium"
          >
            {f.q}
            <span className={`text-faint transition-transform ${open === i ? "rotate-180" : ""}`}>⌄</span>
          </button>
          {open === i && <p className="pb-4 text-sm leading-6 text-muted">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}
