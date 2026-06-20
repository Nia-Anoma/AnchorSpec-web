import type { Metadata } from "next";

export const SITE_NAME = "AnchorSpec";
export const SITE_URL = "https://nia-anoma.github.io/AnchorSpec-web";
export const SITE_DESCRIPTION =
  "AI-Native Specification Protocol. Keeping intent, specification, implementation gaps, and verification aligned.";

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
          alt: `${SITE_NAME} - AI-Native Specification Protocol`,
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
