"use client";

import { Wordmark } from "@/components/wordmark";

export function LpHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <Wordmark />
        <button
          onClick={() => window.dispatchEvent(new Event("open-demo-popup"))}
          className="btn-primary text-sm px-5 py-2"
        >
          Book a Demo
        </button>
      </div>
    </header>
  );
}
