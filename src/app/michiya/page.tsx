import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function MichiyaPage() {
  return (
    <>
      <PageHero
        eyebrow="Recommended"
        title="みちや牧師の心にバスドラム"
        subtitle="LINEで毎日みことばの励ましをお受け取りください。"
      />
      <section className="py-24 px-4 bg-white">
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            下のQRコードをスキャンして、LINEで友だち追加してください。
          </p>
          <div className="inline-block rounded-2xl overflow-hidden shadow-lg border border-[#e8f0fe] p-4 bg-white">
            <Image
              src="/images/michiya-line-qr.png"
              alt="みちや牧師 LINE QRコード"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
          <p className="text-xs text-gray-400 mt-6">
            スマートフォン版LINEのQRコードリーダーでスキャンしてください。
          </p>
        </div>
      </section>
    </>
  );
}
