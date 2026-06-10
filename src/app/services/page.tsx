"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/editorial/PageShell";
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
    <PageShell>
      <PageHeader
        eyebrow="Engagements"
        title="Services"
        description="Backend APIs, e‑commerce, performance, DevOps, and automation—scoped honestly to what I can own end-to-end."
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((svc) => (
          <motion.article key={svc.slug} variants={item} className="surface-card flex flex-col p-7">
            <div className="flex items-start gap-3">
              <span className="text-xl text-[#A0843D]" aria-hidden>
                {svc.icon}
              </span>
              <h2 className="font-hero text-lg font-normal uppercase leading-snug text-[var(--void)]">
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
                    <span className="inline-flex rounded border border-[#FAFAF9]/6 px-2 py-0.5 font-mono text-[9px] text-[var(--muted)]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.article>
        ))}
      </motion.div>

      <div className="surface-dark mt-16 p-10 text-center md:p-14">
        <p className="font-hero text-2xl font-normal uppercase tracking-tight text-[#FAFAF9]">
          Short scoping call first?
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[#B8A88A]">
          Share the problem—I’ll say if I’m the right fit.
        </p>
        <Link
          href="/contact"
          className="btn-cta mt-8 inline-flex h-11 items-center px-8 text-sm"
        >
          Contact
        </Link>
      </div>
    </PageShell>
  );
}
