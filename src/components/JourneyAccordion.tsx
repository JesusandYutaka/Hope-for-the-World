"use client";

import { useState } from "react";
import { journeySteps } from "@/data/journeyItems";

export default function JourneyAccordion() {
  const [expandedItemIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {journeySteps.map((item, i) => {
        const isOpen = expandedItemIndex === i;
        return (
          <div
            key={i}
            className={`bg-white rounded-2xl border shadow-sm transition-all duration-300 overflow-hidden ${
              isOpen ? "border-gold/40 shadow-md" : "border-sky hover:border-gold/20 hover:shadow"
            }`}
          >
            <button
              className="w-full flex items-center justify-between px-8 py-6 text-left group"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <span className={`text-[10px] font-medium tracking-[0.35em] uppercase transition-colors ${isOpen ? "text-gold" : "text-gold/60"}`}>
                  {item.eyebrow}
                </span>
                <span className="w-px h-4 bg-sky" />
                <span className="text-navy font-serif font-bold text-lg leading-snug">
                  {item.title}
                </span>
              </div>
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ml-4 ${
                  isOpen
                    ? "bg-gold border-gold rotate-180"
                    : "border-sky group-hover:border-gold/40"
                }`}
              >
                <svg
                  className={`w-3.5 h-3.5 transition-colors ${isOpen ? "text-white" : "text-gray-400"}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-8 pb-8 pt-0 border-t border-[#f0f4ff]">
                <div className="pt-6">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
