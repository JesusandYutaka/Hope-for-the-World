import { NextRequest, NextResponse } from "next/server";

const ALLOWED_IPS = (process.env.ALLOWED_IPS ?? "").split(",").map((ip) => ip.trim()).filter(Boolean);

export function middleware(request: NextRequest) {
  // Vercel は x-forwarded-for にクライアントIPを入れる
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "";

  // ALLOWED_IPSが未設定の場合はアクセス許可（ローカル開発用）
  if (ALLOWED_IPS.length === 0) return NextResponse.next();

  if (!ALLOWED_IPS.includes(ip)) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  // _next/static などの静的アセットはスキップ
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
