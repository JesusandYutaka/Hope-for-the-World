import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JourneyAccordion from "@/components/JourneyAccordion";
import SectionHeader from "@/components/ui/SectionHeader";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import Button from "@/components/ui/Button";
import type { TestimonyVideo, TestimonyCategory } from "@/types";
import { EXTERNAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "証の部屋｜神様との出会いの証 | Hope for the World",
  description: "イエス様に出会い、人生が変わった証をお届けします。あなたも神様の愛を体験できます。",
  alternates: { canonical: "/testimony" },
};

// ── 証の動画をここに追加してください ────────────────────────────────

const videos: TestimonyVideo[] = [
  { title: "恋愛と結婚の証",          description: "恋愛中に祈っていたこと",                            videoId: "6VfJdHpRj3o", date: "2026.04.08", category: "marriage"  },
  { title: "二人の救いとプロポーズの証",description: "イエスを信じたきっかけと馴れ初め",               videoId: "1NkN8gyX5Ts", date: "2026.04.08", category: "marriage"  },
  { title: "TCUでの証",               description: "弟子への憧れと、伝道のきっかけ",                    videoId: "c6D098PQBzA", date: "2026.04.08", category: "seminary" },
  { title: "KBIでの証",               description: "苦しい時、絶対に見捨てないでくださるイエス様\nCD制作の証", videoId: "ajRumnUiu2k", date: "2026.04.08", category: "seminary" },
  { title: "神の愛の証",              description: "どのようにして、神の愛を体験したのか。\n御霊の賜物と日本への啓示", videoId: "5d5x5lIDKJg", date: "2026.04.08", category: "love"     },
  { title: "救いの証",                description: "どのようにして、イエス様に出会ったのか\nオリジナル紙芝居", videoId: "aJ_xOKTg3SI", date: "2026.04.08", category: "salvation"},
];

// ─────────────────────────────────────────────────────────────────

const categories: { key: TestimonyCategory; label: string; en: string }[] = [
  { key: "seminary",  label: "神学校での証", en: "Seminary"   },
  { key: "marriage",  label: "結婚の証",     en: "Marriage"   },
  { key: "love",      label: "神の愛の証",   en: "God's Love" },
  { key: "salvation", label: "救いの証",     en: "Salvation"  },
];

const categoryColor: Record<TestimonyCategory, string> = {
  seminary:  "bg-navy/8 text-navy border-navy/20",
  marriage:  "bg-rose-50 text-rose-600 border-rose-200",
  love:      "bg-amber-50 text-amber-600 border-amber-200",
  salvation: "bg-emerald-50 text-emerald-600 border-emerald-200",
};

