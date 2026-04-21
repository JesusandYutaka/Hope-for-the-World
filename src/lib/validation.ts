export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 2000;

export function validateName(name: unknown): { ok: boolean; error?: string } {
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return { ok: false, error: "名前は必須です" };
  }
  if (name.length > MAX_NAME_LENGTH) {
    return { ok: false, error: "名前が長すぎます" };
  }
  return { ok: true };
}

export function validateEmail(email: unknown): { ok: boolean; error?: string } {
  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    return { ok: false, error: "メールアドレスが無効です" };
  }
  return { ok: true };
}

export function validateMessage(message: unknown): { ok: boolean; error?: string } {
  if (message && typeof message === "string" && message.length > MAX_MESSAGE_LENGTH) {
    return { ok: false, error: `メッセージは${MAX_MESSAGE_LENGTH}文字以内にしてください` };
  }
  return { ok: true };
}

export function sanitizeHeader(str: string): string {
  return str.replace(/[\r\n]/g, "");
}

export function sanitizeMessage(str: string): string {
  return str.replace(/[\r\n]{5,}/g, "\n\n");
}
