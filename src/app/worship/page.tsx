import PageHero from "@/components/PageHero";

const PLAYLIST_ID = "PLlnLRalHLigP94e2KhMgKHTE2ya8Elqbt";
const PLAYLIST_URL = "https://youtube.com/playlist?list=PLlnLRalHLigP94e2KhMgKHTE2ya8Elqbt";

// ── 賛美集会情報をここに追加してください ─────────────────────────
const gatherings: {
  title: string;       // 集会名
  date: string;        // 日付（例: "2026年5月3日（日）"）
  time: string;        // 時間（例: "14:00〜16:00"）
  location: string;    // 場所
  address?: string;    // 住所（任意）
  note?: string;       // 備考・メッセージ（任意）
  mapUrl?: string;     // Google MapsなどのURL（任意）
}[] = [
  // 例:
  // {
  //   title: "春の賛美集会",
  //   date: "2026年5月3日（日）",
  //   time: "14:00〜16:00",
  //   location: "○○教会",
  //   address: "大阪府○○市○○町1-2-3",
  //   note: "どなたでもお越しください。入場無料です。",
  //   mapUrl: "https://maps.google.com/...",
  // },
];
// ─────────────────────────────────────────────────────────────────

export default function WorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Worship Ministry"
        title="賛美ミニストリー"
        subtitle="神への賛美を通して、主の御前に近づきましょう。"
      />
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* ① オリジナル賛美 */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">
                オリジナル賛美 <span className="text-sm font-sans font-normal text-gray-400 ml-2">— YouTube</span>
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#e8f0fe] shadow-md mb-6">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}`}
                  title="オリジナル賛美プレイリスト"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <a
                href={PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C9A84C]/50 text-[#C9A84C] text-sm font-medium hover:bg-[#C9A84C]/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                オリジナル賛美プレイリストを開く
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#e8f0fe] to-transparent mb-20" />

          {/* ② 賛美集会情報 */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">賛美集会情報</h2>
            </div>

            {/* Instagram link */}
            <a
              href="https://www.instagram.com/glory.togod2021/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/40 hover:shadow-md transition-all mb-8"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-1">最新の集会情報はInstagramで</p>
                <p className="font-bold text-[#1a2e5a] group-hover:text-[#C9A84C] transition-colors">@glory.togod2021</p>
              </div>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-[#C9A84C] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Instagram link 2 */}
            <a
              href="https://www.instagram.com/loveobi_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/40 hover:shadow-md transition-all mb-8"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-1">最新の集会情報はInstagramで</p>
                <p className="font-bold text-[#1a2e5a] group-hover:text-[#C9A84C] transition-colors">@loveobi_official</p>
              </div>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-[#C9A84C] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {gatherings.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-[#e8f0fe] p-12 text-center">
                <svg className="w-10 h-10 text-gray-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-400 text-sm">集会情報をここに追加できます</p>
                <p className="text-gray-300 text-xs mt-1">page.tsx の gatherings 配列に追加してください</p>
              </div>
            ) : (
              <div className="space-y-6">
                {gatherings.map((g, i) => (
                  <div key={i} className="rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/30 hover:shadow-md transition-all overflow-hidden">
                    {/* Header bar */}
                    <div className="bg-gradient-to-r from-[#1a2e5a] to-[#1a2e5a]/80 px-7 py-4">
                      <h3 className="text-white font-serif font-bold text-lg">{g.title}</h3>
                    </div>
                    {/* Details */}
                    <div className="px-7 py-6 grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">日程</p>
                          <p className="text-[#1a2e5a] font-medium text-sm">{g.date}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">時間</p>
                          <p className="text-[#1a2e5a] font-medium text-sm">{g.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">場所</p>
                          <p className="text-[#1a2e5a] font-medium text-sm">{g.location}</p>
                          {g.address && <p className="text-gray-400 text-xs mt-0.5">{g.address}</p>}
                        </div>
                      </div>
                      {g.note && (
                        <div className="flex items-start gap-3">
                          <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-xs text-gray-400 mb-0.5">備考</p>
                            <p className="text-gray-600 text-sm">{g.note}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    {g.mapUrl && (
                      <div className="px-7 pb-6">
                        <a
                          href={g.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-[#C9A84C] hover:underline"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          地図を開く
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#e8f0fe] to-transparent mb-20" />

          {/* 賛美集会GLORY 動画 */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">
                賛美集会GLORY <span className="text-sm font-sans font-normal text-gray-400 ml-2">— 動画</span>
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#e8f0fe] shadow-md mb-6">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/ghlo1tROFdk"
                  title="賛美集会GLORY"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <a
              href="https://www.youtube.com/@glory8068"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-1">YouTube</p>
                <p className="font-bold text-[#1a2e5a] group-hover:text-[#C9A84C] transition-colors">GLORY公式YouTubeチャンネル</p>
              </div>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-[#C9A84C] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#e8f0fe] to-transparent mb-20" />

          {/* ③ 楽譜・コード */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">楽譜・コード</h2>
            </div>
            <div className="space-y-4">
              <a
                href="https://www.kbiwave.com/wp-content/uploads/2025/12/Score-CD_20th-Ikoma.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-1">PDF</p>
                  <p className="font-bold text-[#1a2e5a] group-hover:text-[#C9A84C] transition-colors">希望賛美CD楽譜</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#C9A84C] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#e8f0fe] to-transparent mb-20" />

          {/* ④ 配信サービス */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">配信サービス</h2>
            </div>
            <p className="text-gray-400 text-sm mb-8 pl-12">
              Kansai Bible Institute「Hope」— Spotify・Apple Music・YouTube Music ほか全配信サービスにて配信中
            </p>

            {/* Main streaming badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { name: "Spotify", color: "#1DB954", icon: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z", viewBox: "0 0 24 24" },
                { name: "Apple Music", color: "#FA233B", icon: "M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a6.303 6.303 0 00-1.903-.77c-.054-.013-.108-.026-.163-.034-.728-.102-1.275-.194-3.316-.194H7.808c-2.04 0-2.59.092-3.316.194-.056.008-.11.021-.165.034a6.3 6.3 0 00-1.902.77C1.308 1.624.563 2.624.246 3.934A9.23 9.23 0 00.006 6.124C0 6.6 0 7.15 0 7.808v8.384c0 .658 0 1.208.006 1.684.033 1.29.24 2.19.727 2.93.487.742 1.244 1.23 2.18 1.43.738.164 1.39.23 3.316.23h8.308c1.926 0 2.578-.066 3.316-.23.937-.2 1.694-.688 2.18-1.43.487-.74.694-1.64.727-2.93.006-.476.006-1.026.006-1.684V7.808c0-.658 0-1.208-.006-1.684zm-8.99 7.776l-4.757-2.747V6.84l4.757 2.747v4.313z", viewBox: "0 0 24 24" },
                { name: "YouTube Music", color: "#FF0000", icon: "M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z", viewBox: "0 0 24 24" },
                { name: "LINE MUSIC", color: "#00B900", icon: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.92 14.04l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.228.52z", viewBox: "0 0 24 24" },
              ].map((s) => (
                <a
                  key={s.name}
                  href="https://linkco.re/pmXtNQNp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-xl border border-[#e8f0fe] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: s.color }}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox={s.viewBox}>
                      <path d={s.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#1a2e5a] group-hover:text-[#C9A84C] transition-colors">{s.name}</span>
                </a>
              ))}
            </div>

            {/* All services link */}
            <a
              href="https://linkco.re/pmXtNQNp"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-[#1a2e5a] to-[#1a2e5a]/80 hover:from-[#0d1b3e] hover:to-[#0d1b3e]/80 transition-all"
            >
              <div>
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">All Platforms</p>
                <p className="text-white font-bold">全ての配信サービスで聴く</p>
                <p className="text-white/50 text-xs mt-0.5">Spotify / Apple Music / Amazon Music ほか40+</p>
              </div>
              <svg className="w-5 h-5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
