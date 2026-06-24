const kpis = [
  { label: "Conversations today", value: "1,284", delta: "+18%", up: true },
  { label: "Resolved by AI", value: "72%", delta: "+4pts", up: true },
  { label: "Avg resolution time", value: "1m 48s", delta: "−22%", up: true },
  { label: "CSAT", value: "4.7", delta: "+0.3", up: true },
];

const volume = [42, 55, 48, 63, 59, 71, 84];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const channelMix = [
  { name: "Voice", pct: 38, color: "bg-brand" },
  { name: "Live chat", pct: 31, color: "bg-brand-indigo" },
  { name: "Email", pct: 21, color: "bg-brand-light" },
  { name: "Social", pct: 10, color: "bg-slate-soft" },
];

const timeline = [
  { t: "2m", text: "AI resolved a billing question for Acme Corp", tone: "ok" },
  { t: "9m", text: "New pattern drafted from a top-agent chat", tone: "info" },
  { t: "14m", text: "Escalated a refund over $200 to a human", tone: "warn" },
  { t: "21m", text: "Knowledge article auto-published (returns policy)", tone: "ok" },
  { t: "33m", text: "Signal gap resolved — Zoho integration question", tone: "info" },
];

const recommendations = [
  { title: "Approve 3 high-confidence patterns", body: "Each has held above 70% success for 7+ days.", cta: "Review" },
  { title: "A pattern is decaying", body: "“Mention price after 90s” dropped from 74% → 58% this week.", cta: "Inspect" },
  { title: "Add an article for shipping delays", body: "12 conversations this week had no grounded answer.", cta: "Draft" },
];

const agents = [
  { name: "Priya N.", res: "94%", csat: "4.9" },
  { name: "Rohan M.", res: "88%", csat: "4.7" },
  { name: "AI Agent", res: "72%", csat: "4.6" },
  { name: "Vikram S.", res: "69%", csat: "4.4" },
];

export default function Dashboard() {
  const max = Math.max(...volume);
  return (
    <div className="wrap py-12">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="font-display text-3xl font-semibold">Overview</h1>
        <span className="flex items-center gap-1.5 rounded-full bg-brand/20 px-2.5 py-1 text-xs text-brand-light">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-light" /> 6 live conversations
        </span>
      </div>
      <p className="mt-2 text-slate-soft">
        The Agent Intelligence Process is classifying and learning from every conversation.
      </p>

      {/* KPI cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl2 border border-white/10 bg-deep-800 p-5">
            <p className="text-sm text-slate-soft">{k.label}</p>
            <div className="mt-2 flex items-end justify-between">
              <span className="font-display text-3xl font-semibold text-white">{k.value}</span>
              <span className={`text-xs font-medium ${k.up ? "text-emerald-400" : "text-rose-400"}`}>{k.delta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Conversation volume chart */}
        <div className="rounded-xl2 border border-white/10 bg-deep-800 p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">Conversation volume</h2>
            <span className="text-xs text-slate-soft">Last 7 days · +18% WoW</span>
          </div>
          <div className="mt-6 flex h-40 items-end gap-3">
            {volume.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full origin-bottom rounded-t-md bg-gradient-to-t from-brand-indigo to-brand animate-grow"
                  style={{ height: `${(v / max) * 100}%` }}
                />
                <span className="text-[11px] text-slate-soft">{days[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Channel mix */}
        <div className="rounded-xl2 border border-white/10 bg-deep-800 p-6">
          <h2 className="font-display text-lg font-semibold">Channel mix</h2>
          <div className="mt-5 space-y-4">
            {channelMix.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-sm">
                  <span className="text-white">{c.name}</span>
                  <span className="text-slate-soft">{c.pct}%</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className={`h-full rounded-full ${c.color}`} style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
        {/* AI recommendations */}
        <div className="rounded-xl2 border border-brand/30 bg-gradient-to-br from-deep-800 to-deep p-6">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-sm">✦</span>
            <h2 className="font-display text-lg font-semibold">AI recommendations</h2>
          </div>
          <div className="mt-4 space-y-3">
            {recommendations.map((r) => (
              <div key={r.title} className="flex items-start justify-between gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                <div>
                  <p className="text-sm font-medium text-white">{r.title}</p>
                  <p className="mt-0.5 text-xs text-slate-soft">{r.body}</p>
                </div>
                <button className="shrink-0 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">{r.cta}</button>
              </div>
            ))}
          </div>
        </div>

        {/* Activity timeline */}
        <div className="rounded-xl2 border border-white/10 bg-deep-800 p-6">
          <h2 className="font-display text-lg font-semibold">Activity</h2>
          <ol className="mt-4 space-y-3.5">
            {timeline.map((e, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                    e.tone === "ok" ? "bg-emerald-400" : e.tone === "warn" ? "bg-amber-400" : "bg-brand-light"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm text-white/90">{e.text}</p>
                  <p className="text-xs text-slate-soft">{e.t} ago</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Agent performance */}
      <div className="mt-6 rounded-xl2 border border-white/10 bg-deep-800 p-6">
        <h2 className="font-display text-lg font-semibold">Agent performance</h2>
        <p className="text-xs text-slate-soft">Resolution rate &amp; CSAT, last 7 days</p>
        <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-left text-xs uppercase tracking-wider text-slate-soft">
              <tr>
                <th className="px-4 py-2.5 font-medium">Agent</th>
                <th className="px-4 py-2.5 font-medium">Resolution</th>
                <th className="px-4 py-2.5 font-medium">CSAT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {agents.map((a) => (
                <tr key={a.name}>
                  <td className="px-4 py-2.5 text-white">{a.name}</td>
                  <td className="px-4 py-2.5 text-brand-light">{a.res}</td>
                  <td className="px-4 py-2.5 text-white/80">{a.csat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
