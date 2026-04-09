# Hope for the World — 開発計画

## 技術スタック

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4（globals.css で `@theme inline` 設定）
- Google Fonts: Noto Sans JP + Playfair Display
- カラー: ゴールド `#C9A84C`、ネイビー `#1a2e5a`

---

## フェーズ一覧

### Phase 1 — Next.js セットアップ ✅
- プロジェクト初期化
- ヘッダー・フッター・グローバルレイアウト実装

### Phase 2 — トップページ ✅
- ヒーローセクション
- ビジョンセクション
- YouTube プレースホルダー
- 祈り CTA セクション

### Phase 3 — 各ページ実装 ✅
- [x] `/worship` — 賛美ミニストリー
- [x] `/daily` — 日々の励まし
- [x] `/newsletter` — 最新ニュースレター
- [x] `/missions` — 宣教論文
- [x] `/fellowship` — 交わり
- [x] `/prayer-partner` — 祈りのパートナー
- [x] `/testimony` — 証の部屋
- [x] `/know-god` — 神を知りたい人へ
- [x] `/contact` — ミニストリー依頼

### Phase 4 — 祈りリクエスト機能
- [ ] Supabase セットアップ
- [ ] `/prayer` — 祈りリクエスト送信・一覧ページ

### Phase 5 — デプロイ（最後に実施）
- [ ] Vercel へのデプロイ
- [ ] 環境変数の設定
- [ ] 独自ドメインの設定（必要であれば）

---

## ページ追加のルール

- ページファイル: `src/app/[ページ名]/page.tsx`
- ナビゲーション追加: `src/components/Header.tsx` の `navLinks` に追記
