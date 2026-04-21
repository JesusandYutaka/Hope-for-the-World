import Link from "next/link";
import { ICONS, YOUTUBE } from "@/lib/constants";
import type { YouTubeVideo } from "@/types";

type Props = { latestVideo: YouTubeVideo | null };

export default function FeaturedContent({ latestVideo }: Props) {
  return (
    <section className="py-12 md:py-24 px-4 bg-sky">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">Content</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">メッセージ & 賛美</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="aspect-video bg-navy">
              {latestVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${latestVideo.id}`}
                  title={latestVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/40">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d={ICONS.YOUTUBE} />
                    </svg>
                    <p className="text-sm">YouTube動画が入ります</p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <p className="text-xs text-gold font-medium tracking-widest uppercase mb-2">最新動画</p>
              <h3 className="text-lg font-bold text-navy mb-4">
                {latestVideo ? latestVideo.title : "最新メッセージ"}
              </h3>
              <a
                href={YOUTUBE.CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-navy hover:text-gold font-medium transition-colors"
              >
                チャンネルを見る →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="aspect-video bg-navy">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE.VIDEOS.HOPE}`}
                title="最新賛美"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-gold font-medium tracking-widest uppercase mb-2">賛美Ministry</p>
              <h3 className="text-lg font-bold text-navy mb-4">最新賛美</h3>
              <Link href="/worship" className="text-sm text-navy hover:text-gold font-medium transition-colors">
                もっと見る →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
