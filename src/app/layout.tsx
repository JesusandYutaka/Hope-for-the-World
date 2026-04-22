import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Hope for the World — 世界に希望を届ける",
  description: "Hope for the Worldは、イエス・キリストの愛と福音を世界に届けるクリスチャンミニストリーです。",
  openGraph: {
    title: "Hope for the World",
    description: "世界に希望を届けるクリスチャンミニストリー",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero-sunset.jpg",
        width: 1200,
        height: 630,
        alt: "Hope for the World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hope for the World",
    description: "世界に希望を届けるクリスチャンミニストリー",
    images: ["/images/hero-sunset.jpg"],
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
        <Analytics />
      </body>
    </html>
  );
}
