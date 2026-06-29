"use client";

import { Fragment, useState, createContext, useContext } from "react";
import type { Tier, FeatureSection } from "@/content/pricing";

const ExpandContext = createContext<{ expanded: boolean; setExpanded: (v: boolean) => void } | null>(null);

export function PricingExpandProvider({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <ExpandContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </ExpandContext.Provider>
  );
}

function useExpand() {
  const ctx = useContext(ExpandContext);
  if (!ctx) throw new Error("useExpand must be used within PricingExpandProvider");
  return ctx;
}

export function ViewAllFeaturesLink({ tier }: { tier: Tier }) {
  const { setExpanded } = useExpand();
  function handleClick() {
    setExpanded(true);
    // Wait for the accordion to render/expand before scrolling to it —
    // otherwise we scroll to where the (still collapsed) section currently is.
    setTimeout(() => {
      document.getElementById("full-features")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
  return (
    <button
      onClick={handleClick}
      className={`mt-5 text-left text-sm font-medium ${tier.featured ? "text-brand-light" : "text-brand"} hover:underline`}
    >
      View all features →
    </button>
  );
}

export function FeatureAccordion({ featureMatrix }: { featureMatrix: FeatureSection[] }) {
  const { expanded, setExpanded } = useExpand();
  return (
    <section id="full-features" className="mt-16 scroll-mt-24">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between rounded-xl2 border border-line bg-white px-6 py-5 text-left transition-colors hover:border-brand"
      >
        <span className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">📋</span>
          <span className="font-display text-base font-semibold">View full feature comparison</span>
        </span>
        <span className={`text-xl text-faint transition-transform ${expanded ? "rotate-45" : ""}`}>+</span>
      </button>

      {expanded && (
        <div className="mt-4 overflow-x-auto rounded-xl2 border border-line">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-line/40">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-muted">Feature</th>
                <th className="px-4 py-3 text-center font-medium text-muted">Pilot</th>
                <th className="px-4 py-3 text-center font-medium text-brand">Growth</th>
                <th className="px-4 py-3 text-center font-medium text-muted">Scale</th>
              </tr>
            </thead>
            <tbody>
              {featureMatrix.map((section) => (
                <Fragment key={section.section}>
                  <tr className="bg-deep/5">
                    <td colSpan={4} className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand">
                      {section.section}
                    </td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr key={row.feature} className="border-t border-line">
                      <td className="px-4 py-2.5 text-ink">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-muted">{row.pilot}</td>
                      <td className="px-4 py-2.5 text-center font-medium text-brand">{row.growth}</td>
                      <td className="px-4 py-2.5 text-center text-muted">{row.scale}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
