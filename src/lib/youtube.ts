import type { YouTubeVideo } from "@/types";
import { YOUTUBE, CACHE } from "@/lib/constants";

export async function fetchLatestYouTubeVideo(): Promise<YouTubeVideo | null> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE.CHANNEL_ID}`,
      { next: { revalidate: CACHE.YOUTUBE_REVALIDATE_SECONDS } }
    );
    if (!res.ok) return null;
    const xml = await res.text();
    const idMatch = xml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = xml.match(/<title>([^<]+)<\/title>/g);
    const id = idMatch ? idMatch[1] : null;
    // titleMatch[0] is the channel title, [1] is the first video title
    const title = titleMatch?.[1]?.replace(/<\/?title>/g, "") ?? "最新動画";
    if (!id) return null;
    return { id, title };
  } catch {
    return null;
  }
}
