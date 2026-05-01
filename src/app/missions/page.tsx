import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import type { MissionPaper } from "@/types";

export const metadata: Metadata = {
  title: "宣教・Missions | Hope for the World",
  description: "世界に福音を届けるミッション活動。海外・国内宣教の現場から、神の働きをお伝えします。",
};

const papers: MissionPaper[] = [
  {
    id: "kbi-thesis",
    title: "7000の未伝道部族に宣教師を派遣する3万人のメガチャーチを日本で開拓するには",
    subtitle: "神の計画が前進するために生き、イエスの来られる道を備えるために",
    label: "KBI 卒業論文",
    file: "/kbi-thesis.pdf",
  },
  {
    id: "tcu-thesis",
    title: "なぜハドソン・テイラーは神様に用いられたのか",
    subtitle: "チャイナイングランドミッション（現OMF)を創設した、中国奥地宣教の先駆者",
    label: "TCU 卒業論文",
    file: "/tcu-thesis.pdf",
  },
];

export default function MissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission Essays"
        title="宣教エッセイ"
        subtitle="聖書に基づく宣教・信仰のエッセイを公開しています。"
      />
      <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-white to-[#f5f8ff]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #1a2e5a 0%, transparent 70%)", filter: "blur(40px)" }} />
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-gold/50" />
            <span className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase">For the World</span>
            <span className="w-8 h-px bg-gold/50" />
          </div>

          <p className="text-navy font-serif font-bold text-2xl md:text-3xl leading-relaxed mb-6">
            希望を届けるには、どうしたらいいのか。
          </p>

          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

          <p className="text-gray-500 leading-[2] text-sm md:text-base">
            全世界のすべての人に希望を届けるために、<br />
            どのように歩んだら良いのかを考えて研究した論文です。
          </p>
          <p className="text-gray-400 leading-[2] text-sm md:text-base mt-4">
            希望をより多くの人に届けていきたいと願う方にとっての<br />
            励ましとなれば嬉しいです。
          </p>
        </div>
      </section>
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          {papers.length === 0 && (
            <p className="text-center text-gray-400 py-16">準備中</p>
          )}
          {papers.map((paper) => (
            <article key={paper.id} className="flex flex-col sm:flex-row gap-4 md:gap-6 p-5 md:p-8 rounded-2xl border border-sky hover:border-gold/30 hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gold tracking-widest uppercase mb-2">{paper.label}</p>
                <h3 className="font-serif font-bold text-navy text-lg leading-snug mb-1">{paper.title}</h3>
                {paper.subtitle && <p className="text-gray-400 text-sm mb-4">{paper.subtitle}</p>}
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">PDF</span>
                  <a
                    href={paper.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy font-medium hover:text-gold transition-colors"
                  >
                    開く・ダウンロード →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
