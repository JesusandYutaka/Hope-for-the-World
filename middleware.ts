import { NextRequest, NextResponse } from "next/server";

const ALLOWED_IPS = ["219.104.168.5", "122.196.67.123"];

export function middleware(request: NextRequest) {
  // Vercel は x-forwarded-for にクライアントIPを入れる
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "";

  if (!ALLOWED_IPS.includes(ip)) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  // _next/static などの静的アセットはスキップ
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
