import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="最新ニュースレター"
        subtitle="ミニストリーの最新情報をお届けします。"
      />
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">

          <div className="mb-16">
            <SectionHeader title="公式ライン" />
            <Link
              href="/official-line"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-sky hover:border-[#00B900]/40 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#00B900" }}>
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-1">LINE公式アカウント</p>
                <p className="font-bold text-navy group-hover:text-[#00B900] transition-colors text-lg">公式ライン</p>
                <p className="text-gray-500 text-sm mt-1">最新の近況と祈りのレターを配信中！</p>
              </div>
              <svg className="w-5 h-5 text-gray-300 group-hover:text-[#00B900] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-sky to-transparent mb-16" />
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl border border-sky overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] bg-gradient-to-br from-navy/10 to-gold/10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gold/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gold tracking-widest uppercase mb-2">Vol. {i} — 2026.0{i}</p>
                  <div className="h-5 bg-gray-100 rounded w-3/4 animate-pulse mb-3" />
                  <div className="space-y-1.5">
                    <div className="h-3 bg-gray-100 rounded w-full animate-pulse" />
                    <div className="h-3 bg-gray-100 rounded w-5/6 animate-pulse" />
                  </div>
                  <div className="mt-5">
                    <span className="text-sm text-navy font-medium hover:text-gold transition-colors cursor-pointer">
                      読む →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-12 italic">ニュースレターを準備中です</p>
        </div>
      </section>
    </>
  );
}
