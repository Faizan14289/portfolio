import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import AppChrome from "@/components/AppChrome";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import GrainOverlay from "@/components/GrainOverlay";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import { getMetadataBase, getSiteUrl, site } from "@/lib/site";

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${site.name} — ${site.jobTitle}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Faizan Ali",
    "Full-Stack Engineer",
    "Senior Full Stack Developer",
    "AI Engineer",
    "LLM Engineer",
    "Voice AI",
    "RAG",
    "MCP",
    "Multi-LLM",
    "Laravel",
    "TypeScript",
    "Vue 3",
    "React",
    "Node.js",
    "Software Engineer",
    "Backend",
    "SaaS",
    "Remote Developer",
    "Hiring",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: siteUrl,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.jobTitle}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.jobTitle}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable} ${bebasNeue.variable}`}
    >
      <body className="relative min-h-screen bg-[#0D0D0D] text-[#FAFAF9] antialiased flex flex-col overflow-x-hidden">
        <JsonLd />
        <GrainOverlay />
        <CursorGlow />
        <CustomCursor />
        <ScrollProgress />
        <AppChrome>{children}</AppChrome>
        <SiteFooter />
      </body>
    </html>
  );
}
