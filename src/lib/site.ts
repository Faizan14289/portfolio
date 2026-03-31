/** Site-wide copy and SEO. Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yoursite.com). */

export const site = {
  name: "Faizan Ali",
  jobTitle: "Senior Full-Stack Software Engineer",
  headline: "Laravel · TypeScript · scalable APIs & realtime product",
  description:
    "Senior full-stack engineer with 5+ years shipping Laravel, TypeScript, and production SaaS—APIs, caching, Docker, and maintainable delivery.",
  locale: "en_US",
  email: "faizali2152@gmail.com",
  github: "https://github.com/faizan14289",
  linkedin: "https://www.linkedin.com/in/faizan-ali-b0b167150",
  /** Place the file at `public/faizan-ali-resume.pdf` (clean URL for recruiters). */
  resumePdfPath: "/faizan-ali-resume.pdf",
  resumePdfDownloadName: "Faizan-Ali-Senior-Full-Stack-Resume.pdf",
  openToWork: {
    title: "Open to opportunities",
    summary:
      "Senior full-stack & backend-leaning roles · Remote or hybrid · GMT+5 — discuss relocation/visa case-by-case.",
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
