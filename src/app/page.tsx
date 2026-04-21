import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { fetchLatestYouTubeVideo } from "@/lib/youtube";
import { ICONS } from "@/lib/constants";

const vision = [
  {
    icon: "✦",
    title: "Vision",
    subtitle: "ビジョン",
    text: "すべての民族とともに、王なるイエス様を賛美する。",
    verse: "ハバクク 2:14 / 黙示録 5:13 / 黙示録 7:9-12",
  },
  {
    icon: "✦",
    title: "Mission",
    subtitle: "ミッション",
    text: "すべての民族に福音を届け、イエス様の弟子とする。",
    verse: "イザヤ 49:6 / マタイ 28:18-20 / マタイ 24:14 / マルコ 16:15",
  },
  {
    icon: "✦",
    title: "Core Values",
    subtitle: "コアバリュー",
    text: "神を愛し、人を愛する。イエス様の弟子として歩む。",
    verse: "マタイ 22:37 / マタイ 22:39 / 詩篇 96:1-4 / 第二テモテ 4:2 / 使徒 2:42 / ヨハネ 13:34 / マルコ 1:17-18 / 黙示録 14:4 / ヨハネ 12:24-26",
  },
];


export default async function HomePage() {
  const latestVideo = await fetchLatestYouTubeVideo();
  return (
    <>
      <HeroSection />

      {/* Vision・Mission・Core Values */}
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">私たちについて</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {vision.map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl border border-sky hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all"
              >
                <span className="text-gold text-2xl">{item.icon}</span>
                <h3 className="text-xl font-serif font-bold text-navy mt-4">{item.title}</h3>
                <p className="text-sm text-gold mb-3">{item.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
                <p className="text-xs text-gray-400 mt-4 italic whitespace-pre-line">{item.verse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self Introduction */}
      <section className="py-12 md:py-24 px-4 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">私たちの自己紹介</h2>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-16">
            <div className="w-full md:w-2/5 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                <Image
                  src="/images/profile.jpg"
                  alt="中島豊"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 space-y-5 pt-2">
              <div className="w-10 h-0.5 bg-gold" />
              <h3 className="text-2xl font-serif font-bold text-navy">
                中島 豊 <span className="text-base font-normal text-gray-400 ml-2">Nakajima Yutaka</span>
              </h3>
              <p className="text-lg font-serif text-navy font-medium">Hope for the Worldへようこそ</p>
              <div className="space-y-3 text-gray-600 leading-[1.9]">
                <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase">Profile</p>
                <h4 className="text-lg font-serif font-bold text-navy">自己紹介</h4>
                <ul className="space-y-2 text-sm">
                  <li>11人家族9人兄弟の長男。</li>
                  <li>牧師家庭に生まれ、小学２年生から学校に行かず、ホームスクールで育つ。</li>
                  <li>小学生の時、イエス様に出会い、イエス様のために生きていきたいと思うようになる。</li>
                  <li>東京基督教大学、神学部神学科卒業。</li>
                  <li>3年間社会人として働き、保育士、伝道師として働く中で、燃え尽きる経験をする。</li>
                  <li>その後、関西聖書学院を卒業。</li>
                  <li>現在は、能勢川キリスト教会で伝道師として仕えつつ、プログラマーとして働いている。</li>
                  <li>妻と0歳の息子がいる。賛美集会GLORYなど超教派の賛美集会を企画中。</li>
                  <li>夢は、イエス様がこの地上に帰って来られる日に喜び賛美しながら迎えること。</li>
                  <li>趣味は路傍伝道、カフェでイエス様と家族とデートすること。</li>
                  <li>子どもたちと速攻で友達になれることが特技。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-12 md:py-24 px-4 bg-sky">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">Content</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">メッセージ & 賛美</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 最新動画 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-navy">
                {latestVideo ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${latestVideo.id}`}
                    title={latestVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/40">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d={ICONS.YOUTUBE} />
                      </svg>
                      <p className="text-sm">YouTube動画が入ります</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs text-gold font-medium tracking-widest uppercase mb-2">最新動画</p>
                <h3 className="text-lg font-bold text-navy mb-4">
                  {latestVideo ? latestVideo.title : "最新メッセージ"}
                </h3>
                <a
                  href="https://www.youtube.com/@yutakanakajima960"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy hover:text-gold font-medium transition-colors"
                >
                  チャンネルを見る →
                </a>
              </div>
            </div>

            {/* 賛美Ministry */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-navy">
                <iframe
                  src="https://www.youtube.com/embed/OCAhN8eCKp0"
                  title="最新賛美"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-gold font-medium tracking-widest uppercase mb-2">賛美Ministry</p>
                <h3 className="text-lg font-bold text-navy mb-4">最新賛美</h3>
                <Link href="/worship" className="text-sm text-navy hover:text-gold font-medium transition-colors">
                  もっと見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer CTA */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2044] via-[#1a3560] to-[#0a1628]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold/60" />
            <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">Prayer Request</span>
            <span className="w-8 h-px bg-gold/60" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5 leading-tight">
            共に祈りましょう
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
            あなたの祈りのリクエストをお聞かせください。<br />
            私たちはあなたのために心を合わせて祈ります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #C9A84C, #e8c97a)", color: "#0e0900", boxShadow: "0 4px 24px rgba(201,168,76,0.35)" }}
            >
              <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              祈りのリクエストを送る
            </Link>
            <Link
              href="/know-god"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wide text-white/80 hover:text-white border border-white/20 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/5"
            >
              イエス様を知る
              <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
