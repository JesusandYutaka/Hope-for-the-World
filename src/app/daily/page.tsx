import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import SectionHeader from "@/components/ui/SectionHeader";
import NumberedCard from "@/components/ui/NumberedCard";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import type { NoteArticle, DailyVideo, RecommendedLink } from "@/types";
import { ICONS } from "@/lib/constants";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "日々のみことば｜毎日の聖書からの励まし | Hope for the World",
  description: "毎日の生活の中で、聖書のみことばから力と励ましを受け取りましょう。",
};

// ── コンテンツをここに追加してください ──────────────────────────

const noteArticles: NoteArticle[] = [
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

const youtubeVideos: DailyVideo[] = [
  {
    title: "みことばの動画シリーズ",
    description: "聖書のみことばを通して神様からの励ましと希望をお届けするプレイリストです。",
    embedSrc: "videoseries?list=PLlnLRalHLigOxkJf3LvRH6Wc4Q6HZWKuF",
    playlistUrl: "https://youtube.com/playlist?list=PLlnLRalHLigOxkJf3LvRH6Wc4Q6HZWKuF",
    date: "2026.04.08",
  },
];

const recommendedLinks: RecommendedLink[] = [
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

const wordCards = [
  { number: "01", title: "神のみ言葉は心の食事",      text: "神のみことばは私たちを生かします。朝、昼、夜に食事を摂るように、人間は神の言葉を食べて（読んで、聞いて、消化し、実践して）生きるように造られています。" },
  { number: "02", title: "内側から変えてくださる",     text: "イエス様を信じる人の内側には聖霊様がおられます。聖霊様は神の言葉を教え、悟らせ、行わせてくださる助け主です。" },
  { number: "03", title: "静かに耳を傾ける",           text: "「聖霊様、神のみことばを教え、悟らせ、行わせてください」と祈りつつ、神の言葉を聞いていきましょう。" },
  { number: "04", title: "神のみ言葉が人生を豊かにする", text: "神の言葉を聞くときに信仰が生まれ、神を喜ばせることができます。神の言葉を実践できるように祈りつつ、行動に移すなら、神の祝福が人生に溢れていきます。" },
];


export default function DailyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "日々のみことば", href: "/daily" }]} />
      <PageHero
        eyebrow="Daily Word"
        title="日々のみことば"
        subtitle="聖書の言葉は、日々の生きる力になります。"
      />

      <div className="bg-white">

        {/* みことばとは */}
        <section className="py-10 md:py-20 px-4 bg-gradient-to-b from-navy-dark/5 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-navy font-serif font-bold text-xl md:text-2xl leading-relaxed">
                「人はパンだけで生きるのではなく、<br />神の口から出る一つ一つのことばで生きる」
              </p>
              <p className="text-gold text-sm mt-2">マタイ 4:4</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {wordCards.map((item) => (
                <NumberedCard key={item.number} number={item.number} title={item.title} text={item.text} />
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4">
          <Divider />
        </div>

        {/* ① YouTube 動画 */}
        <section className="py-10 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader title="みことばの動画" subtitle="— YouTube" />

            {youtubeVideos.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-sky p-12 text-center">
                <svg className="w-10 h-10 text-gray-200 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={ICONS.YOUTUBE} />
                </svg>
                <p className="text-gray-400 text-sm">YouTube動画をここに追加できます</p>
                <p className="text-gray-300 text-xs mt-1">page.tsx の youtubeVideos 配列に動画IDを追加してください</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {youtubeVideos.map((v) => (
                  <div key={v.embedSrc}>
                    <YouTubeEmbed embedSrc={v.embedSrc} title={v.title} className="mb-0 hover:shadow-lg transition-shadow" />
                    <div className="p-5">
                      <p className="text-xs text-gold tracking-widest uppercase mb-2">{v.date}</p>
                      <h3 className="font-serif font-bold text-navy mb-2">{v.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{v.description}</p>
                      {v.playlistUrl && (
                        <a
                          href={v.playlistUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-gold text-xs font-medium hover:bg-gold/10 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d={ICONS.YOUTUBE} />
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

        <div className="max-w-4xl mx-auto px-4">
          <Divider />
        </div>

        {/* ② おすすめリンク */}
        <section className="py-10 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader title="おすすめのみことば" subtitle="— リンク集" />
            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              神様についてさらに深く知ることのできる、おすすめのリンク集を紹介しています。
            </p>

            {recommendedLinks.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-sky p-12 text-center">
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
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group relative flex items-start gap-4 p-6 rounded-2xl bg-white border border-sky hover:border-gold/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky/30 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-navy to-navy-mid shadow-sm group-hover:shadow-md transition-shadow">
                      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div className="relative flex-1 min-w-0">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-gold/10 text-gold-dark mb-2">{link.label}</span>
                      <h3 className="font-bold text-navy text-sm leading-snug group-hover:text-gold transition-colors mb-1">{link.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{link.description}</p>
                    </div>
                    <div className="relative flex-shrink-0 self-center w-7 h-7 rounded-full border border-sky group-hover:border-gold/40 flex items-center justify-center transition-colors">
                      <svg className="w-3 h-3 text-gray-300 group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4">
          <Divider />
        </div>

        {/* ③ Note 記事 */}
        <section className="py-10 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader title="みことばの記事" />

            {noteArticles.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-sky p-12 text-center">
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
                    className="group relative block rounded-2xl overflow-hidden border border-sky hover:border-gold/30 hover:shadow-xl transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)" }}
                  >
                    <div className="h-1 w-full bg-gradient-to-r from-gold via-gold-light to-gold opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="p-7">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-navy/6 text-navy">
                          {article.label ?? "記事"}
                        </span>
                        <span className="text-[11px] text-gray-400">{article.date}</span>
                      </div>
                      <h3 className="font-serif font-bold text-navy text-lg leading-snug mb-4 group-hover:text-gold transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex gap-3 mb-5">
                        <div className="w-0.5 flex-shrink-0 rounded-full bg-gradient-to-b from-gold to-gold/20 self-stretch" />
                        <div>
                          <p className="text-gray-500 text-sm leading-relaxed">{article.verse}</p>
                          {article.ref && <p className="text-gold text-xs mt-1 font-medium">{article.ref}</p>}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-gold group-hover:gap-2.5 transition-all">
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
