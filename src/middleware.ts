import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isValidLocale, locales } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale =
    request.headers.get("accept-language")?.split(",")[0]?.split("-")[0] ?? "";
  const preferred = isValidLocale(locale) ? locale : defaultLocale;

  return NextResponse.redirect(new URL(`/${preferred}${pathname}`, request.url));
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|opengraph-image.png|icon-192.png|icon-512.png|logo.png|manifest.webmanifest|robots.txt|sitemap.xml).*)",
  ],
};
