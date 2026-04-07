"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/know-jesus", label: "イエス様を知る" },
  { href: "/worship", label: "賛美Ministry" },
  { href: "/messages", label: "メッセージ" },
  { href: "/resources", label: "リソース" },
  { href: "/prayer", label: "祈りのパートナー" },
  { href: "/contact", label: "ミニストリー依頼" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2e5a]/90 backdrop-blur-md border-b border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[#C9A84C] text-xl font-serif font-bold tracking-wide group-hover:text-[#e8c97a] transition-colors">
              Hope for the World
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#C9A84C] text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="メニュー"
          >
            <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-6 h-0.5 bg-white my-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="lg:hidden bg-[#1a2e5a] border-t border-[#C9A84C]/20 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-white/80 hover:text-[#C9A84C] text-sm font-medium border-b border-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
