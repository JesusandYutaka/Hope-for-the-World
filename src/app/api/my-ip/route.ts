import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data = {
    "x-real-ip": req.headers.get("x-real-ip"),
    "x-forwarded-for": req.headers.get("x-forwarded-for"),
    "x-vercel-forwarded-for": req.headers.get("x-vercel-forwarded-for"),
    "STAGING_ALLOWED_IPS": process.env.STAGING_ALLOWED_IPS ?? "(not set)",
  };
  return NextResponse.json(data);
}
