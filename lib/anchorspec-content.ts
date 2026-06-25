export const ANCHORSPEC_DEFINITION_EN =
  "AnchorSpec is a structured protocol for AI-assisted software development. It separates Intent, Specification, Change Requests, Implementation, and Verification into explicit operational layers so that human–AI collaboration remains traceable, reviewable, and verifiable.";

export const ANCHORSPEC_DEFINITION_JA =
  "AnchorSpecは、AI協働開発において、意図・仕様・変更要求・実装・検証を明示的な運用レイヤーとして分離し、人間とAIの協働を追跡可能・レビュー可能・検証可能にするための構造化プロトコルです。";

export const exclusions = [
  {
    en: "a model-training method",
    ja: "モデル訓練手法ではありません",
  },
  {
    en: "an autonomous coding agent",
    ja: "自律型コーディングエージェントではありません",
  },
  {
    en: "a replacement for source control",
    ja: "ソース管理の代替ではありません",
  },
  {
    en: "a guarantee of correctness",
    ja: "正しさを保証する仕組みではありません",
  },
  {
    en: "a generic prompt template collection",
    ja: "汎用プロンプト集ではありません",
  },
] as const;

export const problemGroups = [
  {
    title: "Under-defined problem spaces",
    titleJa: "未定義の問題領域",
    description:
      "Problems that emerge when goals, specifications, responsibilities, or verification criteria are not made explicit.",
    descriptionJa:
      "目的・仕様・責任・検証基準が明示されないことによって生じる問題です。",
    items: [
      {
        title: "Ambiguous Intent Transfer",
        titleJa: "意図の曖昧伝達",
        description:
          "Intent loses precision as it moves from a human decision into specification and implementation work.",
        descriptionJa:
          "人間の判断から仕様・実装へ移る過程で、意図の精度や判断根拠が失われます。",
      },
      {
        title: "Specification Drift",
        titleJa: "仕様の流動化",
        description:
          "Unreviewed assumptions and local decisions gradually change what is treated as the specification.",
        descriptionJa:
          "未レビューの前提や局所的な判断によって、仕様として扱われる内容が徐々に変化します。",
      },
      {
        title: "Unclear Responsibility Boundaries",
        titleJa: "責任境界の不明確化",
        description:
          "It becomes unclear who may propose, approve, implement, or verify a change.",
        descriptionJa:
          "変更の提案・承認・実装・検証を誰が担うのかが不明確になります。",
      },
      {
        title: "Shallow Verification",
        titleJa: "検証の形骸化",
        description:
          "Verification becomes a superficial completion check instead of a comparison against explicit intent and specification.",
        descriptionJa:
          "検証が、明示された意図や仕様との比較ではなく、表面的な完了確認になります。",
      },
    ],
  },
  {
    title: "Known failure modes",
    titleJa: "既知の問題領域",
    description:
      "Known failure modes in long-running or multi-context AI-assisted development workflows.",
    descriptionJa:
      "長期・複数コンテキストのAI協働開発で知られている失敗モードです。",
    items: [
      {
        title: "Context Drift",
        titleJa: "コンテキストドリフト",
        description:
          "Relevant assumptions, decisions, and references shift or disappear across sessions and tools.",
        descriptionJa:
          "セッションやツールをまたぐ過程で、前提・判断・参照関係がずれたり失われたりします。",
      },
      {
        title: "Specification Gaming",
        titleJa: "仕様の形式的攻略",
        description:
          "Work satisfies the literal wording of a specification while bypassing its intended outcome.",
        descriptionJa:
          "仕様の文面だけを満たし、本来意図された成果や制約を回避する実装が生じます。",
      },
      {
        title: "Hallucination",
        titleJa: "ハルシネーション",
        description:
          "Unsupported assumptions or fabricated details enter planning, implementation, or verification.",
        descriptionJa:
          "根拠のない前提や生成された詳細が、計画・実装・検証へ混入します。",
      },
      {
        title: "Reward-hacking-like optimization in operational workflows",
        titleJa: "運用ワークフローにおける報酬ハッキング類似の最適化",
        description:
          "AnchorSpec does not solve reward hacking in model training. It reduces operational conditions where a system can optimize for a visible completion signal while missing the intended goal.",
        descriptionJa:
          "AnchorSpecは学習アルゴリズム上のReward Hackingを解決しません。目に見える完了指標だけを最適化し、本来の目的を外すような報酬ハッキングに似た挙動が、運用上起きる条件を減らします。",
      },
    ],
  },
] as const;

