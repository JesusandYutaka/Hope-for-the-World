import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { validateEnv } from "@/lib/env";

const REQUIRED = [
  "RESEND_API_KEY",
  "CONTACT_EMAIL",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
] as const;

beforeEach(() => {
  REQUIRED.forEach((key) => vi.stubEnv(key, "test-value"));
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("validateEnv", () => {
  it("必須変数が全て揃っているときはエラーを投げない", () => {
    expect(() => validateEnv()).not.toThrow();
  });

  it.each(REQUIRED)("%s が未設定のとき変数名を含む Error をスロー", (key) => {
    vi.stubEnv(key, "");
    expect(() => validateEnv()).toThrow(key);
  });
});
