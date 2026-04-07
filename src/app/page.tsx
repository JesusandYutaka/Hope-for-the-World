import HeroSection from "@/components/HeroSection";
import Link from "next/link";

const vision = [
  {
    icon: "✦",
    title: "Vision",
    subtitle: "ビジョン",
    text: "水が海を覆うように、地が主の栄光を知ることで満たされること。",
    verse: "ハバクク 2:14",
  },
  {
    icon: "✦",
    title: "Mission",
    subtitle: "ミッション",
    text: "福音を携え、賛美と祈りによって、世界の果てまで主の光を届ける。",
    verse: "イザヤ 49:6",
  },
  {
    icon: "✦",
    title: "Core Values",
    subtitle: "コアバリュー",
    text: "愛・祈り・奉仕。キリストの愛に根ざし、みことばを生き、世界に仕える。",
    verse: "マタイ 5:16",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Vision・Mission・Core Values */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e5a]">私たちについて</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {vision.map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/30 hover:shadow-xl hover:shadow-[#C9A84C]/5 transition-all"
              >
                <span className="text-[#C9A84C] text-2xl">{item.icon}</span>
                <h3 className="text-xl font-serif font-bold text-[#1a2e5a] mt-4">{item.title}</h3>
                <p className="text-sm text-[#C9A84C] mb-3">{item.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
                <p className="text-xs text-gray-400 mt-4 italic">{item.verse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24 px-4 bg-[#e8f0fe]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-3">Content</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e5a]">メッセージ & 賛美</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "最新メッセージ", category: "メッセージ", href: "/messages" },
              { title: "最新賛美", category: "賛美Ministry", href: "/worship" },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-[#1a2e5a] flex items-center justify-center">
                  <div className="text-center text-white/40">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <p className="text-sm">YouTube動画が入ります</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#C9A84C] font-medium tracking-widest uppercase mb-2">{v.category}</p>
                  <h3 className="text-lg font-bold text-[#1a2e5a] mb-4">{v.title}</h3>
                  <Link href={v.href} className="text-sm text-[#1a2e5a] hover:text-[#C9A84C] font-medium transition-colors">
                    もっと見る →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1a2e5a] to-[#0d1b3e] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block w-12 h-0.5 bg-[#C9A84C] mb-8" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">共に祈りましょう</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            あなたの祈りのリクエストをお聞かせください。<br />
            私たちはあなたのために心を合わせて祈ります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prayer"
              className="px-8 py-4 bg-[#C9A84C] hover:bg-[#e8c97a] text-[#1a2e5a] font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-[#C9A84C]/20"
            >
              祈りのリクエストを送る
            </Link>
            <Link
              href="/know-jesus"
              className="px-8 py-4 border-2 border-white/30 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-bold rounded-full transition-all hover:scale-105"
            >
              イエス様を知る
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { href: "/worship", label: "賛美Ministry", desc: "オリジナル賛美・楽譜" },
            { href: "/resources", label: "リソース", desc: "論文・教会情報" },
            { href: "/contact", label: "ミニストリー依頼", desc: "メッセージ・賛美依頼" },
            { href: "https://www.studentinjapan.com", label: "Student in Japan", desc: "福音・学生ミニストリー", external: true },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={"external" in item && item.external ? "_blank" : undefined}
              rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
              className="p-6 rounded-xl border border-[#e8f0fe] hover:border-[#C9A84C]/40 hover:shadow-md transition-all group"
            >
              <h4 className="font-bold text-[#1a2e5a] group-hover:text-[#C9A84C] transition-colors text-sm mb-1">
                {item.label} {"external" in item && item.external ? "↗" : ""}
              </h4>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
