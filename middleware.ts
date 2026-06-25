import { NextRequest, NextResponse } from "next/server";

/**
 * Subdomain routing (optional).
 *
 * Out of the box this does NOTHING on a normal domain (e.g. your-app.vercel.app),
 * so path-based routes work immediately:
 *   /            -> marketing
 *   /docs        -> docs
 *
 * To turn the domain into two (like docs.yourdomain.com):
 *   1. Add the subdomain as a domain on the SAME Vercel project.
 *   2. Set NEXT_PUBLIC_ROOT_DOMAIN in Vercel env vars (e.g. "yourdomain.com").
 * Then this middleware rewrites the subdomain to the matching path prefix.
 *
 * There is no app./dashboard surface right now — it was removed. If you add
 * a product app back later, re-add an "app" branch here the same way "docs" works.
 */
export function middleware(req: NextRequest) {
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN;
  if (!rootDomain) return NextResponse.next();

  const host = req.headers.get("host") ?? "";
  const sub = host.replace(`.${rootDomain}`, "");
  const url = req.nextUrl.clone();

  if (sub === "docs" && !url.pathname.startsWith("/docs")) {
    url.pathname = `/docs${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
