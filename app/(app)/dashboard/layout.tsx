import Link from "next/link";

/**
 * App shell (the product area).
 *
 * AUTH INTEGRATION POINT — to protect these pages with Clerk:
 *   1. npm install @clerk/nextjs
 *   2. Wrap with <ClerkProvider> and gate with auth().
 *   3. Add Clerk middleware (see README "Adding auth").
 * Until then, /dashboard is a public placeholder so the project deploys cleanly.
 */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-navy text-white">
      <header className="border-b border-white/10">
        <div className="wrap flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand-indigo to-brand">
              <span className="font-display text-sm font-bold text-white">H</span>
            </span>
            <span className="font-display text-lg font-semibold">
              Hyper<span className="text-brand-light">Dial</span>
              <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-xs font-normal text-slate-soft">app</span>
            </span>
          </Link>
          <Link href="/" className="text-sm text-slate-soft hover:text-white">&larr; Back to site</Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
