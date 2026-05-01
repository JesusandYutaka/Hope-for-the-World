"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavItem, NavChild } from "@/types";

const SCROLL_THRESHOLD = 40;

function isGroupNavItem(item: NavItem): item is { label: string; children: NavChild[] } {
  return Array.isArray((item as { children?: unknown }).children);
}

const navLinks: NavItem[] = [
  { href: "/worship", label: "賛美・Worship" },
  { href: "/daily", label: "日々のみことば" },
  {
    label: "Hopeを広げる",
    children: [
      { href: "/testimony", label: "ストーリー" },
      { href: "/fellowship", label: "交わり" },
      { href: "/missions", label: "宣教エッセイ" },
      { href: "/recommended-sites", label: "お勧めサイト" },
      { href: "/missions-partner", label: "宣教パートナー" },
    ],
  },
  { href: "/know-god", label: "人生に答えを探している方へ" },
  { href: "/contact", label: "つながる" },
];

function DropdownMenu({ item }: { item: NavItem & { children: NavChild[] } }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="relative flex items-center gap-1 text-white/75 hover:text-white text-[13px] font-light tracking-wider transition-colors duration-300 group"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${item.label} メニュー`}
      >
        {item.label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
      </button>

      {/* Dropdown panel — pt-3 bridges the gap so mouse doesn't leave the container */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[140px] transition-all duration-200 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div
          role="menu"
          aria-hidden={!open}
          className="py-2"
          style={{
            background: "rgba(8, 15, 30, 0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "8px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-5 py-2.5 text-[12px] text-white/70 hover:text-gold hover:bg-white/5 tracking-wider transition-colors duration-200 whitespace-nowrap"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMobileCategory, setOpenMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              background: "rgba(10, 18, 35, 0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(201, 168, 76, 0.15)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
            }
          : {
              background: "linear-gradient(to bottom, rgba(5,12,25,0.55) 0%, transparent 100%)",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span className="text-gold font-serif font-bold text-lg tracking-widest group-hover:text-gold-light transition-colors duration-300">
              中島豊公式サイト
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              isGroupNavItem(link) ? (
                <DropdownMenu key={link.label} item={link} />
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="relative text-white/75 hover:text-white text-[13px] font-light tracking-wider transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </Link>
              )
            )}

            {/* CTA button */}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 border border-gold/60 hover:border-gold text-gold hover:text-gold-light text-[12px] tracking-[0.15em] font-medium rounded-full transition-all duration-300 hover:bg-gold/10"
            >
              つながる
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center gap-1.5 p-4 -mr-2 cursor-pointer"
            aria-label="メニュー"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-4 h-px bg-white/60 transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[600px]" : "max-h-0"}`}
        style={{
          background: "rgba(8, 15, 30, 0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <nav className="px-6 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setOpenMobileGroup(expandedMobileCategory === link.label ? null : link.label)}
                  className="w-full flex items-center justify-between py-3 text-white/70 hover:text-gold text-sm tracking-wider border-b border-white/8 transition-colors duration-200"
                >
                  {link.label}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${expandedMobileCategory === link.label ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedMobileCategory === link.label && (
                  <div className="pl-4 flex flex-col">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="py-2.5 text-white/55 hover:text-gold text-sm tracking-wider transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-white/70 hover:text-gold text-sm tracking-wider border-b border-white/8 transition-colors duration-200 last:border-0"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
