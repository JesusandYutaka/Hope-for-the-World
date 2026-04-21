import Button from "@/components/ui/Button";

export default function PrayerCta() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2044] via-[#1a3560] to-[#0a1628]" />
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", filter: "blur(50px)" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-px bg-gold/60" />
          <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">Prayer Request</span>
          <span className="w-8 h-px bg-gold/60" />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5 leading-tight">
          共に祈りましょう
        </h2>
        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
          あなたの祈りのリクエストをお聞かせください。<br />
          私たちはあなたのために心を合わせて祈ります。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" href="/contact">
            <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            祈りのリクエストを送る
          </Button>
          <Button variant="ghost" href="/know-god">
            イエス様を知る
            <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
