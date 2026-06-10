"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/editorial/PageShell";
import { caseStudies } from "@/data/caseStudies";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Deep dives"
        title="Case studies"
        description="Context, approach, tradeoffs, and outcomes—how I work, not only what tools I use."
      />

      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid gap-5 md:grid-cols-2"
      >
        {caseStudies.map((cs) => (
          <motion.li key={cs.slug} variants={item}>
            <article className="surface-card flex h-full flex-col p-8">
              <h2 className="font-hero text-xl font-normal uppercase leading-snug tracking-tight text-[var(--void)]">
                {cs.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {cs.summary}
              </p>
              {cs.metrics && cs.metrics.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cs.metrics.map((m) => (
                    <li
                      key={m.label}
                      className="rounded-md border border-[#FAFAF9]/8 bg-[var(--page-canvas)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-[var(--void)]"
                    >
                      <span className="font-semibold text-[#A0843D]">{m.value}</span>{" "}
                      {m.label}
                    </li>
                  ))}
                </ul>
              ) : null}
              <ul className="mt-4 flex flex-wrap gap-2">
                {cs.tech.map((t) => (
                  <li key={t}>
                    <span className="inline-flex rounded border border-[#FAFAF9]/6 px-2 py-0.5 font-mono text-[9px] text-[var(--muted)]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-[#FAFAF9]/6 pt-5">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#A0843D] hover:underline"
                >
                  Read study
                </Link>
                {cs.demo ? (
                  <a
                    href={cs.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] hover:text-[var(--void)]"
                  >
                    Live demo
                  </a>
                ) : null}
              </div>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </PageShell>
  );
}
