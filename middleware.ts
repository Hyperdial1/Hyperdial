import { NextRequest, NextResponse } from "next/server";

/**
 * Subdomain routing (optional).
 *
 * Out of the box this does NOTHING on a normal domain (e.g. your-app.vercel.app),
 * so path-based routes work immediately:
 *   /            -> marketing
 *   /dashboard   -> product app
 *   /docs        -> docs
 *
 * To turn ONE domain into three (like app.yourdomain.com / docs.yourdomain.com):
 *   1. Add the subdomains as domains on the SAME Vercel project.
 *   2. Set NEXT_PUBLIC_ROOT_DOMAIN in Vercel env vars (e.g. "yourdomain.com").
 * Then this middleware rewrites the subdomain to the matching path prefix.
 */
export function middleware(req: NextRequest) {
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN;
  if (!rootDomain) return NextResponse.next();

  const host = req.headers.get("host") ?? "";
  const sub = host.replace(`.${rootDomain}`, "");
  const url = req.nextUrl.clone();

  if (sub === "app" && !url.pathname.startsWith("/dashboard")) {
    url.pathname = `/dashboard${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(url);
  }
  if (sub === "docs" && !url.pathname.startsWith("/docs")) {
    url.pathname = `/docs${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
