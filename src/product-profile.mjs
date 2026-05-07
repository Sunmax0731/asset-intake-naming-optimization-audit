export const productProfile = {
  "repository": "asset-intake-naming-optimization-audit",
  "title": "アセット受け入れ・命名・最適化監査",
  "domain": "AssetPipeline",
  "hostApp": null,
  "rank": 30,
  "ideaNo": 1,
  "overview": "モデル、Import Settings、LOD、Collider、UV、命名規則、フォルダ規約を受け入れ時にまとめて検査する。",
  "problem": "受け入れ、命名、最適化、インポート設定が別工程になると後工程で差し戻しが起きやすい。",
  "differentiation": "DCCとゲームエンジンの両方の条件を1つの受け入れチェックにまとめる。",
  "publish": "GitHub Release / BOOTH",
  "surface": "CLI + asset manifest validator",
  "entity": "asset intake record",
  "requiredFields": [
    "id",
    "title",
    "source",
    "assetPath",
    "namingRule",
    "optimizationTarget",
    "owner",
    "acceptance"
  ],
  "warningField": "lodPlan",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
