import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Image from "next/image";
import { SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "宣教パートナー | Hope for the World",
  description: "祈りの宣教パートナーになりませんか？共に祈りによってこの世界に希望を届けましょう。",
};

export default function MissionsPartnerPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "宣教パートナー", href: "/missions-partner" }]} />
      <PageHero
        eyebrow="Missions Partner"
        title="宣教パートナー"
        subtitle={"祈りの宣教パートナーになりませんか？"}
      />
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <div className="mb-14">
            <div className="relative overflow-hidden rounded-3xl p-6 md:p-10 mb-8 text-center"
              style={{ background: "linear-gradient(135deg, #1a2e5a 0%, #2d4a8a 60%, #1a3a6a 100%)" }}>
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 65%)", transform: "translate(20%,-30%)" }} />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(147,197,253,0.12) 0%, transparent 65%)", transform: "translate(-20%,30%)" }} />
              <div className="relative flex justify-center mb-6">
                <div className="w-10 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              </div>
              <div className="relative space-y-4">
                <p className="text-white/70 text-sm leading-relaxed">
                  私たちは現在は日本にいますが、将来的には海外でもイエス様を伝えるという召しを受け取っています。
                </p>
                <p className="text-white font-serif font-bold text-lg md:text-xl leading-relaxed">
                  イエス様を伝えるというこの宣教の働きに、<br className="hidden md:inline" />祈りをもって共に加わり、参戦していただけませんか？
                </p>
              </div>
              <div className="relative flex justify-center mt-6">
                <div className="w-10 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "祈りのレター",
                  text: "定期的に最新の近況と祈りのレターをお送りします。",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: "祈り課題を送る",
                  text: "あなたの祈り課題も、ぜひお送りください。一つひとつ心を込めて共に祈ります。",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  ),
                  title: "ともに宣教を",
                  text: "神様のみわざが世界中に広がっていくのを一緒に体験できることを楽しみにしています。",
                },
              ].map((item, i) => (
                <div key={i}
                  className="relative flex flex-col items-center text-center p-7 rounded-2xl border border-sky bg-white hover:shadow-xl hover:border-gold/30 transition-all duration-300 group overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)" }} />
                  <div className="relative w-12 h-12 rounded-2xl mb-4 flex items-center justify-center shadow-md"
                    style={{ background: "linear-gradient(135deg, #1a2e5a 0%, #2d4a8a 100%)" }}>
                    <span className="text-gold">{item.icon}</span>
                  </div>
                  <div className="w-6 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mb-3" />
                  <p className="font-serif font-bold text-navy text-sm mb-2">{item.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <div className="px-8 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #8B5E3C 0%, #A0714F 100%)" }}>
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              <span className="text-white font-bold tracking-wide">God&apos;s Grace (中島豊&amp;愛来)　公式ライン</span>
            </div>

            <div className="bg-gradient-to-br from-white to-[#f8fffe] p-8 flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md p-3 bg-white">
                  <Image
                    src="/images/official-line-qr.png"
                    alt="公式LINE QRコード"
                    width={160}
                    height={160}
                    className="rounded-xl"
                    style={{ filter: "hue-rotate(270deg) saturate(1.3)" }}
                  />
                </div>
                <p className="text-xs text-gray-400">QRコードで友だち追加</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <a
                  href={SOCIAL.LINE_PRAYER_PARTNER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-bold text-sm tracking-wide transition-all hover:shadow-lg hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, #8B5E3C 0%, #A0714F 100%)" }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  友だち追加
                </a>
                <p className="text-xs text-gray-400">ボタンから友だち追加</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
