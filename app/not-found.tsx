import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-6xl font-semibold text-teal-dark">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-muted">That page doesn&rsquo;t exist or moved.</p>
      <Link href="/" className="btn-primary mt-6">Back home</Link>
    </div>
  );
}
