import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "人生の意味を探しているあなたへ | Hope for the World",
  description: "生きる意味がわからない、心の平安がほしい——そう感じているあなたへ。イエス・キリストとの出会いが、人生を変えるかもしれません。",
  alternates: { canonical: "/know-god" },
};

export default function KnowGodLayout({ children }: { children: React.ReactNode }) {
  return children;
}
