import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assets";
import styles from "@/styles/not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFoundPage}>
      <section className={styles.notFoundHero} aria-labelledby="not-found-title">
        <div className={styles.brandMark} aria-hidden="true">
          <Image
            src={assetPath("/images/freeze_120.svg")}
            alt=""
            width={120}
            height={120}
            priority
          />
        </div>

        <p className="eyebrow">404</p>
        <h1 id="not-found-title">Page Not Found</h1>
        <p className={styles.notFoundLead}>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Link className="primary-button" href="/">
          Return to Home
        </Link>
      </section>
    </main>
  );
}
