import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
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
  title: "AnchorSpec | AI-Native Development Protocol by Nia Anoma",
  description:
    "AnchorSpec is an AI-native development protocol for preserving intent, specifications, discussion history, and verification across long-running human-AI software development.",
  keywords: [
    "AnchorSpec",
    "Nia Anoma",
    "AI-native development",
    "AI-assisted development",
    "specification-driven development",
    "context drift",
    "source of truth",
    "human-AI collaboration",
  ],
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
