import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import styles from "@/styles/contact.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Contact / お問い合わせ",
  description:
    "AnchorSpecに関する質問、導入相談、技術的な問い合わせ、ガバナンス・標準化に関する問い合わせ、誤記・改善提案などを受け付けます。",
  path: "/contact",
});

const inquiryCategories = [
  {
    label: "General Inquiry",
    labelJa: "一般的なお問い合わせ",
    description: "AnchorSpec全般についての質問や確認。",
  },
  {
    label: "Technical Question",
    labelJa: "技術的な質問",
    description: "仕様、運用モデル、実装時の考え方に関する相談。",
  },
  {
    label: "Adoption",
    labelJa: "導入相談",
    description: "チームやプロジェクトへの導入に関する相談。",
  },
  {
    label: "Governance / Compliance",
    labelJa: "ガバナンス・コンプライアンス",
    description: "責任境界、レビュー、統制、説明可能性に関する相談。",
  },
  {
    label: "Standardization",
    labelJa: "標準化に関する相談",
    description: "標準化、社内ルール、運用プロトコル化に関する相談。",
  },
  {
    label: "Bug Report",
    labelJa: "誤記・不具合報告",
    description: "サイトや説明文の誤記、リンク切れ、改善提案。",
  },
  {
    label: "Media / Interview",
    labelJa: "メディア・取材",
    description: "記事、取材、講演、引用に関する問い合わせ。",
  },
  {
    label: "Business / Partnership",
    labelJa: "事業・協業相談",
    description: "事業連携、協業、共同検討に関する相談。",
  },
  {
    label: "Other",
    labelJa: "その他",
    description: "上記に該当しない問い合わせ。",
  },
] as const;

const notes = [
  "返信には時間がかかる場合があります。",
  "個別案件の法的判断や適法性の保証はできません。",
  "内容によっては返信できない場合があります。",
  "いただいた内容は、個人情報を除いたうえでFAQや改善に活用する可能性があります。",
] as const;

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <header className={styles.contactHero}>
        <p className="eyebrow">Contact</p>
        <h1>
          Contact
          <span>お問い合わせ</span>
        </h1>
        <p className={styles.contactLead}>
          AnchorSpecに関する質問、導入相談、技術的な問い合わせ、
          ガバナンス・標準化に関する問い合わせ、誤記・改善提案などを
          受け付けています。
        </p>
      </header>

      <section className={styles.contactSection} aria-labelledby="category-title">
        <div className={styles.sectionHeading}>
          <span>01</span>
          <div>
            <p>Inquiry Category</p>
            <h2 id="category-title">問い合わせカテゴリ</h2>
          </div>
        </div>

        <div className={styles.categoryGrid}>
          {inquiryCategories.map((category) => (
            <article className={styles.categoryCard} key={category.label}>
              <p>{category.label}</p>
              <h3>{category.labelJa}</h3>
              <span>{category.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contactColumns} aria-label="Contact details">
        <article className={styles.noticePanel}>
          <div className={styles.sectionHeading}>
            <span>02</span>
            <div>
              <p>Before Contacting</p>
              <h2>注意事項</h2>
            </div>
          </div>

          <ul>
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </article>

        <article className={styles.mailPanel}>
          <div>
            <p className="eyebrow">Contact Method</p>
            <h2>連絡手段</h2>
            <p className={styles.mailDescription}>
              現時点では問い合わせフォームは未実装です。お問い合わせの際は、
              該当するカテゴリをメール本文に含めてお送りください。
            </p>
          </div>

          <a href="mailto:anchorspecofficial@gmail.com">
            <span>Email</span>
            anchorspecofficial@gmail.com
          </a>
        </article>
      </section>
    </main>
  );
}
