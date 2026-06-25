import { governanceContent } from "@/lib/anchorspec-content";
import styles from "@/styles/home.module.css";

export function GovernanceFrameworksSection() {
  return (
    <section
      className={styles.homeGovernanceSection}
      id="governance"
      aria-labelledby="governance-title"
    >
      <div className={styles.homeSectionHeading}>
        <p className="eyebrow">
          Governance &amp; External Frameworks / ガバナンスと外部フレームワーク
        </p>
        <h2 id="governance-title">{governanceContent.title}</h2>
        <p lang="ja">{governanceContent.titleJa}</p>
      </div>

      <div className={styles.homeGovernanceIntro}>
        <article lang="en">
          <p className={styles.homeLanguageLabel}>English</p>
          {governanceContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <article lang="ja">
          <p className={styles.homeLanguageLabel}>日本語</p>
          {governanceContent.paragraphsJa.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </div>

      <div className={styles.homeGovernanceSupport}>
        <div className={styles.homeGovernanceSubheading}>
          <h3>{governanceContent.supportTitle}</h3>
          <p lang="ja">{governanceContent.supportTitleJa}</p>
        </div>
        <ul className={styles.homeGovernanceSupportList}>
          {governanceContent.supportItems.map((item) => (
            <li key={item.en}>
              <strong>{item.en}</strong>
              <span lang="ja">{item.ja}</span>
            </li>
          ))}
        </ul>
      </div>

      <aside className={styles.homeGovernanceExamples}>
        <div>
          <h3>{governanceContent.examplesTitle}</h3>
          <p lang="ja">{governanceContent.examplesTitleJa}</p>
        </div>
        <ul>
          {governanceContent.exampleItems.map((item) => (
            <li key={item.en}>
              <strong>{item.en}</strong>
              <span lang="ja">{item.ja}</span>
            </li>
          ))}
        </ul>
        <div className={styles.homeGovernanceDisclaimer}>
          <p>{governanceContent.examplesNote}</p>
          <p lang="ja">{governanceContent.examplesNoteJa}</p>
        </div>
      </aside>
    </section>
  );
}
