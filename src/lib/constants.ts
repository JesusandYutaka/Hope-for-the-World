// ── YouTube ───────────────────────────────────────────────────────
export const YOUTUBE = {
  CHANNEL_ID: "UCtj5cJhnm4DNyTO7uXUqmsQ",
  CHANNEL_URL: "https://www.youtube.com/@yutakanakajima960",
  PLAYLISTS: {
    WORSHIP: "PLlnLRalHLigP94e2KhMgKHTE2ya8Elqbt",
    DAILY_WORD: "PLlnLRalHLigOxkJf3LvRH6Wc4Q6HZWKuF",
  },
  VIDEOS: {
    GLORY: "ghlo1tROFdk",
    HOPE: "OCAhN8eCKp0",
  },
  CHANNELS: {
    GLORY: "https://www.youtube.com/@glory8068",
    KBI: "https://www.youtube.com/@NewRevelationChurch_is",
  },
} as const;

// ── キャッシュ設定 ────────────────────────────────────────────────
export const CACHE = {
  YOUTUBE_REVALIDATE_SECONDS: 3600,
} as const;

// ── ブランドカラー ────────────────────────────────────────────────
export const BRAND_COLORS = {
  FACEBOOK: "#1877F2",
  LINE_GREEN: "#00B900",
  LINE_GREEN_DARK: "#009900",
} as const;

// ── ブランドグラデーション ────────────────────────────────────────
export const BRAND_GRADIENTS = {
  INSTAGRAM: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
} as const;

// ── Instagram ─────────────────────────────────────────────────────
export const INSTAGRAM = {
  GLORY: {
    handle: "glory.togod2021",
    url: "https://www.instagram.com/glory.togod2021/",
    label: "最新の集会情報はInstagramで",
  },
  LOVEOBI: {
    handle: "loveobi_official",
    url: "https://www.instagram.com/loveobi_official/",
    label: "最新の集会情報はInstagramで",
  },
  YUTAKA: {
    handle: "love_jesus_yutaka",
    url: "https://www.instagram.com/love_jesus_yutaka/",
  },
  CHURCH: {
    handle: "mb_nosegawa.church",
    url: "https://www.instagram.com/mb_nosegawa.church?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr",
    label: "Instagram",
    description: "能勢川キリスト教会 公式Instagram",
  },
} as const;

// ── 外部リンク ────────────────────────────────────────────────────
export const EXTERNAL = {
  STREAMING: "https://linkco.re/pmXtNQNp",
  WORSHIP_PLAYLIST: `https://youtube.com/playlist?list=PLlnLRalHLigP94e2KhMgKHTE2ya8Elqbt`,
  NOSEGAWA_CHURCH: "https://nosegawa.japan-mb.com",
  SCORE_PDF: "https://www.kbiwave.com/wp-content/uploads/2025/12/Score-CD_20th-Ikoma.pdf",
  FACEBOOK: "https://www.facebook.com/share/1DoCGpCgwo/?mibextid=wwXIfr",
  AMEBLO: "https://ameblo.jp/jesusismyall/entrylist.html",
} as const;

// ── 連絡先 ────────────────────────────────────────────────────────
export const CONTACT = {
  EMAIL: "u16106@st.tci.ac.jp",
} as const;

// ── SNS リンク ────────────────────────────────────────────────────
export const SOCIAL = {
  LINE_OFFICIAL: "https://lin.ee/ya1Mu7D",
  LINE_PRAYER_PARTNER: "https://lin.ee/ZCvMRMc",
} as const;

// ── SVG アイコンパス ──────────────────────────────────────────────
export const ICONS = {
  YOUTUBE: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  LINE: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314",
  INSTAGRAM: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  FACEBOOK: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
} as const;
