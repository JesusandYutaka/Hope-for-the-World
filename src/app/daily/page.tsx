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
    title: "僕の日記",
    verse: "聖書のみことばと神様のみわざを綴っています。",
    ref: "",
    url: "https://ameblo.jp/jesusismyall/entrylist.html",
    date: "2026.04.08",
    label: "Ameblo",
  },
  {
    title: "みことばのチカラ",
    verse: "聖書のみことばを分かち合っています。",
    ref: "",
    url: "https://note.com/tender_poppy790",
    date: "2026.04.08",
    label: "note",
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
    title: "御言葉の実在 — Rhapsody of Realities",
    description: "毎日のデボーション。242カ国・970言語に届けられているみことばの学び。",
    url: "https://rorjapan.com",
    label: "デボーション",
  },
  {
    title: "みちや牧師の心にバスドラム",
    description: "LINEでみことばの励ましを毎日お届けします。QRコードで友だち追加。",
    url: "/michiya",
    label: "LINE",
  },
  {
    title: "奈良福音教会 とりなし祈りのブログ",
    description: "みことばによる励ましと、とりなしの祈りをお届けします。",
    url: "https://narafuku-intercessor.tumblr.com",
    label: "Tumblr",
  },
  {
    title: "人生について、神について安心して質問できる場所",
    description: "神についてさらに知れるサイト",
    url: "https://www.studentinjapan.com",
    label: "Web",
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

        {/* みことばとは */}
        <section className="py-10 md:py-20 px-4 bg-gradient-to-b from-[#0d1b3e]/5 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-[#1a2e5a] font-serif font-bold text-xl md:text-2xl leading-relaxed">
                「人はパンだけで生きるのではなく、<br />神の口から出る一つ一つのことばで生きる」
              </p>
              <p className="text-[#C9A84C] text-sm mt-2">マタイ 4:4</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  number: "01",
                  title: "みことばの力",
                  text: "神のみことばは私たちを生かします。朝、昼、夜に食事を摂るように、人間は神の言葉を食べて（読んで、聞いて、消化し、実践して）生きるように造られています。",
                },
                {
                  number: "02",
                  title: "聖霊様の助け",
                  text: "イエス様を信じる人の内側には聖霊様がおられます。聖霊様は神の言葉を教え、悟らせ、行わせてくださる助け主です。",
                },
                {
                  number: "03",
                  title: "祈りながら聞く",
                  text: "「聖霊様、神のみことばを教え、悟らせ、行わせてください」と祈りつつ、神の言葉を聞いていきましょう。",
                },
                {
                  number: "04",
                  title: "信仰と祝福",
                  text: "神の言葉を聞く時に信仰が生まれます。信仰は神を喜ばせ、祈りによって神の言葉を実践する時、神の祝福が人生に溢れていきます。",
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
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#e8f0fe] to-transparent" />
        </div>

        {/* ① YouTube 動画 */}
        <section className="py-10 md:py-20 px-4">
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

        {/* ② おすすめリンク */}
        <section className="py-10 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">おすすめのみことば <span className="text-sm font-sans font-normal text-gray-400 ml-2">— リンク集</span></h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              神様についてさらに深く知ることのできる、おすすめのリンク集を紹介しています。
            </p>

            {recommendedLinks.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-[#e8f0fe] p-12 text-center">
                <svg className="w-10 h-10 text-gray-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <p className="text-gray-400 text-sm">おすすめリンクをここに追加できます</p>
                <p className="text-gray-300 text-xs mt-1">page.tsx の recommendedLinks 配列に追加してください</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {recommendedLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#e8f0fe] hover:border-[#C9A84C]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7ff] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    {/* Icon */}
                    <div className="relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#1a2e5a] to-[#2d4a8a] shadow-sm group-hover:shadow-md transition-shadow">
                      <svg className="w-4 h-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    {/* Text */}
                    <div className="relative flex-1 min-w-0">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#C9A84C]/10 text-[#b8922a] mb-2">{link.label}</span>
                      <h3 className="font-bold text-[#1a2e5a] text-sm leading-snug group-hover:text-[#C9A84C] transition-colors mb-1">{link.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{link.description}</p>
                    </div>
                    {/* Arrow */}
                    <div className="relative flex-shrink-0 self-center w-7 h-7 rounded-full border border-[#e8f0fe] group-hover:border-[#C9A84C]/40 flex items-center justify-center transition-colors">
                      <svg className="w-3 h-3 text-gray-300 group-hover:text-[#C9A84C] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
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

        {/* ③ Note 記事 */}
        <section className="py-10 md:py-20 px-4">
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
                    className="group relative block rounded-2xl overflow-hidden border border-[#e8f0fe] hover:border-[#C9A84C]/30 hover:shadow-xl transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)" }}
                  >
                    {/* Top accent bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-[#C9A84C] via-[#e8c97a] to-[#C9A84C] opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="p-7">
                      {/* Label + date row */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#1a2e5a]/6 text-[#1a2e5a]">
                          {article.label ?? "記事"}
                        </span>
                        <span className="text-[11px] text-gray-400">{article.date}</span>
                      </div>
                      {/* Title */}
                      <h3 className="font-serif font-bold text-[#1a2e5a] text-lg leading-snug mb-4 group-hover:text-[#C9A84C] transition-colors">
                        {article.title}
                      </h3>
                      {/* Verse */}
                      <div className="flex gap-3 mb-5">
                        <div className="w-0.5 flex-shrink-0 rounded-full bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/20 self-stretch" />
                        <div>
                          <p className="text-gray-500 text-sm leading-relaxed">{article.verse}</p>
                          {article.ref && <p className="text-[#C9A84C] text-xs mt-1 font-medium">{article.ref}</p>}
                        </div>
                      </div>
                      {/* CTA */}
                      <div className="flex items-center gap-1.5 text-xs font-medium text-[#C9A84C] group-hover:gap-2.5 transition-all">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {article.label ?? "読む"}で読む
                      </div>
                    </div>
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
