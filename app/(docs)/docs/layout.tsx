import Link from "next/link";
import { getAll } from "@/lib/content";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = getAll("docs");
  const categories = Array.from(new Set(pages.map((p) => p.category)));

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-line bg-white">
        <div className="wrap flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand-indigo to-brand">
              <span className="font-display text-sm font-bold text-white">H</span>
            </span>
            <span className="font-display text-lg font-semibold">
              Hyper<span className="text-brand">Dial</span>
              <span className="ml-2 rounded-full bg-line px-2 py-0.5 text-xs font-normal text-muted">
                docs
              </span>
            </span>
          </Link>
          <Link href="/" className="text-sm link-quiet">
            ← Back to site
          </Link>
        </div>
      </header>

      <div className="wrap flex flex-1 gap-10 py-10">
        <aside className="hidden w-56 shrink-0 md:block">
          <nav className="sticky top-24 space-y-6">
            {categories.map((cat) => (
              <div key={cat}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-faint">
                  {cat}
                </h4>
                <ul className="mt-2 space-y-1">
                  {pages
                    .filter((p) => p.category === cat)
                    .map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/docs/${p.slug}`}
                          className="block rounded-md px-2 py-1.5 text-sm text-muted transition-colors hover:bg-line/50 hover:text-teal-dark"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
