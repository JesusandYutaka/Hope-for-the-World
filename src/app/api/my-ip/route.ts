import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    "x-real-ip": req.headers.get("x-real-ip"),
    "x-forwarded-for": req.headers.get("x-forwarded-for"),
    "x-vercel-forwarded-for": req.headers.get("x-vercel-forwarded-for"),
    STAGING_ALLOWED_IPS: process.env.STAGING_ALLOWED_IPS ?? "(not set)",
    VERCEL_ENV: process.env.VERCEL_ENV ?? "(not set)",
  });
}
