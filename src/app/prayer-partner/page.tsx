import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function PrayerPartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Prayer Partner"
        title="祈りのパートナー"
        subtitle="あなたのために、心を合わせて祈ります。"
      />
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          {/* 3ステップ */}
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-0 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-[#e8f0fe] z-0" />
              {[
                { step: "01", title: "公式ラインを追加", desc: "下のQRコードから友だち追加してください。" },
                { step: "02", title: "リクエストを送る", desc: "チャットに祈り課題を送ってください。" },
                { step: "03", title: "共に祈る", desc: "神様の御手が動かれることを一緒に信じます。" },
              ].map((s) => (
                <div key={s.step} className="relative z-10 flex flex-col items-center text-center px-6 py-4">
                  <div className="w-16 h-16 rounded-full bg-[#1a2e5a] flex items-center justify-center mb-5 shadow-lg shadow-[#1a2e5a]/20">
                    <span className="text-[#C9A84C] font-serif font-bold text-lg">{s.step}</span>
                  </div>
                  <h3 className="font-bold text-[#1a2e5a] mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 公式ライン */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            {/* Top bar */}
            <div className="bg-[#00B900] px-8 py-4 flex items-center gap-3">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              <span className="text-white font-bold tracking-wide">公式ライン</span>
            </div>

            {/* Body */}
            <div className="bg-gradient-to-br from-white to-[#f8fffe] p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <p className="text-[#1a2e5a] font-serif text-xl font-bold leading-snug">
                  公式LINEで、つながりませんか？
                </p>
                <div className="text-gray-500 text-sm leading-loose space-y-3">
                  <p>私たちの活動を、祈りをもって支えていただけたら<br />とても嬉しいです。<br />私たちの近況と祈りのレターを定期的に送らせていただきます。</p>
                  <p>あなたの祈り課題も、ぜひお送りください。<br />返信が遅くなることもありますが、<br />一つひとつ心を込めて、共に祈らせていただきます。</p>
                  <p>神様のみわざを、<br />共に体験できることを楽しみにしています。</p>
                </div>
                <div className="pt-1 border-t border-gray-100">
                  <p className="text-xs text-gray-400 font-medium mb-1">【LINE公式アカウント】</p>
                  <p className="text-xs text-[#00B900]">友だち追加はこちら →</p>
                </div>
              </div>

              {/* QR */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md p-3 bg-white">
                  <Image
                    src="/images/official-line-qr.png"
                    alt="公式LINE QRコード"
                    width={160}
                    height={160}
                    className="rounded-xl"
                  />
                </div>
                <p className="text-xs text-gray-400">QRコードで友だち追加</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
