export const revalidate = 3600;

import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Hope for the World｜音楽と言葉で、世界に希望を届ける",
  description: "あなたに希望を届けたい。賛美・みことば・証・宣教を通じて、イエス様の愛を日本から世界へ。",
  alternates: { canonical: "/" },
};
import VisionSection from "@/app/_sections/VisionSection";
import IntroSection from "@/app/_sections/IntroSection";
import FeaturedContent from "@/app/_sections/FeaturedContent";
import PrayerCta from "@/app/_sections/PrayerCta";
import JourneyAccordion from "@/components/JourneyAccordion";
import { fetchLatestYouTubeVideo } from "@/lib/youtube";

export default async function HomePage() {
  const latestVideo = await fetchLatestYouTubeVideo();
  return (
    <>
      <HeroSection />

      {/* 私のストーリー */}
      <section className="py-10 md:py-16 px-4 bg-[#fafafa]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-0.5 bg-gold" />
            <div>
              <p className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase mb-0.5">Journey</p>
              <h2 className="text-xl font-serif font-bold text-navy">私のストーリー</h2>
            </div>
          </div>
          <JourneyAccordion defaultOpen={0} />
        </div>
      </section>

      <IntroSection />
      <FeaturedContent latestVideo={latestVideo} />
      <VisionSection />
      <PrayerCta />
    </>
  );
}
