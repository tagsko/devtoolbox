import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "thetoolbrew.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host !== CANONICAL_HOST) {
    const url = new URL(request.url);
    url.host = CANONICAL_HOST;
    url.protocol = "https";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|ads.txt|sitemap.xml|robots.txt).*)",
};
