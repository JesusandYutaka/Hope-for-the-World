import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

async function fetchLatestYouTubeVideo(): Promise<{ id: string; title: string } | null> {
  try {
    const res = await fetch(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCtj5cJhnm4DNyTO7uXUqmsQ",
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    const xml = await res.text();
    const idMatch = xml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = xml.match(/<title>([^<]+)<\/title>/g);
    const id = idMatch ? idMatch[1] : null;
    // titleMatch[0] is the channel title, [1] is the first video title
    const title = titleMatch && titleMatch[1]
      ? titleMatch[1].replace(/<\/?title>/g, "")
      : "最新動画";
    if (!id) return null;
    return { id, title };
  } catch {
    return null;
  }
}

const vision = [
  {
    icon: "✦",
    title: "Vision",
    subtitle: "ビジョン",
    text: "すべての民族とともに、王なるイエス様を賛美する。",
    verse: "ハバクク 2:14 / 黙示録 5:13 / 黙示録 7:9-12",
  },
  {
    icon: "✦",
    title: "Mission",
    subtitle: "ミッション",
    text: "すべての民族に福音を届け、イエス様の弟子とする。",
    verse: "イザヤ 49:6 / マタイ 28:18-20 / マタイ 24:14 / マルコ 16:15",
  },
  {
    icon: "✦",
    title: "Core Values",
    subtitle: "コアバリュー",
    text: "神を愛し、人を愛する。イエス様の弟子として歩む。",
    verse: "マタイ 22:37 / マタイ 22:39 / 詩篇 96:1-4 / 第二テモテ 4:2 / 使徒 2:42 / ヨハネ 13:34 / マルコ 1:17-18 / 黙示録 14:4 / ヨハネ 12:24-26",
  },
];

export default async function HomePage() {
  const latestVideo = await fetchLatestYouTubeVideo();
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Vision・Mission・Core Values */}
      <section className="py-12 md:py-24 px-4 bg-white">
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
                <p className="text-xs text-gray-400 mt-4 italic whitespace-pre-line">{item.verse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self Introduction */}
      <section className="py-12 md:py-24 px-4 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e5a]">私たちの自己紹介</h2>
          </div>

          {/* Intro: photo + opening */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-16">
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
                <p className="text-[#C9A84C] text-xs font-medium tracking-[0.3em] uppercase">Profile</p>
                <h4 className="text-lg font-serif font-bold text-[#1a2e5a]">自己紹介</h4>
                <ul className="space-y-2 text-sm">
                  <li>11人家族9人兄弟の長男。</li>
                  <li>牧師家庭に生まれ、小学２年生から学校に行かず、ホームスクールで育つ。</li>
                  <li>小学生の時、イエス様に出会い、イエス様のために生きていきたいと思うようになる。</li>
                  <li>東京基督教大学、神学部神学科卒業。</li>
                  <li>3年間社会人として働き、保育士、伝道師として働く中で、燃え尽きる経験をする。</li>
                  <li>その後、関西聖書学院を卒業。傷とプライドが取り扱われ、自然体で生きることを学ぶ。</li>
                  <li>現在は、能勢川キリスト教会で伝道師として仕えつつ、プログラマーとして働いている。</li>
                  <li>妻と0歳の息子がいる。賛美集会GLORYなど超教派の賛美集会を企画中。</li>
                  <li>夢は、イエス様がこの地上に帰って来られる日に喜び賛美しながら迎えること。</li>
                  <li>趣味は路傍伝道、カフェでイエス様と家族とデートすること。</li>
                  <li>特技は子どもたちと速攻で友達になれることです。</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Journey sections */}
          <div className="space-y-10">
            {/* イエス様との出会い */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8f0fe]">
              <p className="text-[#C9A84C] text-xs font-medium tracking-[0.3em] uppercase mb-4">Encounter</p>
              <h4 className="text-xl font-serif font-bold text-[#1a2e5a] mb-5">イエス様との出会い</h4>
              <div className="text-gray-600 leading-[1.9] space-y-4">
                <p>
                  保育園の頃、いじめを受けて、毎日泣いていました。<br />
                  小学生になると、万引きを始めました。<br />
                  父は牧師だったので、毎週教会に通っていました。<br />
                  そこで聞いた言葉が、ずっと心に引っかかっていました。
                </p>
                <p className="italic text-[#1a2e5a] border-l-2 border-[#C9A84C] pl-3">
                  「盗んではならない」
                </p>
                <p>
                  悪いことをすると、神様から地獄に入れられる。<br />
                  そう思うと、怖くてたまりませんでした。<br />
                  死の恐怖と罪悪感が、いつも心にありました。
                </p>
                <p>そんなある日、父がこう語りました。</p>
                <p className="italic text-[#1a2e5a] border-l-2 border-[#C9A84C] pl-3 leading-[2]">
                  「今まで悪いことをしてしまったら、<br />
                  　神様にごめんなさいとお祈りしてごらん。<br />
                  　神様は、赦してくださるよ」
                </p>
                <p>
                  赦されたい。<br />
                  この心の苦しみから、解放されたい。
                </p>
                <p>そう思った私は、神様に祈りました。</p>
                <p className="italic text-[#1a2e5a] border-l-2 border-[#C9A84C] pl-3">
                  「こんなことをしてきました。ごめんなさい」
                </p>
                <p>
                  涙が溢れました。<br />
                  心にあった黒い穴が、消えていくのを感じました。
                </p>
                <p>
                  今まで人生で体験したことのないような平安と喜びが、心に溢れました。<br />
                  神様が私を赦してくださった。そのことを、確かに知りました。
                </p>
                <p>
                  イエス様が全ての人の罪の身代わりとして死なれ、蘇られた。<br />
                  その時以来、「このイエス様のために、生きていきたい」と思うようになりました。
                </p>
              </div>
            </div>

            {/* 神様はあなたを個人的に愛しています */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8f0fe]">
              <p className="text-[#C9A84C] text-xs font-medium tracking-[0.3em] uppercase mb-4">God&apos;s Love</p>
              <h4 className="text-xl font-serif font-bold text-[#1a2e5a] mb-5">神様はあなたを個人的に愛しています</h4>
              <div className="text-gray-600 leading-[1.9] space-y-4">
                <p>
                  高校生の時、私の中に一つの問いがありました。<br />
                  神様は、本当に僕のことを愛しているのだろうか？
                </p>
                <p>
                  神様は全世界の全ての人を愛している。<br />
                  自分は、その中の1人に過ぎないんじゃないか。
                </p>
                <p>
                  神様の愛を、日々の生活で感じられていなかった。<br />
                  もし本当に愛してくれているなら、その愛を体験させて欲しい。<br />
                  そう思っていました。
                </p>
                <p>そんな時、アメリカに行きました。</p>
                <p>
                  2ヶ月間、ホームステイをしました。<br />
                  日本語は通じない。<br />
                  家族が恋しくなって、ホームシックになりました。
                </p>
                <p>寂しくて、一人で部屋で泣いていました。</p>
                <p>
                  ふと、トランクに聖書があるのを思い出しました。<br />
                  開くと、こんな言葉が出てきました。
                </p>
                <p className="italic text-[#1a2e5a] border-l-2 border-[#C9A84C] pl-3 leading-[2]">
                  「民よ。どんな時にも、神に信頼せよ。<br />
                  　あなたがたの心を、神の御前に注ぎ出せ。<br />
                  　神はわれらの避け所である。」<br />
                  <span className="text-xs text-gray-400 not-italic">詩篇 62:8</span>
                </p>
                <p>
                  それまで、食事の前には祈っていました。<br />
                  でも、心の底から祈ったことは、一度もなかった。<br />
                  そのことに、初めて気がつきました。
                </p>
                <p>森の中へ入っていきました。</p>
                <p>
                  ベンチに座って、賛美の音楽を聞きながら、神様に祈りました。
                </p>
                <p className="italic text-[#1a2e5a] border-l-2 border-[#C9A84C] pl-3 leading-[2]">
                  「神様、最悪です最悪です最悪です。<br />
                  　帰りたいです、帰りたいです、帰りたいです！！！」
                </p>
                <p>
                  1時間、心の中にあるものをノートに殴り書きしました。<br />
                  文句と不満を書き続けていると、涙が溢れてきました。
                </p>
                <p>その時、心にこの言葉が鳴り響いてきました。</p>
                <p className="italic text-[#1a2e5a] border-l-2 border-[#C9A84C] pl-3 leading-[2]">
                  「恐るな。わたしはあなたとともにいる」<span className="text-xs text-gray-400 not-italic">イザヤ 41:10</span><br />
                  「私の目には、あなたは高価で尊い。わたしはあなたを愛している」<span className="text-xs text-gray-400 not-italic">イザヤ 43:4</span>
                </p>
                <p>
                  神様が、僕のことを個人的に、本当に愛してくださっている。<br />
                  悲しみの涙が、喜びの涙に変わりました。
                </p>
                <p>
                  その日から、神様に祈ることにハマり始めました。<br />
                  毎日、心を注いで祈るために、散歩をするようになりました。
                </p>
                <p>
                  祈ると、神様は答えてくださいました。<br />
                  経済的な奇跡、友人がイエス様を知る奇跡、<br />
                  願いが叶えられる奇跡、進路の導きの奇跡。<br />
                  数え切れないほどの神のみわざを、体験してきました。
                </p>
                <p>
                  私が心から確信していること、それは、<br />
                  神様は生きておられる、ということです。
                </p>
                <p>
                  そしてこの神様は、愛なるお方です。<br />
                  私を愛してくださったように、<br />
                  今このサイトを見てくださっているあなたのことも、<br />
                  心から愛しておられます。
                </p>
                <p>
                  この素晴らしい神様を、知ってほしい。<br />
                  体験してほしい。<br />
                  そう願って、このサイトを作りました。
                </p>
                <p>
                  神様をさらに深く知り、<br />
                  神様ご自身を体験し、<br />
                  希望に満ちた人生を歩めるように。<br />
                  そのサポートをすることが、私の願いです。
                </p>
                <p>
                  この素晴らしいイエス様を知り、感動したなら、<br />
                  ぜひ友人や家族にも伝えてください。
                </p>
                <p>
                  希望であるイエス様を、一緒に、世界中へ伝えていけたら嬉しいです。
                </p>
              </div>
            </div>

            {/* 歩み */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8f0fe]">
              <p className="text-[#C9A84C] text-xs font-medium tracking-[0.3em] uppercase mb-4">Identity</p>
              <h4 className="text-xl font-serif font-bold text-[#1a2e5a] mb-5">新しいアイデンティティー</h4>
              <div className="text-gray-600 leading-[1.9] space-y-4">
                <p>
                  大学卒業後、幼稚園で働きながら教会の伝道師として歩みました。<br />
                  しかし、燃え尽き、休職。<br />
                  肩書きで生きていた自分は、<br />
                  「自分とは何者なのか」と悩みました。
                </p>
                <p>
                  祈りの中で、神様が教えてくださったのは、<br />
                  <span className="italic text-[#1a2e5a] border-l-2 border-[#C9A84C] pl-3 block mt-1">
                    「あなたはわたしの愛する息子だ」ということでした。
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
                  社会人3年目、<br />
                  奨学金返済にあと3年必要でした。
                </p>
                <p>
                  ある晩、神様に祈りました。
                </p>
                <p className="italic text-[#1a2e5a] border-l-2 border-[#C9A84C] pl-3 leading-[2]">
                  「これを返済してくださるなら、<br />
                  　フルタイムで福音を伝えるために働きます」
                </p>
                <p>
                  翌日、ある方が<br />
                  「豊くんの奨学金、全額返済します」<br />
                  と言ってくださいました。
                </p>
                <p>
                  神様が「福音を伝えるために働くんだよ」と<br />
                  背中を押してくださったように感じ、<br />
                  神学校へ進むことを決めました。
                </p>
                <p>
                  関西聖書学院（KBI）での学びを通して、<br />
                  私は自然体になったと感じています。
                </p>
                <p>
                  心の傷が癒やされ、プライドが砕かれる体験をしました。<br />
                  弱さや頑固さを見せつけられ、<br />
                  自分が何者でもないことを知りました。
                </p>
                <p>
                  人から評価されないと価値がないと、<br />
                  心のどこかで信じてきましたが、<br />
                  そのままで神に受け入れられ、喜ばれていることを知りました。
                </p>
                <p>
                  十字架、聖霊、宣教について学び、<br />
                  自分の召しと賜物が明らかにされていく特別な時間でした。
                </p>
              </div>
            </div>

            {/* 今 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8f0fe]">
              <p className="text-[#C9A84C] text-xs font-medium tracking-[0.3em] uppercase mb-4">Now</p>
              <h4 className="text-xl font-serif font-bold text-[#1a2e5a] mb-5">今</h4>
              <div className="text-gray-600 leading-[1.9] space-y-4">
                <p>
                  現在は、プログラマーとして働きつつ、教会の伝道師として歩み出しています。<br />
                  私の願いは、全世界のすべての人にイエス様を伝え、イエス様の弟子としてともに歩むことです。
                </p>
                <p>
                  すべての民族にイエス様の福音が伝えられる時、<br />
                  イエス様は天からこの地上に降りて来られます。<br />
                  イエス様が地上に来られる日、喜び賛美しながら迎えたい。
                </p>
                <p>
                  水が海を覆うように、全地は主の栄光を知ることで満たされる日が、必ず来ます。<br />
                  その日を楽しみにしながら、<br />
                  この地上での旅路を喜び感謝と祈りをもって、日々、イエス様の後について歩んでいきたいです。
                </p>
                <div className="pt-4 space-y-3">
                  <div className="w-12 h-px bg-[#C9A84C]/40" />
                  <p className="text-gray-600 leading-[1.9]">
                    神様の愛があなたに注がれますように。<br />
                    希望なる神様の恵みと喜びで満たされますように。
                  </p>
                  <p className="text-gray-600 leading-[1.9]">心から、あなたの祝福をお祈りしています。</p>
                  <p className="text-[#1a2e5a] font-serif font-bold text-lg mt-2">中島 豊</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Content */}
      <section className="py-12 md:py-24 px-4 bg-[#e8f0fe]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-3">Content</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e5a]">メッセージ & 賛美</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 最新動画 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-[#1a2e5a]">
                {latestVideo ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${latestVideo.id}`}
                    title={latestVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/40">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <p className="text-sm">YouTube動画が入ります</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs text-[#C9A84C] font-medium tracking-widest uppercase mb-2">最新動画</p>
                <h3 className="text-lg font-bold text-[#1a2e5a] mb-4">
                  {latestVideo ? latestVideo.title : "最新メッセージ"}
                </h3>
                <a
                  href="https://www.youtube.com/@yutakanakajima960"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#1a2e5a] hover:text-[#C9A84C] font-medium transition-colors"
                >
                  チャンネルを見る →
                </a>
              </div>
            </div>

            {/* 賛美Ministry */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-[#1a2e5a]">
                <iframe
                  src="https://www.youtube.com/embed/OCAhN8eCKp0"
                  title="最新賛美"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-[#C9A84C] font-medium tracking-widest uppercase mb-2">賛美Ministry</p>
                <h3 className="text-lg font-bold text-[#1a2e5a] mb-4">最新賛美</h3>
                <Link href="/worship" className="text-sm text-[#1a2e5a] hover:text-[#C9A84C] font-medium transition-colors">
                  もっと見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer CTA */}
      <section className="py-12 md:py-24 px-4 bg-gradient-to-br from-[#1a2e5a] to-[#0d1b3e] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block w-12 h-0.5 bg-[#C9A84C] mb-8" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">共に祈りましょう</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            あなたの祈りのリクエストをお聞かせください。<br />
            私たちはあなたのために心を合わせて祈ります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#C9A84C] hover:bg-[#e8c97a] text-[#1a2e5a] font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-[#C9A84C]/20"
            >
              祈りのリクエストを送る
            </Link>
            <Link
              href="/know-god"
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
