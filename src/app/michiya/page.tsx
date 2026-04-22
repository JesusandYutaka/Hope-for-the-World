import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { ICONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "みちや牧師の心にバスドラム | Hope for the World",
  description: "LINEで毎日みことばの励ましをお受け取りください。みちや牧師から日々の励ましと祈りをお届けします。",
};

export default function MichiyaPage() {
  return (
    <>
      <PageHero
        eyebrow="Recommended"
        title="みちや牧師の心にバスドラム"
        subtitle="LINEで毎日みことばの励ましをお受け取りください。"
      />
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            下のQRコードをスキャンして、LINEで友だち追加してください。
          </p>
          <div className="inline-block rounded-2xl overflow-hidden shadow-lg border border-sky p-4 bg-white">
            <Image
              src="/images/michiya-line-qr.png"
              alt="みちや牧師 LINE QRコード"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
          <div className="mt-8">
            <a
              href="https://line.me/R/ti/p/@595nzafv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00B900] hover:bg-[#009900] text-white font-bold text-sm tracking-wide transition-all hover:shadow-lg hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d={ICONS.LINE} />
              </svg>
              友だち追加
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            こちらのボタンからでも友達追加できます
          </p>
        </div>
      </section>
    </>
  );
}
