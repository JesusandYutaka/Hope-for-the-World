import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export function middleware(req: NextRequest) {
  const allowedIps = (process.env.STAGING_ALLOWED_IPS ?? "")
    .split(",")
    .map((ip) => ip.trim())
    .filter(Boolean);

  const ip =
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "";

  if (allowedIps.length === 0) return NextResponse.next();
  if (allowedIps.includes(ip)) return NextResponse.next();

  return new NextResponse(`403 Forbidden\nYour IP: ${ip}`, { status: 403 });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
