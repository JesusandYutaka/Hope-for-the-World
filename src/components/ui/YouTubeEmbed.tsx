type Props = {
  embedSrc: string; // 動画ID、または "videoseries?list=PLAYLIST_ID"
  title: string;
  className?: string;
};

export default function YouTubeEmbed({ embedSrc, title, className = "" }: Props) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-sky shadow-md ${className}`}>
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${embedSrc}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
