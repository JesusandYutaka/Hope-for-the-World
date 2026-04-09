import { NextRequest, NextResponse } from "next/server";

const ALLOWED_IP = "219.104.168.5";

export function middleware(request: NextRequest) {
  // Vercel は x-forwarded-for にクライアントIPを入れる
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : (request.ip ?? "");

  if (ip !== ALLOWED_IP) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  // _next/static などの静的アセットはスキップ
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
