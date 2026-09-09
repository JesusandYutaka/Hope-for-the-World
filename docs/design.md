# Hope for the World — プロジェクト設計資料

## 目次

1. [プロジェクト概要](#1-プロジェクト概要)
2. [技術スタック](#2-技術スタック)
3. [ディレクトリ構造](#3-ディレクトリ構造)
4. [アーキテクチャ](#4-アーキテクチャ)
5. [ページ一覧](#5-ページ一覧)
6. [コンポーネント設計](#6-コンポーネント設計)
7. [型定義](#7-型定義)
8. [定数・設定値](#8-定数設定値)
9. [データ](#9-データ)
10. [ライブラリ関数](#10-ライブラリ関数)
11. [API ルート](#11-api-ルート)
12. [デザインシステム](#12-デザインシステム)
13. [テスト設計](#13-テスト設計)
14. [環境変数](#14-環境変数)
15. [デプロイ](#15-デプロイ)

---

## 1. プロジェクト概要

**サイト名:** Hope for the World  
**URL:** https://hope-for-the-world.vercel.app  
**運営者:** 中島 豊（Nakajima Yutaka）  
**目的:** イエス・キリストの福音を世界に伝えるウェブサイト。賛美、証、宣教論文、祈りのリクエストなどのコンテンツを提供する。

---

## 2. 技術スタック

| 分類 | 技術 | バージョン |
|------|------|---------|
| フレームワーク | Next.js (App Router) | 16.2.4 |
| UI ライブラリ | React | 19.2.4 |
| 言語 | TypeScript | 5.x |
| スタイリング | Tailwind CSS v4 | 4.x |
| フォーム管理 | React（useState） | — |
| メール送信 | Resend | 6.x |
| レート制限 | Upstash Ratelimit + Redis | 2.x / 1.x |
| アナリティクス | Vercel Analytics / Google Analytics / Microsoft Clarity | — |
| テスト | Vitest + Testing Library | 4.x |
| テスト環境 | happy-dom | 20.x |
| デプロイ | Vercel | — |

---

## 3. ディレクトリ構造

```
/
├── src/
│   ├── app/                        # Next.js App Router ページ
│   │   ├── _sections/              # ホームページ用セクションコンポーネント
│   │   │   ├── VisionSection.tsx
│   │   │   ├── IntroSection.tsx
│   │   │   ├── FeaturedContent.tsx
│   │   │   └── PrayerCta.tsx
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts        # お問い合わせ API
│   │   │   └── my-ip/
│   │   │       └── route.ts        # クライアント IP 確認 API（preview 限定）
│   │   ├── contact/
│   │   │   ├── layout.tsx
│   │   │   ├── opengraph-image.tsx
│   │   │   └── page.tsx
│   │   ├── daily/
│   │   │   ├── opengraph-image.tsx
│   │   │   └── page.tsx
│   │   ├── error.tsx               # エラーバウンダリ
│   │   ├── fellowship/page.tsx
│   │   ├── global-error.tsx        # グローバルエラーバウンダリ
│   │   ├── know-god/
│   │   │   ├── layout.tsx
│   │   │   ├── opengraph-image.tsx
│   │   │   └── page.tsx
│   │   ├── michiya/page.tsx
│   │   ├── missions/
│   │   │   ├── opengraph-image.tsx
│   │   │   └── page.tsx
│   │   ├── missions-partner/page.tsx
│   │   ├── newsletter/page.tsx
│   │   ├── not-found.tsx           # 404ページ
│   │   ├── opengraph-image.tsx     # ルート OG 画像
│   │   ├── prayer-partner/page.tsx
│   │   ├── recommended-sites/page.tsx
│   │   ├── robots.ts               # robots.txt 生成
│   │   ├── sitemap.ts              # sitemap.xml 生成
│   │   ├── testimony/
│   │   │   ├── opengraph-image.tsx
│   │   │   └── page.tsx
│   │   ├── worship/
│   │   │   ├── opengraph-image.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx              # ルートレイアウト（Header・Footer・Analytics・JSON-LD）
│   │   ├── page.tsx                # ホームページ
│   │   └── globals.css             # グローバルスタイル・CSS変数
│   ├── components/
│   │   ├── BreadcrumbJsonLd.tsx    # パンくずJSON-LD構造化データ
│   │   ├── ClarityInit.tsx         # Microsoft Clarity 初期化
│   │   ├── Footer.tsx              # フッター
│   │   ├── Header.tsx              # ナビゲーションヘッダー
│   │   ├── HeroSection.tsx         # ホームヒーロー
│   │   ├── JourneyAccordion.tsx    # 証アコーディオン
│   │   ├── PageHero.tsx            # 各ページヘッダー
│   │   └── ui/                     # 汎用UIコンポーネント
│   │       ├── Button.tsx
│   │       ├── SectionHeader.tsx
│   │       ├── LinkCard.tsx
│   │       ├── YouTubeEmbed.tsx
│   │       ├── InstagramCard.tsx
│   │       ├── NumberedCard.tsx
│   │       └── Divider.tsx
│   ├── data/
│   │   └── journeyItems.tsx        # 証の記録データ
│   ├── lib/
│   │   ├── constants.ts            # 全定数
│   │   ├── env.ts                  # 環境変数バリデーション
│   │   ├── ip.ts                   # クライアント IP 取得
│   │   ├── validation.ts           # 入力バリデーション
│   │   └── youtube.ts              # YouTube RSS 取得
│   ├── types/
│   │   └── index.ts                # 全型定義
│   └── middleware.ts               # エッジミドルウェア（Vercel preview IP制限）
├── public/
│   └── images/                     # 画像（hero-sunset.jpg, profile.jpg 等）
├── docs/
│   └── design.md                   # 本設計資料
├── AGENTS.md
├── CLAUDE.md
├── PLAN.md
├── README.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts                  # セキュリティヘッダー等
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
├── vitest.config.ts
├── vitest.setup.ts
└── vercel.json
```

---

## 4. アーキテクチャ

### レンダリング戦略

```
ユーザーのブラウザ
      ↓
  Vercel Edge (middleware)
      ↓
  Next.js App Router
      ├── Server Components（大半のページ・セクション）
      │     └── ISR キャッシュ（ホームページ: 1時間）
      └── Client Components（最小限）
            ├── Header（スクロール検知、ドロップダウン）
            ├── HeroSection（スクリプチャースライダー）
            ├── JourneyAccordion（展開状態管理）
            ├── contact/page.tsx（フォーム送信）
            └── know-god/page.tsx（ステップ状態管理）
```

### データフロー

```
YouTube RSS Feed
      ↓ (fetchLatestYouTubeVideo)
  Next.js Server Component
      ↓ (props)
  FeaturedContent（クライアントへ配信）

お問い合わせフォーム:
  クライアント (React useState)
      ↓ (POST /api/contact)
  Server (validation + レート制限)
      ↓ (Resend API)
  メール送信（管理者 + 自動返信）
```

### コンポーネント階層

```
layout.tsx
  ├── Header
  ├── {children}（各ページ）
  └── Footer

page.tsx (ホーム)
  ├── HeroSection
  ├── JourneyAccordion（"私のストーリー" セクション）
  ├── IntroSection
  ├── FeaturedContent
  ├── VisionSection
  └── PrayerCta

各ページ (例: worship)
  ├── PageHero
  ├── SectionHeader
  ├── NumberedCard × n
  ├── YouTubeEmbed
  ├── InstagramCard × n
  ├── LinkCard
  ├── Button
  └── Divider
```

---

## 5. ページ一覧

| ページ名 | パス | 種類 | 役割 |
|---------|------|------|------|
| ホーム | `/` | ISR (1h) | ビジョン・自己紹介・最新動画 |
| 賛美・Worship | `/worship` | Static | プレイリスト・集会情報・楽譜配信 |
| 日々の励まし | `/daily` | Static | みことば動画・デボーション記事 |
| 祈りのパートナー | `/prayer-partner` | Redirect | `/missions-partner` へリダイレクト |
| 証の部屋 | `/testimony` | Static | 証アコーディオン・YouTube・ブログ |
| 交わり | `/fellowship` | Static | 教会紹介・SNS |
| 宣教エッセイ | `/missions` | Static | KBI・TCU 卒業論文PDF |
| 宣教パートナー | `/missions-partner` | Static | 祈りの宣教パートナー募集 |
| お勧めサイト | `/recommended-sites` | Static | カテゴリ別リンク集 |
| 神を知りたい人へ | `/know-god` | Client | 4ステップの救いの説明 |
| つながる | `/contact` | Client | お問い合わせフォーム |
| みちや牧師の心にバスドラム | `/michiya` | Static | みちや牧師 LINE QR コード |
| ニュースレター | `/newsletter` | Static | メールニュース（準備中） |

---

## 6. コンポーネント設計

### レイアウト系

#### `Header`
- **種類:** Client Component (`"use client"`)
- **機能:** スクロール検知（40px閾値）、ドロップダウンメニュー、モバイルハンバーガーメニュー
- **Props:** なし
- **状態:**
  - `menuOpen: boolean` — モバイルメニュー開閉
  - `expandedMobileCategory: string | null` — モバイルドロップダウン展開中カテゴリ
  - `scrolled: boolean` — スクロール済みか
- **ナビゲーション構造:**
  ```
  賛美・Worship (/worship)
  日々のみことば (/daily)
  Hopeを広げる [ドロップダウン]
    ├── ストーリー (/testimony)
    ├── コミニティー (/fellowship)
    ├── 宣教エッセイ (/missions)
    ├── お勧めサイト (/recommended-sites)
    └── 宣教パートナー (/missions-partner)
  人生に答えを探している方へ (/know-god)
  [CTA] つながる (/contact)
  ```

#### `Footer`
- **種類:** Server Component
- **機能:** SNS リンク（LINE, Instagram, Facebook）、著作権表記

#### `BreadcrumbJsonLd`
- **種類:** Server Component
- **Props:** `{ items: BreadcrumbItem[] }` ただし `BreadcrumbItem = { name: string; href: string }`
- **機能:** JSON-LD 形式のパンくず構造化データを `<script type="application/ld+json">` タグとして出力。ホームは自動先頭追加。
- **注意:** `NEXT_PUBLIC_SITE_URL` 環境変数がなければ `https://hope-for-the-world.vercel.app` にフォールバック

#### `ClarityInit`
- **種類:** Client Component (`"use client"`)
- **Props:** `{ clarityId: string }`
- **機能:** `useEffect` 内で `Clarity.init(clarityId)` を呼び出して Microsoft Clarity を初期化する

---

### ページ系

#### `HeroSection`
- **種類:** Client Component
- **機能:** フルスクリーンヒーロー、みことば自動スライダー（5秒ごと）
- **Props:** なし
- **定数:**
  ```typescript
  ROTATION_INTERVAL_MS = 5000
  FADE_DURATION_MS = 700
  DOT_FADE_MS = 300
  ```

#### `PageHero`
- **種類:** Server Component
- **Props:**
  ```typescript
  type PageHeroProps = {
    eyebrow: string;       // 例: "MUSIC × WORSHIP"
    title: string;         // 例: "賛美・Worship"
    subtitle?: string;
    verse?: string;        // 聖書の言葉
    verseRef?: string;     // 参照箇所
  }
  ```

#### `JourneyAccordion`
- **種類:** Client Component
- **機能:** `journeySteps` データをアコーディオン表示
- **Props:** `defaultOpen?: number | null`（初期展開インデックス、デフォルト `null`）
- **状態:** `expandedItemIndex: number | null`

---

### UI コンポーネント（`src/components/ui/`）

#### `Button`
- **種類:** Server Component（Link / button を自動判別）
- **Props:**
  ```typescript
  type Props = {
    variant?: "primary" | "gold" | "outline" | "ghost";
    children: React.ReactNode;
    className?: string;
    href?: string;       // 指定時: Link コンポーネントとしてレンダリング
    external?: boolean;  // true: target="_blank" rel="noopener noreferrer"
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: React.MouseEventHandler;
  }
  ```
- **バリアント:**

  | variant | 見た目 | 主な使用箇所 |
  |---------|--------|------------|
  | `primary` | 紺色背景・白テキスト | testimony, fellowship, know-god |
  | `gold` | ゴールドグラデーション・暗テキスト | ヒーロー, PrayerCta |
  | `outline` | ゴールド枠線・ゴールドテキスト | worship |
  | `ghost` | 白半透明枠線・白テキスト（暗背景用） | ヒーロー, PrayerCta |

#### `SectionHeader`
```typescript
type Props = { title: string; subtitle?: string }
```
左に金色横線を配置したセクション見出し（`flex` レイアウト）。

#### `YouTubeEmbed`
```typescript
type Props = { embedSrc: string; title: string; className?: string }
```
レスポンシブ YouTube iframe（`aspect-video`）。

#### `InstagramCard`
```typescript
type Props = {
  href: string;
  handle: string;
  label?: string;       // 省略時: "Instagram"
  description?: string;
  className?: string;
}
```
Instagram グラデーションボーダー付きカード。

#### `NumberedCard`
```typescript
type Props = { number: string; title: string; text: string }
```
「01」形式の番号付き説明カード。

#### `LinkCard`
```typescript
type Props = {
  href: string;
  label: string;        // バッジ（例: "YouTube", "PDF"）
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  external?: boolean;   // デフォルト true（target="_blank"）
}
```

#### `Divider`
```typescript
type Props = { className?: string }
```
from-transparent via-sky to-transparent のグラデーション水平線。

---

## 7. 型定義

`src/types/index.ts` に全型を集約。

```typescript
// ナビゲーション
type NavChild = { href: string; label: string };
type NavItem =
  | { href: string; label: string; children?: undefined }
  | { label: string; href?: undefined; children: NavChild[] };

// ページ
type PageHeroProps = {
  eyebrow: string; title: string; subtitle?: string;
  verse?: string; verseRef?: string;
};

// 神を知りたい人へ
type KnowGodStep = {
  num: string; title: string; verse: string; ref: string; text: string;
};

// フォーム
type ContactFormStatus = "idle" | "sending" | "done" | "error";

// YouTube
type YouTubeVideo = { id: string; title: string };

// 賛美集会
type Gathering = {
  title: string; date: string; time: string;
  location: string; address?: string; note?: string; mapUrl?: string;
};

// 証の部屋
type TestimonyCategory = "seminary" | "marriage" | "love" | "salvation";
type TestimonyArticle = {
  title: string; excerpt: string; url: string;
  label: string; date: string; category: TestimonyCategory;
};
type TestimonyVideo = {
  title: string; description: string; videoId: string;
  date: string; category: TestimonyCategory;
};

// 日々の励まし
type NoteArticle = {
  title: string; verse: string; ref: string;
  url: string; date: string; label?: string;
};
type DailyVideo = {
  title: string; description: string; embedSrc: string;
  date: string; playlistUrl?: string;
};
type RecommendedLink = { title: string; description: string; url: string; label: string };

// お勧めサイト
type RecommendedSiteCategory = "bible" | "church" | "ministry" | "other"; // 定義のみ・現在未使用
type RecommendedSite = { name: string; description: string; url: string };
type RecommendedSiteGroup = {
  id: string; label: string; en: string;
  description?: string;
  sites: RecommendedSite[];
};

// 宣教論文
type MissionPaper = {
  id: string; title: string; subtitle?: string; comment?: string; label: string; file: string;
};
```

---

## 8. 定数・設定値

`src/lib/constants.ts` に全定数を集約。

### YouTube
```typescript
YOUTUBE = {
  CHANNEL_ID: "UCtj5cJhnm4DNyTO7uXUqmsQ",
  CHANNEL_URL: "https://www.youtube.com/@yutakanakajima960",
  PLAYLISTS: {
    WORSHIP: "...",     // オリジナル賛美プレイリスト ID
    DAILY_WORD: "...",  // 日々のみことばプレイリスト ID
  },
  VIDEOS: {
    GLORY: "...",       // 賛美集会GLORY 動画 ID
    HOPE: "OCAhN8eCKp0", // 最新賛美 動画 ID
  },
  CHANNELS: {
    GLORY: "...",       // GLORY YouTube チャンネル URL
    KBI: "...",         // KBI YouTube チャンネル URL
  }
}
```

### Instagram
```typescript
INSTAGRAM = {
  GLORY:   { handle, url, label },   // 賛美集会GLORY
  LOVEOBI: { handle, url, label },   // Love&Obedience
  YUTAKA:  { handle, url },          // 中島豊 個人
  CHURCH:  { handle, url, label, description }, // 能勢川キリスト教会
}
```

### 外部リンク
```typescript
EXTERNAL = {
  STREAMING: "...",         // 配信サービス URL
  WORSHIP_PLAYLIST: "...",  // YouTube プレイリスト URL
  NOSEGAWA_CHURCH: "...",   // 能勢川キリスト教会 HP
  SCORE_PDF: "...",         // 楽譜 PDF URL
  FACEBOOK: "...",          // Facebook ページ
  AMEBLO: "...",            // アメブロ URL
}
```

### SNS
```typescript
SOCIAL = {
  LINE_OFFICIAL: "...",        // LINE 公式アカウント
  LINE_PRAYER_PARTNER: "...",  // 祈りのパートナー LINE
}
```

### ブランドカラー
```typescript
BRAND_COLORS = {
  FACEBOOK: "#1877F2",
  LINE_GREEN: "#00B900",
  LINE_GREEN_DARK: "#009900",
}
BRAND_GRADIENTS = {
  INSTAGRAM: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
}
```

### SVG アイコンパス
```typescript
ICONS = {
  YOUTUBE:   "...",  // YouTube ロゴ SVG path
  LINE:      "...",  // LINE ロゴ SVG path
  INSTAGRAM: "...",  // Instagram ロゴ SVG path
  FACEBOOK:  "...",  // Facebook ロゴ SVG path
}
```

### キャッシュ
```typescript
CACHE = {
  YOUTUBE_REVALIDATE_SECONDS: 3600,  // 1時間
}
```

---

## 9. データ

### `src/data/journeyItems.tsx`

証の記録アコーディオン用データ。`JourneyAccordion` コンポーネントが使用。

```typescript
type JourneyItem = {
  eyebrow: string;        // 例: "Encounter"
  title: string;          // 例: "イエス様との出会い"
  content: React.ReactNode; // JSX 形式の本文
};

export const journeySteps: JourneyItem[] = [
  { eyebrow: "Encounter",      title: "イエス様との出会い", ... },
  { eyebrow: "God's Love",     title: "神様はあなたを個人的に愛しています", ... },
  { eyebrow: "Identity",       title: "新しいアイデンティティー", ... },
  { eyebrow: "Turning Point",  title: "転機", ... },
  { eyebrow: "Now",            title: "今", ... },
];
```

### コンテンツの追加方法

各ページのデータ配列はファイル先頭または専用 `data/` ファイルに定義されています。

| ページ | データ場所 | 追加方法 |
|--------|---------|---------|
| 賛美集会 | `worship/page.tsx` の `gatherings[]` | 配列に `Gathering` オブジェクトを追加 |
| 賛美配信 | `worship/page.tsx` の `streamingServices[]` | 配列に配信サービス情報を追加 |
| 証の記録 | `testimony/page.tsx` の `articles[]` / `videos[]` | 配列にオブジェクトを追加 |
| 日々の励まし | `daily/page.tsx` の `noteArticles[]` / `youtubeVideos[]` | 配列にオブジェクトを追加 |
| 宣教エッセイ | `missions/page.tsx` の `papers[]` | 配列に `MissionPaper` オブジェクトを追加 |
| お勧めサイト | `recommended-sites/page.tsx` の `categories[]` | 各グループの `sites[]` に追加 |

---

## 10. ライブラリ関数

### `src/lib/youtube.ts`

```typescript
async function fetchLatestYouTubeVideo(): Promise<YouTubeVideo | null>
```
- YouTube RSS フィードから最新動画を取得（API キー不要）
- 取得先: `https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}`
- キャッシュ: `next: { revalidate: 3600 }`（1時間 ISR）
- 失敗時は `null` を返す

### `src/lib/validation.ts`

| 関数 | 引数 | 戻り値 | 役割 |
|------|------|--------|------|
| `validateName` | `unknown` | `{ ok: boolean; error?: string }` | 1〜100文字。違反時 `error` にメッセージ |
| `validateEmail` | `unknown` | `{ ok: boolean; error?: string }` | 正規表現でメール形式を確認 |
| `validateMessage` | `unknown` | `{ ok: boolean; error?: string }` | 2000文字以内 |
| `sanitizeHeader` | `string` | `string` | 改行（`\r\n`）を除去（ヘッダーインジェクション対策） |
| `sanitizeMessage` | `string` | `string` | 連続5行以上の改行を `\n\n` に圧縮 |

---

## 11. API ルート

### `POST /api/contact`

**場所:** `src/app/api/contact/route.ts`

**フロー:**
```
1. リクエスト受信
2. Upstash Redis でレート制限チェック（IP ベース、10回/時間）
3. リクエストボディ取得・JSON パース
4. validateName / validateEmail / validateMessage でサーバー側検証
5. sanitizeHeader / sanitizeMessage でサニタイズ
6. Resend で管理者へ通知メール送信
7. Resend で送信者へ自動返信メール送信
8. 200 / 400 / 429 / 500 レスポンス
```

**レスポンス:**

| ステータス | 意味 |
|----------|------|
| 200 | 送信成功 |
| 400 | バリデーションエラー |
| 429 | レート制限超過 |
| 500 | サーバーエラー |

**セキュリティ:**
- IP ベースのレート制限（Upstash Redis）
- サーバー側バリデーション（クライアント側と二重）
- ヘッダーインジェクション対策（sanitizeHeader）
- 環境変数でのシークレット管理
- 送信先は `CONTACT_EMAIL` のみ（未設定時はメールを送信せず 500 を返す）

### `GET /api/my-ip`

**場所:** `src/app/api/my-ip/route.ts`

`STAGING_ALLOWED_IPS` に自分の IP を追加するための確認用エンドポイント。
`middleware.ts` の matcher から除外されているため、IP 制限で弾かれている状態でもアクセスできる。

**レスポンス:**

| ステータス | 意味 |
|----------|------|
| 200 | `VERCEL_ENV=preview` のとき。`x-real-ip` / `x-forwarded-for` / `x-vercel-forwarded-for` を返す |
| 404 | それ以外の環境（本番・ローカル）。エンドポイントの存在を伏せる |

**セキュリティ:**
- preview 環境限定（`VERCEL_ENV !== "preview"` は 404）
- 許可 IP リスト（`STAGING_ALLOWED_IPS`）はレスポンスに含めない
- `middleware.ts` の 403 本文もクライアント IP のみを表示し、許可リストは出さない

---

## 12. デザインシステム

### カラーパレット（CSS変数 / Tailwind トークン）

| トークン | 値 | 用途 |
|---------|-----|------|
| `gold` | `#C9A84C` | アクセント、CTA、ボーダー |
| `gold-light` | `#e8c97a` | ホバー状態 |
| `gold-dark` | `#b8922a` | 強調 |
| `navy` | `#1a2e5a` | メイン背景、テキスト |
| `navy-light` | `#2a4480` | ライト variant |
| `navy-mid` | `#2d4a8a` | 中間色 |
| `navy-dark` | `#0d1b3e` | ホバー背景 |
| `sky` | `#e8f0fe` | カードボーダー、薄背景 |
| `sky-mid` | `#c5d5f7` | 区切り線 |

### フォント

| 用途 | フォント |
|------|---------|
| 見出し (h1〜h3) | Playfair Display (serif) |
| 本文・UI | Noto Sans JP (sans-serif) |

### スペーシング規則

| 要素 | スペーシング |
|------|-----------|
| セクション縦余白 | `py-12 md:py-24` |
| セクション横余白 | `px-4` |
| カード内余白 | `p-8` |
| カードギャップ | `gap-8` |
| コンテンツ最大幅 | `max-w-7xl`（通常）/ `max-w-5xl`（テキスト重視）|

### Button デザイン

```
primary:  bg-navy   → hover:bg-navy-dark   白テキスト  影あり
gold:     グラデーション(#C9A84C→#e8c97a) 暗テキスト  大きな影
outline:  border-gold/50 ゴールドテキスト  hover:bg-gold/10
ghost:    border-white/25 白テキスト       backdrop-blur  暗背景専用
```

全 Button: `rounded-full` / `text-sm` / `font-medium` / `tracking-wide` / `hover:scale-[1.02]`

### セキュリティヘッダー（`next.config.ts`）

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
X-DNS-Prefetch-Control: on
```

---

## 13. テスト設計

### テスト環境

```
Vitest + happy-dom + @testing-library/react + @testing-library/jest-dom
```

### カバレッジ目標

```
Lines: 85%以上 / Functions: 85%以上 / Branches: 85%以上
```

### テストファイル一覧

| テスト対象 | ファイル | テスト件数 |
|---------|---------|----------|
| `SectionHeader` | `ui/__tests__/SectionHeader.test.tsx` | — |
| `YouTubeEmbed` | `ui/__tests__/YouTubeEmbed.test.tsx` | — |
| `LinkCard` | `ui/__tests__/LinkCard.test.tsx` | — |
| `InstagramCard` | `ui/__tests__/InstagramCard.test.tsx` | — |
| `NumberedCard` | `ui/__tests__/NumberedCard.test.tsx` | — |
| `Header` | `components/__tests__/Header.test.tsx` | — |
| `Footer` | `components/__tests__/Footer.test.tsx` | — |
| `PageHero` | `components/__tests__/PageHero.test.tsx` | — |
| `JourneyAccordion` | `components/__tests__/JourneyAccordion.test.tsx` | — |
| `validation.ts` | `lib/__tests__/validation.test.ts` | — |
| `youtube.ts` | `lib/__tests__/youtube.test.ts` | — |
| `env.ts` | `lib/__tests__/env.test.ts` | — |
| `ip.ts` | `lib/__tests__/ip.test.ts` | — |
| `POST /api/contact` | `api/contact/__tests__/route.test.ts` | — |
| `GET /api/my-ip` | `api/my-ip/__tests__/route.test.ts` | — |
| `contact/page.tsx` | `app/contact/__tests__/page.test.tsx` | — |
| `middleware.ts` | `__tests__/middleware.test.ts` | — |
| `not-found.tsx` | `app/__tests__/not-found.test.tsx` | — |

**合計: 107件**

### テスト実行

```bash
npm test                   # 全テスト実行（watch モード）
npm run test:coverage      # カバレッジ付き実行
npm run type-check         # TypeScript 型チェック
npm run build              # ビルド
```

---

## 14. 環境変数

`.env.local` に設定。本番環境は Vercel ダッシュボードで管理。

| 変数名 | 用途 |
|--------|------|
| `RESEND_API_KEY` | Resend メール API キー |
| `CONTACT_EMAIL` | お問い合わせ受信先メールアドレス |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST エンドポイント |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis 認証トークン |
| `NEXT_PUBLIC_SITE_URL` | サイトの正規 URL（OGP・JSON-LD 用） |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 測定 ID |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity プロジェクト ID |
| `STAGING_ALLOWED_IPS` | Vercel preview 環境の許可 IP リスト（カンマ区切り） |

---

## 15. デプロイ

### Vercel 設定（`vercel.json`）

- フレームワーク: `"framework": "nextjs"` のみ明示（ビルド設定は Vercel が自動推定）

### ブランチ戦略

| ブランチ | 環境 |
|---------|------|
| `main` | 本番（Vercel 本番デプロイ） |
| `develop` | 開発（本番マージ前の作業ブランチ） |

### デプロイフロー

```
git push origin main
    ↓
Vercel CI/CD 自動起動
    ↓
npm run build（TypeScript チェック含む）
    ↓
Vercel エッジネットワークにデプロイ
```
