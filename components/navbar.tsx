"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Wordmark } from "@/components/wordmark";

type Item = { label: string; href: string; desc?: string };
type Menu = { label: string; items: Item[] };

const menus: Menu[] = [
  {
    label: "Platform",
    items: [
      { label: "Telephony", href: "/product#telephony", desc: "Numbers, routing & IVR — the foundation" },
      { label: "Agent Intelligence Processing (AIP)", href: "/product/how-it-learns", desc: "The self-learning layer, incl. security & guardrails" },
      { label: "Virtual Numbers", href: "/product#virtual-numbers", desc: "Local and toll-free numbers, wide coverage" },
      { label: "Voice Models", href: "/product#voice-models", desc: "Natural, brand-matched AI voices" },
      { label: "Conversation Intelligence", href: "/product#conversation-intelligence", desc: "Recording, transcripts & sentiment" },
      { label: "AI Receptionist", href: "/product#ai-receptionist", desc: "Answers, screens and routes every call" },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Insurance", href: "/solutions/insurance" },
      { label: "Real estate", href: "/solutions/real-estate" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "EdTech", href: "/solutions/edtech" },
      { label: "Lending / BFSI", href: "/solutions/lending-bfsi" },
      { label: "D2C / E-commerce", href: "/solutions/d2c-ecommerce" },
      { label: "Travel", href: "/solutions/travel" },
      { label: "Collections", href: "/solutions/collections" },
      { label: "HR / Recruitment", href: "/solutions/hr-recruitment" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "/blog", desc: "Field notes on voice AI" },
      { label: "Glossary", href: "/glossary", desc: "Voice & AIP terms" },
      { label: "Docs", href: "/docs", desc: "Setup and concepts" },
    ],
  },
];

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-surface/85 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between" ref={navRef}>
        <Wordmark />

        <nav className="hidden items-center gap-1 md:flex">
          {menus.map((menu) => {
            const isIndustries = menu.label === "Industries";
            const isPlatform = menu.label === "Platform";
            return (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => setOpen(menu.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
                  aria-expanded={open === menu.label}
                  aria-haspopup="true"
                  onClick={() => setOpen(open === menu.label ? null : menu.label)}
                >
                  {menu.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 opacity-60">
                    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                  </svg>
                </button>

                {open === menu.label && (
                  <div className={`absolute left-0 top-full pt-2 ${isIndustries ? "w-[420px]" : isPlatform ? "w-80" : "w-72"}`}>
                    <div className="card overflow-hidden p-2 shadow-[0_20px_60px_-24px_rgba(10,22,40,0.35)]">
                      <div className={isIndustries ? "grid grid-cols-2 gap-0.5" : ""}>
                        {menu.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-line/50"
                            onClick={() => setOpen(null)}
                          >
                            <span className="block text-sm font-medium text-ink">{item.label}</span>
                            {item.desc && <span className="block text-xs text-faint">{item.desc}</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <Link href="/pricing" className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/book-a-demo" className="hidden text-sm font-medium text-muted hover:text-brand sm:inline">
            Book a demo
          </Link>
          <Link href="/demo" className="btn-primary">Talk to us</Link>
          <button className="md:hidden" aria-label="Menu" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-white md:hidden">
          <div className="wrap space-y-4 py-5">
            {menus.map((menu) => (
              <div key={menu.label}>
                <p className="text-xs font-semibold uppercase tracking-wider text-faint">{menu.label}</p>
                <div className="mt-2 grid grid-cols-2 gap-1">
                  {menu.items.map((item) => (
                    <Link key={item.label} href={item.href} className="block py-1.5 text-sm text-muted" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link href="/pricing" className="block py-1.5 text-sm text-muted" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="/book-a-demo" className="block py-1.5 text-sm font-medium text-brand" onClick={() => setMobileOpen(false)}>Book a demo</Link>
          </div>
        </div>
      )}
    </header>
  );
}
