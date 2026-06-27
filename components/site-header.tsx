import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assets";

/*const GITHUB_URL = "https://github.com/OWNER/AnchorSpec";*/
const GITHUB_URL = "https://github.com/Nia-Anoma/AnchorSpec";

const navigation = [
  { label: "ホーム", href: "/" },
  { label: "概要", href: "/about" },
  { label: "仕様", href: "/docs" },
  { label: "変更履歴", href: "/changelog" },
  { label: "Contact / お問い合わせ", href: "/contact" },
  { label: "GitHub", href: GITHUB_URL, external: true },
  { label: "ギャラリー", href: "/gallery" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-brand" aria-label="AnchorSpec Home">
        <Image
          src={assetPath("/images/freeze_48.svg")}
          alt=""
          width={48}
          height={48}
          className="site-brand-icon"
          aria-hidden="true"
        />
        <span>ANCHORSPEC</span>
      </Link>

      <nav className="site-navigation" aria-label="Main Navigation">
        {navigation.map((item) =>
          "external" in item ? (
            <a
              href={item.href}
              className="site-nav-link"
              target="_blank"
              rel="noreferrer"
              key={item.href}
            >
              {item.label}
            </a>
          ) : (
            <Link href={item.href} className="site-nav-link" key={item.href}>
              {item.label}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}
