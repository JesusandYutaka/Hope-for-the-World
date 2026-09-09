import { NextRequest, NextResponse } from "next/server";

// preview 環境の許可 IP リストに自分を追加するための確認用エンドポイント。
// 本番・ローカルでは存在を伏せるため 404 を返す。
export async function GET(req: NextRequest) {
  if (process.env.VERCEL_ENV !== "preview") {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.json({
    "x-real-ip": req.headers.get("x-real-ip"),
    "x-forwarded-for": req.headers.get("x-forwarded-for"),
    "x-vercel-forwarded-for": req.headers.get("x-vercel-forwarded-for"),
  });
}
