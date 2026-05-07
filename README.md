# asset-intake-naming-optimization-audit

アセット受け入れ・命名・最適化監査 は、モデル、Import Settings、LOD、Collider、UV、命名規則、フォルダ規約を受け入れ時にまとめて検査する。

## 何を解決するか

受け入れ、命名、最適化、インポート設定が別工程になると後工程で差し戻しが起きやすい。

## 差別化

DCCとゲームエンジンの両方の条件を1つの受け入れチェックにまとめる。

## 公開先

- GitHub Release / BOOTH

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- CLI + asset manifest validator の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/asset-intake-naming-optimization-audit-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\AssetPipeline\created_idea_001_asset-intake-naming-optimization-audit`
- idea ZIP: `D:\AI\AssetPipeline\created_idea_001_asset-intake-naming-optimization-audit\idea_001_asset-intake-naming-optimization-audit.zip`
- PICKUP rank: 30
- Domain: AssetPipeline
