import type { PageHeroProps } from "@/types";

export default function PageHero({ eyebrow, title, subtitle, verse, verseRef }: PageHeroProps) {
  return (
    <section className="pt-24 md:pt-40 pb-12 md:pb-20 px-4 bg-gradient-to-b from-navy-dark to-navy text-center">
      <p className="text-gold text-xs font-medium tracking-[0.35em] uppercase mb-4">{eyebrow}</p>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">{title}</h1>
      {subtitle && <p className="text-white/60 text-sm md:text-lg max-w-xl mx-auto leading-relaxed whitespace-pre-line">{subtitle}</p>}
      <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
      {verse && (
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-white/50 text-sm leading-loose italic whitespace-pre-line">{verse}</p>
          {verseRef && <p className="text-gold/70 text-xs mt-2 tracking-wider">{verseRef}</p>}
        </div>
      )}
    </section>
  );
}
