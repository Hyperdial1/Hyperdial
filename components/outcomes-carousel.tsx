"use client";

import { useRef } from "react";

type Outcome = {
  title: string;
  body: string;
  direction: "up" | "down";
};

const outcomes: Outcome[] = [
  {
    title: "Higher deflection",
    body: "More conversations resolved by AI without a human — your team handles only the exceptions.",
    direction: "up",
  },
  {
    title: "Higher customer satisfaction",
    body: "Fast, consistent, around-the-clock answers — your best agent's quality on every conversation.",
    direction: "up",
  },
  {
    title: "Lower cost",
    body: "Handle far more volume without adding headcount — your cost per ticket drops.",
    direction: "down",
  },
];

function ArrowIcon({ direction }: { direction: "up" | "down" }) {
  return (
    <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
      {direction === "up" ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 16V4M10 4L5 9M10 4l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M10 16l-5-5M10 16l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  );
}

export function OutcomesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(amount: number) {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section className="bg-surface py-20">
      <div className="wrap">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">The outcomes</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              What changes when it&rsquo;s live
            </h2>
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              aria-label="Previous"
              onClick={() => scrollBy(-340)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollBy(340)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3 11 8l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="card min-w-[280px] flex-1 shrink-0 snap-start p-7 sm:min-w-[320px]"
            >
              <ArrowIcon direction={o.direction} />
              <h3 className="mt-5 font-display text-xl font-semibold">{o.title}</h3>
              <p className="mt-2 leading-7 text-muted">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
