import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hope-for-the-world.vercel.app";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hope for the World",
  url: BASE_URL,
  logo: `${BASE_URL}/images/hero-sunset.jpg`,
  sameAs: ["https://www.instagram.com/love_jesus_yutaka/"],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "中島豊",
  alternateName: "Nakajima Yutaka",
  url: BASE_URL,
  jobTitle: "伝道師・プログラマー",
  worksFor: {
    "@type": "Organization",
    name: "Hope for the World",
    url: BASE_URL,
  },
  sameAs: [
    "https://www.instagram.com/love_jesus_yutaka/",
    "https://www.youtube.com/@yutakanakajima960",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://hope-for-the-world.vercel.app"),
  title: "Hope for the World — 世界に希望を届ける",
  description: "Hope for the Worldは、イエス・キリストの愛と福音を世界に届けるクリスチャンミニストリーです。",
  openGraph: {
    title: "Hope for the World",
    description: "音楽と言葉で、世界に希望を届ける",
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
    description: "音楽と言葉で、世界に希望を届ける",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
