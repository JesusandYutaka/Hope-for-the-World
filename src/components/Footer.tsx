import type { ReactNode } from "react";
import Link from "next/link";
import { SOCIAL, INSTAGRAM, EXTERNAL, ICONS } from "@/lib/constants";

type SnsLink = { label: string; href: string; icon: ReactNode };

const snsLinks: SnsLink[] = [
  {
    label: "LINE",
    href: SOCIAL.LINE_OFFICIAL,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d={ICONS.LINE} />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: INSTAGRAM.YUTAKA.url,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d={ICONS.INSTAGRAM} />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: EXTERNAL.FACEBOOK,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d={ICONS.FACEBOOK} />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gold font-serif text-lg font-bold">Hope for the World</p>
            <p className="text-sm mt-1">「水が海を覆うように、地は主の栄光を知ることで満たされる」</p>
            <p className="text-xs text-white/40 mt-0.5">ハバクク 2:14</p>
          </div>

          <div className="flex items-center gap-4">
            {snsLinks.map((sns) => (
              <a
                key={sns.label}
                href={sns.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sns.label}
                className="text-white/50 hover:text-gold transition-colors"
              >
                {sns.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Hope for the World. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
