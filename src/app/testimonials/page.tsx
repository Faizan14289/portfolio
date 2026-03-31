"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { testimonials } from "@/data/testimonials";

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

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        eyebrow="Social proof"
        title="Testimonials"
        description="Notes from people I’ve shipped alongside—edited lightly for clarity where helpful."
      />

      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid gap-4 md:grid-cols-2"
      >
        {testimonials.map((t) => (
          <motion.li key={t.id} variants={item}>
            <blockquote className="surface-card h-full p-6 md:p-8">
              <p className="font-display text-lg leading-snug text-[var(--foreground)]">
                “{t.quote}”
              </p>
              <footer className="mt-5 border-t border-[var(--border-subtle)] pt-4 text-sm text-[var(--muted)]">
                <span className="font-medium text-[var(--foreground)]">{t.name}</span>
                <span className="text-[var(--muted-2)]"> · </span>
                <span>
                  {t.role}, {t.company}
                </span>
              </footer>
            </blockquote>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-flex h-11 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-6 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
        >
          Work with me
        </Link>
      </div>
    </div>
  );
}
