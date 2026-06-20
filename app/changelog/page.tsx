import type { Metadata } from "next";
import Image from "next/image";
import {
  ChangelogTimeline,
  type ProtocolChange,
} from "@/components/changelog-timeline";
import styles from "@/styles/changelog.module.css";

export const metadata: Metadata = {
  title: "変更履歴 | AnchorSpec",
  description:
    "AnchorSpecプロトコルが、設計上の課題と判断を通じてどのように進化してきたかを紹介します。",
};

const protocolChanges: ProtocolChange[] = [
  {
    date: "v2.1 公開時",
    version: "v2.1",
    title: "AnchorSpec 初期公開",
    summary:
      "意図・仕様・差分・実装・検証を分けて扱い、Specを信頼できる唯一の情報源として維持する基本モデルを公開しました。",
    reason:
      "AIとの長期開発では、会話だけに前提を置くと意図や判断理由が薄れていきます。開発状態を役割ごとに分離し、人とAIが同じ基準を参照できる土台が必要でした。",
  },
  {
    date: "v2.2 設計期",
    version: "v2.2",
    title: "Strand / Splice 導入",
    summary:
      "競合しうる複数の仕様案をStrandとして保持し、過去の材料を再解釈して新しいStrandを作るSpliceを導入しました。",
    reason:
      "異なる設計案を早い段階で一つに混ぜると、選択肢と判断の経緯が失われます。並行案を残したまま比較し、新しい解釈を明示的に作るための仕組みとして設計されました。",
  },
  {
    date: "v2.3 設計期",
    version: "v2.3",
    title: "Selection 導入",
    summary:
      "複数のStrandから現在採用する仕様系統を選び、採用しなかった代替案と選択理由も残すSelectionを導入しました。",
    reason:
      "仕様案を保存するだけでは、どの案を実装の基準にするかが曖昧になります。現在の判断を明示しながら、将来再検討できる履歴を失わないために追加されました。",
  },
  {
    date: "v2.3 設計期",
    version: "v2.3",
    title: "Parameter Layer 導入",
    summary:
      "ThreadやOperationそのものとは別に、実行環境、制約、検証条件などの解釈・運用条件を保持する補助レイヤーを導入しました。",
    reason:
      "運用条件が会話やツール設定へ埋もれると、同じ仕様でも結果が変わります。状態と、その状態をどう扱うかという条件を分離し、見えない依存関係を減らす必要がありました。",
  },
  {
    date: "2026-05-20",
    version: "設計変更",
    title: "Strand / Splice / Selection をDeprecated化",
    summary:
      "並列仕様の管理をAnchorSpec本体の責務から外し、プロジェクト戦略または外部ツールで扱う方針へ変更しました。",
    reason:
      "並列分岐の管理までプロトコル内部へ含めると、核となる意図・仕様・差分・検証のモデルが複雑になります。AnchorSpecの責務を、開発状態の一貫性維持へ集中させるための整理です。",
    status: "deprecated",
  },
  {
    date: "Deprecated化以降",
    version: "現行モデル",
    title: "Verification Transition Table 導入",
    summary:
      "Verifyで見つかった不一致を、種類に応じてGapまたはImplGapへ記録する状態遷移を明示しました。",
    reason:
      "Verifyが検出と修正を同時に行うと、問題の記録や人間の判断を飛ばして仕様が変わる危険があります。検出後の行き先を表として固定し、Verifyを『直す操作』ではなく『見つける操作』として守るためです。",
  },
  {
    date: "現行設計期",
    version: "現行モデル",
    title: "Build Plan モデル導入",
    summary:
      "Frozen Specを実装へ移す前に、対象、依存関係、制約、検証条件を確認するBuild Planフェーズを導入しました。",
    reason:
      "AIが仕様を受け取ってすぐ実装へ進むと、対象範囲や禁止事項の解釈違いが後から表面化します。Build Planを人間が確認できる発注確認書として置き、実装前に合意するためです。",
  },
  {
    date: "現行設計期",
    version: "現行モデル",
    title: "External Markdown 方式へ移行",
    summary:
      "意図、仕様、差分、実装文脈、検証結果を、特定のAIサービス内ではなく外部Markdownファイルで管理する方式へ移行しました。",
    reason:
      "開発記録がチャットや特定プラットフォームだけに残ると、別のAIやツールへ引き継げません。人が読めて差分管理できるMarkdownを外部の正本とし、可搬性と長期保存性を高めるためです。",
  },
];

export default function ChangelogPage() {
  return (
    <main className={styles.changelogPage}>
      <header className={styles.changelogHero}>
        <div>
          <p className="eyebrow">Protocol Evolution</p>
          <h1>変更履歴</h1>
          <p className={styles.changelogLead}>
            ここに記録するのは、Gitのコミット一覧ではありません。
            AnchorSpecが何を課題と捉え、どの責務を追加し、何を手放してきたのか。
            プロトコルの進化と、その背景にある設計判断をたどるための履歴です。
          </p>
        </div>

        <div className={styles.changelogVisual}>
          <div className={styles.changelogVisualFrame}>
            <Image
              src="/images/nia.png"
              alt=""
              width={1024}
              height={617}
              priority
              sizes="(max-width: 900px) 100vw, 520px"
              className={styles.changelogVisualImage}
            />
          </div>

          <aside className={styles.changelogGuide} aria-label="このページの読み方">
            <span>Design History</span>
            <strong>8 milestones</strong>
            <p>
              バージョン番号、変更内容、変更理由を一つの流れとして整理しています。
            </p>
          </aside>
        </div>
      </header>

      <section className={styles.changelogSection} aria-labelledby="timeline-title">
        <div className={styles.changelogSectionHeading}>
          <span>01</span>
          <div>
            <p>Evolution Timeline</p>
            <h2 id="timeline-title">プロトコルの進化史</h2>
          </div>
        </div>

        <ChangelogTimeline changes={protocolChanges} />
      </section>

      <section className={styles.changelogNote} aria-labelledby="history-note-title">
        <span>02</span>
        <div>
          <p className={styles.changelogNoteLabel}>About this history</p>
          <h2 id="history-note-title">日付よりも、判断の連続性を残す</h2>
          <p>
            正確な公開日が確認できない項目は、推測の日付を記載せず、バージョンまたは設計時期で示しています。
            今後の変更も、機能名だけでなく「なぜ変えたのか」を中心に追加していきます。
          </p>
        </div>
      </section>
    </main>
  );
}
