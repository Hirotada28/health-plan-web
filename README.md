# Health Plan Web

健康管理・サプリメント摂取プラン用のMVPアプリケーション

## 技術スタック

- **フロントエンド**: Next.js 16 + React 19 + TypeScript + Tailwind CSS
- **データベース**: Supabase
- **チャート**: Chart.js + react-chartjs-2
- **パッケージマネージャー**: pnpm

## 機能

- 週間ルーティン管理（通常モード / 重要日モード）
- コスト比較シミュレーション
- 継続によるロードマップ表示
- インタラクティブなチャート表示

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# 環境変数の設定
cp .env.local.example .env.local
# .env.localにSupabaseの認証情報を設定してください
```

## 開発

```bash
# 開発サーバーの起動
pnpm dev
```

アプリケーションは http://localhost:3000 で起動します。

## ビルド

```bash
# プロダクションビルド
pnpm build

# プロダクションサーバーの起動
pnpm start
```

## プロジェクト構造

```
health-plan-web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # ルートレイアウト
│   │   ├── page.tsx            # メインページ
│   │   └── globals.css         # グローバルスタイル
│   ├── components/             # Reactコンポーネント
│   │   ├── charts/             # チャートコンポーネント
│   │   │   ├── BalanceChart.tsx
│   │   │   └── CostChart.tsx
│   │   ├── DayCard.tsx
│   │   ├── DayDetailPanel.tsx
│   │   ├── NavButton.tsx
│   │   └── RoadmapItem.tsx
│   ├── data/                   # データファイル
│   │   ├── weekData.ts
│   │   └── roadmapData.ts
│   ├── lib/                    # ユーティリティ
│   │   └── supabase.ts         # Supabaseクライアント
│   └── types/                  # TypeScript型定義
│       └── index.ts
├── public/                     # 静的ファイル
├── next.config.ts              # Next.js設定
├── tailwind.config.ts          # Tailwind CSS設定
├── tsconfig.json               # TypeScript設定
└── package.json
```

## 元のHTMLからの移行

このアプリケーションは、元のindex.htmlを以下のようにReactコンポーネントに分解しました：

- **NavButton**: トップナビゲーションボタン
- **DayCard**: 週間カレンダーの日カード
- **DayDetailPanel**: 選択した日の詳細パネル
- **RoadmapItem**: ロードマップの各ステップ
- **BalanceChart**: 月間エネルギー配分チャート（Doughnut）
- **CostChart**: コスト比較チャート（Bar）

### 将来的な拡張

Supabaseを使用して以下の機能を実装できます：

- ユーザー認証
- 個人データの保存
- 摂取履歴の記録
- 目標設定と進捗管理
- リマインダー機能

## Supabaseセットアップ

1. [Supabase](https://supabase.com/)でプロジェクトを作成
2. プロジェクトURLとAnon Keyを取得
3. \`.env.local\`に以下を設定：

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
