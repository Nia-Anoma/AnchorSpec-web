import Image from "next/image";
import Link from "next/link";
import { AnchorSpecSummaryCard } from "@/components/anchor-spec-summary-card";
import { assetPath } from "@/lib/assets";
import styles from "@/styles/home.module.css";

const description =
  "AnchorSpec is an AI-native development protocol for preserving intent, specifications, discussion history, and verification across long-running human-AI software development.";

/*const codeRepository = "https://github.com/OWNER/AnchorSpec";*/
const codeRepository = "https://github.com/Nia-Anoma/AnchorSpec";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "AnchorSpec",
  author: {
    "@type": "Person",
    name: "Nia Anoma",
  },
  license: "https://opensource.org/licenses/MIT",
  programmingLanguage: "Markdown",
  codeRepository,
  description,
};

export default function Home() {
  return (
    <main className={styles.homePage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className={styles.homeHero}>
        <div className={styles.homeHeroCopy}>
          <p className="eyebrow">AIネイティブ開発プロトコル</p>

          <h1 className={styles.homeHeroTitle}>AnchorSpec</h1>

          <p className={styles.homeHeroSubtitle}>
            意図・仕様・議論・実装・検証の
            <br />
            一貫性を物理的に維持するための
            <br />
            オープンソース開発プロトコル
          </p>

          <p className={styles.homeHeroDescription}>
            AIがコードを書く時代。
            <br />
            重要なのは生成速度ではなく、意図・仕様の管理とAIの統制です。
            <br />
            AnchorSpecは、意図・仕様・議論・実装・検証を接続し、
            <br />
            長期的なAI協働開発を支えるためのオープンソース開発プロトコルです。
          </p>

          <div className={styles.homeHeroAuthorCard}>
            <Image
              src={assetPath("/images/nia-anoma.png")}
              alt="Nia Anoma"
              width={64}
              height={64}
              className={styles.homeHeroAuthorImage}
            />
            <div className={styles.homeHeroAuthorCopy}>
              <p className={styles.homeHeroAuthor}>Created by</p>
              <p className={styles.homeHeroAuthorName}>ニア・アノマ</p>
            </div>
          </div>

          <div className={styles.homeHeroActions}>
            <Link href="/docs" className="primary-button">
              仕様を読む
            </Link>
          </div>
        </div>

        <div className={styles.homeHeroVisual}>
          <Image
            src={assetPath("/images/hero-author.png")}
            alt="AnchorSpecを開発するNia Anoma"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
            className={styles.homeHeroVisualImage}
          />

          <AnchorSpecSummaryCard />
        </div>
      </section>

      <section className={styles.homeArchitectureSection} aria-labelledby="architecture-title">
        <div className={styles.homeArchitectureHeading}>
          <p className="eyebrow">システムアーキテクチャ</p>
          <h2 id="architecture-title">アーキテクチャ概念</h2>
        </div>

        <div className={styles.homeArchitectureGrid}>
          <article className={styles.homeArchitecturePanel}>
            <div className={styles.homeArchitectureFlow} aria-label="人からAnchorSpecを経由してAIプラットフォームへ">
              <div className={styles.homeArchitectureNode}>
                <span className={styles.homeArchitectureNodeLabel}>ユーザ</span>
              </div>
              <span className={styles.homeArchitectureArrow} aria-hidden="true">↓</span>
              <div className={`${styles.homeArchitectureNode} ${styles.homeArchitectureNodeAnchor}`}>
                <span className={styles.homeArchitectureNodeLabel}>AnchorSpec</span>
                <span className={styles.homeArchitectureNodeNote}>
                  意図と文脈を保持する中間層
                </span>
              </div>
              <span className={styles.homeArchitectureArrow} aria-hidden="true">↓</span>
              <div className={styles.homeArchitectureNode}>
                <span className={styles.homeArchitectureNodeLabel}>AIプラットフォーム</span>
              </div>
            </div>

            <p className={styles.homeArchitectureSummary}>
              AnchorSpecは、人とAIシステムの間で開発文脈を継続的に保持する、
              プラットフォーム非依存の中間層です。
              <br/>
              AIは高速に生成できますが、意図・仕様・議論の継続的な管理は苦手です。
              <br/>
              AnchorSpecは開発文脈を構造化し、意図・仕様・議論・実装・検証の一貫性を維持します。
              <br/>
              AIやツールが変わっても継続利用できるプラットフォーム非依存の中間層として機能します。
            </p>
          </article>

          <article className={styles.homeArchitecturePanel}>
            <div
              className={styles.homeArchitectureFlow}
              aria-label="ガバナンスから運用層とAnchorSpecを経由してAIプラットフォームへ"
            >
              <div className={styles.homeArchitectureNode}>
                <span className={styles.homeArchitectureNodeLabel}>ガバナンス</span>
                <span className={styles.homeArchitectureNodeNote}>
                  法的・コンプライアンス要件
                </span>
              </div>
              <span className={styles.homeArchitectureArrow} aria-hidden="true">↓</span>
              <div className={`${styles.homeArchitectureNode} ${styles.homeArchitectureNodeOperation}`}>
                <span className={styles.homeArchitectureNodeLabel}>運用層</span>
                <span className={styles.homeArchitectureNodeNote}>
                  方針と運用上の統制
                </span>
              </div>
              <span className={styles.homeArchitectureArrow} aria-hidden="true">↓</span>
              <div className={`${styles.homeArchitectureNode} ${styles.homeArchitectureNodeAnchor}`}>
                <span className={styles.homeArchitectureNodeLabel}>AnchorSpec</span>
                <span className={styles.homeArchitectureNodeNote}>
                  構造化された開発状態
                </span>
              </div>
              <span className={styles.homeArchitectureArrow} aria-hidden="true">↓</span>
              <div className={styles.homeArchitecturePlatforms}>
                <p>AIプラットフォーム</p>
                <div className={styles.homeArchitecturePlatformGrid}>
                  <span>OpenAI</span>
                  <span>Claude</span>
                  <span>Gemini</span>
                  <span>ローカルLLM</span>
                </div>
              </div>
            </div>

            <p className={styles.homeArchitectureSummary}>
              運用層はガバナンス要件とAIプラットフォームを接続します。
              <br/>
              AnchorSpecは、開発とガバナンスを統合するための構造的な基盤を提供します。
              <br/>
              AIの利用が組織規模へ拡大すると、開発だけでなく運用・監査・コンプライアンスとの接続が必要になります。
              <br/>
              AnchorSpecは開発状態を構造化することで、ガバナンス要件とAI開発プロセスを接続するための基盤を提供します。
            </p>
          </article>
        </div>
      </section>

      <section className={styles.homeConceptSection} aria-labelledby="concept-title">
        <div className={styles.homeConceptHeading}>
          <p className="eyebrow">中核概念</p>
          <h2 id="concept-title">AnchorSpecが固定する4つの軸</h2>
        </div>

        <div className={styles.homeConceptGrid}>
          <article className={styles.homeConceptCard}>
            <p className={styles.homeConceptIndex}>01</p>
            <h3>意図（Intent）</h3>
            <p>
              プロジェクトの元になる目的、ゴール、ビジョンです。
              <br/>
              AIとの対話で解釈が揺れないよう、最初に参照すべき意図として保持します。
              <br/>
              粒度はプロジェクトの性質に依存する為、AnchorSpecでの定義は行いません。
            </p>
          </article>

          <article className={styles.homeConceptCard}>
            <p className={styles.homeConceptIndex}>02</p>
            <h3>仕様（Specification）</h3>
            <p>
              GapからChange Requestを通じて合意された仕様状態です。
              <br/>
              実装や変更判断は、この仕様を基準として意図との一貫性を確認します。
              <br/>
              Specは常に整合したSource of Truthとして維持される必要があります。
            </p>
          </article>

          <article className={styles.homeConceptCard}>
            <p className={styles.homeConceptIndex}>03</p>
            <h3>差分（Gap）</h3>
            <p>
              未作成、未設計、不一致、不確実性、未決定事項、未解決の差分を記録したものです。
              <br/>
              ずれを曖昧なまま流さず、扱う対象として残します。
              <br/>
              差分を議題としてAIと議論し、必要と判断した場合はChange Requestを通じてSpecへと昇格させます。
            </p>
          </article>

          <article className={styles.homeConceptCard}>
            <p className={styles.homeConceptIndex}>04</p>
            <h3>検証（Verification）</h3>
            <p>
              Verifyは修正ではなく、仕様や実装との不一致を検出する行為です。
              <br/>
              見つかった問題はその場では修正せずにGapまたはImplGapとして扱います。
              <br/>
              verifyの非検知はプロジェクトの終了を意味しません。
              <br/>
              LLMによってverifyの評価関数が最適化(元の評価軸からブレる)された場合など、
              <br/>
              verifyの結果が常に正しいとは限りません。
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