function CategoryBadge({ cat }: { cat: TestimonyCategory }) {
  const found = categories.find((c) => c.key === cat);
  if (!found) return null;
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${categoryColor[cat]}`}>
      {found.label}
    </span>
  );
}

const testimonyCards = [
  { number: "01", title: "これは本当の話です",  text: "私が実際に体験した、神様との出会いのストーリーを分かち合っています。" },
  { number: "02", title: "あなたにも起こりうる", text: "「自分には関係ない」と思わないでください。同じ神様が、あなたの人生にも働いてくださいます。" },
  { number: "03", title: "人生が変わった",       text: "神様と出会った時、人生は変わりました。苦しみの中にいた私が、希望を見つけた話です。" },
  { number: "04", title: "あなたのストーリーも", text: "神様との出会いを体験したら、ぜひ「つながる」フォームで教えてください。" },
];

const hasVideos = videos.length > 0;

export default function TestimonyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "ストーリー", href: "/testimony" }]} />
      <PageHero
        eyebrow="Stories"
        title="ストーリー"
        subtitle={"神様が働かれたストーリーを分かち合っています。\nこのストーリーが、あなたの希望となりますように。"}
      />

      <div className="bg-white">

        {/* 証とは — 背景フォト */}
        <section className="relative overflow-hidden py-20 md:py-36 px-4">
          {/* 背景画像 */}
          <div className="absolute inset-0">
            <Image
              src="/images/testimony-bg.jpg"
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(5,15,40,0.75) 0%, rgba(5,15,40,0.55) 45%, rgba(5,15,40,0.80) 100%)",
              }}
            />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* みことば */}
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="w-8 h-px bg-gold/60" />
                <span className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase">Scripture</span>
                <span className="w-8 h-px bg-gold/60" />
              </div>
              <p className="text-white font-serif font-bold text-base md:text-2xl leading-loose drop-shadow-lg">
                「心を尽くして 私は主に感謝をささげます。<br />あなたの奇しいみわざのすべてを語り告げます。<br />私はあなたを喜び 誇ります。<br />いと高き方よ あなたの御名をほめ歌います。」
              </p>
              <p className="text-gold/80 text-xs md:text-sm mt-4 tracking-widest">詩篇 9:1,2</p>
            </div>

            {/* カード — ガラスモーフィズム */}
            <div className="grid md:grid-cols-2 gap-4 mb-14">
              {testimonyCards.map((item) => (
                <div
                  key={item.number}
                  className="relative overflow-hidden p-7 rounded-2xl border border-white/10 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  <span className="absolute top-4 right-5 text-6xl font-bold text-white/5 select-none leading-none">
                    {item.number}
                  </span>
                  <div className="w-6 h-0.5 bg-gold mb-4" />
                  <h3 className="text-white font-serif font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* つながるボタン */}
            <div className="text-center">
              <Button variant="gold" href="/contact">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                つながる
              </Button>
            </div>
          </div>
        </section>

        {/* 証の記録 */}
        <section className="py-10 md:py-16 px-4 bg-[#fafafa]">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-0.5 bg-gold" />
              <div>
                <p className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase mb-0.5">Journey</p>
                <h2 className="text-xl font-serif font-bold text-navy">私のストーリー</h2>
              </div>
            </div>
            <JourneyAccordion />
          </div>
        </section>


        {/* ブログバナー */}
        <section className="pt-4 pb-0 px-4">
          <div className="max-w-4xl mx-auto">
            <a href={EXTERNAL.AMEBLO} target="_blank" rel="noopener noreferrer"
              className="group relative flex items-center justify-between gap-6 p-8 rounded-2xl overflow-hidden transition-all hover:shadow-lg border border-sky-mid"
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
                  <p className="text-gold-dark text-xs tracking-widest uppercase mb-1 font-medium">Ameblo Blog</p>
                  <p className="text-navy font-serif font-bold text-lg leading-snug mb-0.5 group-hover:text-navy-mid transition-colors">僕の日記</p>
                  <p className="text-gray-500 text-sm leading-relaxed">ブログを通して、今も生きておられる神様のみわざを綴っています。</p>
                </div>
              </div>
              <div className="relative flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-white border border-gold/30 group-hover:border-gold group-hover:shadow-md transition-all">
                <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>
        </section>

        {/* ② YouTube証動画 */}
        <section className="py-10 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader title="証の動画" subtitle="— YouTube" />
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              証とは、神様が私の人生にしてくださったストーリーを他の人にシェアすることです。
            </p>

            {!hasVideos ? (
              <div className="rounded-2xl border-2 border-dashed border-sky p-12 text-center">
                <p className="text-gray-400 text-sm">YouTube証動画をここに追加できます</p>
                <p className="text-gray-300 text-xs mt-1">page.tsx の videos 配列に動画IDを追加してください</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {videos.map((v) => (
                  <div key={v.videoId}>
                    <YouTubeEmbed embedSrc={v.videoId} title={v.title} className="hover:shadow-lg transition-shadow" />
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <CategoryBadge cat={v.category} />
                        <span className="text-xs text-gray-400">{v.date}</span>
                      </div>
                      <h3 className="font-serif font-bold text-navy mb-1">{v.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{v.description}</p>
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
