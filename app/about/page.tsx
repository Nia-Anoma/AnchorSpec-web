import type { Metadata } from "next";
import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { createPageMetadata } from "@/lib/seo";
import styles from "@/styles/about.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "概要",
  description:
    "AnchorSpecの開発背景、AI協働開発で解決する問題、設計思想、作者Nia Anomaについて紹介します。",
  path: "/about",
});

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.aboutHero}>
        <div className={styles.aboutHeroCopy}>
          <p className="eyebrow">About AnchorSpec</p>
          <h1 className={styles.aboutTitle}>意図を、仕様として固定する。</h1>
          <p className={styles.aboutLead}>
            AnchorSpecは、AIと人間が同じ設計意図を見失わずに開発を進めるための
            仕様駆動プロトコルです。速く作るだけでなく、なぜそう作るのかを
            最後まで保つことを目的にしています。
          </p>
        </div>

        <div className={styles.aboutHeroVisual} aria-hidden="true">
          <Image
            src={assetPath("/images/freeze_512.svg")}
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
            className={styles.aboutFreezeImage}
          />
        </div>
      </section>

      <section className={styles.aboutContent} aria-label="AnchorSpec overview">
        <article className={styles.aboutPanel}>
          <p className={styles.aboutSectionLabel}>Background</p>
          <h2>開発背景</h2>
          <p>
            生成AIは、実装の速度を大きく引き上げました。一方で、会話の途中で
            前提が薄れたり、仕様と実装の距離が少しずつ開いたりする問題も
            見えやすくなっています。
          </p>
          <p>
            AnchorSpecは、そのずれを個人の注意力だけに任せず、意図・仕様・実装・
            検証をつなぐ共通の足場として設計されています。
          </p>
        </article>

        <article className={styles.aboutPanel}>
          <p className={styles.aboutSectionLabel}>Awareness</p>
          <h2>問題意識</h2>
          <p>
            AI-assisted developmentで本当に難しいのは、コードを書くことそのもの
            ではありません。曖昧な要求を明確にし、変更の理由を残し、後から
            検証できる形で合意を保つことです。
          </p>
          <p>
            AnchorSpecは、開発者とAIの間にある認識の揺れを小さくし、判断の根拠を
            仕様として参照できる状態にします。
          </p>
        </article>

        <article className={`${styles.aboutPanel} ${styles.aboutAuthorPanel}`}>
          <p className={styles.aboutSectionLabel}>Author</p>
          <h2>ニア　アノマ</h2>
          <p>
            ニアは、AI時代のソフトウェア開発における「意図の保存」と
            「検証可能な共創」をテーマに、AnchorSpecの設計と執筆を進めています。
          </p>
          <p>
           AnchorSpecは、AIとの共同開発において設計意図を失わないための実践的な開発プロトコルです。
          </p>
        </article>
      </section>
    </main>
  );
}
