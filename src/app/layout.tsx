import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import OpenToWorkBanner from "@/components/OpenToWorkBanner";
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
    "Laravel",
    "TypeScript",
    "Software Engineer",
    "Backend",
    "SaaS",
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
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="relative min-h-screen antialiased flex flex-col overflow-x-hidden">
        <JsonLd />
        <div className="shell-aurora" aria-hidden />
        <div className="shell-grid" aria-hidden />
        <Navigation />
        <main
          id="main-content"
          className="relative z-10 flex-1 pt-[4.25rem] md:pt-20"
        >
          <OpenToWorkBanner />
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
