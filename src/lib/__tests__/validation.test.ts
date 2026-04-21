import { describe, it, expect } from "vitest";
import {
  EMAIL_REGEX,
  validateName,
  validateEmail,
  validateMessage,
  sanitizeHeader,
  sanitizeMessage,
} from "@/lib/validation";

describe("EMAIL_REGEX", () => {
  it("有効なメールアドレスにマッチする", () => {
    expect(EMAIL_REGEX.test("user@example.com")).toBe(true);
    expect(EMAIL_REGEX.test("user.name+tag@sub.domain.co.jp")).toBe(true);
  });

  it("無効なメールアドレスにマッチしない", () => {
    expect(EMAIL_REGEX.test("invalid")).toBe(false);
    expect(EMAIL_REGEX.test("no@domain")).toBe(false);
    expect(EMAIL_REGEX.test("@nodomain.com")).toBe(false);
    expect(EMAIL_REGEX.test("spaces @example.com")).toBe(false);
    expect(EMAIL_REGEX.test("double@@example.com")).toBe(false);
  });
});

describe("validateName", () => {
  it("正常な名前を受け入れる", () => {
    expect(validateName("山田太郎")).toEqual({ ok: true });
    expect(validateName("John Doe")).toEqual({ ok: true });
  });

  it("空文字・空白のみを拒否する", () => {
    expect(validateName("")).toEqual({ ok: false, error: "名前は必須です" });
    expect(validateName("   ")).toEqual({ ok: false, error: "名前は必須です" });
  });

  it("null / undefined / 非文字列を拒否する", () => {
    expect(validateName(null)).toEqual({ ok: false, error: "名前は必須です" });
    expect(validateName(undefined)).toEqual({ ok: false, error: "名前は必須です" });
    expect(validateName(123)).toEqual({ ok: false, error: "名前は必須です" });
  });

  it("101文字以上を拒否する", () => {
    const long = "a".repeat(101);
    expect(validateName(long)).toEqual({ ok: false, error: "名前が長すぎます" });
  });

  it("ちょうど100文字は受け入れる", () => {
    const ok = "a".repeat(100);
    expect(validateName(ok)).toEqual({ ok: true });
  });
});

describe("validateEmail", () => {
  it("有効なメールを受け入れる", () => {
    expect(validateEmail("test@example.com")).toEqual({ ok: true });
  });

  it("無効なメールを拒否する", () => {
    expect(validateEmail("invalid")).toEqual({ ok: false, error: "メールアドレスが無効です" });
    expect(validateEmail("")).toEqual({ ok: false, error: "メールアドレスが無効です" });
    expect(validateEmail(null)).toEqual({ ok: false, error: "メールアドレスが無効です" });
    expect(validateEmail(undefined)).toEqual({ ok: false, error: "メールアドレスが無効です" });
  });
});

describe("validateMessage", () => {
  it("空メッセージを受け入れる", () => {
    expect(validateMessage("")).toEqual({ ok: true });
    expect(validateMessage(null)).toEqual({ ok: true });
    expect(validateMessage(undefined)).toEqual({ ok: true });
  });

  it("2000文字以内を受け入れる", () => {
    expect(validateMessage("a".repeat(2000))).toEqual({ ok: true });
  });

  it("2001文字以上を拒否する", () => {
    expect(validateMessage("a".repeat(2001))).toEqual({
      ok: false,
      error: "メッセージは2000文字以内にしてください",
    });
  });
});

describe("sanitizeHeader", () => {
  it("通常の文字列はそのまま返す", () => {
    expect(sanitizeHeader("Hello World")).toBe("Hello World");
  });

  it("\\r\\n を除去する（ヘッダーインジェクション対策）", () => {
    expect(sanitizeHeader("Subject\r\nBCC: evil@example.com")).toBe(
      "SubjectBCC: evil@example.com"
    );
    expect(sanitizeHeader("name\nnewline")).toBe("namenewline");
    expect(sanitizeHeader("name\rreturn")).toBe("namereturn");
  });
});

describe("sanitizeMessage", () => {
  it("通常の文字列はそのまま返す", () => {
    expect(sanitizeMessage("Hello\nWorld")).toBe("Hello\nWorld");
  });

  it("5連続以上の改行を \\n\\n に圧縮する", () => {
    expect(sanitizeMessage("line1\n\n\n\n\nline2")).toBe("line1\n\nline2");
    expect(sanitizeMessage("a\r\n\r\n\r\nb")).toBe("a\n\nb");
  });

  it("4連続以下の改行は変えない", () => {
    expect(sanitizeMessage("a\n\nb")).toBe("a\n\nb");
    expect(sanitizeMessage("a\n\n\n\nb")).toBe("a\n\n\n\nb");
  });
});
