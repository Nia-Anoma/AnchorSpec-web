import Image from "next/image";
import styles from "@/styles/home.module.css";

const coreItems = [
  {
    label: "意図",
    description: "目的と判断軸",
    markerClass: styles.homeSummaryMarkerCyan,
  },
  {
    label: "仕様",
    description: "合意された基準",
    markerClass: styles.homeSummaryMarkerWhite,
  },
  {
    label: "差分",
    description: "未解決のズレ",
    markerClass: styles.homeSummaryMarkerPurple,
  },
  {
    label: "検証",
    description: "一致確認",
    markerClass: styles.homeSummaryMarkerLightBlue,
  },
] as const;

export function AnchorSpecSummaryCard() {
  return (
    <aside className={styles.homeSummaryCard} aria-label="AnchorSpecの中核構造">
      <h2>
        <Image
          src="/images/freeze_32.svg"
          alt=""
          width={32}
          height={32}
          className={`${styles.homeAnchorIcon} ${styles.homeAnchorIconSmall}`}
          aria-hidden="true"
        />
        <span>AnchorSpec 主要概念</span>
      </h2>

      <ol className={styles.homeSummaryCoreList}>
        {coreItems.map((item) => (
          <li className={styles.homeSummaryCoreItem} key={item.label}>
            <span
              className={`${styles.homeSummaryMarker} ${item.markerClass}`}
              aria-hidden="true"
            />
            <span className={styles.homeSummaryCoreCopy}>
              <strong>{item.label}</strong>
              <small>{item.description}</small>
            </span>
          </li>
        ))}
      </ol>
    </aside>
  );
}
