import type { Metadata } from "next";

export const SITE_NAME = "AnchorSpec";
export const SITE_URL = "https://nia-anoma.github.io/AnchorSpec-web";
export const SITE_DESCRIPTION =
  "AnchorSpecは、AI協働開発において意図・仕様・変更要求・実装・検証を分離し、人間とAIの協働を追跡可能・レビュー可能・検証可能にするための構造化プロトコルです。";
export const SITE_DESCRIPTION_EN =
  "AnchorSpec is a structured protocol for AI-assisted software development that separates intent, specification, change requests, implementation, and verification to keep human–AI collaboration traceable, reviewable, and verifiable.";

const OG_IMAGE_URL = `${SITE_URL}/images/og-image.png`;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Structured Protocol for AI-Assisted Software Development`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_URL],
    },
  };
}
