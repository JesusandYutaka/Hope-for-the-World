import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
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
    const safeMessage = (message || "").replace(/[\r\n]{5,}/g, "\n\n"); // 連続改行を制限

    const to = process.env.CONTACT_EMAIL ?? "u16106@st.tci.ac.jp";

    await resend.emails.send({
      from: "Hope for the World <onboarding@resend.dev>",
      to,
      replyTo: safeEmail,
      subject: `[お問合せ] ${safeSubject || "コンタクトフォーム"} — ${safeName}`,
      text: `お名前: ${safeName}\nメール: ${safeEmail}\nお問合せ内容: ${safeSubject}\n\n${safeMessage}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
