"use client";

import PageHero from "@/components/PageHero";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (res.ok) {
        setStatus("done");
        setName(""); setEmail(""); setSubject(""); setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="つながる"
        subtitle={"イエス様について知りたい方、\n祈ってほしいことがある方、\nお気軽にご連絡ください。\n\n返信に少しお時間をいただく場合もありますが、\n一つひとつ丁寧にお返事させていただきます。"}
      />
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          {status === "done" ? (
            <div className="text-center py-16">
              <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-[#1a2e5a] text-xl mb-2">送信しました</h3>
              <p className="text-gray-500 text-sm">お問合せありがとうございます。確認次第ご連絡いたします。</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm text-[#1a2e5a] underline underline-offset-4"
              >
                もう一度送る
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1a2e5a] mb-2">お名前 *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#e8f0fe] focus:outline-none focus:border-[#C9A84C] text-sm transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a2e5a] mb-2">メールアドレス *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#e8f0fe] focus:outline-none focus:border-[#C9A84C] text-sm transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a2e5a] mb-2">お問合せ内容</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#e8f0fe] focus:outline-none focus:border-[#C9A84C] text-sm text-gray-600 transition-colors bg-white"
                >
                  <option value="">選択してください</option>
                  <option>イエス様を信じてみたい</option>
                  <option>聖書を学んでみたい</option>
                  <option>メッセージ、賛美奉仕を依頼したい</option>
                  <option>近くの教会を教えてほしい</option>
                  <option>神のみわざを分かち合いたい</option>
                  <option>祈りのリクエスト</option>
                  <option>その他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a2e5a] mb-2">日程・詳細</label>
                <textarea
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#e8f0fe] focus:outline-none focus:border-[#C9A84C] text-sm transition-colors resize-none"
                  placeholder="ご依頼の詳細、ご希望の日程などをお書きください。"
                />
              </div>
              {status === "error" && (
                <p className="text-red-500 text-sm text-center">送信に失敗しました。時間をおいて再度お試しください。</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-[#1a2e5a] hover:bg-[#0d1b3e] text-white font-medium rounded-full transition-all hover:scale-[1.02] text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "送信中..." : "送信する"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
