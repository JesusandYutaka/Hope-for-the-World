import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import SectionHeader from "@/components/ui/SectionHeader";
import NumberedCard from "@/components/ui/NumberedCard";
import InstagramCard from "@/components/ui/InstagramCard";
import LinkCard from "@/components/ui/LinkCard";
import Button from "@/components/ui/Button";
import { INSTAGRAM, EXTERNAL, ICONS, BRAND_COLORS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "交わり｜クリスチャンのつながり | Hope for the World",
  description: "共にイエス様を礼拝し、励まし合うクリスチャンのコミュニティです。",
  alternates: { canonical: "/fellowship" },
};

const fellowshipCards = [
  { number: "01", title: "薪の譬え",  text: "薪が1本ではすぐに火は消えてしまいますが、多くの薪があれば強く燃え続けることができます。" },
  { number: "02", title: "共に歩む",  text: "それと同じように、イエス様を信じた後、イエス様を愛する人たちと共に交わることによって信仰は強められます。" },
  { number: "03", title: "教会とは",  text: "イエス様を中心とした集まりはイエス様の体である「教会」と呼ばれ、希望であるイエス様が満ち溢れているところです。教会に繋がり、教会を通して私たちはダイナミックに希望であるイエス様をこの世界に伝えることができます。" },
  { number: "04", title: "つながる",  text: "教会に繋がっていない方は、ぜひ、能勢川キリスト教会へお越しください。日本国内にお住まいの方は、近くの教会を一緒に探すこともできます。その場合は、「つながる」フォームよりご連絡ください。" },
];

export default function FellowshipPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "コミニティー", href: "/fellowship" }]} />
      <PageHero
        eyebrow="Fellowship"
        title="コミニティー"
        subtitle="イエス様の愛で愛し合うコミニティーを求めて、共に歩みましょう。"
      />

      {/* 交わりとは */}
      <section className="py-10 md:py-20 px-4 bg-gradient-to-b from-navy-dark/5 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-navy font-serif font-bold text-xl md:text-2xl leading-relaxed">
              「わたしがあなたがたを愛したように、あなたがたも互いに愛し合うこと、これがわたしの戒めです。」
            </p>
            <p className="text-gold text-sm mt-2">ヨハネ 15:12</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {fellowshipCards.map((item) => (
              <NumberedCard key={item.number} number={item.number} title={item.title} text={item.text} />
            ))}
          </div>

          {/* コンタクトボタン + みことば */}
          <div className="flex flex-col items-center pt-20 gap-10">
            <Button variant="primary" href="/contact">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              つながる
            </Button>

            <div className="relative max-w-2xl w-full mt-8">
              <div
                className="relative overflow-hidden rounded-3xl px-10 py-10 md:px-16 md:py-12 text-center"
                style={{ background: "linear-gradient(135deg, #0d1b3e 0%, #1a2e5a 60%, #2d4a8a 100%)" }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-10"
                  style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none opacity-10"
                  style={{ background: "radial-gradient(circle, #93c5fd 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
                <p className="text-gold text-[10px] tracking-[0.5em] uppercase font-medium mb-6">Scripture</p>
                <p className="relative text-white font-serif text-lg md:text-xl leading-loose tracking-wide">
                  教会はキリストのからだであり、<br />
                  すべてのものをすべてのもので満たす方が<br />
                  満ちておられるところです。
                </p>
                <div className="flex items-center justify-center gap-3 mt-6">
                  <div className="h-px w-8 bg-gold/50" />
                  <p className="text-gold text-xs tracking-[0.3em] font-medium">エペソ 1:23</p>
                  <div className="h-px w-8 bg-gold/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* 教会HP */}
          <div className="mb-16">
            <SectionHeader title="教会HP" />
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl p-6 border border-gold/20"
                style={{ background: "linear-gradient(135deg, #fffdf5 0%, #f0f6ff 100%)" }}>
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-20"
                  style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                <div className="relative flex flex-wrap gap-2 mb-4">
                  {["祈り会", "聖書勉強会", "賛美の集い"].map((tag) => (
                    <span key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium tracking-wider"
                      style={{ background: "rgba(201,168,76,0.12)", color: "var(--color-gold-dark)", border: "1px solid rgba(201,168,76,0.35)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="relative text-navy font-medium leading-relaxed mb-1">
                  教会にて、定期的に集いを開催しています。
                </p>
                <p className="relative text-gray-500 text-sm">
                  どなたでも大歓迎です。詳細はHPまたはInstagramをご覧ください。
                </p>
              </div>

              <LinkCard
                href={EXTERNAL.NOSEGAWA_CHURCH}
                label="兵庫県川西市 — プロテスタント教会"
                title="能勢川キリスト教会"
                description="緑の木々に囲まれた森の中の教会。聖書的・伝道的・平和的な開かれた教会です。"
                icon={
                  <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                }
              />

              <InstagramCard
                href={INSTAGRAM.CHURCH.url}
                handle={INSTAGRAM.CHURCH.handle}
                label={INSTAGRAM.CHURCH.label}
                description={INSTAGRAM.CHURCH.description}
              />
            </div>
          </div>

          {/* コネクト */}
          <div>
            <SectionHeader title="コネクト" />

            <div className="relative overflow-hidden rounded-2xl p-6 mb-8 border border-sky-mid"
              style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #fefce8 100%)" }}>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-25"
                style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />
              <p className="relative text-navy font-medium text-sm leading-relaxed mb-1">SNSで繋がりませんか？</p>
              <p className="relative text-gray-500 text-sm leading-relaxed">
                日々の恵みや賛美、励ましのメッセージをSNSでもシェアしています。
              </p>
              <p className="relative text-gray-400 text-xs mt-3">
                ※ Facebook友達リクエストの際は、「サイトを見ました」と一言添えていただけると助かります。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <InstagramCard
                href={INSTAGRAM.YUTAKA.url}
                handle={INSTAGRAM.YUTAKA.handle}
              />

              <a
                href={EXTERNAL.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-6 rounded-2xl bg-white border border-sky hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)" }} />
                <div className="relative flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm" style={{ background: BRAND_COLORS.FACEBOOK }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={ICONS.FACEBOOK} />
                  </svg>
                </div>
                <div className="relative flex-1">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-0.5">Facebook</p>
                  <p className="font-bold text-navy group-hover:text-[#1877F2] transition-colors text-sm">中島豊 Facebook</p>
                </div>
                <div className="relative w-7 h-7 rounded-full border border-sky group-hover:border-[#1877F2]/40 flex items-center justify-center transition-colors flex-shrink-0">
                  <svg className="w-3 h-3 text-gray-300 group-hover:text-[#1877F2] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
