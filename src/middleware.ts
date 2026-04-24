import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (process.env.VERCEL_ENV !== "preview") return NextResponse.next();

  const allowedIps = (process.env.STAGING_ALLOWED_IPS ?? "")
    .split(",")
    .map((ip) => ip.trim())
    .filter(Boolean);

  if (allowedIps.length === 0) return NextResponse.next();

  const clientIp =
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "";

  if (allowedIps.includes(clientIp)) return NextResponse.next();

  return new NextResponse(
    `403 Forbidden\nYour IP: ${clientIp}\nAllowed: ${allowedIps.join(", ")}`,
    { status: 403 }
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/my-ip).*)"],
};
