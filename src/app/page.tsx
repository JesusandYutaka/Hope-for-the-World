import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

const vision = [
  {
    icon: "✦",
    title: "Vision",
    subtitle: "ビジョン",
    text: "水が海を覆うように、地が主の栄光を知ることで満たされること。",
    verse: "ハバクク 2:14",
  },
  {
    icon: "✦",
    title: "Mission",
    subtitle: "ミッション",
    text: "福音を携え、賛美と祈りによって、世界の果てまで主の光を届ける。",
    verse: "イザヤ 49:6",
  },
  {
    icon: "✦",
    title: "Core Values",
    subtitle: "コアバリュー",
    text: "愛・祈り・奉仕。キリストの愛に根ざし、みことばを生き、世界に仕える。",
    verse: "マタイ 5:16",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Vision・Mission・Core Values */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e5a]">私たちについて</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {vision.map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/30 hover:shadow-xl hover:shadow-[#C9A84C]/5 transition-all"
              >
                <span className="text-[#C9A84C] text-2xl">{item.icon}</span>
                <h3 className="text-xl font-serif font-bold text-[#1a2e5a] mt-4">{item.title}</h3>
                <p className="text-sm text-[#C9A84C] mb-3">{item.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
                <p className="text-xs text-gray-400 mt-4 italic">{item.verse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self Introduction */}
      <section className="py-24 px-4 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e5a]">私たちの自己紹介</h2>
          </div>

          {/* Intro: photo + opening */}
          <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
            {/* Photo */}
            <div className="w-full md:w-2/5 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                <Image
                  src="/images/profile.jpg"
                  alt="中島豊"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Opening text */}
            <div className="w-full md:w-3/5 space-y-5 pt-2">
              <div className="w-10 h-0.5 bg-[#C9A84C]" />
              <h3 className="text-2xl font-serif font-bold text-[#1a2e5a]">
                中島 豊 <span className="text-base font-normal text-gray-400 ml-2">Nakajima Yutaka</span>
              </h3>
              <p className="text-lg font-serif text-[#1a2e5a] font-medium">
                Hope for the Worldへようこそ
              </p>
              <div className="space-y-3 text-gray-600 leading-[1.9]">
                <p>
                  はじめまして、中島豊です。<br />
                  9人兄弟の長男として、11人の大家族に生まれました。<br />
                  現在は、妻と息子と共に暮らしています。
                </p>
                <p>
                  小学生の時、イエス様に出会いました。<br />
                  その愛と素晴らしさに心が動かされ、<br />
                  「この方のために生きたい」と思うようになりました。
                </p>
              </div>
            </div>
          </div>

          {/* Journey sections */}
          <div className="space-y-10">
            {/* 歩み */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8f0fe]">
              <p className="text-[#C9A84C] text-xs font-medium tracking-[0.3em] uppercase mb-4">Journey</p>
              <h4 className="text-xl font-serif font-bold text-[#1a2e5a] mb-5">歩み</h4>
              <div className="text-gray-600 leading-[1.9] space-y-4">
                <p>
                  ホームスクールで育ち、聖書を土台に学びました。<br />
                  大学では神様をさらに深く知りたいと願い、<br />
                  東京基督教大学へ進学。<br />
                  神様はそこで、私の世界観を大きく広げてくださいました。
                </p>
                <p>
                  卒業後、幼稚園で働きながら教会の伝道師として歩みました。<br />
                  しかし、休みのない日々とパワハラで燃え尽き、休職。<br />
                  肩書きで生きていた自分は、<br />
                  「自分とは何者なのか」と深く悩みました。
                </p>
                <p>
                  祈りの中で、神様が教えてくださったのは、<br />
                  <span className="italic text-[#1a2e5a] border-l-2 border-[#C9A84C] pl-3 block mt-1">
                    「あなたは私に愛されている息子だ」ということでした。
                  </span>
                </p>
              </div>
            </div>

            {/* 転機 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8f0fe]">
              <p className="text-[#C9A84C] text-xs font-medium tracking-[0.3em] uppercase mb-4">Turning Point</p>
              <h4 className="text-xl font-serif font-bold text-[#1a2e5a] mb-5">転機</h4>
              <div className="text-gray-600 leading-[1.9] space-y-4">
                <p>
                  転職して放課後児童デイで働き、<br />
                  保育士として障害児保育に携わりました。
                </p>
                <p>
                  ある日、こんな祈りを捧げました。
                </p>
                <p className="italic text-[#1a2e5a] border-l-2 border-[#C9A84C] pl-3 leading-[2]">
                  「奨学金を返済してくださるなら、<br />
                  　フルタイムで福音を伝えます」
                </p>
                <p>
                  神様はその祈りに答え、必要が満たされました。<br />
                  「福音のために生きなさい」という<br />
                  神様の背中を押す声を感じ、神学校へ進むことを決めました。
                </p>
                <p>
                  関西聖書学院（KBI）での学びを通して、<br />
                  私は自然体になったと感じています。
                </p>
                <p>
                  自分のプライドが砕かれ、傷が癒やされる体験をしました。<br />
                  自分の弱さや頑固さを見せつけられ、<br />
                  自分が何者でもないことを知りました。
                </p>
                <p>
                  人から評価されないと価値がないと、<br />
                  心のどこかで信じてきましたが、<br />
                  そのままで神に受け入れられ、喜ばれていることを知りました。
                </p>
                <p>
                  多くの恵みを受け、<br />
                  自分の召しと賜物が明らかにされていく時間でした。
                </p>
              </div>
            </div>

            {/* 今 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8f0fe]">
              <p className="text-[#C9A84C] text-xs font-medium tracking-[0.3em] uppercase mb-4">Now</p>
              <h4 className="text-xl font-serif font-bold text-[#1a2e5a] mb-5">今</h4>
              <div className="text-gray-600 leading-[1.9] space-y-4">
                <p>
                  現在は、プログラマーとして働きつつ、教会の伝道師として仕えています。<br />
                  私の願いは、日本と世界のすべての民族にイエス様が伝えられること。<br />
                  あらゆる国の人々にイエス様を伝え、共にイエス様の弟子として歩みたいと願っています。
                </p>
                <div className="text-center pt-4 space-y-3">
                  <div className="w-12 h-px bg-[#C9A84C]/40 mx-auto" />
                  <p className="text-gray-500 leading-[2] italic">
                    神の愛があなたに注がれますように。<br />
                    希望なる神の恵みと喜びで満たされますように。
                  </p>
                  <p className="text-gray-400 text-sm">心から、あなたの祝福をお祈りしています。</p>
                  <p className="text-[#1a2e5a] font-serif font-bold text-lg mt-2">中島 豊</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24 px-4 bg-[#e8f0fe]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-3">Content</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e5a]">メッセージ & 賛美</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "最新メッセージ", category: "メッセージ", href: "/messages" },
              { title: "最新賛美", category: "賛美Ministry", href: "/worship" },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-[#1a2e5a] flex items-center justify-center">
                  <div className="text-center text-white/40">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <p className="text-sm">YouTube動画が入ります</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#C9A84C] font-medium tracking-widest uppercase mb-2">{v.category}</p>
                  <h3 className="text-lg font-bold text-[#1a2e5a] mb-4">{v.title}</h3>
                  <Link href={v.href} className="text-sm text-[#1a2e5a] hover:text-[#C9A84C] font-medium transition-colors">
                    もっと見る →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1a2e5a] to-[#0d1b3e] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block w-12 h-0.5 bg-[#C9A84C] mb-8" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">共に祈りましょう</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            あなたの祈りのリクエストをお聞かせください。<br />
            私たちはあなたのために心を合わせて祈ります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prayer"
              className="px-8 py-4 bg-[#C9A84C] hover:bg-[#e8c97a] text-[#1a2e5a] font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-[#C9A84C]/20"
            >
              祈りのリクエストを送る
            </Link>
            <Link
              href="/know-jesus"
              className="px-8 py-4 border-2 border-white/30 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-bold rounded-full transition-all hover:scale-105"
            >
              イエス様を知る
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
