import { NextResponse, NextRequest } from "next/server";

const PROTECTED_PREFIXES = ["/conta"];
const AUTH_PAGES = ["/login", "/register"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const lowerPath = pathname.toLowerCase();
  const token = req.cookies.get("token")?.value;

  const isAuthPage = AUTH_PAGES.includes(lowerPath);
  const isProtected = PROTECTED_PREFIXES.some((p) => lowerPath.startsWith(p));

  if (!token && isProtected) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  if (token && isAuthPage) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/Login", "/register", "/Register", "/conta/:path*"],
};
