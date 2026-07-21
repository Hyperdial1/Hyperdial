"use client";

import { useEffect, useState } from "react";

type Msg = { from: "customer" | "ai"; text: string };

// Positive, outcome-driven examples across channels.
const channels: { label: string; script: Msg[] }[] = [
  {
    label: "Voice",
    script: [
      { from: "customer", text: "Hi, I'd like to upgrade my plan." },
      { from: "ai", text: "Great choice — I can do that now. You'll move to Pro and keep your current rate for 3 months." },
      { from: "customer", text: "That's easier than I expected!" },
      { from: "ai", text: "All set. I've emailed your confirmation and updated your account." },
    ],
  },
  {
    label: "Live chat",
    script: [
      { from: "customer", text: "Can you help me track my order?" },
      { from: "ai", text: "Absolutely. Your order is in transit and arrives tomorrow. I've sent tracking details to your email." },
      { from: "customer", text: "Perfect, thank you." },
      { from: "ai", text: "Happy to help! Anything else I can do for you?" },
    ],
  },
];

export function ChatDemo() {
  const [tab, setTab] = useState(0);
  const [shown, setShown] = useState(1);
  const [typing, setTyping] = useState(false);
  const script = channels[tab].script;

  useEffect(() => {
    setShown(1);
    setTyping(false);
  }, [tab]);

  useEffect(() => {
    if (shown >= script.length) return;
    const next = script[shown];
    if (next.from === "ai") {
      setTyping(true);
      const t = setTimeout(() => {
        setTyping(false);
        setShown((s) => s + 1);
      }, 1400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShown((s) => s + 1), 1000);
    return () => clearTimeout(t);
  }, [shown, script]);

  return (
    <div className="overflow-hidden rounded-xl2 border border-white/10 bg-deep-800 shadow-lift">
      <div className="flex items-center gap-2.5 border-b border-white/10 px-4 py-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75 animate-pulse-ring" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-light" />
        </span>
        <span className="text-sm font-medium text-white">HyperDial</span>
        <div className="ml-auto flex gap-1 rounded-full bg-white/5 p-0.5">
          {channels.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setTab(i)}
              className={`rounded-full px-2.5 py-1 text-xs transition-colors ${
                tab === i ? "bg-brand text-white" : "text-slate-soft hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
      <div className="min-h-[300px] space-y-3 px-4 py-5">
        {script.slice(0, shown).map((m, i) => (
          <div key={i} className={`flex ${m.from === "customer" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug animate-fade-up ${
                m.from === "customer"
                  ? "rounded-br-md bg-white/10 text-white"
                  : "rounded-bl-md bg-brand text-white"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="flex gap-1 rounded-2xl rounded-bl-md bg-brand/80 px-3.5 py-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-blink" />
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-blink [animation-delay:0.2s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-blink [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
