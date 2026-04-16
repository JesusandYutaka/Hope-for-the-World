import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    await resend.emails.send({
      from: "Hope for the World <onboarding@resend.dev>",
      to: "u16106@st.tci.ac.jp",
      replyTo: email,
      subject: `[お問合せ] ${subject || "コンタクトフォーム"} — ${name}`,
      text: `お名前: ${name}\nメール: ${email}\nお問合せ内容: ${subject}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
