"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const FRAME = {
  about: { label: "About", href: "/about" },
  portfolio: { label: "Portfolio", href: "/projects" },
  contact: { label: "Contact", href: "/contact" },
  expertise: { label: "Expertise", href: "/skills" },
} as const;

const MOBILE_EXTRA = [
  { label: "Case studies", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "Résumé", href: "/resume" },
  { label: "Testimonials", href: "/testimonials" },
] as const;

export default function HomeEditorialHero() {
  const reduce = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#1A1A1A]" aria-label="Introduction">
      <div className="grid min-h-[100dvh] grid-cols-1 lg:grid-cols-2">
        {/* —— Light column: portrait + ink-colored frame links —— */}
        <div className="relative min-h-[44vh] bg-[#f2f1ee] pt-16 lg:min-h-[100dvh] lg:pt-0">
          <motion.div
            className="absolute inset-0"
            initial={reduce ? undefined : { opacity: 0.92 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/hero-portrait.png"
              alt="Faizan Ali"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_18%] grayscale contrast-[1.02]"
            />
          </motion.div>
          {/* Soft edge into dark column — no flat wash over the face */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-24 bg-gradient-to-l from-[#f2f1ee] via-[#f2f1ee]/40 to-transparent lg:w-32"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-px bg-black/[0.06] lg:block"
            aria-hidden
          />

          <nav
            className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
            aria-label="Frame light"
          >
            <Link
              href="/"
              className="frame-link-ink pointer-events-auto absolute left-8 top-8 text-xs tracking-[0.18em]"
            >
              FA
            </Link>
            <Link
              href={FRAME.about.href}
              className="frame-link-ink pointer-events-auto absolute left-8 top-[4.5rem]"
            >
              {FRAME.about.label}
            </Link>
            <div
              className="pointer-events-auto absolute left-7 top-1/2 z-30 -translate-y-1/2"
              style={{ writingMode: "vertical-rl" }}
            >
              <Link href={FRAME.portfolio.href} className="frame-link-ink py-1">
                {FRAME.portfolio.label}
              </Link>
            </div>
            <Link
              href={FRAME.expertise.href}
              className="frame-link-ink pointer-events-auto absolute bottom-10 left-8"
            >
              {FRAME.expertise.label}
            </Link>
          </nav>
        </div>

        {/* —— Dark column: watermark + headline + CTAs —— */}
        <div className="relative flex min-h-[56vh] flex-col justify-center bg-[#1A1A1A] px-6 pb-14 pt-10 text-[#F0E4C2] md:px-12 md:pb-20 md:pt-16 lg:min-h-[100dvh] lg:px-14 lg:pr-16">
          {/* Giant watermark (layered behind) */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
          >
            <span
              className="font-hero absolute -left-4 top-[8%] max-w-[110%] text-[clamp(3.5rem,14vw,8rem)] font-normal uppercase leading-[0.85] tracking-tight text-[#FAFAF9]/[0.045]"
              style={{ transform: "rotate(-0.5deg)" }}
            >
              I&apos;m Faizan
            </span>
            <span className="font-hero absolute bottom-[18%] right-0 text-[clamp(2.5rem,11vw,6rem)] font-normal uppercase leading-none tracking-tight text-[#FAFAF9]/[0.035]">
              Engineer
            </span>
          </div>

          <nav
            className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
            aria-label="Frame dark"
          >
            <div
              className="pointer-events-auto absolute right-8 top-1/2 -translate-y-1/2"
              style={{ writingMode: "vertical-rl" }}
            >
              <Link href={FRAME.contact.href} className="frame-link-frost py-2">
                {FRAME.contact.label}
              </Link>
            </div>
          </nav>

          <div className="relative z-10">
            <motion.p
              className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#C9A84C]"
              initial={reduce ? undefined : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              Senior full-stack engineer
            </motion.p>

            <div className="mt-6">
              <motion.span
                className="font-hero block text-[clamp(2.25rem,7vw,4.25rem)] leading-[0.95] tracking-tight text-[#FAFAF9]"
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                I&apos;m a
              </motion.span>
              <motion.h1
                className="font-hero hero-mask-headline mt-1 block text-[clamp(2.5rem,9vw,5.75rem)] leading-[0.9] tracking-tight"
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                Software Engineer
              </motion.h1>
              <motion.p
                className="mt-8 max-w-lg text-sm leading-relaxed text-[#B8A88A] md:text-[15px]"
                initial={reduce ? undefined : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28, duration: 0.45 }}
              >
                Laravel, TypeScript, and production SaaS—APIs, caching, and systems that stay
                understandable as they scale.
              </motion.p>
              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial={reduce ? undefined : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38 }}
              >
                <Link href="/projects" className="btn-cta inline-flex h-12 items-center px-6 text-sm">
                  View work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center border border-[#FAFAF9]/25 bg-transparent px-6 text-sm font-medium text-[#FAFAF9] transition-colors hover:border-[#C9A84C] hover:text-[#D4B86A]"
                >
                  Contact
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 hidden items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-[#9A8B70] md:flex"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              aria-hidden
            >
              <span className="h-px w-12 bg-[#C9A84C]" />
              <span>Scroll</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile chrome — dark bar reads on both stacked panels */}
      <div className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between border-b border-[#FAFAF9]/10 bg-[#1A1A1A]/85 px-5 py-3.5 backdrop-blur-md lg:hidden">
        <Link href="/" className="font-mono text-xs font-semibold tracking-[0.2em] text-[#FAFAF9]">
          FA
        </Link>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="editorial-mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-md border border-[#FAFAF9]/20 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FAFAF9]"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="editorial-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex flex-col bg-[#1A1A1A] px-8 pb-12 pt-24 lg:hidden"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile primary">
              {Object.values(FRAME).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-hero text-3xl uppercase tracking-tight text-[#FAFAF9]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {MOBILE_EXTRA.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg text-[#9A8B70]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
