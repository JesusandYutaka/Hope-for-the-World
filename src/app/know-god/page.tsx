"use client";

import PageHero from "@/components/PageHero";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "神はあなたを愛しておられます",
    verse: "神はそのひとり子をお与えになったほどに世を愛された。",
    ref: "ヨハネ 3:16",
    text: "神様はあなたを深く愛しておられます。その愛は条件がなく、あなたの過去や行いに関係なく注がれています。",
  },
  {
    num: "02",
    title: "すべての人は罪を犯しました",
    verse: "すべての人は罪を犯して、神の栄光を受けられなくなっています。",
    ref: "ローマ 3:23",
    text: "聖書は、私たちが神様から離れた状態（罪）にあることを教えています。この罪が神様との関係を断ち切っています。",
  },
  {
    num: "03",
    title: "イエスは解決策を与えてくださいました",
    verse: "キリストはわたしたちの罪のために死なれました。",
    ref: "Ⅰコリント 15:3",
    text: "イエス・キリストは私たちの罪の代わりに十字架で死なれ、三日目に復活されました。これによって神様との関係が回復されます。",
  },
  {
    num: "04",
    title: "信じて、受け入れる",
    verse: "心でイエスは主であると信じ、口で告白するなら、救われます。",
    ref: "ローマ 10:9",
    text: "イエス様を主として信じ、心に迎え入れることで、神様の子どもとなることができます。",
  },
];

export default function KnowGodPage() {
  return (
    <>
      <PageHero
        eyebrow="Know God"
        title="神を知りたい人へ"
        subtitle="神様があなたを待っておられます。一歩踏み出しませんか。"
      />

      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <div className="space-y-10">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-8">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1a2e5a] flex items-center justify-center">
                  <span className="text-[#C9A84C] font-serif font-bold text-sm">{s.num}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-serif font-bold text-[#1a2e5a] mb-3">{s.title}</h3>
                  <blockquote className="border-l-2 border-[#C9A84C] pl-4 mb-3">
                    <p className="text-gray-700 italic text-sm leading-relaxed">&ldquo;{s.verse}&rdquo;</p>
                    <cite className="text-xs text-[#C9A84C] not-italic">{s.ref}</cite>
                  </blockquote>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Invitation */}
          <div className="mt-20 mb-10 max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#1a2e5a]">
              イエス様を信じてみたいと思われた方へ
            </h3>
            <p className="text-gray-600 leading-[1.9] text-sm">
              もしあなたの心に、<br />
              「イエス様を信じてみたい」という思いが芽生えたなら、<br />
              ぜひ以下の「信仰の祈り」を、声に出して祈ってみてください。
            </p>
            <blockquote className="border-l-2 border-[#C9A84C] pl-4 text-left max-w-sm mx-auto">
              <p className="text-gray-700 italic text-sm leading-loose">
                「人は心に信じて義と認められ、<br />
                　口で告白して救われるのです。」
              </p>
              <cite className="text-xs text-[#C9A84C] not-italic block mt-1">ローマ人への手紙 10章10節</cite>
            </blockquote>
            <p className="text-gray-600 leading-[1.9] text-sm">
              心からこの祈りをされた方は、<br />
              すでに「神の子ども」とされ、永遠のいのちが与えられています。
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              これは、あなたの努力や行いによるものではなく、<br />
              ただ神様の恵みによるものです。
            </p>
          </div>

          {/* Prayer */}
          <div id="prayer-section" className="mt-4 p-10 rounded-2xl bg-gradient-to-br from-[#1a2e5a] to-[#0d1b3e] text-white text-center">
            <span className="text-[#C9A84C] text-xs tracking-widest uppercase">Sinner&apos;s Prayer</span>
            <h3 className="text-2xl font-serif font-bold mt-3 mb-6">信仰の祈り</h3>
            <p className="text-white/70 text-sm leading-loose mb-8 max-w-xl mx-auto">
              「イエス様、あなたが神の子であること、私の罪のために死なれ、復活されたことを信じます。
              どうか私の罪を赦し、私の心に来てください。あなたを私の主・救い主として受け入れます。
              あなたに従って生きることを選びます。イエス様のお名前で祈りします。アーメン。」
            </p>
          </div>

          {/* Next steps */}
          <div className="mt-16 max-w-2xl mx-auto text-center space-y-5">
            <h3 className="text-xl font-serif font-bold text-[#1a2e5a]">
              さらにイエス様を知りたいと思われた方へ
            </h3>
            <div className="text-gray-600 leading-[1.9] text-sm space-y-4">
              <p>
                「信じたけれど、これからどうすればいいの？」<br />
                「もっとイエス様のことを知りたい」
              </p>
              <p>
                そう思われた方は、<br />
                ぜひ、「つながる」フォームからお問い合わせください。<br />
                直接お会いするか、オンライン（Zoom）で、<br />
                一緒に祈り、聖書を学ぶ時を持つことができます。
              </p>
              <p>
                イエス様をより深く知る歩みを、<br />
                共にできることを楽しみにしています。
              </p>
              <p className="text-[#1a2e5a] font-medium">
                あなたの新しい人生の始まりに、神様の祝福が豊かにありますように。
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-2 px-8 py-3.5 bg-[#1a2e5a] hover:bg-[#0d1b3e] text-white font-medium rounded-full transition-all hover:scale-105 text-sm"
            >
              つながる
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
