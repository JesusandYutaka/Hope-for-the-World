import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ・つながる | Hope for the World",
  description: "ご質問・ご相談・祈りのリクエストはこちらからどうぞ。お気軽にお問い合わせください。",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
