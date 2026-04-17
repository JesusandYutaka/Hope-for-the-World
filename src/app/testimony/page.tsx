import PageHero from "@/components/PageHero";
import JourneyAccordion from "@/components/JourneyAccordion";

// ── 証の記事をここに追加してください ────────────────────────────────
// category: "seminary" | "marriage" | "love" | "salvation"

const articles: {
  title: string;
  excerpt: string;
  url: string;
  label: string; // "note" | "Ameblo" など
  date: string;
  category: "seminary" | "marriage" | "love" | "salvation";
}[] = [
  {
    title: "高知での賛美集会で受け取ったこと。日本への想いと今後の歩み。",
    excerpt: "高知で開催された賛美集会に参加し、神様から新しい使命を受け取りました。「この日本の救いのために全力で走り仕えてほしい」という呼びかけに応答した証です。",
    url: "https://ameblo.jp/jesusismyall/entry-12961542096.html",
    label: "Ameblo",
    date: "2026.04.08",
    category: "love",
  },
];

// ── 証の動画をここに追加してください ────────────────────────────────

const videos: {
  title: string;
  description: string;
  videoId: string; // YouTube動画ID
  date: string;
  category: "seminary" | "marriage" | "love" | "salvation";
}[] = [
  {
    title: "恋愛と結婚の証",
    description: "恋愛中に祈っていたこと",
    videoId: "6VfJdHpRj3o",
    date: "2026.04.08",
    category: "marriage",
  },
  {
    title: "二人の救いとプロポーズの証",
    description: "イエスを信じたきっかけと馴れ初め",
    videoId: "1NkN8gyX5Ts",
    date: "2026.04.08",
    category: "marriage",
  },
  {
    title: "TCUでの証",
    description: "弟子への憧れと、伝道のきっかけ",
    videoId: "c6D098PQBzA",
    date: "2026.04.08",
    category: "seminary",
  },
  {
    title: "KBIでの証",
    description: "苦しい時、絶対に見捨てないでくださるイエス様\nCD制作の証",
    videoId: "ajRumnUiu2k",
    date: "2026.04.08",
    category: "seminary",
  },
  {
    title: "神の愛の証",
    description: "どのようにして、神の愛を体験したのか。\n御霊の賜物と日本への啓示",
    videoId: "5d5x5lIDKJg",
    date: "2026.04.08",
    category: "love",
  },
  {
    title: "救いの証",
    description: "どのようにして、イエス様に出会ったのか\nオリジナル紙芝居",
    videoId: "aJ_xOKTg3SI",
    date: "2026.04.08",
    category: "salvation",
  },
];

// ────────────────────────────────────────────────────────────────────

const categories: { key: "seminary" | "marriage" | "love" | "salvation"; label: string; en: string }[] = [
  { key: "seminary", label: "神学校での証", en: "Seminary" },
  { key: "marriage", label: "結婚の証",     en: "Marriage" },
  { key: "love",     label: "神の愛の証",   en: "God's Love" },
  { key: "salvation",label: "救いの証",     en: "Salvation" },
];

const categoryColor: Record<string, string> = {
  seminary:  "bg-[#1a2e5a]/8 text-[#1a2e5a] border-[#1a2e5a]/20",
  marriage:  "bg-rose-50 text-rose-600 border-rose-200",
  love:      "bg-amber-50 text-amber-600 border-amber-200",
  salvation: "bg-emerald-50 text-emerald-600 border-emerald-200",
};

