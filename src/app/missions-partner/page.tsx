import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "宣教パートナー | Hope for the World",
  description: "宣教パートナーとして共に福音を世界に届けませんか。祈りと支援で宣教の働きを支えてください。",
};

const benefits = [
  {
    number: "01",
    title: "共に祈る",
    text: "宣教の最前線を共に祈りで支えてください。あなたの祈りが、世界を変える力になります。",
  },
  {
    number: "02",
    title: "共に歩む",
    text: "定期的な近況報告をお届けします。宣教の現場で何が起きているかを共に知り、共に喜んでください。",
  },
  {
    number: "03",
    title: "共に広げる",
    text: "このサイトや活動を周りの方に紹介してください。あなたの一言が、誰かとイエス様の出会いのきっかけになります。",
  },
];

export default function MissionsPartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Missions Partner"
        title="宣教パートナー"
        subtitle="共に福音を世界へ届けませんか。"
      />

      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8 text-gray-600 leading-[1.9]">
          <p>
            「地の果てにまでわたしの救いをもたらす者とする。」（イザヤ 49:6）
          </p>
          <p>
            宣教は、一人ではできません。祈り、支え、共に歩んでくださるパートナーが必要です。
            このページを訪れてくださったあなたに、宣教パートナーとして共に立っていただけたら、これほど嬉しいことはありません。
          </p>
          <p>
            宣教パートナーとして、以下の形で共に歩んでいただけます。
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-2xl border border-sky hover:border-gold/30 hover:shadow-xl transition-all p-8 relative overflow-hidden"
              >
                <span className="absolute top-4 right-6 text-5xl font-bold text-sky/60 select-none">
                  {item.number}
                </span>
                <h3 className="text-lg font-serif font-bold text-navy mb-3 relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed relative z-10">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-gray-600 leading-[1.9]">
            宣教パートナーとして共に歩んでくださる方は、「つながる」フォームからぜひご連絡ください。
            どんな小さな一歩も、神様の大きな計画の一部です。
          </p>
          <Button variant="gold" href="/contact">
            つながる
          </Button>
        </div>
      </section>
    </>
  );
}
