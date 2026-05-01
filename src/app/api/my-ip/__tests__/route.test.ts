import { describe, it, expect, vi, afterEach } from "vitest";
import { NextRequest } from "next/server";
import { GET } from "@/app/api/my-ip/route";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("GET /api/my-ip", () => {
  it("リクエストヘッダーの IP 情報を返す", async () => {
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

  it("ヘッダーが未設定のとき null を返す", async () => {
    const req = new NextRequest("http://localhost/api/my-ip");
    const res = await GET(req);
    const json = await res.json();
    expect(json["x-real-ip"]).toBeNull();
    expect(json["x-forwarded-for"]).toBeNull();
  });

  it("STAGING_ALLOWED_IPS が未設定のとき '(not set)' を返す", async () => {
    const req = new NextRequest("http://localhost/api/my-ip");
    const res = await GET(req);
    const json = await res.json();
    expect(json["STAGING_ALLOWED_IPS"]).toBe("(not set)");
  });
});
