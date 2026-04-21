import HeroSection from "@/components/HeroSection";
import VisionSection from "@/app/_sections/VisionSection";
import IntroSection from "@/app/_sections/IntroSection";
import FeaturedContent from "@/app/_sections/FeaturedContent";
import PrayerCta from "@/app/_sections/PrayerCta";
import { fetchLatestYouTubeVideo } from "@/lib/youtube";

export default async function HomePage() {
  const latestVideo = await fetchLatestYouTubeVideo();
  return (
    <>
      <HeroSection />
      <VisionSection />
      <IntroSection />
      <FeaturedContent latestVideo={latestVideo} />
      <PrayerCta />
    </>
  );
}
