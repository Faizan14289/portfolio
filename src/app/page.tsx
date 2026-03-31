"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const expertise = [
  "Laravel & PHP",
  "TypeScript",
  "React / Next.js",
  "API design",
  "MySQL & scaling",
  "Redis & caching",
  "Docker",
  "Realtime systems",
];

const highlights = [
  {
    stat: "5+",
    label: "Years shipping production software",
  },
  {
    stat: "15+",
    label: "Products & platforms delivered",
  },
  {
    stat: "SaaS",
    label: "Enterprise workforce & commerce",
  },
];

const featured = [
  {
    title: "StaffViz",
    kind: "SaaS · Workforce intelligence",
    href: "https://www.staffviz.com/",
    blurb:
      "End-to-end platform for recruitment, scheduling, tasks, and analytics with realtime updates.",
  },
  {
    title: "MyTailorStore",
    kind: "E‑commerce · Custom tailoring",
    href: "https://www.mytailorstore.com/",
    blurb:
      "High-conversion bespoke fashion storefront with configurable garments and fabric catalog.",
  },
  {
    title: "StreamlineMyREI",
    kind: "PropTech · Operations",
    href: "https://streamlinerei.com/",
    blurb:
      "Marketing, lead flow, and virtual operations automation for US real estate teams.",
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      {/* Floating orbs — decorative */}
      <div
        className="pointer-events-none fixed -left-32 top-1/4 h-72 w-72 rounded-full bg-[color-mix(in_oklab,var(--accent)_32%,transparent)] blur-3xl md:h-96 md:w-96"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed -right-20 bottom-1/4 h-64 w-64 rounded-full bg-[color-mix(in_oklab,var(--accent-2)_28%,transparent)] blur-3xl"
        aria-hidden
      />

      <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
          <motion.div
            className="lg:col-span-7"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]"
            >
              Available for senior full-stack roles
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--foreground)] md:text-5xl lg:text-[3.25rem]"
            >
              I build dependable backends and interfaces that{" "}
              <span className="text-gradient">scale with the business.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg"
            >
              Sr. full-stack engineer with deep Laravel and TypeScript experience across
              SaaS, e‑commerce, and internal tooling—focused on clarity, performance, and
              maintainable delivery.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <motion.div whileHover={reduce ? undefined : { y: -3 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
                <Link href="/projects" className="btn-cta inline-flex h-11 items-center px-5 text-sm">
                  View selected work
                </Link>
              </motion.div>
              <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
                <Link
                  href="/resume"
                  className="inline-flex h-11 items-center rounded-lg border border-[var(--border)] bg-[var(--surface-solid)] px-5 text-sm font-medium text-[var(--foreground)] shadow-[0_12px_32px_-20px_var(--glow)] transition-colors hover:border-[var(--accent)]"
                >
                  Download resume
                </Link>
              </motion.div>
            </motion.div>
            <motion.dl
              variants={fadeUp}
              className="mt-12 grid gap-6 sm:grid-cols-3"
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={reduce ? undefined : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-solid)]/60 px-4 py-4 backdrop-blur-sm"
                >
                  <span
                    className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-3)] to-[var(--accent-2)]"
                    aria-hidden
                  />
                  <dt className="font-display text-2xl font-semibold text-[var(--foreground)]">
                    {h.stat}
                  </dt>
                  <dd className="mt-1 text-sm leading-snug text-[var(--muted)]">
                    {h.label}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.aside
            className="lg:col-span-5"
            initial={reduce ? undefined : { opacity: 0, y: 20, rotateX: 4 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1200 }}
          >
            <div className="surface-card relative overflow-hidden p-6 md:p-8">
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[color-mix(in_oklab,var(--accent)_25%,transparent)] blur-2xl"
                aria-hidden
              />
              <p className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
                Core expertise
              </p>
              <ul className="relative mt-5 flex flex-wrap gap-2">
                {expertise.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={reduce ? undefined : { opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.25 + i * 0.04,
                      type: "spring",
                      stiffness: 380,
                      damping: 22,
                    }}
                    whileHover={reduce ? undefined : { scale: 1.05, y: -2 }}
                  >
                    <span className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] text-[var(--foreground)] shadow-inner">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <p className="relative mt-8 text-sm leading-relaxed text-[var(--muted)]">
                Recent focus: Laravel Octane microservices, Redis-backed caching, Socket.io
                collaboration features, and disciplined testing within established SOPs.
              </p>
              <Link
                href="/case-studies"
                className="relative mt-6 inline-flex text-sm font-semibold text-[var(--accent)] underline decoration-2 underline-offset-4 transition-colors hover:text-[var(--accent-2)]"
              >
                Read case studies →
              </Link>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="relative border-t border-[var(--border)] bg-[color-mix(in_oklab,var(--surface-solid)_55%,transparent)] backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, x: -12 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                Selected clients & products
              </p>
              <h2 className="font-display mt-3 text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
                Platforms in production
              </h2>
            </motion.div>
            <motion.div
              initial={reduce ? undefined : { opacity: 0, x: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <Link
                href="/projects"
                className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
              >
                Full project index
              </Link>
            </motion.div>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {featured.map((f, i) => (
              <motion.li
                key={f.title}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group surface-card relative flex h-full flex-col overflow-hidden p-6"
                  whileHover={reduce ? undefined : { scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <span
                    className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_oklab,var(--accent)_12%,transparent)] via-transparent to-[color-mix(in_oklab,var(--accent-2)_10%,transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <span className="relative font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    {f.kind}
                  </span>
                  <span className="relative font-display mt-3 text-lg font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                    {f.title}
                  </span>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                    {f.blurb}
                  </p>
                  <span className="relative mt-4 inline-flex items-center gap-1 font-mono text-[11px] font-medium text-[var(--accent-2)] transition-transform duration-300 group-hover:translate-x-1">
                    Visit live →
                  </span>
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.div
          className="surface-card relative overflow-hidden p-8 md:flex md:items-center md:justify-between md:p-10"
          initial={reduce ? undefined : { opacity: 0, scale: 0.98 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[color-mix(in_oklab,var(--accent)_15%,transparent)] via-transparent to-[color-mix(in_oklab,var(--accent-3)_12%,transparent)]"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-xl font-semibold text-[var(--foreground)] md:text-2xl">
              Planning a rebuild, a new product line, or a performance push?
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              I work best with teams that value pragmatic architecture, written specs, and
              incremental delivery.
            </p>
          </div>
          <motion.div
            className="relative mt-6 shrink-0 md:mt-0"
            whileHover={reduce ? undefined : { scale: 1.04 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            <Link href="/contact" className="btn-cta inline-flex h-11 items-center px-5 text-sm">
              Start a conversation
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
