import { describe, it, expect, vi, afterEach } from "vitest";
import { NextRequest } from "next/server";
import { middleware } from "@/middleware";

function makeReq(ip = "1.2.3.4"): NextRequest {
  return new NextRequest("http://localhost/page", {
    headers: { "x-real-ip": ip },
  });
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("middleware — IP制限", () => {
  it("VERCEL_ENV が preview 以外なら通過する", async () => {
    vi.stubEnv("VERCEL_ENV", "production");
    const res = middleware(makeReq());
    expect(res.status).toBe(200);
  });

  it("preview でも STAGING_ALLOWED_IPS が空なら通過する", async () => {
    vi.stubEnv("VERCEL_ENV", "preview");
    vi.stubEnv("STAGING_ALLOWED_IPS", "");
    const res = middleware(makeReq());
    expect(res.status).toBe(200);
  });

  it("preview で許可IPからのアクセスは通過する", async () => {
    vi.stubEnv("VERCEL_ENV", "preview");
    vi.stubEnv("STAGING_ALLOWED_IPS", "1.2.3.4,5.6.7.8");
    const res = middleware(makeReq("1.2.3.4"));
    expect(res.status).toBe(200);
  });

  it("preview で未許可IPは 403 を返す", async () => {
    vi.stubEnv("VERCEL_ENV", "preview");
    vi.stubEnv("STAGING_ALLOWED_IPS", "1.2.3.4");
    const res = middleware(makeReq("9.9.9.9"));
    expect(res.status).toBe(403);
  });

  it("403 レスポンス本文に検出IPが含まれる", async () => {
    vi.stubEnv("VERCEL_ENV", "preview");
    vi.stubEnv("STAGING_ALLOWED_IPS", "1.2.3.4");
    const res = middleware(makeReq("9.9.9.9"));
    const text = await res.text();
    expect(text).toContain("9.9.9.9");
  });

  it("スペース付きIPリストも正しく解析する", async () => {
    vi.stubEnv("VERCEL_ENV", "preview");
    vi.stubEnv("STAGING_ALLOWED_IPS", " 1.2.3.4 , 5.6.7.8 ");
    const res = middleware(makeReq("5.6.7.8"));
    expect(res.status).toBe(200);
  });
});
