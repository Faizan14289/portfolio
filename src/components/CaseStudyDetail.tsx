"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";
import type { SitePreview } from "@/lib/sitePreview";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CaseStudyDetailView({
  cs,
  site,
}: {
  cs: CaseStudy;
  site?: SitePreview;
}) {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <motion.div variants={item}>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A0843D]">
          Case study
        </p>
        <h1 className="font-hero mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-normal uppercase leading-tight tracking-tight text-[var(--void)]">
          {cs.title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">{cs.summary}</p>
      </motion.div>

      {cs.context ? (
        <motion.section variants={item} className="mt-10 surface-card p-8 md:p-10">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A0843D]">
            Context
          </h2>
          <p className="mt-3 text-[var(--muted)] leading-relaxed">{cs.context}</p>
        </motion.section>
      ) : null}

      {cs.approach ? (
        <motion.section variants={item} className="mt-6 surface-card p-8 md:p-10">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A0843D]">
            Approach
          </h2>
          <p className="mt-3 text-[var(--muted)] leading-relaxed">{cs.approach}</p>
        </motion.section>
      ) : null}

      <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
        {cs.tech.map((t) => (
          <span
            key={t}
            className="inline-flex rounded-md border border-[#FAFAF9]/10 bg-[var(--page-canvas)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-[var(--void)]"
          >
            {t}
          </span>
        ))}
      </motion.div>

      {cs.features && cs.features.length > 0 ? (
        <motion.section variants={item} className="mt-8 surface-card p-8 md:p-10">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A0843D]">
            Key features
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-1 text-[var(--muted)]">
            {cs.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </motion.section>
      ) : null}

      {cs.metrics ? (
        <motion.ul
          variants={item}
          className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cs.metrics.map((m) => (
            <li key={m.label} className="surface-dark p-5 text-center">
              <p className="font-hero text-2xl font-normal text-[#FAFAF9]">{m.value}</p>
              <p className="mt-1 text-xs text-[#9A8B70]">{m.label}</p>
            </li>
          ))}
        </motion.ul>
      ) : null}

      {cs.responsibilities && cs.responsibilities.length > 0 ? (
        <motion.section variants={item} className="mt-8 surface-card p-8 md:p-10">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A0843D]">
            Responsibilities
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-1 text-[var(--muted)]">
            {cs.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </motion.section>
      ) : null}

      {cs.outcomes && cs.outcomes.length > 0 ? (
        <motion.section variants={item} className="mt-6 surface-card p-8 md:p-10">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A0843D]">
            Outcomes
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-1 text-[var(--muted)]">
            {cs.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </motion.section>
      ) : null}

      {site ? (
        <motion.section variants={item} className="mt-8 surface-card p-8 md:p-10">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A0843D]">
            Site preview
          </h2>
          <div className="mt-4 flex items-start gap-4">
            {site.favicon ? (
              <img src={site.favicon} alt="" className="mt-1 size-8 rounded" />
            ) : null}
            <div className="min-w-0 flex-1">
              <p className="font-medium text-[var(--void)]">
                {site.title || "Site preview"}
              </p>
              {site.description ? (
                <p className="mt-1 text-sm text-[var(--muted)]">{site.description}</p>
              ) : null}
              {site.headings && site.headings.length > 0 ? (
                <ul className="mt-3 list-inside list-disc text-sm text-[var(--muted)]">
                  {site.headings.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
              {site.image ? (
                <div className="mt-4 overflow-hidden rounded-lg border border-[#FAFAF9]/10">
                  <img
                    src={site.image}
                    alt=""
                    className="max-h-64 w-full object-cover"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </motion.section>
      ) : null}

      {cs.demo ? (
        <motion.div variants={item} className="mt-10">
          <a
            href={cs.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex h-11 items-center px-5 text-sm"
          >
            Visit live demo
          </a>
        </motion.div>
      ) : null}
    </motion.div>
  );
}
