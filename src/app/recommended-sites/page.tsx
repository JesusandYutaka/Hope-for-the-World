import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { RecommendedSite, RecommendedSiteGroup } from "@/types";

export const metadata: Metadata = {
  title: "お勧めサイト｜信仰の助けになるリソース | Hope for the World",
  description: "クリスチャンの信仰生活に役立つウェブサイト・リソースをご紹介します。",
};

const categories: RecommendedSiteGroup[] = [
  {
    id: "mission",
    label: "宣教・伝道",
    en: "Mission & Evangelism",
    sites: [
      {
        name: "ジョシュアプロジェクト",
        description: "世界中の未伝道民族グループの情報を集め、宣教・祈り・支援活動を優先するためのデータや統計を公開している宣教支援サイト。",
        url: "https://joshuaproject.net/",
      },
      {
        name: "フィニッシングザタスク",
        description: "大宣教命令を2033年までに世界で果たすことを目標に、世界のクリスチャンや教会をつなぐグローバル運動の公式サイト。",
        url: "https://finishingthetask.com/ja/",
      },
      {
        name: "オペレーションワールド",
        description: "世界各国の祈りの必要性や統計データをまとめ、国々や民族のために祈ることを支援するサイト。",
        url: "https://operationworld.org/",
      },
      {
        name: "OMFインターナショナル日本",
        description: "東アジア・日本を中心にキリスト教の福音を伝える活動や祈り・支援の情報、宣教に関わる方法を紹介しているクリスチャン宣教団体の情報発信サイト。",
        url: "https://omf.org/jp/",
      },
      {
        name: "OM Japan",
        description: "世界各地や日本での宣教活動、ニュース、募集・祈りの情報を発信しているクリスチャンのミッション支援サイト。",
        url: "https://www.om.org/jp/home",
      },
      {
        name: "アンテオケ宣教会",
        description: "日本の教会と協力して世界中の未伝道地域や諸国に宣教師を送り出し、その働きや支援・祈りの情報を発信しているキリスト教の海外宣教団体。",
        url: "https://jantiochm1977.net/",
      },
      {
        name: "カバレッジプロジェクト",
        description: "日本国内の未伝道地域（教会がまだない地域）を調べて可視化し、福音を届けることを目指すミッション・プロジェクトの情報発信サイト。",
        url: "https://coveralljapan.com/",
      },
      {
        name: "CGNTV Japan",
        description: "キリスト教系テレビ放送局「CGNTV Japan」の日本向け公式サイト。聖書に基づいた番組やメッセージ、信仰に関するコンテンツを提供している。",
        url: "http://japan.cgntv.net/",
      },
    ],
  },
  {
    id: "bible",
    label: "聖書・学び",
    en: "Bible & Learning",
    sites: [
      {
        name: "Bible Project",
        description: "聖書のストーリーやテーマをわかりやすいアニメーション動画・図解で解説する、聖書理解を助けるビジュアル学習サイト（日本語）。",
        url: "https://bibleproject.com/japanese/",
      },
      {
        name: "ともに聴く聖書",
        description: "聖書の言葉を音声・ドラマ形式でみんなで聴くことを支援するグローバルな聖書朗読プロジェクト。",
        url: "https://www.prsi.org/ja/app",
      },
      {
        name: "YouVersion",
        description: "世界で最も利用されている無料のオンライン聖書プラットフォーム。複数の翻訳・読書プランを提供。",
        url: "https://www.bible.com/ja",
      },
      {
        name: "コンサイスバイブル",
        description: "聖書の重要な箇所を厳選して分かりやすくまとめたオンライン版／アプリ版の聖書閲覧・学習サイト。",
        url: "https://concise.bible/ja/home#app",
      },
      {
        name: "BlueLetterBible",
        description: "複数の聖書翻訳を読んだり、原語（ギリシャ語・ヘブライ語）辞書、注解、辞典などを使って深く聖書を学べる聖書研究プラットフォーム。",
        url: "https://www.blueletterbible.org/",
      },
    ],
  },
  {
    id: "devotion",
    label: "デボーション",
    en: "Devotional",
    sites: [
      {
        name: "御言葉の実在",
        description: "キリスト教デボーションや信仰に関する教え・励ましを日本語で紹介している、クリスチャン向けの信仰メッセージサイト。",
        url: "https://rorjapan.com/",
      },
      {
        name: "デイリーブレッド",
        description: "聖書のみことばに基づいた日々の励ましや学びのメッセージを日本語で毎日提供している「Our Daily Bread」の公式サイト。",
        url: "https://japanese-odb.org/",
      },
    ],
  },
  {
    id: "youtube",
    label: "YouTube",
    en: "YouTube Channels",
    sites: [
      {
        name: "ごうちゃんねる",
        description: "聖書の視点から国際情勢・歴史・社会の話題を解説する、キリスト教・福音系のYouTubeチャンネル。",
        url: "https://www.youtube.com/channel/UCs5CyAOajP1M1-89u0tq6Aw",
      },
      {
        name: "New Revelation Church",
        description: "聖書預言と聖書言語の視点から、現代の世界情勢についてわかりやすいメッセージを発信されています。",
        url: "https://www.youtube.com/@NewRevelationChurch_is",
      },
    ],
  },
  {
    id: "message",
    label: "メッセージ",
    en: "Messages & Teaching",
    sites: [
      {
        name: "リック・ウォーレン",
        description: "世界的に著名なキリスト教牧師リック・ウォーレンの教えやメッセージを日本語で紹介・配信している公式サイト。",
        url: "https://rickwarren.org/ja/",
      },
      {
        name: "ジョイス・マイヤー",
        description: "米国の著名な聖書教師ジョイス・マイヤーによる福音メッセージを日本語で視聴・読める公式オンラインサイト。",
        url: "https://tv.joycemeyer.org/japanese/",
      },
      {
        name: "デレク・プリンス",
        description: "世界的に著名な聖書教師デレク・プリンスの聖書教え・メッセージ、教材を日本語で提供しているリソースサイト。",
        url: "https://www.derekprince.com/ja-jp",
      },
    ],
  },
  {
    id: "student",
    label: "学生・コミュニティ",
    en: "Students & Community",
    sites: [
      {
        name: "hi-b.a.（高校生聖書伝道協会）",
        description: "高校生のためのクリスチャン伝道団体「hi-b.a.」が、集会・キャンプ・信仰の活動や支援プロジェクトの情報を発信している公式サイト。",
        url: "https://www.hi-ba.com/",
      },
      {
        name: "キャンパスクルセードフォークライスト CCC",
        description: "大学生・社会人向けに福音を伝え、信仰の学び・交わり・宣教活動を支援するクリスチャン伝道団体の公式サイト。",
        url: "https://www.japanccc.org/",
      },
      {
        name: "キリスト者学生会 KGK",
        description: "大学生・大学院生を中心に福音を伝え、聖書の学び・信仰生活を支援する学生伝道団体の情報発信ページ。",
        url: "https://www.kgkjapan.org/",
      },
      {
        name: "Onfire Japan",
        description: "日本のクリスチャンを励まし、弟子訓練・祈り・賛美・コミュニティ活動を支援するクリスチャン・ミニストリー。",
        url: "https://onfire.jp/",
      },
    ],
  },
  {
    id: "business",
    label: "ビジネス・社会",
    en: "Business & Society",
    sites: [
      {
        name: "CBMC",
        description: "クリスチャンのビジネスパーソンが聖書の教えを職場・社会に生かしつつ互いに励まし合い、福音を伝える活動を支援する国際団体の日本支部。",
        url: "https://cbmc.jp/",
      },
      {
        name: "クリスチャントゥデイ",
        description: "日本を拠点にしたキリスト教ニュースメディアで、国内外の教会・信仰・社会に関する最新情報や記事を発信しているオンラインのキリスト教ニュースサイト。",
        url: "https://www.christiantoday.co.jp/",
      },
      {
        name: "青木仁志（クリスチャン経営者）",
        description: "クリスチャン経営者・青木仁志氏の公式サイト。信仰と経営を融合した歩みを発信している。",
        url: "https://www.aokisatoshi.com/",
      },
    ],
  },
];

