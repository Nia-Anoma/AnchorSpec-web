import type { Metadata } from "next";
import Image from "next/image";
import styles from "@/styles/specification.module.css";

const SPECIFICATION_URL = "https://github.com/Nia-Anoma/AnchorSpec";

export const metadata: Metadata = {
  title: "AnchorSpec 仕様紹介 | AI協働開発プロトコル",
  description:
    "AnchorSpecを初めて知る開発者向けに、解決する問題、コア概念、Thread Model、Verifyの考え方を紹介します。",
};

const coreConcepts = [
  {
    name: "Intent",
    label: "目的と判断軸",
    description:
      "システムが達成すべき目的（Why）を定義する最上位の基準です。更新はユーザーの直接編集に限定されます。",
  },
  {
    name: "Spec",
    label: "唯一の正本",
    description:
      "合意済みの仕様と判断理由を保持するSource of Truthです。承認済みのChange Requestだけが反映されます。",
  },
  {
    name: "Gap",
    label: "変化の入口",
    description:
      "未定義、矛盾、アイデア、フィードバックを受け止めます。差分をSpecへ直接混入させないための領域です。",
  },
  {
    name: "Impl",
    label: "実装状態",
    description:
      "Specを具体化した現実の実装です。正しさは自動的には保証されず、Verifyの比較対象になります。",
  },
] as const;

const threads = [
  { name: "Intent", role: "全体目標", input: "ユーザー入力" },
  { name: "Spec", role: "仕様と履歴", input: "承認済みCR" },
  { name: "Gap", role: "議論と差分の入口", input: "人間 / AI" },
  { name: "Impl", role: "実装", input: "Build Plan" },
  { name: "ImplGap", role: "実装上の差分", input: "Verify / 実装議論" },
] as const;

