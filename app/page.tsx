import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnchorSpecSummaryCard } from "@/components/anchor-spec-summary-card";
import { assetPath } from "@/lib/assets";
import {
  ANCHORSPEC_DEFINITION_EN,
  ANCHORSPEC_DEFINITION_JA,
  exclusions,
  faqItems,
  problemGroups,
} from "@/lib/anchorspec-content";
import {
  createPageMetadata,
  SITE_DESCRIPTION,
  SITE_DESCRIPTION_EN,
  SITE_URL,
} from "@/lib/seo";
import styles from "@/styles/home.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "AnchorSpec",
  description: SITE_DESCRIPTION,
  path: "/",
});

/*const codeRepository = "https://github.com/OWNER/AnchorSpec";*/
const codeRepository = "https://github.com/Nia-Anoma/AnchorSpec";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "AnchorSpec",
      description: SITE_DESCRIPTION_EN,
      inLanguage: ["en", "ja"],
      publisher: { "@id": `${SITE_URL}/#author` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#author`,
      name: "Nia Anoma",
      alternateName: "ニア・アノマ",
      url: `${SITE_URL}/about`,
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": `${SITE_URL}/#software`,
      name: "AnchorSpec",
      author: { "@id": `${SITE_URL}/#author` },
      license: "https://opensource.org/licenses/MIT",
      programmingLanguage: "Markdown",
      codeRepository,
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION_EN,
    },
    {
      "@type": "TechArticle",
      "@id": `${SITE_URL}/docs#article`,
      headline: "AnchorSpec Specification Guide",
      description: SITE_DESCRIPTION_EN,
      url: `${SITE_URL}/docs`,
      image: [`${SITE_URL}/images/og-image.png`],
      author: { "@id": `${SITE_URL}/#author` },
      publisher: { "@id": `${SITE_URL}/#author` },
      about: { "@id": `${SITE_URL}/#software` },
      inLanguage: ["en", "ja"],
    },
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  url: `${SITE_URL}/#faq`,
  inLanguage: ["en", "ja"],
  mainEntity: faqItems.flatMap((item) => [
    {
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    },
    {
      "@type": "Question",
      name: item.questionJa,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answerJa,
      },
    },
  ]),
};

export default function Home() {
  return (
    <main className={styles.homePage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <section className={styles.homeHero}>
        <div className={styles.homeHeroCopy}>
          <p className="eyebrow">Structured protocol for AI-assisted software development</p>

          <h1 className={styles.homeHeroTitle}>AnchorSpec</h1>

          <p className={styles.homeHeroSubtitle}>
            Intent, Specification, Change Requests, Implementation, and
            Verification as explicit operational layers.
          </p>

          <p className={styles.homeHeroDescription}>
            {ANCHORSPEC_DEFINITION_EN}
          </p>
          <p className={`${styles.homeHeroDescription} ${styles.homeHeroDescriptionJa}`}>
            {ANCHORSPEC_DEFINITION_JA}
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

      <section className={styles.homeDefinitionSection} aria-label="AnchorSpecの定義と適用範囲">
        <div className={styles.homeDefinitionGrid}>
          <article className={styles.homeDefinitionCard} aria-labelledby="definition-title">
            <p className="eyebrow">What AnchorSpec is</p>
            <h2 id="definition-title">AnchorSpecとは</h2>
            <p>{ANCHORSPEC_DEFINITION_JA.replace(/^AnchorSpecは、/, "")}</p>
          </article>

          <article className={styles.homeDefinitionCard} aria-labelledby="not-title">
            <p className="eyebrow">What AnchorSpec is not</p>
            <h2 id="not-title">AnchorSpecではないもの</h2>
            <ul className={styles.homeExclusionList}>
              {exclusions.map((item) => (
                <li key={item.en}>{item.ja}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.homeProblemsSection} id="problems" aria-labelledby="problems-title">
        <div className={styles.homeSectionHeading}>
          <p className="eyebrow">Problems AnchorSpec addresses / 解決する問題</p>
          <h2 id="problems-title">Problems AnchorSpec addresses</h2>
        </div>
        <div className={styles.homeProblemGroups}>
          {problemGroups.map((group, groupIndex) => (
            <section className={styles.homeProblemGroup} key={group.title}>
              <header>
                <p className={styles.homeProblemIndex}>
                  {String.fromCharCode(65 + groupIndex)}
                </p>
                <div>
                  <h3>{group.title}</h3>
                  <p lang="ja">{group.titleJa}</p>
                </div>
              </header>
              <p>{group.description}</p>
              <p lang="ja">{group.descriptionJa}</p>
              <div className={styles.homeProblemGrid}>
                {group.items.map((item) => (
                  <article key={item.title}>
                    <h4>{item.title}</h4>
                    <p className={styles.homeProblemTitleJa} lang="ja">
                      {item.titleJa}
                    </p>
                    <p>{item.description}</p>
                    <p lang="ja">{item.descriptionJa}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
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

      <section className={styles.homeFaqSection} id="faq" aria-labelledby="faq-title">
        <div className={styles.homeSectionHeading}>
          <p className="eyebrow">Frequently asked questions / よくある質問</p>
          <h2 id="faq-title">AnchorSpec FAQ</h2>
        </div>
        <div className={styles.homeFaqList}>
          {faqItems.map((item) => (
            <article className={styles.homeFaqItem} key={item.question}>
              <div>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
              <div lang="ja">
                <h3>{item.questionJa}</h3>
                <p>{item.answerJa}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
