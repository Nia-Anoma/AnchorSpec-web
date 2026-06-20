import type { Metadata } from "next";
import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { createPageMetadata } from "@/lib/seo";
import styles from "@/styles/gallery.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Articles & Resources",
  description:
    "AnchorSpecに関連する成果物、記事、プロトコルの背景を紹介するページです。",
  path: "/gallery",
});

const zennArticles = [
  {
    category: "Anti-Pattern",
    title: "AI開発のアンチパターン　AnchorSpecが見た地獄",
    description:
      "AIとの協働開発で、実際に体験した失敗例を言語化して問題として定義した記事を紹介します。",
    href: "https://zenn.dev/nia_anoma/articles/499ee364958509",
  },
  {
    category: "Philosophy",
    title: "AnchorSpecの思想がたどり着いた境地",
    description:
      "AnchorSpecの先にAnchorSpecは不要である。AnchorSpecが肩代わりしていた現代のAIに足りない機能のお話です。",
    href: "https://zenn.dev/nia_anoma/articles/c95161567744b8",
  },
  {
    category: "Asset",
    title: "AI時代の会社資産",
    description:
      "議論の履歴、選択・棄却の理由、判断理由。現在は資産として考えられていなかった過去の履歴がAI時代には資産になる。",
    href: "https://zenn.dev/nia_anoma/articles/1964a664f3ab9d",
  },
] as const;

export default function GalleryPage() {
  return (
    <main className={styles.galleryPage}>
      <header className={styles.galleryHero}>
        <div className={styles.galleryHeroCopy}>
          <p className="eyebrow">AnchorSpec Works &amp; Articles</p>
          <h1>Articles & Resources</h1>
          <p className={styles.galleryLead}>
            AnchorSpecから生まれた成果物や記事を通して、プロトコルの背景、判断の考え方、実践へのつながりを紹介します。
          </p>
        </div>

        <div className={styles.galleryHeroVisual} aria-hidden="true">
          <Image
            src={assetPath("/images/gallery/Judgement.png")}
            alt=""
            width={1254}
            height={1254}
            priority
            sizes="(max-width: 768px) 100vw, 48vw"
            className={styles.galleryHeroImage}
          />
        </div>
      </header>

      <section className={styles.articleSection} aria-labelledby="zenn-articles-title">
        <div className={styles.articleSectionHeading}>
          <p className="eyebrow">Zenn Articles</p>
          <h2 id="zenn-articles-title">AnchorSpecを、記事から読む</h2>
          <p>
            概念の背景や実践上の判断を、テーマごとに掘り下げる記事を紹介します。
          </p>
        </div>

        <div className={styles.articleGrid}>
          {zennArticles.map((article) => (
            <article className={styles.articleCard} key={article.title}>
              <p className={styles.articleCategory}>{article.category}</p>
              <h3>{article.title}</h3>
              <p className={styles.articleDescription}>{article.description}</p>
              <a
                href={article.href}
                className={styles.articleLink}
              >
                Zennで記事を読む
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
