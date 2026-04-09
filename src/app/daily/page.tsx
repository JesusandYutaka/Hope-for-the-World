import PageHero from "@/components/PageHero";

// ── コンテンツをここに追加してください ──────────────────────────

const noteArticles: {
  title: string;
  verse: string;
  ref: string;
  url: string;
  date: string;
  label?: string;
}[] = [
  {
    title: "みことばのチカラ — ゆたぽん",
    verse: "神のことばは生きていて、力があり…",
    ref: "ヘブル 4:12",
    url: "https://note.com/tender_poppy790",
    date: "2026.04.08",
    label: "note",
  },
  {
    title: "僕の日記 — 中島豊",
    verse: "イエス様が大好きな中島豊です。聖書の御言葉と神様のみわざを綴っています。",
    ref: "",
    url: "https://ameblo.jp/jesusismyall/entrylist.html",
    date: "2026.04.08",
    label: "Ameblo",
  },
];

const youtubeVideos: {
  title: string;
  description: string;
  embedSrc: string; // 動画ID or "videoseries?list=PLAYLIST_ID"
  date: string;
  playlistUrl?: string; // プレイリストURL（任意）
}[] = [
  {
    title: "みことばの動画シリーズ",
    description: "聖書のみことばを通して神様からの励ましと希望をお届けするプレイリストです。",
    embedSrc: "videoseries?list=PLlnLRalHLigOxkJf3LvRH6Wc4Q6HZWKuF",
    playlistUrl: "https://youtube.com/playlist?list=PLlnLRalHLigOxkJf3LvRH6Wc4Q6HZWKuF",
    date: "2026.04.08",
  },
];

const recommendedLinks: {
  title: string;
  description: string;
  url: string;
  label: string; // サイト名など
}[] = [
  {
    title: "奈良福音教会 とりなし祈りのブログ",
    description: "みことばによる励ましと、とりなしの祈りをお届けします。",
    url: "https://narafuku-intercessor.tumblr.com",
    label: "Tumblr",
  },
  {
    title: "みちや牧師の心にバスドラム",
    description: "LINEでみことばの励ましを毎日お届けします。QRコードで友だち追加。",
    url: "/michiya",
    label: "LINE",
  },
  {
    title: "御言葉の実在 — Rhapsody of Realities",
    description: "毎日のデボーション。242カ国・970言語に届けられているみことばの学び。",
    url: "https://rorjapan.com",
    label: "デボーション",
  },
];

// ─────────────────────────────────────────────────────────────────

export default function DailyPage() {
  return (
    <>
      <PageHero
        eyebrow="Daily Encouragement"
        title="日々の励まし"
        subtitle="神様のみことばを通して、今日も希望と力をお受け取りください。"
      />

      <div className="bg-white">

        {/* ① Note 記事 */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">みことばの記事</h2>
            </div>

            {noteArticles.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-[#e8f0fe] p-12 text-center">
                <svg className="w-10 h-10 text-gray-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <p className="text-gray-400 text-sm">noteの記事リンクをここに追加できます</p>
                <p className="text-gray-300 text-xs mt-1">page.tsx の noteArticles 配列に追加してください</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {noteArticles.map((article) => (
                  <a
                    key={article.url}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-7 rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all"
                  >
                    <p className="text-xs text-[#C9A84C] tracking-widest uppercase mb-3">{article.date}</p>
                    <h3 className="font-serif font-bold text-[#1a2e5a] text-lg mb-3 group-hover:text-[#C9A84C] transition-colors">
                      {article.title}
                    </h3>
                    <blockquote className="border-l-2 border-[#C9A84C]/40 pl-3 mb-4">
                      <p className="text-gray-600 text-sm italic leading-relaxed">{article.verse}</p>
                      {article.ref && <cite className="text-xs text-[#C9A84C] not-italic">{article.ref}</cite>}
                    </blockquote>
                    <div className="flex items-center gap-1 text-xs text-gray-400 group-hover:text-[#C9A84C] transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {article.label ?? "読む"}で読む
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

        {/* ② YouTube 動画 */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">みことばの動画 <span className="text-sm font-sans font-normal text-gray-400 ml-2">— YouTube</span></h2>
            </div>

            {youtubeVideos.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-[#e8f0fe] p-12 text-center">
                <svg className="w-10 h-10 text-gray-200 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                </svg>
                <p className="text-gray-400 text-sm">YouTube動画をここに追加できます</p>
                <p className="text-gray-300 text-xs mt-1">page.tsx の youtubeVideos 配列に動画IDを追加してください</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {youtubeVideos.map((v) => (
                  <div key={v.embedSrc} className="rounded-2xl overflow-hidden border border-[#e8f0fe] hover:shadow-lg transition-shadow">
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${v.embedSrc}`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-[#C9A84C] tracking-widest uppercase mb-2">{v.date}</p>
                      <h3 className="font-serif font-bold text-[#1a2e5a] mb-2">{v.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{v.description}</p>
                      {v.playlistUrl && (
                        <a
                          href={v.playlistUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-medium hover:bg-[#C9A84C]/10 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          YouTubeでプレイリストを開く
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#e8f0fe] to-transparent" />
        </div>

        {/* ③ おすすめリンク */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">おすすめのみことば <span className="text-sm font-sans font-normal text-gray-400 ml-2">— リンク集</span></h2>
            </div>

            {recommendedLinks.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-[#e8f0fe] p-12 text-center">
                <svg className="w-10 h-10 text-gray-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <p className="text-gray-400 text-sm">おすすめリンクをここに追加できます</p>
                <p className="text-gray-300 text-xs mt-1">page.tsx の recommendedLinks 配列に追加してください</p>
              </div>
            ) : (
              <div className="space-y-4">
                {recommendedLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 p-6 rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#C9A84C] tracking-widest uppercase mb-1">{link.label}</p>
                      <h3 className="font-bold text-[#1a2e5a] group-hover:text-[#C9A84C] transition-colors text-sm">{link.title}</h3>
                      <p className="text-gray-400 text-xs mt-1">{link.description}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-[#C9A84C] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

      </div>
    </>
  );
}
