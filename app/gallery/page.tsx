import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import styles from "@/styles/gallery.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "ギャラリー",
  description:
    "AnchorSpecのビジュアル資料や関連コンテンツを掲載するギャラリーページです。",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <main className={styles.galleryPage}>
      <p className="eyebrow">Gallery</p>
      <h1>ギャラリー</h1>
      <p>Coming Soon</p>
    </main>
  );
}
