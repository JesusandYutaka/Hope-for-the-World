import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

const mockEmailSend = vi.fn();
const mockRatelimitLimit = vi.fn();

vi.mock("resend", () => {
  const ResendMock = vi.fn(function (this: object) {
    (this as { emails: { send: typeof mockEmailSend } }).emails = { send: mockEmailSend };
  });
  return { Resend: ResendMock };
});

vi.mock("@upstash/ratelimit", () => {
  const RatelimitMock = vi.fn(function (this: object) {
    (this as { limit: typeof mockRatelimitLimit }).limit = mockRatelimitLimit;
  });
  (RatelimitMock as unknown as { slidingWindow: ReturnType<typeof vi.fn> }).slidingWindow = vi.fn();
  return { Ratelimit: RatelimitMock, slidingWindow: vi.fn() };
});

vi.mock("@upstash/redis", () => ({
  Redis: { fromEnv: vi.fn(() => ({})) },
}));

function makeRequest(body: object, ip = "127.0.0.1"): NextRequest {
  return new NextRequest("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact（レートリミットなし）", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockEmailSend.mockResolvedValue({ id: "email_123" });
  });

  it("正常なリクエストで 200 を返す", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const req = makeRequest({ name: "山田太郎", email: "test@example.com", subject: "その他", message: "こんにちは" });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.ok).toBe(true);
  });

  it("subject なしでも正常送信できる", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const req = makeRequest({ name: "テスト", email: "user@example.com" });
    const res = await POST(req);
    expect(res.status).toBe(200);
  });

  it("管理者メールと自動返信の2通を送信する", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const req = makeRequest({ name: "テスト", email: "user@example.com", subject: "祈りのリクエスト", message: "詳細です" });
    await POST(req);
    expect(mockEmailSend).toHaveBeenCalledTimes(2);
  });

  it("名前が空のとき 400 を返す", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const req = makeRequest({ name: "", email: "test@example.com" });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBe("名前は必須です");
  });

  it("名前が空白のみのとき 400 を返す", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const req = makeRequest({ name: "   ", email: "test@example.com" });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("名前が100文字超のとき 400 を返す", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const req = makeRequest({ name: "a".repeat(101), email: "test@example.com" });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBe("名前が長すぎます");
  });

  it("無効なメールアドレスのとき 400 を返す", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const req = makeRequest({ name: "テスト", email: "invalid-email" });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBe("メールアドレスが無効です");
  });

  it("メッセージが2001文字のとき 400 を返す", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const req = makeRequest({ name: "テスト", email: "test@example.com", message: "a".repeat(2001) });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBe("メッセージは2000文字以内にしてください");
  });

  it("メール送信失敗のとき 500 を返す", async () => {
    mockEmailSend.mockRejectedValue(new Error("Resend error"));
    const { POST } = await import("@/app/api/contact/route");
    const req = makeRequest({ name: "テスト", email: "test@example.com" });
    const res = await POST(req);
    expect(res.status).toBe(500);
  });
});

describe("POST /api/contact（レートリミット有効）", () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    vi.resetModules();
    mockEmailSend.mockResolvedValue({ id: "email_123" });
    vi.stubEnv("UPSTASH_REDIS_REST_URL", "https://fake.upstash.io");
    vi.stubEnv("UPSTASH_REDIS_REST_TOKEN", "fake-token");
  });

  it("レートリミット超過時に 429 を返す", async () => {
    const resetTime = Date.now() + 3600000;
    mockRatelimitLimit.mockResolvedValue({
      success: false,
      limit: 10,
      remaining: 0,
      reset: resetTime,
    });
    const { POST } = await import("@/app/api/contact/route");
    const req = makeRequest({ name: "テスト", email: "test@example.com" });
    const res = await POST(req);
    expect(res.status).toBe(429);
    const json = await res.json();
    expect(json.ok).toBe(false);
  });

  it("レートリミット内なら正常に通過する", async () => {
    mockRatelimitLimit.mockResolvedValue({
      success: true,
      limit: 10,
      remaining: 9,
      reset: Date.now() + 3600000,
    });
    const { POST } = await import("@/app/api/contact/route");
    const req = makeRequest({ name: "山田", email: "ok@example.com" });
    const res = await POST(req);
    expect(res.status).toBe(200);
  });
});
