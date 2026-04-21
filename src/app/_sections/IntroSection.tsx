import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-12 md:py-24 px-4 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">私たちの自己紹介</h2>
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
            <p className="text-lg font-serif text-navy font-medium">Hope for the Worldへようこそ</p>
            <div className="space-y-3 text-gray-600 leading-[1.9]">
              <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase">Profile</p>
              <h4 className="text-lg font-serif font-bold text-navy">自己紹介</h4>
              <ul className="space-y-2 text-sm">
                <li>11人家族9人兄弟の長男。</li>
                <li>牧師家庭に生まれ、小学２年生から学校に行かず、ホームスクールで育つ。</li>
                <li>小学生の時、イエス様に出会い、イエス様のために生きていきたいと思うようになる。</li>
                <li>東京基督教大学、神学部神学科卒業。</li>
                <li>3年間社会人として働き、保育士、伝道師として働く中で、燃え尽きる経験をする。</li>
                <li>その後、関西聖書学院を卒業。</li>
                <li>現在は、能勢川キリスト教会で伝道師として仕えつつ、プログラマーとして働いている。</li>
                <li>妻と0歳の息子がいる。賛美集会GLORYなど超教派の賛美集会を企画中。</li>
                <li>夢は、イエス様がこの地上に帰って来られる日に喜び賛美しながら迎えること。</li>
                <li>趣味は路傍伝道、カフェでイエス様と家族とデートすること。</li>
                <li>子どもたちと速攻で友達になれることが特技。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
