"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const scriptures = [
  {
    verse: "あなたがたの光を人々の前で輝かせなさい。",
    ref: "マタイ 5:16",
  },
  {
    verse: "地の果てにまでわたしの救いをもたらす者とする。",
    ref: "イザヤ 49:6",
  },
  {
    verse: "水が海を覆うように、地は主の栄光を知ることで満たされる。",
    ref: "ハバクク 2:14",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % scriptures.length);
        setVisible(true);
      }, 700);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const s = scriptures[current];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b3e] via-[#1a2e5a] to-[#0a1628]" />

      {/* Radial light effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#C9A84C]/10 blur-[120px]" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/5 blur-[80px]" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-[#C9A84C]/8 blur-[60px]" />

      {/* Subtle star-like dots */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Title */}
        <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-4">
          Christian Ministry
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-2 leading-tight">
          Hope for the World
        </h1>
        <p className="text-white/60 text-lg md:text-xl mb-12 tracking-wide">
          世界に希望を届ける
        </p>

        {/* Scripture slider */}
        <div className="min-h-[90px] flex flex-col items-center justify-center mb-12">
          <blockquote
            className="text-white/90 text-lg md:text-2xl font-light italic leading-relaxed max-w-2xl transition-opacity duration-700"
            style={{ opacity: visible ? 1 : 0 }}
          >
            &ldquo;{s.verse}&rdquo;
          </blockquote>
          <cite
            className="text-[#C9A84C] text-sm mt-3 not-italic tracking-widest transition-opacity duration-700"
            style={{ opacity: visible ? 1 : 0 }}
          >
            — {s.ref}
          </cite>
        </div>

        {/* Scripture dots */}
        <div className="flex justify-center gap-2 mb-12">
          {scriptures.map((_, i) => (
            <button
              key={i}
              onClick={() => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true); }, 300); }}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-[#C9A84C] w-6" : "bg-white/30"}`}
              aria-label={`みことば ${i + 1}`}
            />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/know-jesus"
            className="px-8 py-4 bg-[#C9A84C] hover:bg-[#e8c97a] text-[#1a2e5a] font-bold rounded-full transition-all shadow-lg shadow-[#C9A84C]/30 hover:shadow-[#C9A84C]/50 hover:scale-105"
          >
            イエス様を知る
          </Link>
          <Link
            href="/prayer"
            className="px-8 py-4 border-2 border-white/40 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-bold rounded-full transition-all hover:scale-105"
          >
            祈りのリクエスト
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-xs tracking-widest">SCROLL</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
