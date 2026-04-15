import PageHero from "@/components/PageHero";

const papers: {
  id: string;
  title: string;
  subtitle?: string;
  label: string;
  file: string;
}[] = [
  {
    id: "kbi-thesis",
    title: "7000の未伝道部族に宣教師を派遣する3万人のメガチャーチを日本で開拓するには",
    subtitle: "神の計画が前進するために生き、イエスの来られる道を備えるために — KBI卒業論文",
    label: "KBI 卒業論文",
    file: "/kbi-thesis.pdf",
  },
  {
    id: "tcu-thesis",
    title: "なぜハドソン・テイラーは神様に用いられたのか",
    subtitle: "TCU卒業研究",
    label: "TCU 卒業研究",
    file: "/tcu-thesis.pdf",
  },
];

export default function MissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission Papers"
        title="宣教論文"
        subtitle="聖書に基づく宣教神学・論文を公開しています。"
      />
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          {papers.length === 0 && (
            <p className="text-center text-gray-400 py-16">準備中</p>
          )}
          {papers.map((paper) => (
            <article key={paper.id} className="flex gap-6 p-8 rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/30 hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#C9A84C] tracking-widest uppercase mb-2">{paper.label}</p>
                <h3 className="font-serif font-bold text-[#1a2e5a] text-lg leading-snug mb-1">{paper.title}</h3>
                {paper.subtitle && <p className="text-gray-400 text-sm mb-4">{paper.subtitle}</p>}
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">PDF</span>
                  <a
                    href={paper.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#1a2e5a] font-medium hover:text-[#C9A84C] transition-colors"
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