export const governanceContent = {
  title: "Governance & External Frameworks",
  titleJa: "ガバナンスと外部フレームワークへの位置づけ",
  paragraphs: [
    "AnchorSpec is not a certification scheme and does not guarantee compliance with any legal, regulatory, organizational, or industry-specific framework.",
    "However, AnchorSpec provides a structured protocol for separating intent, specification, change requests, implementation, and verification in AI-assisted software development. This structure can support governance-related activities such as traceability, change control, verification records, and responsibility boundary clarification.",
    "As a result, AnchorSpec can serve as a practical operational layer for connecting AI-assisted development workflows to external governance frameworks, standards, and compliance requirements, while keeping AnchorSpec’s own scope distinct from project-specific legal, organizational, and domain obligations.",
  ],
  paragraphsJa: [
    "AnchorSpecは、特定の法令・規制・マネジメントシステム・業界基準への認証・適合・準拠を保証するものではありません。",
    "ただし、AnchorSpecは、AI協働開発において意図・仕様・変更要求・実装・検証を分離するための構造化プロトコルです。この構造は、追跡可能性、変更管理、検証記録、責任境界の明確化といったガバナンス関連活動を支援できます。",
    "その結果として、AnchorSpecは、AI協働開発のワークフローを外部のガバナンスフレームワーク、標準、コンプライアンス要件へ接続するための実務的な運用レイヤーとして機能し得ます。一方で、AnchorSpec自身の責任範囲と、各プロジェクト固有の法的・組織的・業界的要件は明確に切り分けて扱うものとします。",
  ],
  supportTitle: "What AnchorSpec can support",
  supportTitleJa: "AnchorSpecが支援できる観点",
  supportItems: [
    {
      en: "Separation of intent, specification, implementation, and verification",
      ja: "意図・仕様・実装・検証の分離",
    },
    {
      en: "Traceable change handling through Gap / Change Request workflows",
      ja: "Gap / Change Request を通じた追跡可能な変更管理",
    },
    {
      en: "Explicit verification records and mismatch detection",
      ja: "Verifyによる不一致検出と検証記録",
    },
    {
      en: "Clear responsibility boundaries between proposal, approval, implementation, and review",
      ja: "提案・承認・実装・レビューの責任境界の明確化",
    },
    {
      en: "Separation between AnchorSpec-internal structure and project-specific governance requirements",
      ja: "AnchorSpec内部構造とプロジェクト依存ガバナンス要件の切り分け",
    },
    {
      en: "A practical operational layer that can be mapped to external governance, compliance, or domain-specific control frameworks",
      ja: "外部のガバナンス・コンプライアンス・業界フレームワークへ接続可能な実務レイヤー",
    },
  ],
  examplesTitle: "Examples of external frameworks may include",
  examplesTitleJa: "対象となり得る外部フレームワークの例",
  examplesNote:
    "These are illustrative categories only. AnchorSpec does not guarantee certification, conformity, or compliance with any external framework.",
  examplesNoteJa:
    "これらは接続対象となり得る領域の例示であり、AnchorSpecが認証・適合・準拠を保証するものではありません。",
  exampleItems: [
    {
      en: "AI management and governance standards",
      ja: "AIマネジメント・ガバナンス標準",
    },
    {
      en: "Legal and regulatory AI frameworks",
      ja: "AIに関する法令・規制フレームワーク",
    },
    {
      en: "Domain-specific governance requirements such as healthcare or safety-critical development",
      ja: "医療や安全性が重要な領域におけるドメイン固有のガバナンス要件",
    },
  ],
} as const;

export const faqItems = [
  {
    question: "What is AnchorSpec?",
    answer:
      "AnchorSpec is a structured protocol for AI-assisted software development. It separates intent, specification, change requests, implementation, and verification so that human–AI collaboration remains traceable, reviewable, and verifiable.",
    questionJa: "AnchorSpecとは何ですか？",
    answerJa:
      "AnchorSpecは、AI協働開発のための構造化プロトコルです。意図・仕様・変更要求・実装・検証を分離し、人間とAIの協働を追跡可能・レビュー可能・検証可能にします。",
  },
  {
    question: "Does “AnchorSpec” refer to this AI development protocol?",
    answer:
      "Yes. On this site, AnchorSpec refers to a structured protocol for AI-assisted software development that separates intent, specification, change requests, implementation, and verification so that human–AI collaboration remains traceable, reviewable, and verifiable.",
    questionJa: "このサイトでいう「AnchorSpec」とは何ですか？",
    answerJa:
      "このサイトにおけるAnchorSpecは、AI協働開発において意図・仕様・変更要求・実装・検証を分離し、人間とAIの協働を追跡可能・レビュー可能・検証可能にするための構造化プロトコルを指します。",
  },
  {
    question: "Is AnchorSpec an AI agent framework?",
    answer:
      "No. AnchorSpec is not an autonomous agent framework. It is a protocol for structuring specification, implementation, and verification workflows in human–AI collaboration.",
    questionJa: "AnchorSpecはAIエージェントフレームワークですか？",
    answerJa:
      "いいえ。AnchorSpecは自律型エージェントフレームワークではありません。人間とAIの協働における仕様・実装・検証のワークフローを構造化するためのプロトコルです。",
  },
  {
    question: "What problems does AnchorSpec address?",
    answer:
      "AnchorSpec addresses ambiguous intent transfer, specification drift, unclear responsibility boundaries, shallow verification, context drift, specification gaming, hallucination, and reward-hacking-like optimization in operational workflows.",
    questionJa: "AnchorSpecはどのような問題に対処しますか？",
    answerJa:
      "AnchorSpecは、意図の曖昧伝達、仕様の流動化、責任境界の不明確化、検証の形骸化、Context Drift、Specification Gaming、Hallucination、運用ワークフローにおけるReward Hackingに似た最適化に対処します。",
  },
  {
    question: "Does AnchorSpec solve Reward Hacking directly?",
    answer:
      "No. AnchorSpec does not modify model training or reward functions. Instead, it reduces operational conditions where reward-hacking-like behavior can appear in AI-assisted development workflows.",
    questionJa: "AnchorSpecはReward Hackingを直接解決しますか？",
    answerJa:
      "いいえ。AnchorSpecはモデル学習や報酬関数を変更しません。代わりに、AI協働開発の運用ワークフローでReward Hackingに似た挙動が現れる条件を減らします。",
  },
  {
    question: "How is AnchorSpec different from ordinary specification documents?",
    answer:
      "Ordinary specification documents often become static artifacts. AnchorSpec defines operational layers and change paths, including Intent, Specification, Change Requests, Implementation, Gap handling, and Verification.",
    questionJa: "AnchorSpecは通常の仕様書と何が違いますか？",
    answerJa:
      "通常の仕様書は静的な成果物になりがちです。AnchorSpecは、Intent、Specification、Change Requests、Implementation、Gap handling、Verificationを含む運用レイヤーと変更経路を定義します。",
  },
] as const;
