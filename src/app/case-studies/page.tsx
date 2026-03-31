"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
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
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        eyebrow="Deep dives"
        title="Case studies"
        description="Structured write-ups: context, technical approach, tradeoffs, and outcomes—so you can evaluate how I work, not just what I’ve used."
      />

      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid gap-4 md:grid-cols-2"
      >
        {caseStudies.map((cs) => (
          <motion.li key={cs.slug} variants={item}>
            <article className="surface-card flex h-full flex-col p-6 transition-colors hover:border-[var(--foreground)]">
              <h2 className="font-display text-lg font-semibold text-[var(--foreground)]">
                {cs.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {cs.summary}
              </p>
              {cs.metrics && cs.metrics.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cs.metrics.map((m) => (
                    <li
                      key={m.label}
                      className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[10px] text-[var(--foreground)]"
                    >
                      <span className="font-semibold">{m.value}</span>{" "}
                      <span className="text-[var(--muted)]">{m.label}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <ul className="mt-4 flex flex-wrap gap-2">
                {cs.tech.map((t) => (
                  <li key={t}>
                    <span className="inline-flex rounded border border-[var(--border-subtle)] px-2 py-0.5 font-mono text-[10px] text-[var(--muted)]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  Read study
                </Link>
                {cs.demo ? (
                  <a
                    href={cs.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--muted)] underline-offset-4 hover:text-[var(--foreground)] hover:underline"
                  >
                    Live demo
                  </a>
                ) : null}
              </div>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
