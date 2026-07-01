"use client";

import { useEffect, useState } from "react";

export function LpFloatingCta({ label = "Book a Demo" }: { label?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={() => window.dispatchEvent(new Event("open-demo-popup"))}
        className="inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lift hover:bg-brand-dark hover:scale-105 transition-all duration-200"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        {label} →
      </button>
    </div>
  );
}
