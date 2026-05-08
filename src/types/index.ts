// ── 証・コンテンツカテゴリー ────────────────────────────────────────
export type TestimonyCategory = "seminary" | "marriage" | "love" | "salvation";

export type TestimonyArticle = {
  title: string;
  excerpt: string;
  url: string;
  label: string;
  date: string;
  category: TestimonyCategory;
};

export type TestimonyVideo = {
  title: string;
  description: string;
  videoId: string;
  date: string;
  category: TestimonyCategory;
};

// ── お勧めサイト ──────────────────────────────────────────────────
export type RecommendedSiteCategory = "bible" | "church" | "ministry" | "other";

export type RecommendedSite = {
  name: string;
  description: string;
  url: string;
};

export type RecommendedSiteGroup = {
  id: string;
  label: string;
  en: string;
  description?: string;
  sites: RecommendedSite[];
};

// ── 宣教論文 ──────────────────────────────────────────────────────
export type MissionPaper = {
  id: string;
  title: string;
  subtitle?: string;
  comment?: string;
  label: string;
  file: string;
};

// ── YouTube ───────────────────────────────────────────────────────
export type YouTubeVideo = {
  id: string;
  title: string;
};

// ── 賛美集会 ──────────────────────────────────────────────────────
export type Gathering = {
  title: string;
  date: string;
  time: string;
  location: string;
  address?: string;
  note?: string;
  mapUrl?: string;
};

// ── 日々の励まし ──────────────────────────────────────────────────
export type NoteArticle = {
  title: string;
  verse: string;
  ref: string;
  url: string;
  date: string;
  label?: string;
};

export type DailyVideo = {
  title: string;
  description: string;
  embedSrc: string;
  date: string;
  playlistUrl?: string;
};

export type RecommendedLink = {
  title: string;
  description: string;
  url: string;
  label: string;
};

// ── UI コンポーネント Props ───────────────────────────────────────
export type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  verse?: string;
  verseRef?: string;
};

// ── 神を知りたい人へ ──────────────────────────────────────────────
export type KnowGodStep = {
  num: string;
  title: string;
  verse: string;
  ref: string;
  text: string;
};

// ── コンタクトフォーム ────────────────────────────────────────────
export type ContactFormStatus = "idle" | "sending" | "done" | "error";

// ── ナビゲーション ────────────────────────────────────────────────
export type NavChild = {
  href: string;
  label: string;
};

export type NavItem =
  | { href: string; label: string; children?: undefined }
  | { label: string; href?: undefined; children: NavChild[] };
