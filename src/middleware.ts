import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const allowedIps = (process.env.STAGING_ALLOWED_IPS ?? "")
    .split(",")
    .map((ip) => ip.trim())
    .filter(Boolean);

  if (allowedIps.length === 0) {
    return NextResponse.next();
  }

  const ip =
    req.ip ??
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "";

  if (allowedIps.includes(ip)) {
    return NextResponse.next();
  }

  return new NextResponse("403 Forbidden", { status: 403 });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
