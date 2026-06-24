import Link from "next/link";

/**
 * Logo mark — purple→indigo interpretation of the HyperDial loop.
 * To use your EXACT logo instead: drop your file at /public/logo.svg and
 * replace <LogoMark /> below with:
 *   <img src="/logo.svg" alt="HyperDial" className="h-7 w-7" />
 */
function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="hd-grad" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#hd-grad)" />
      {/* loop mark */}
      <path
        d="M14 11v18M14 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6c-2.4 0-4.5-1.4-5.4-3.4"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Wordmark({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const hyper = variant === "light" ? "text-white" : "text-ink";
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <LogoMark />
      <span className="font-display text-lg font-semibold tracking-tight">
        <span className={hyper}>Hyper</span>
        <span className="text-brand">Dial</span>
      </span>
    </Link>
  );
}
