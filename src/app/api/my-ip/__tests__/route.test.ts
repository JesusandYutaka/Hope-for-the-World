import { describe, it, expect, vi, afterEach } from "vitest";
import { NextRequest } from "next/server";
import { GET } from "@/app/api/my-ip/route";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("GET /api/my-ip", () => {
  it("preview 環境ではリクエストヘッダーの IP 情報を返す", async () => {
    vi.stubEnv("VERCEL_ENV", "preview");
    const req = new NextRequest("http://localhost/api/my-ip", {
      headers: {
        "x-real-ip": "1.2.3.4",
        "x-forwarded-for": "5.6.7.8",
        "x-vercel-forwarded-for": "9.10.11.12",
      },
    });
    const res = await GET(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json["x-real-ip"]).toBe("1.2.3.4");
    expect(json["x-forwarded-for"]).toBe("5.6.7.8");
    expect(json["x-vercel-forwarded-for"]).toBe("9.10.11.12");
  });

  it("preview 環境でヘッダーが未設定のとき null を返す", async () => {
    vi.stubEnv("VERCEL_ENV", "preview");
    const req = new NextRequest("http://localhost/api/my-ip");
    const res = await GET(req);
    const json = await res.json();
    expect(json["x-real-ip"]).toBeNull();
    expect(json["x-forwarded-for"]).toBeNull();
  });

  it("許可IPリストをレスポンスに含めない", async () => {
    vi.stubEnv("VERCEL_ENV", "preview");
    vi.stubEnv("STAGING_ALLOWED_IPS", "1.2.3.4,5.6.7.8");
    const req = new NextRequest("http://localhost/api/my-ip");
    const res = await GET(req);
    const text = await res.text();
    expect(text).not.toContain("STAGING_ALLOWED_IPS");
    expect(text).not.toContain("1.2.3.4");
  });

  it("本番環境では 404 を返す", async () => {
    vi.stubEnv("VERCEL_ENV", "production");
    const req = new NextRequest("http://localhost/api/my-ip");
    const res = await GET(req);
    expect(res.status).toBe(404);
  });

  it("VERCEL_ENV が未設定のとき 404 を返す", async () => {
    vi.stubEnv("VERCEL_ENV", "");
    const req = new NextRequest("http://localhost/api/my-ip");
    const res = await GET(req);
    expect(res.status).toBe(404);
  });
});
