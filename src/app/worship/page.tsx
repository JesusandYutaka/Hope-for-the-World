import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "賛美・Worship｜日本語オリジナルワーシップ曲 | Hope for the World",
  description: "神への賛美を通して、神様の臨在に近づきましょう。日本語オリジナル賛美曲・楽譜・Spotify配信など。",
  alternates: { canonical: "/worship" },
};
import SectionHeader from "@/components/ui/SectionHeader";
import NumberedCard from "@/components/ui/NumberedCard";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import InstagramCard from "@/components/ui/InstagramCard";
import LinkCard from "@/components/ui/LinkCard";
import Button from "@/components/ui/Button";
import type { Gathering } from "@/types";
import { YOUTUBE, INSTAGRAM, EXTERNAL, ICONS, BRAND_COLORS } from "@/lib/constants";
import Divider from "@/components/ui/Divider";
import Image from "next/image";

// ── 賛美集会情報をここに追加してください ─────────────────────────
const gatherings: Gathering[] = [];
// ─────────────────────────────────────────────────────────────────

const worshipCards = [
  { number: "01", title: "賛美とは", text: "神をほめたたえる歌が、賛美です。神の素晴らしさ、偉大さをほめたたえ、感謝と礼拝を捧げるために人間は造られました。" },
  { number: "02", title: "賛美の力", text: "私たちが神を賛美する時、人生を縛る鎖が解かれ、喜びと解放を体験することができます。" },
  { number: "03", title: "神の臨在", text: "賛美の中で神の臨在に触れ、さらに神を知り、神に近づくことができます。" },
  { number: "04", title: "ともに",   text: "ともに、神への賛美を通して、神に近づきましょう。" },
];

type StreamingService = { name: string; color: string; icon: string };