export default function DocsPage() {
  return (
    <main className={styles.specPage}>
      <header className={styles.specHero}>
        <div className={styles.specHeroCopy}>
          <p className="eyebrow">AnchorSpec Specification Guide</p>
          <h1 className={styles.specTitle}>
            AnchorSpec 
            <br/>
            仕様書
          </h1>
          <p className={styles.specLead}>
            AnchorSpecは、思考・仕様・実装を分離し、差分と検証によって再接続する
            AIネイティブ開発プロトコルです。このページでは、初めて触れる開発者が
            運用の全体像をつかめるように中核だけを紹介します。
          </p>
        </div>

        <div className={styles.specHeroVisual} aria-hidden="true">
          <Image
            src="/images/Anchor.svg"
            alt="AnchorSpec"
            width={480}
            height={480}
            className="spec-hero-image"
          />
        </div>
      </header>

      <nav className={styles.specToc} aria-label="このページの目次">
        <a href="#what-is-anchorspec">AnchorSpecとは</a>
        <a href="#problems">解決する問題</a>
        <a href="#core-concepts">コア概念</a>
        <a href="#thread-model">Thread Model</a>
        <a href="#verify">Verify</a>
        <a href="#full-specification">詳細仕様</a>
      </nav>

      <section className={styles.specSection} id="what-is-anchorspec">
        <SectionHeading number="01" eyebrow="Overview" title="AnchorSpecとは何か" />

        <div className={`${styles.specProse} ${styles.specProseWide}`}>
          <p>
            AnchorSpecは、人間とAIの共同開発における構造管理を対象とします。
            AIにコード生成を任せるだけでなく、目的、合意済み仕様、議論中の差分、
            実装状態を別々の責務として管理します。
          </p>
          <p>
            中心原則は、<strong>Specを唯一のSource of Truthとして扱うこと</strong>
            です。新しい提案や矛盾はGapへ集め、Change Requestとして整理し、
            人間が承認した変更だけをSpecへ適用します。
          </p>
        </div>

        <div className={styles.specPrincipleRow} aria-label="AnchorSpecの基本原則">
          <article className={styles.specPrincipleCard}>思考と仕様を分離</article>
          <article className={styles.specPrincipleCard}>変更はGapを経由</article>
          <article className={styles.specPrincipleCard}>構造の決定権は人間</article>
        </div>
      </section>

      <section className={`${styles.specSectionAlt} ${styles.specSection}`} id="problems">
        <SectionHeading number="02" eyebrow="Problem" title="解決する問題" />

        <p className={styles.specSectionIntro}>
          長期のAI協働開発では、会話の長さだけでなく、意味の密度、依存関係、
          矛盾する前提の混在によって構造が静かに変化します。
        </p>

        <div className={`${styles.specCardGrid} ${styles.specProblemGrid}`}>
          <article className={styles.specCard}>
            <h3>Context Drift</h3>
            <p>
              保持されるべき前提・意図・参照関係がずれ、再現性と整合性が失われる現象です。
              蓄積による緩やかなDriftと、矛盾をAIが暗黙に解消する衝突型Driftがあります。
            </p>
          </article>
          <article className={styles.specCard}>
            <h3>Semantic Load</h3>
            <p>
              テキスト量ではなく、目的、制約、仕様、議論、依存関係など
              「意味の総量」が増えることで、重要度の重み付けが不安定になります。
            </p>
          </article>
          <article className={styles.specCard}>
            <h3>Structural Lie</h3>
            <p>
              表面上は整合して見えても、前提や参照関係が破綻している状態です。
              明示的なエラーになりにくいため、正しい状態だと誤認する危険があります。
            </p>
          </article>
          <article className={styles.specCard}>
            <h3>Discrete Drift</h3>
            <p>
              別セッションで行われた変更を知らないAIが、古い合意に基づいて処理を続ける問題です。
              複数AIや複数コンテキストを並行利用すると特に顕在化します。
            </p>
          </article>
        </div>
      </section>

      <section className={styles.specSection} id="core-concepts">
        <SectionHeading number="03" eyebrow="Core Concepts" title="コア概念" />

        <div className={`${styles.specCardGrid} ${styles.specConceptGrid}`}>
          {coreConcepts.map((concept) => (
            <article className={styles.specCard} key={concept.name}>
              <p className={styles.specCardLabel}>{concept.label}</p>
              <h3>{concept.name}</h3>
              <div>{concept.description}</div>
            </article>
          ))}
        </div>

        <div className={styles.specChangeFlow} aria-label="仕様変更の流れ">
          <span>提案・矛盾</span>
          <b>→</b>
          <span>Gap</span>
          <b>→</b>
          <span>Change Request</span>
          <b>→</b>
          <span>人間の承認</span>
          <b>→</b>
          <span>Spec</span>
        </div>
      </section>

      <section className={`${styles.specSectionAlt} ${styles.specSection}`} id="thread-model">
        <SectionHeading
          number="04"
          eyebrow="Thread Model"
          title="役割ごとに文脈を分離する"
        />

        <div className={`${styles.specDiagramGrid} ${styles.specThreadLayout}`}>
          <div className={`${styles.specDiagramPanel} ${styles.specThreadDiagram}`} aria-label="AnchorSpec Thread Model">
            <div className={`${styles.specThreadNode} ${styles.specThreadIntent}`}>Intent</div>
            <span>判断基準として参照</span>
            <div className={styles.specThreadLanes}>
              <div>
                <p>仕様レーン</p>
                <div className={styles.specThreadNode}>Gap</div>
                <b>↓ CR / Approve</b>
                <div className={`${styles.specThreadNode} ${styles.specThreadSpec}`}>Spec</div>
                <b>↓ Thaw / Build Plan</b>
              </div>
              <div>
                <p>実装レーン</p>
                <div className={styles.specThreadNode}>Impl</div>
                <b>↓ Verify</b>
                <div className={styles.specThreadNode}>ImplGap</div>
              </div>
            </div>
          </div>

          <div className={`${styles.specDiagramPanel} ${styles.specThreadTable}`} role="table" aria-label="スレッドの役割">
            <div className={styles.specThreadTableHead} role="row">
              <span role="columnheader">Thread</span>
              <span role="columnheader">役割</span>
              <span role="columnheader">主な入力</span>
            </div>
            {threads.map((thread) => (
              <div role="row" key={thread.name}>
                <strong role="cell">{thread.name}</strong>
                <span role="cell">{thread.role}</span>
                <span role="cell">{thread.input}</span>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.specNote}>
          Threadは単なる分類ではなく、独立した文脈・役割・履歴を持つ会話単位です。
          Gapを必要に応じて分離し、不要になったものを整理することもDrift抑制の一部です。
        </p>
      </section>

      <section className={styles.specSection} id="verify">
        <SectionHeading number="05" eyebrow="Verification" title="Verify（検証）は修正しない" />

        <div className={`${styles.specDiagramGrid} ${styles.specVerifyLayout}`}>
          <div className={`${styles.specDiagramPanel} ${styles.specVerifyFlow}`} aria-label="Verifyの処理">
            <span>Intent / Spec</span>
            <b>↓ 比較</b>
            <strong>Verify</strong>
            <b>↓ 検出結果</b>
            <span>Gap / ImplGap</span>
          </div>

          <div className={`${styles.specDiagramPanel} ${styles.specProse}`}>
            <p>
              Verifyは検証を行いますが、修正は行いません。
              仕様・意図・実装の不一致を検出し、GapまたはImplGapへ出力します。
            </p>
            <p>
              Verifyの責務は、仕様・意図・実装の不一致を検出して報告することです。
              検出と修正を同時に行うと、何が問題で、なぜ変えたのかが失われます。
            </p>
            <p>
              見つかった問題はGapまたはImplGapへ出力し、議論と承認を経て処理します。
              AIは検証と提案を担えますが、構造やSpecを自律的に確定してはなりません。
            </p>
          </div>
        </div>

        <div className={styles.specWarning}>
          <strong>AnchorSpecが保証しないこと</strong>
          <p>
            正解、AIの推論品質、Context維持の完全性、永続性、完全な再現性、
            差分の自動解決は保証しません。AnchorSpecは構造的な制御手段であり、
            最終判断と運用責任は人間側にあります。
          </p>
        </div>
      </section>

      <section className={`${styles.specSectionAlt} ${styles.specSection} ${styles.specSpecLink}`} id="full-specification">
        <div>
          <p className="eyebrow">Canonical Specification</p>
          <h2>詳細仕様を読む</h2>
          <p>
            Edition構成、状態遷移、Change Request、Freeze / Thaw、各Threadの厳密な制約は
            正式な仕様リポジトリを参照してください。
          </p>
        </div>
        <a href={SPECIFICATION_URL} target="_blank" rel="noreferrer">
          GitHubで詳細仕様を開く
        </a>
      </section>
    </main>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
}: {
  number: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className={styles.specSectionHeading}>
      <span>{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
