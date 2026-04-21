"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const scriptures = [
  { verse: "あなたがたの光を人々の前で輝かせなさい。", ref: "マタイ 5:16" },
  { verse: "地の果てにまでわたしの救いをもたらす者とする。", ref: "イザヤ 49:6" },
  { verse: "水が海を覆うように、地は主の栄光を知ることで満たされる。", ref: "ハバクク 2:14" },
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

      {/* Background photo */}
      <Image
        src="/images/hero-sunset.jpg"
        alt="海の夕日"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay: top dark for text readability, bottom subtle dark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, " +
            "rgba(10,20,40,0.40) 0%, " +
            "rgba(10,20,40,0.20) 30%, " +
            "rgba(10,20,40,0.05) 55%, " +
            "rgba(10,20,40,0.15) 80%, " +
            "rgba(10,20,40,0.30) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-20 md:pt-0">

        {/* Eyebrow line */}
        <div className="flex items-center gap-4 mb-8">
          <span className="block w-10 h-px bg-white/60" />
          <span
            className="text-white text-[11px] font-medium tracking-[0.45em] uppercase"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.5)" }}
          >
            世界に希望を届ける
          </span>
          <span className="block w-10 h-px bg-white/60" />
        </div>

        {/* Main title */}
        <h1
          className="font-serif font-bold leading-[1.05] mb-6 drop-shadow-lg"
          style={{
            fontSize: "clamp(3rem, 9vw, 6.5rem)",
            letterSpacing: "-0.01em",
            textShadow: "0 2px 40px rgba(0,0,0,0.4)",
            background: "linear-gradient(160deg, #ffffff 40%, rgba(255,230,160,0.9) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Hope for the World
        </h1>

        {/* Thin divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-10" />

        {/* Scripture slider */}
        <div className="min-h-[100px] flex flex-col items-center justify-center mb-8">
          <blockquote
            className="transition-opacity duration-700 max-w-2xl"
            style={{ opacity: visible ? 1 : 0 }}
          >
            <p
              className="text-white/90 font-light italic leading-relaxed drop-shadow"
              style={{
                fontSize: "clamp(1rem, 2.2vw, 1.35rem)",
                letterSpacing: "0.02em",
                textShadow: "0 1px 20px rgba(0,0,0,0.5)",
              }}
            >
              &ldquo;{s.verse}&rdquo;
            </p>
          </blockquote>
          <cite
            className="text-gold-light/90 text-xs mt-4 not-italic tracking-[0.3em] uppercase drop-shadow transition-opacity duration-700"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {s.ref}
          </cite>
        </div>

        {/* Scripture dots */}
        <div className="flex justify-center gap-2 mb-12">
          {scriptures.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setVisible(false);
                setTimeout(() => { setCurrent(i); setVisible(true); }, 300);
              }}
              className={`h-px rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-8" : "bg-white/30 w-4"
              }`}
              aria-label={`みことば ${i + 1}`}
            />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/know-god"
            className="group relative px-9 py-3.5 overflow-hidden rounded-full text-sm tracking-[0.12em] font-medium transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(201,168,76,0.95)", color: "#0e0900" }}
          >
            <span className="relative z-10">イエス様を知る</span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          <Link
            href="/contact"
            className="px-9 py-3.5 rounded-full text-sm tracking-[0.12em] font-light text-white/90 hover:text-white border border-white/30 hover:border-gold/60 transition-all duration-300 hover:scale-105 hover:bg-white/5 backdrop-blur-sm"
          >
            祈りのリクエスト
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest">SCROLL</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
