import styles from "@/styles/changelog.module.css";

export type ProtocolChange = {
  date: string;
  version: string;
  title: string;
  summary: string;
  reason: string;
  status?: "deprecated";
};

type ChangelogTimelineProps = {
  changes: ProtocolChange[];
};

type ChangelogTimelineItemProps = {
  change: ProtocolChange;
  index: number;
};

function ChangelogTimelineItem({
  change,
  index,
}: ChangelogTimelineItemProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className={styles.changelogItem}>
      <span className={styles.changelogMarker} aria-hidden="true" />

      <div className={styles.changelogMeta}>
        <span>{number}</span>
        <time>{change.date}</time>
        <strong>{change.version}</strong>
      </div>

      <article className={styles.changelogCard}>
        <div className={styles.changelogCardHeading}>
          <h3>{change.title}</h3>
          {change.status === "deprecated" && (
            <span className={styles.changelogStatus}>Deprecated</span>
          )}
        </div>

        <dl className={styles.changelogDetails}>
          <div>
            <dt>Summary</dt>
            <dd>{change.summary}</dd>
          </div>
          <div>
            <dt>Reason</dt>
            <dd>{change.reason}</dd>
          </div>
        </dl>
      </article>
    </li>
  );
}

export function ChangelogTimeline({ changes }: ChangelogTimelineProps) {
  return (
    <ol className={styles.changelogTimeline}>
      {changes.map((change, index) => (
        <ChangelogTimelineItem
          change={change}
          index={index}
          key={`${change.version}-${change.title}`}
        />
      ))}
    </ol>
  );
}
