import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const allowedIps = (process.env.STAGING_ALLOWED_IPS ?? "")
    .split(",")
    .map((ip) => ip.trim())
    .filter(Boolean);

  const ip =
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "";

  if (allowedIps.length === 0) {
    const res = NextResponse.next();
    res.headers.set("x-debug-ip", ip);
    res.headers.set("x-debug-allowed", "env-not-set");
    return res;
  }

  if (allowedIps.includes(ip)) {
    const res = NextResponse.next();
    res.headers.set("x-debug-ip", ip);
    res.headers.set("x-debug-allowed", allowedIps.join(","));
    res.headers.set("x-debug-result", "allowed");
    return res;
  }

  return new NextResponse(
    `403 Forbidden\nYour IP: ${ip}\nAllowed: ${allowedIps.join(",")}`,
    { status: 403 }
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
