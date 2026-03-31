"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { services } from "@/data/services";

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

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        eyebrow="Engagements"
        title="Services"
        description="Where I can add the most leverage: backend APIs, commerce systems, performance work, DevOps hygiene, and automation for real-estate operations."
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((svc) => (
          <motion.article
            key={svc.slug}
            variants={item}
            className="surface-card flex flex-col p-6"
          >
            <div className="flex items-start gap-3">
              <span className="font-mono text-xl text-[var(--accent)]" aria-hidden>
                {svc.icon}
              </span>
              <h2 className="font-display text-lg font-semibold text-[var(--foreground)]">
                {svc.title}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{svc.summary}</p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-[var(--muted)]">
              {svc.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {svc.tech && svc.tech.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {svc.tech.map((t) => (
                  <li key={t}>
                    <span className="inline-flex rounded border border-[var(--border-subtle)] px-2 py-0.5 font-mono text-[10px] text-[var(--muted)]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-14 surface-card p-8 text-center md:p-10">
        <p className="font-display text-xl font-semibold text-[var(--foreground)]">
          Prefer a short scoping call first?
        </p>
        <p className="mx-auto mt-2 max-w-xl text-sm text-[var(--muted)]">
          Share the problem statement and constraints—I’ll tell you honestly if I’m the right fit.
        </p>
        <Link
          href="/contact"
          className="btn-cta mt-6 inline-flex h-11 items-center px-6 text-sm"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
