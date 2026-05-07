import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "つながる｜お問い合わせ・祈りのリクエスト | Hope for the World",
  description: "祈りのリクエスト、イエス様についての質問、お問い合わせはこちらから。一緒に祈らせてください。",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
