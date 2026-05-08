import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-12 md:py-24 px-4 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">私の自己紹介</h2>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-16">
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
          <div className="w-full md:w-3/5 space-y-5 pt-2">
            <div className="w-10 h-0.5 bg-gold" />
            <h3 className="text-2xl font-serif font-bold text-navy">
              中島 豊 <span className="text-base font-normal text-gray-400 ml-2">Nakajima Yutaka</span>
            </h3>
            <div className="space-y-5 text-gray-600 leading-[1.9] text-sm">
              <p>
                11人家族の長男として生まれ、小学2年生からホームスクールで育ちました。
              </p>
              <p>
                小学生の頃、万引きをやめられない時期がありました。罪悪感と恐れ、死への恐怖が私を覆いました。そんな時、イエス様が私のもとに来てくださいました。その恐れと罪悪感をすべて取り去り、代わりに平安と希望をくださったのです。その日から、私の人生は変わりました。
              </p>
              <p>
                神学を学び、伝道師として歩み始めました。でも、ある時完全に燃え尽きてしまいました。心も体もボロボロでした。職場の人間関係で傷つき、ゴミのように扱われる日々。残業と休みのない生活が続き、毎晩、神様に泣き叫びながら家路につきました。涙が止まりませんでした。身体中が痛かった。3ヶ月の休職の末、仕事を辞めました。
              </p>
              <p>
                伝道師でも、幼稚園教諭でもなくなった私は、ふと思いました。「自分は、いったい何者なのか？」祈りの中で、神様がこう言ってくださいました。「あなたはわたしの愛する息子だ。」その言葉が、私のすべてを変えました。肩書きでも、実績でも、役職でもない。神様の息子であることが、私の本当のアイデンティティーだと知ったのです。それ以来、私のアイデンティティーは揺るがなくなりました。どんな時も、神様に愛されている神の息子――それが私です。
              </p>
              <p>
                妻と0歳の息子と共に、毎日をイエス様と歩んでいます。
              </p>
              <p>
                最後に、このサイトを訪れてくださったあなたへ。あなたを心から愛し、あなたのために命を捨てたお方がいます。それが、イエス様です。私はイエス様を信じて20年が経ちました。今も、このお方と歩む人生の素晴らしさに感動し続けています。あなたにも、この喜びを体験していただきたい。ぜひこのサイトをゆっくり楽しんでください。気になることがあれば、何でも「つながる」フォームからお気軽にご連絡ください。
              </p>
              <p>神様の愛と祝福が、あなたの上に溢れますようにお祈りしています。</p>
              <p className="text-navy font-serif font-bold text-base">中島 豊</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