function CategoryBadge({ cat }: { cat: string }) {
  const found = categories.find((c) => c.key === cat);
  if (!found) return null;
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${categoryColor[cat]}`}>
      {found.label}
    </span>
  );
}

const hasArticles = articles.length > 0;
const hasVideos   = videos.length > 0;

export default function TestimonyPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonies"
        title="証の部屋"
        subtitle={"神様が働かれた証を分かち合っています。\nこの証が、あなたの希望となりますように。"}
      />

      <div className="bg-white">

        {/* 証とは */}
        <section className="py-10 md:py-20 px-4 bg-gradient-to-b from-[#0d1b3e]/5 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-[#1a2e5a] font-serif font-bold text-xl md:text-2xl leading-relaxed">
                「主に感謝せよ。その御名を呼び求めよ。<br />そのみわざを、もろもろ（すべて）の民の中に知らせよ。<br />御名があがめられていることを語り継げよ。主をほめ歌え。<br />主はすばらしいことをされた。これを全地に知らせよ。」
              </p>
              <p className="text-[#C9A84C] text-sm mt-2">イザヤ 12:4,5</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  number: "01",
                  title: "証とは",
                  text: "証は、神様がなされた素晴らしいみわざを伝えることです。",
                },
                {
                  number: "02",
                  title: "信仰の励まし",
                  text: "証を読む時、聞く時、信仰が励まされ、神様がどのように働かれるのかを知ることができます。",
                },
                {
                  number: "03",
                  title: "信仰の成長",
                  text: "同じような、神様のみわざを体験することができるという信仰が生まれていきます。神のみわざを見ることを願って祈り続けるなら、それを体験することができます。",
                },
                {
                  number: "04",
                  title: "あなたの証を",
                  text: "皆さんの人生でなされた神のみわざがあれば、「つながる」フォームから教えてください。私たちの励みになります。",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="relative overflow-hidden p-8 rounded-2xl bg-white border border-[#e8f0fe] shadow-sm hover:shadow-lg hover:border-[#C9A84C]/40 transition-all group"
                >
                  <span className="absolute top-4 right-5 text-6xl font-bold text-[#e8f0fe] select-none leading-none group-hover:text-[#C9A84C]/10 transition-colors">
                    {item.number}
                  </span>
                  <div className="w-8 h-0.5 bg-[#C9A84C] mb-4" />
                  <h3 className="text-[#1a2e5a] font-serif font-bold text-base mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-[#1a2e5a] hover:bg-[#0d1b3e] text-white font-medium text-sm tracking-wide transition-all hover:shadow-lg hover:scale-[1.02]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                つながる
              </a>
            </div>
          </div>
        </section>

        {/* 証の記録 */}
        <section className="py-10 md:py-16 px-4 bg-[#fafafa]">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <div>
                <p className="text-[#C9A84C] text-[10px] font-medium tracking-[0.5em] uppercase mb-0.5">Journey</p>
                <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">証の記録</h2>
              </div>
            </div>
            <JourneyAccordion />
          </div>
        </section>

        {/* ① ブログ記事 */}
        <section className="py-10 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">証のブログ記事</h2>
            </div>

            {!hasArticles ? (
              <div className="rounded-2xl border-2 border-dashed border-[#e8f0fe] p-12 text-center">
                <svg className="w-10 h-10 text-gray-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <p className="text-gray-400 text-sm">記事リンクをここに追加できます</p>
                <p className="text-gray-300 text-xs mt-1">page.tsx の articles 配列に追加してください</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((a) => (
                  <a key={a.url} href={a.url} target="_blank" rel="noopener noreferrer"
                    className="group block p-7 rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <CategoryBadge cat={a.category} />
                      <span className="text-xs text-gray-400">{a.date}</span>
                    </div>
                    <h3 className="font-serif font-bold text-[#1a2e5a] text-lg mb-2 group-hover:text-[#C9A84C] transition-colors leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-[#C9A84C] transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {a.label}で読む
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ブログバナー */}
        <section className="pt-4 pb-0 px-4">
          <div className="max-w-4xl mx-auto">
            <a href="https://ameblo.jp/jesusismyall/entrylist.html" target="_blank" rel="noopener noreferrer"
              className="group relative flex items-center justify-between gap-6 p-8 rounded-2xl overflow-hidden transition-all hover:shadow-lg border border-[#dbeafe]"
              style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #fefce8 100%)" }}>
              <div className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none opacity-30"
                style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
              <div className="absolute bottom-0 left-1/2 w-64 h-32 pointer-events-none opacity-20"
                style={{ background: "radial-gradient(ellipse, #93c5fd 0%, transparent 70%)", transform: "translate(-30%, 50%)" }} />
              <div className="relative flex items-center gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1a2e5a, #2d4a8a)" }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#b8922a] text-xs tracking-widest uppercase mb-1 font-medium">Ameblo Blog</p>
                  <p className="text-[#1a2e5a] font-serif font-bold text-lg leading-snug mb-0.5 group-hover:text-[#2d4a8a] transition-colors">僕の日記</p>
                  <p className="text-gray-500 text-sm leading-relaxed">ブログを通して、今も生きておられる神様のみわざを綴っています。</p>
                </div>
              </div>
              <div className="relative flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-white border border-[#C9A84C]/30 group-hover:border-[#C9A84C] group-hover:shadow-md transition-all">
                <svg className="w-3.5 h-3.5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>
        </section>

        {/* ② YouTube証動画 */}
        <section className="py-10 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">
                証の動画
                <span className="text-sm font-sans font-normal text-gray-400 ml-2">— YouTube</span>
              </h2>
            </div>

            {!hasVideos ? (
              <div className="rounded-2xl border-2 border-dashed border-[#e8f0fe] p-12 text-center">
                <svg className="w-10 h-10 text-gray-200 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                </svg>
                <p className="text-gray-400 text-sm">YouTube証動画をここに追加できます</p>
                <p className="text-gray-300 text-xs mt-1">page.tsx の videos 配列に動画IDを追加してください</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {videos.map((v) => (
                  <div key={v.videoId} className="rounded-2xl overflow-hidden border border-[#e8f0fe] hover:shadow-lg transition-shadow">
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${v.videoId}`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <CategoryBadge cat={v.category} />
                        <span className="text-xs text-gray-400">{v.date}</span>
                      </div>
                      <h3 className="font-serif font-bold text-[#1a2e5a] mb-1">{v.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ③ STORIES */}
        <section className="py-10 md:py-16 px-4 bg-[#fafafa]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <div>
                <p className="text-[#C9A84C] text-[10px] font-medium tracking-[0.5em] uppercase mb-0.5">Testimonies</p>
                <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">Stories</h2>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-dashed border-[#e8f0fe] p-12 text-center">
              <svg className="w-10 h-10 text-gray-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-gray-400 text-sm">ストーリーをここに追加できます</p>
              <p className="text-gray-300 text-xs mt-1">page.tsx に stories 配列を追加してください</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
