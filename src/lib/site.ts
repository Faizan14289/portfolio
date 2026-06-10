/** Site-wide copy and SEO. Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yoursite.com). */

export const site = {
  name: "Faizan Ali",
  jobTitle: "Senior Full Stack AI Developer",
  headline: "Laravel · TypeScript · AI Agents · LLM Systems · SaaS",
  description:
    "Senior Full Stack AI Developer with 5+ years designing and shipping end-to-end intelligent systems — from multi-LLM backends and real-time voice AI pipelines to modern SaaS frontends and enterprise multi-tenant platforms.",
  locale: "en_US",
  email: "faizali2152@gmail.com",
  github: "https://github.com/faizan14289",
  linkedin: "https://www.linkedin.com/in/faizan-ali-b0b167150",
  /** Place the file at `public/faizan-ali-resume.pdf` (clean URL for recruiters). */
  resumePdfPath: "/faizan-ali-resume.pdf",
  resumePdfDownloadName: "Faizan-Ali-Senior-Full-Stack-AI-Developer-Resume.pdf",
  openToWork: {
    title: "Open to opportunities",
    summary:
      "Senior full-stack & AI-leaning roles · Remote or hybrid · GMT+5 — discuss relocation/visa case-by-case.",
    ctaLabel: "Get in touch",
    ctaHref: "/contact",
  },
} as const;

export function getSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (env) return env;
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}
