import type { Metadata } from "next";
import Resume from "@/components/Resume";
import { getSiteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: `${site.name} — ${site.jobTitle}. CV preview and PDF download.`,
  openGraph: {
    title: `Résumé | ${site.name}`,
    description: `Professional resume and CV for ${site.name}.`,
    type: "profile",
    url: `${getSiteUrl().replace(/\/$/, "")}/resume`,
  },
};

export default function ResumePage() {
  return <Resume />;
}
