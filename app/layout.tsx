import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import {
  SITE_DESCRIPTION,
  SITE_DESCRIPTION_EN,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Nia Anoma" }],
  creator: "Nia Anoma",
  publisher: "Nia Anoma",
  keywords: [
    "AnchorSpec",
    "Nia Anoma",
    "AI-assisted development",
    "structured protocol",
    "specification-driven development",
    "context drift",
    "specification gaming",
    "change request",
    "verification workflow",
    "responsibility boundaries",
    "source of truth",
    "human-AI collaboration",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Structured Protocol for AI-Assisted Software Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/og-image.png`],
  },
  other: {
    "description:en": SITE_DESCRIPTION_EN,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
