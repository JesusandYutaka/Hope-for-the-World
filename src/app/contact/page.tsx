"use client";

import PageHero from "@/components/PageHero";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { useState } from "react";
import type { ContactFormStatus } from "@/types";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<ContactFormStatus>("idle");

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
      <BreadcrumbJsonLd items={[{ name: "つながる", href: "/contact" }]} />
      <PageHero
        eyebrow="Connect"
        title="つながる"
        subtitle={"イエス様について知りたい方、\n祈ってほしいことがある方、\nお気軽にご連絡ください。\n\n返信に少しお時間をいただく場合もありますが、\n一つひとつ丁寧にお返事させていただきます。"}
      />
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          {status === "done" ? (
            <div className="text-center py-16">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-navy text-xl mb-2">送信しました</h3>
              <p className="text-gray-500 text-sm">お問合せありがとうございます。確認次第ご連絡いたします。</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm text-navy underline underline-offset-4"
              >
                もう一度送る
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">お名前 *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    aria-required="true"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-sky focus:outline-none focus:border-gold text-sm transition-colors"
                    placeholder="山田 太郎"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">メールアドレス *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-sky focus:outline-none focus:border-gold text-sm transition-colors"
                    placeholder="example@email.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">お問合せ内容</label>
                <select
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-sky focus:outline-none focus:border-gold text-sm text-gray-600 transition-colors bg-white"
                >
                  <option value="">選択してください</option>
                  <option>イエス様について知りたい</option>
                  <option>イエス様を信じてみたい</option>
                  <option>聖書を学んでみたい</option>
                  <option>メッセージ・賛美等の依頼</option>
                  <option>近くの教会を教えてほしい</option>
                  <option>神様を感じた出来事を分かち合いたい</option>
                  <option>祈りのリクエスト</option>
                  <option>その他</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">日程・詳細</label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-sky focus:outline-none focus:border-gold text-sm transition-colors resize-none"
                  placeholder="ご依頼の詳細、ご希望の日程などをお書きください。"
                />
              </div>
              {status === "error" && (
                <p role="alert" className="text-red-500 text-sm text-center">送信に失敗しました。時間をおいて再度お試しください。</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-navy hover:bg-navy-dark text-white font-medium rounded-full transition-all hover:scale-[1.02] text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
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
