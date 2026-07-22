"use client";

import { useState } from "react";

function formatNumber(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

export function RoiCalculator() {
  const [calls, setCalls] = useState(2000);
  const [aiShare, setAiShare] = useState(60);
  const [handleTime, setHandleTime] = useState(6);
  const [hourlyCost, setHourlyCost] = useState(25);

  const callsHandledByAi = calls * (aiShare / 100);
  const hoursSavedPerMonth = (callsHandledByAi * handleTime) / 60;
  const dollarsSavedPerMonth = hoursSavedPerMonth * hourlyCost;
  const dollarsSavedPerYear = dollarsSavedPerMonth * 12;

  return (
    <div className="rounded-xl2 border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="flex items-center justify-between text-sm font-medium text-ink">
            Monthly call volume
            <span className="text-brand">{formatNumber(calls)}</span>
          </span>
          <input
            type="range"
            min={100}
            max={20000}
            step={100}
            value={calls}
            onChange={(e) => setCalls(Number(e.target.value))}
            className="mt-3 w-full accent-brand"
          />
        </label>

        <label className="block">
          <span className="flex items-center justify-between text-sm font-medium text-ink">
            % of calls AI can handle
            <span className="text-brand">{aiShare}%</span>
          </span>
          <input
            type="range"
            min={10}
            max={90}
            step={5}
            value={aiShare}
            onChange={(e) => setAiShare(Number(e.target.value))}
            className="mt-3 w-full accent-brand"
          />
        </label>

        <label className="block">
          <span className="flex items-center justify-between text-sm font-medium text-ink">
            Avg. handle time (minutes)
            <span className="text-brand">{handleTime}</span>
          </span>
          <input
            type="range"
            min={1}
            max={20}
            step={1}
            value={handleTime}
            onChange={(e) => setHandleTime(Number(e.target.value))}
            className="mt-3 w-full accent-brand"
          />
        </label>

        <label className="block">
          <span className="flex items-center justify-between text-sm font-medium text-ink">
            Cost per agent hour ($)
            <span className="text-brand">${hourlyCost}</span>
          </span>
          <input
            type="range"
            min={10}
            max={60}
            step={1}
            value={hourlyCost}
            onChange={(e) => setHourlyCost(Number(e.target.value))}
            className="mt-3 w-full accent-brand"
          />
        </label>
      </div>

      <div className="mt-8 grid gap-4 rounded-xl2 bg-surface p-6 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold text-brand">{formatNumber(callsHandledByAi)}</p>
          <p className="mt-1 text-sm text-muted">calls/month handled by AI</p>
        </div>
        <div>
          <p className="font-display text-2xl font-semibold text-brand">{formatNumber(hoursSavedPerMonth)}</p>
          <p className="mt-1 text-sm text-muted">agent hours saved/month</p>
        </div>
        <div>
          <p className="font-display text-2xl font-semibold text-brand">${formatNumber(dollarsSavedPerYear)}</p>
          <p className="mt-1 text-sm text-muted">estimated savings/year</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-faint">
        Illustrative estimate based on your inputs, not a guaranteed result — actual savings depend on your call mix and current staffing.
      </p>
    </div>
  );
}
