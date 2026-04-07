import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hope for the World — 世界に希望を届ける",
  description: "Hope for the Worldは、イエス・キリストの愛と福音を世界に届けるクリスチャンミニストリーです。",
  openGraph: {
    title: "Hope for the World",
    description: "世界に希望を届けるクリスチャンミニストリー",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
