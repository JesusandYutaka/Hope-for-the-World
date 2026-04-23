import { NextRequest, NextResponse } from "next/server";

const ALLOWED_IPS = (process.env.STAGING_ALLOWED_IPS ?? "")
  .split(",")
  .map((ip) => ip.trim())
  .filter(Boolean);

export function middleware(req: NextRequest) {
  if (ALLOWED_IPS.length === 0) {
    return NextResponse.next();
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "";

  if (ALLOWED_IPS.includes(ip)) {
    return NextResponse.next();
  }

  return new NextResponse("403 Forbidden", { status: 403 });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