const categoryAccents: Record<string, { from: string; to: string }> = {
  mission: { from: "#0d1b3e", to: "#1a2e5a" },
  bible:   { from: "#3b2a08", to: "#7a5c1a" },
  message: { from: "#2a1a3e", to: "#6b3fa0" },
  student: { from: "#0a3320", to: "#155c3a" },
  devotion: { from: "#1a3a2a", to: "#2e7d52" },
  youtube: { from: "#7a0c0c", to: "#c0392b" },
  business:{ from: "#2d1540", to: "#5b2d82" },
};

export default function RecommendedSitesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "お勧めサイト", href: "/recommended-sites" }]} />
      <PageHero
        eyebrow="Recommended"
        title="お勧めサイト"
        subtitle={"信仰の歩みに役立つ、厳選したサイトをご紹介します。"}
      />

      <div className="bg-[#f8faff]">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 space-y-16">
          {categories.map((cat, index) => {
            const accent = categoryAccents[cat.id] ?? categoryAccents.mission;
            return (
              <section key={cat.id}>
                <div
                  className="relative overflow-hidden rounded-2xl px-8 py-6 mb-8 flex items-center gap-5"
                  style={{ background: `linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)` }}
                >
                  <div className="absolute right-0 top-0 w-40 h-40 rounded-full pointer-events-none opacity-10"
                    style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                  <div>
                    <p className="text-gold text-[10px] tracking-[0.5em] uppercase font-medium mb-1">{cat.en}</p>
                    <h2 className="text-white font-serif font-bold text-xl">{cat.label}</h2>
                  </div>
                  <span className="ml-auto text-white/20 font-bold text-4xl font-serif select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.sites.map((site: RecommendedSite) => (
                    <a
                      key={site.url}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col bg-white rounded-2xl border border-sky p-6 hover:border-gold/40 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h3 className="font-serif font-bold text-navy text-base leading-snug group-hover:text-gold transition-colors">
                          {site.name}
                        </h3>
                        <svg className="flex-shrink-0 w-4 h-4 text-gray-300 group-hover:text-gold transition-colors mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-[13px] leading-relaxed flex-1">{site.description}</p>
                      <div className="mt-4 flex items-center gap-1.5">
                        <div className="w-4 h-px bg-gold/50 group-hover:w-8 transition-all duration-300" />
                        <span className="text-[11px] text-gray-400 group-hover:text-gold transition-colors truncate">{new URL(site.url).hostname}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