const streamingServices: StreamingService[] = [
  { name: "Spotify",      color: "#1DB954", icon: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" },
  { name: "Apple Music",  color: "#FA233B", icon: "M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a6.303 6.303 0 00-1.903-.77c-.054-.013-.108-.026-.163-.034-.728-.102-1.275-.194-3.316-.194H7.808c-2.04 0-2.59.092-3.316.194-.056.008-.11.021-.165.034a6.3 6.3 0 00-1.902.77C1.308 1.624.563 2.624.246 3.934A9.23 9.23 0 00.006 6.124C0 6.6 0 7.15 0 7.808v8.384c0 .658 0 1.208.006 1.684.033 1.29.24 2.19.727 2.93.487.742 1.244 1.23 2.18 1.43.738.164 1.39.23 3.316.23h8.308c1.926 0 2.578-.066 3.316-.23.937-.2 1.694-.688 2.18-1.43.487-.74.694-1.64.727-2.93.006-.476.006-1.026.006-1.684V7.808c0-.658 0-1.208-.006-1.684zm-8.99 7.776l-4.757-2.747V6.84l4.757 2.747v4.313z" },
  { name: "YouTube Music",color: "#FF0000", icon: "M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z" },
  { name: "LINE MUSIC",   color: BRAND_COLORS.LINE_GREEN, icon: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.92 14.04l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.228.52z" },
];


export default function WorshipPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "賛美・Worship", href: "/worship" }]} />
      <PageHero
        eyebrow="MUSIC × WORSHIP"
        title="賛美・Worship"
        subtitle="ともに、神への賛美を通して、神に近づきましょう。"
      />

      {/* 賛美とは */}
      <section className="py-10 md:py-20 px-4 bg-gradient-to-b from-navy-dark/5 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-navy font-serif font-bold text-sm md:text-2xl leading-loose">
              「主を賛美するために民は創造された。」
            </p>
            <p className="text-gold text-xs md:text-sm mt-2">詩篇 102:19 — 新共同訳</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {worshipCards.map((item) => (
              <NumberedCard key={item.number} number={item.number} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* ① オリジナル賛美 */}
          <div className="mb-20">
            <SectionHeader title="オリジナル賛美" subtitle="— YouTube" />
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              新しいオリジナル賛美を作って発信しています。
            </p>
            <YouTubeEmbed
              embedSrc={`videoseries?list=${YOUTUBE.PLAYLISTS.WORSHIP}`}
              title="オリジナル賛美プレイリスト"
              className="mb-6"
            />
            <div className="flex justify-center">
              <Button variant="outline" href={EXTERNAL.WORSHIP_PLAYLIST} external>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={ICONS.YOUTUBE} />
                </svg>
                オリジナル賛美プレイリストを開く
              </Button>
            </div>
          </div>

          <Divider className="mb-20" />

          {/* ② 賛美集会情報 */}
          <div className="mb-20">
            <SectionHeader title="賛美集会情報" />
            <div className="text-gray-600 text-sm leading-[1.9] mb-8 space-y-4">
              <p>一緒に、神様を賛美しませんか？</p>
              <p>定期的に賛美集会を開催しています。<br />初めての方も、どなたでも大歓迎です。</p>
              <p>賛美を通して、神様の愛と素晴らしさを<br />共に体験できることを楽しみにしています。</p>
              <p>集会の日程や詳細は、Instagramでお知らせしています。<br />ぜひフォローして、お気軽にご参加ください。</p>
            </div>

            <InstagramCard
              href={INSTAGRAM.GLORY.url}
              handle={INSTAGRAM.GLORY.handle}
              label={INSTAGRAM.GLORY.label}
              className="mb-8"
            />
            <InstagramCard
              href={INSTAGRAM.LOVEOBI.url}
              handle={INSTAGRAM.LOVEOBI.handle}
              label={INSTAGRAM.LOVEOBI.label}
              className="mb-8"
            />

            {gatherings.length > 0 && (
              <div className="space-y-6">
                {gatherings.map((g, i) => (
                  <div key={i} className="rounded-2xl border border-sky hover:border-gold/30 hover:shadow-md transition-all overflow-hidden">
                    <div className="bg-gradient-to-r from-navy to-navy/80 px-7 py-4">
                      <h3 className="text-white font-serif font-bold text-lg">{g.title}</h3>
                    </div>
                    <div className="px-7 py-6 grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">日程</p>
                          <p className="text-navy font-medium text-sm">{g.date}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">時間</p>
                          <p className="text-navy font-medium text-sm">{g.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">場所</p>
                          <p className="text-navy font-medium text-sm">{g.location}</p>
                          {g.address && <p className="text-gray-400 text-xs mt-0.5">{g.address}</p>}
                        </div>
                      </div>
                      {g.note && (
                        <div className="flex items-start gap-3">
                          <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-xs text-gray-400 mb-0.5">備考</p>
                            <p className="text-gray-600 text-sm">{g.note}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    {g.mapUrl && (
                      <div className="px-7 pb-6">
                        <a
                          href={g.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-gold hover:underline"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          地図を開く
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Divider className="mb-20" />

          {/* 賛美集会GLORY 動画 */}
          <div className="mb-20">
            <SectionHeader title="賛美集会GLORY" subtitle="— 動画" />
            <div className="text-gray-600 text-sm leading-[1.9] mb-8 space-y-3">
              <p>賛美集会のアーカイブも公開しています。</p>
              <p className="text-gray-500 italic">
                「どんな雰囲気なんだろう？」<br />
                「参加してみたいけど、まず様子を見たい」
              </p>
              <p>そんな方は、ぜひアーカイブをご覧ください。</p>
            </div>
            <YouTubeEmbed
              embedSrc={YOUTUBE.VIDEOS.GLORY}
              title="賛美集会GLORY"
              className="mb-6"
            />
            <LinkCard
              href={YOUTUBE.CHANNELS.GLORY}
              label="YouTube"
              title="GLORY公式YouTubeチャンネル"
              icon={
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d={ICONS.YOUTUBE} />
                </svg>
              }
            />
            <div className="mt-6 flex justify-center">
              <Image
                src="/images/glory-logo.jpg"
                alt="GLORY — HABAKKUK 2:14"
                width={480}
                height={270}
                className="rounded-xl object-contain"
              />
            </div>
          </div>

          <Divider className="mb-20" />

          {/* ③ 楽譜・コード */}
          <div>
            <SectionHeader title="楽譜・コード" />
            <LinkCard
              href={EXTERNAL.SCORE_PDF}
              label="PDF"
              title="希望賛美CD楽譜"
              icon={
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
            <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
              <div className="text-gray-600 text-sm leading-[1.9] space-y-3 flex-1">
                <p className="font-medium text-navy">賛美楽譜、自由にお使いください</p>
                <p>新しいオリジナル賛美を収録した<br />「希望賛美CD」の楽譜を公開しています。</p>
                <p>個人の賛美でも、<br />教会の礼拝でも、<br />自由にダウンロード・印刷していただけます。</p>
                <p>神様への賛美の時間に、お役に立てれば嬉しいです。</p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/kibou-praise-cd.jpg"
                  alt="希望賛美CD"
                  width={220}
                  height={220}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>

          <Divider className="mb-20" />

          {/* ④ 配信サービス */}
          <div>
            <SectionHeader title="配信サービス" subtitle="— Spotify・Apple Music・YouTube Music ほか" />
            <div className="text-gray-600 text-sm leading-[1.9] space-y-3 mb-8">
              <p className="font-medium text-navy">「希望」賛美CDを配信中</p>
              <p>各種配信サービスで、<br />「希望」賛美CDのライブ音源を聴くことができます。</p>
              <p>Spotify、Apple Music、Amazon Musicなど、<br />お好きなサービスでお楽しみください。</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {streamingServices.map((s) => (
                <a
                  key={s.name}
                  href={EXTERNAL.STREAMING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-xl border border-sky hover:border-gold/40 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: s.color }}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-navy group-hover:text-gold transition-colors">{s.name}</span>
                </a>
              ))}
            </div>
            <a
              href={EXTERNAL.STREAMING}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-navy to-navy/80 hover:from-navy-dark hover:to-navy-dark/80 transition-all"
            >
              <div>
                <p className="text-gold text-xs tracking-widest uppercase mb-1">All Platforms</p>
                <p className="text-white font-bold">全ての配信サービスで聴く</p>
                <p className="text-white/50 text-xs mt-0.5">Spotify / Apple Music / Amazon Music ほか40+</p>
              </div>
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
