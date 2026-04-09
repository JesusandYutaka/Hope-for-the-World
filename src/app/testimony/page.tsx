import PageHero from "@/components/PageHero";

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
    title: "結婚の証",
    description: "",
    videoId: "6VfJdHpRj3o",
    date: "2026.04.08",
    category: "marriage",
  },
  {
    title: "結婚の証 2",
    description: "",
    videoId: "1NkN8gyX5Ts",
    date: "2026.04.08",
    category: "marriage",
  },
  {
    title: "神学校での証",
    description: "",
    videoId: "c6D098PQBzA",
    date: "2026.04.08",
    category: "seminary",
  },
  {
    title: "神学校での証 2",
    description: "",
    videoId: "ajRumnUiu2k",
    date: "2026.04.08",
    category: "seminary",
  },
  {
    title: "神の愛の証",
    description: "",
    videoId: "5d5x5lIDKJg",
    date: "2026.04.08",
    category: "love",
  },
  {
    title: "救いの証",
    description: "",
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
        verse={"主の栄光を国々の間で語り告げよ。その奇しいみわざを　あらゆる民の間で。まことに主は大いなる方\n大いに賛美される方。すべての神々にまさって恐れられる方だ。"}
        verseRef="詩篇 96:3-4 SKY17"
      />

      <div className="bg-white">

        {/* ブログバナー */}
        <section className="pt-16 pb-0 px-4">
          <div className="max-w-4xl mx-auto">
            <a href="https://ameblo.jp/jesusismyall/entrylist.html" target="_blank" rel="noopener noreferrer"
              className="group relative flex items-center justify-between gap-6 p-8 rounded-2xl overflow-hidden transition-all hover:shadow-lg border border-[#dbeafe]"
              style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #fefce8 100%)" }}>
              {/* Decorative glow */}
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
                  <p className="text-[#1a2e5a] font-serif font-bold text-lg leading-snug mb-0.5 group-hover:text-[#2d4a8a] transition-colors">
                    僕の日記                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    ブログを通して、今も生きておられる神様のみわざを綴っています。
                  </p>
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

        {/* カテゴリーガイド */}
        <section className="pt-16 pb-4 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((c) => (
                <div key={c.key}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${categoryColor[c.key]}`}>
                  <span>{c.label}</span>
                  <span className="opacity-40 text-xs font-normal">— {c.en}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ① ブログ記事 */}
        <section className="py-16 px-4">
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

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#e8f0fe] to-transparent" />
        </div>

        {/* ② YouTube証動画 */}
        <section className="py-16 px-4">
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
                      <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

      </div>
    </>
  );
}
