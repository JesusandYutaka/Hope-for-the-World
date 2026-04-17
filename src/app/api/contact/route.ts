import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Upstash Redisが設定されている場合のみレートリミットを有効化
const ratelimit =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(10, "1 h"), // 1時間に10回まで
        analytics: false,
      })
    : null;

export async function POST(req: NextRequest) {
  try {
    // レートリミットチェック
    if (ratelimit) {
      const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
        "anonymous";
      const { success, limit, remaining, reset } = await ratelimit.limit(ip);

      if (!success) {
        const resetDate = new Date(reset);
        return NextResponse.json(
          { ok: false, error: "送信回数の上限に達しました。しばらく時間をおいてから再度お試しください。" },
          {
            status: 429,
            headers: {
              "X-RateLimit-Limit":     String(limit),
              "X-RateLimit-Remaining": String(remaining),
              "X-RateLimit-Reset":     resetDate.toISOString(),
              "Retry-After":           String(Math.ceil((reset - Date.now()) / 1000)),
            },
          }
        );
      }
    }

    const body = await req.json();
    const { name, email, subject, message } = body;

    // サーバーサイドバリデーション
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ ok: false, error: "名前は必須です" }, { status: 400 });
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ ok: false, error: "メールアドレスが無効です" }, { status: 400 });
    }
    if (name.length > 100) {
      return NextResponse.json({ ok: false, error: "名前が長すぎます" }, { status: 400 });
    }
    if (message && message.length > 2000) {
      return NextResponse.json({ ok: false, error: "メッセージは2000文字以内にしてください" }, { status: 400 });
    }

    // メールヘッダーインジェクション対策
    const safeName    = name.replace(/[\r\n]/g, "");
    const safeEmail   = email.replace(/[\r\n]/g, "");
    const safeSubject = (subject || "").replace(/[\r\n]/g, "");
    const safeMessage = (message || "").replace(/[\r\n]{5,}/g, "\n\n");

    const to = process.env.CONTACT_EMAIL ?? "u16106@st.tci.ac.jp";

    const from = "Hope for the World <onboarding@resend.dev>";

    await Promise.all([
      // 管理者への通知
      resend.emails.send({
        from,
        to,
        replyTo: safeEmail,
        subject: `[お問合せ] ${safeSubject || "つながるフォーム"} — ${safeName}`,
        text: `お名前: ${safeName}\nメール: ${safeEmail}\nお問合せ内容: ${safeSubject}\n\n${safeMessage}`,
      }),
      // 送信者への自動返信
      resend.emails.send({
        from,
        to: safeEmail,
        subject: "お問合せを受け付けました — Hope for the World",
        html: `
<div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#333;">
  <div style="background:#1a2e5a;padding:32px 24px;text-align:center;">
    <p style="color:#C9A84C;font-size:11px;letter-spacing:0.4em;margin:0 0 8px;">HOPE FOR THE WORLD</p>
    <p style="color:#fff;font-size:18px;font-weight:bold;margin:0;">お問合せありがとうございます</p>
  </div>
  <div style="padding:32px 24px;">
    <p style="margin-top:0;">${safeName} 様</p>
    <p>つながるフォームよりご連絡いただきありがとうございます。<br>内容を確認し、改めて返信させていただきます。<br>返信にお時間がかかる場合がございます。予めご了承ください。<br>神様の愛と祝福が豊かにありますようにお祈りしています。</p>
    <p style="margin:0;">Hope for the World　中島豊</p>
    <div style="background:#f8f9ff;border-left:3px solid #C9A84C;padding:16px 20px;margin:24px 0;border-radius:4px;">
      <p style="margin:0 0 6px;font-size:12px;color:#888;">お問合せ内容</p>
      <p style="margin:0 0 4px;font-weight:bold;color:#1a2e5a;">${safeSubject || "（未選択）"}</p>
      ${safeMessage ? `<p style="margin:12px 0 0;font-size:14px;white-space:pre-wrap;">${safeMessage}</p>` : ""}
    </div>
  </div>
  <div style="background:#f0f4ff;padding:20px 24px;text-align:center;font-size:11px;color:#999;">
    このメールは自動送信です。このメールへの返信はできません。
  </div>
</div>`,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
