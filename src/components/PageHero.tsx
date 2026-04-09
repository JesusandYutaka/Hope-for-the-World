interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  verse?: string;
  verseRef?: string;
}

export default function PageHero({ eyebrow, title, subtitle, verse, verseRef }: PageHeroProps) {
  return (
    <section className="pt-40 pb-20 px-4 bg-gradient-to-b from-[#0d1b3e] to-[#1a2e5a] text-center">
      <p className="text-[#C9A84C] text-xs font-medium tracking-[0.35em] uppercase mb-4">{eyebrow}</p>
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{title}</h1>
      {subtitle && <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed whitespace-pre-line">{subtitle}</p>}
      <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto" />
      {verse && (
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-white/50 text-sm leading-loose italic whitespace-pre-line">{verse}</p>
          {verseRef && <p className="text-[#C9A84C]/70 text-xs mt-2 tracking-wider">{verseRef}</p>}
        </div>
      )}
    </section>
  );
}
