"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/editorial/PageShell";
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
    <PageShell>
      <PageHeader
        eyebrow="Social proof"
        title="Testimonials"
        description="What clients and teammates say about working together—edited lightly for clarity where helpful."
      />

      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid gap-5 md:grid-cols-2"
      >
        {testimonials.map((t, i) => {
          const fromLeft = i % 2 === 0;
          return (
            <motion.li
              key={t.id}
              initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="group surface-dark h-full p-8 md:p-10">
                <p className="font-hero text-xl font-normal leading-snug text-[#FAFAF9]">
                  <span className="inline-block text-[#a78bfa] transition-transform duration-300 group-hover:scale-[1.15]">
                    &ldquo;
                  </span>
                  {t.quote}
                  <span className="inline-block text-[#a78bfa] transition-transform duration-300 group-hover:scale-[1.15]">
                    &rdquo;
                  </span>
                </p>
                <footer className="mt-8 border-t border-[#FAFAF9]/10 pt-6 text-sm text-[#9A8B70]">
                  <span className="font-medium text-[#D4C8B0]">{t.name}</span>
                  <span className="text-[#7A6D58]"> · </span>
                  <span>
                    {t.role}, {t.company}
                  </span>
                </footer>
              </blockquote>
            </motion.li>
          );
        })}
      </motion.ul>

      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-flex h-11 items-center border border-[#FAFAF9]/15 bg-[#FAFAF9] px-8 text-sm font-medium text-[var(--void)] transition-colors hover:border-[#A0843D] hover:text-[#A0843D]"
        >
          Work with me
        </Link>
      </div>
    </PageShell>
  );
}
