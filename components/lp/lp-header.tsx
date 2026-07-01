import { Wordmark } from "@/components/wordmark";

export function LpHeader({ ctaHref = "#book-demo" }: { ctaHref?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <Wordmark />
        <a href={ctaHref} className="btn-primary text-sm px-5 py-2">
          Book a Demo
        </a>
      </div>
    </header>
  );
}
