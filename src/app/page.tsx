"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { site } from "@/lib/site";
import Typewriter from "@/components/Typewriter";

/* ─── Animated counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Testimonial carousel ─── */
function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="relative min-h-[180px]">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={false}
            animate={{
              opacity: i === active ? 1 : 0,
              y: i === active ? 0 : 20,
              position: i === active ? "relative" : "absolute",
            }}
            transition={{ duration: reduce ? 0 : 0.4 }}
            className="inset-0"
          >
            <p className="text-lg leading-relaxed text-[#B8A88A] md:text-xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-8">
              <p className="font-semibold text-[#FAFAF9]">{t.name}</p>
              <p className="mt-1 text-sm text-[#9A8B70]">
                {t.role} — {t.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-8 bg-[#C9A84C]" : "w-2 bg-[#5A4F40]"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── FAQ Accordion ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-[#FAFAF9]/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-medium text-[#FAFAF9]">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
          className="ml-4 text-[#C9A84C]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-[#B8A88A]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Animation presets ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0D0D0D] py-20 md:py-28 lg:py-32">
        <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-[#C9A84C]/[0.03] blur-[120px]" aria-hidden />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow">Senior Full Stack AI Developer</span>
              <h1 className="font-hero mt-5 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-[#FAFAF9]">
                <Typewriter text="Ship Intelligent Systems at Scale" speed={55} delay={400} />
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#B8A88A] md:text-lg">
                Multi-LLM backends, real-time voice AI, RAG pipelines, and production SaaS —
                from concept to deployment.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/projects" className="btn-cta inline-flex h-12 items-center px-7 text-sm">
                  View My Work
                </Link>
                <Link href="/contact" className="btn-cta-outline inline-flex h-12 items-center px-7 text-sm">
                  Get In Touch
                </Link>
              </div>
              <div className="mt-12 flex gap-8 border-t border-[#FAFAF9]/[0.06] pt-8">
                {[
                  { num: "5+", label: "Years" },
                  { num: "6+", label: "LLM Providers" },
                  { num: "100%", label: "Remote" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-hero text-2xl text-[#FAFAF9]">{s.num}</p>
                    <p className="mt-1 text-xs text-[#9A8B70]">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative mx-auto w-fit">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#C9A84C]/20 via-transparent to-[#A0843D]/10 blur-xl" />
                <div className="relative aspect-[3/4] w-[360px] overflow-hidden rounded-2xl border border-[#FAFAF9]/[0.08]">
                  <Image src="/homepage_image.png" alt={site.name} fill priority sizes="400px" className="object-cover object-top" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-xl border border-[#FAFAF9]/[0.08] bg-[#1A1A1A]/90 p-4 backdrop-blur-md">
                  <p className="font-hero text-2xl text-[#C9A84C]">5+</p>
                  <p className="mt-0.5 text-xs text-[#9A8B70]">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════════════ */}
      <section className="border-y border-[#FAFAF9]/[0.04] bg-[#0D0D0D] py-8">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 md:flex-row md:justify-between"
          >
            <p className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.2em] text-[#9A8B70]">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {["StaffViz", "MyTailorStore", "StreamlineMyREI"].map((name) => (
                <span
                  key={name}
                  className="font-hero text-lg tracking-tight text-[#5A4F40] transition-colors hover:text-[#9A8B70]"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW I WORK
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[#1A1A1A] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Process</span>
            <h2 className="section-title mt-3 text-[#FAFAF9]">How I Work</h2>
            <p className="section-subtitle mt-4">
              A proven approach that keeps projects on track, within scope, and built to last.
            </p>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              {
                step: "01",
                title: "Discover",
                desc: "Deep dive into your business, users, and constraints. I ask hard questions before writing code.",
              },
              {
                step: "02",
                title: "Architect",
                desc: "Design the system, data model, and API contracts. Clear specs before implementation.",
              },
              {
                step: "03",
                title: "Build",
                desc: "Iterative development with regular demos. Tests, documentation, and clean commits.",
              },
              {
                step: "04",
                title: "Deliver",
                desc: "Production deploy with monitoring, handoff docs, and a 30-day support window.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="group relative surface-card p-8"
              >
                <span className="font-hero text-4xl text-[#5A4F40] transition-colors group-hover:text-[#C9A84C]">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#FAFAF9]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9A8B70]">{item.desc}</p>
                <div className="absolute -bottom-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[#0D0D0D] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">What I Do</span>
            <h2 className="section-title mt-3 text-[#FAFAF9]">Explore My Solutions</h2>
            <p className="section-subtitle mt-4">
              End-to-end engineering for teams that value architecture, speed, and maintainability.
            </p>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {services.slice(0, 3).map((service) => (
              <motion.div key={service.slug} variants={fadeUp} className="group surface-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C9A84C]/10 text-2xl transition-colors group-hover:bg-[#C9A84C]/20">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#FAFAF9]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9A8B70]">{service.summary}</p>
                <Link href={`/services#${service.slug}`} className="mt-5 inline-flex items-center text-sm font-medium text-[#C9A84C] hover:underline">
                  Learn more
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-cta-outline inline-flex h-11 items-center px-6 text-sm">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[#0D0D0D] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative mx-auto w-fit lg:mx-0">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#C9A84C]/10 via-transparent to-[#A0843D]/5 blur-xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#FAFAF9]/[0.08]">
                  <Image src="/homepage_image.png" alt={site.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="eyebrow">About Me</span>
              <h2 className="section-title mt-3 text-[#FAFAF9]">The Engineer Behind Scalable Products</h2>
              <p className="section-subtitle mt-5">
                I studied BS Computer Science at UET Lahore and have spent five years shipping
                production systems across SaaS, e-commerce, and AI platforms. Currently building
                Botsify's entire agentic AI layer — multi-LLM engines, real-time voice agents,
                RAG pipelines, and a Vue 3 AI management dashboard.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Clean architecture and documented decisions",
                  "Docker, Redis, and disciplined deployments",
                  "Testing, SOPs, and maintainable codebases",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#B8A88A]">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about" className="btn-cta inline-flex h-11 items-center px-6 text-sm">
                  More About Me
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COUNTERS
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1A1A1A] py-20 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A84C]/[0.03] blur-[100px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { num: 5, suffix: "+", label: "Years in Production" },
              { num: 15, suffix: "+", label: "Shipped Initiatives" },
              { num: 100, suffix: "%", label: "Remote Collaboration" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <p className="font-hero text-[clamp(2.5rem,6vw,4rem)] text-gradient">
                  <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm tracking-wide text-[#9A8B70]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PORTFOLIO / PROJECTS
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[#0D0D0D] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Portfolio</span>
            <h2 className="section-title mt-3 text-[#FAFAF9]">Recent Works</h2>
            <p className="section-subtitle mt-4">
              Production systems across SaaS, commerce, realtime, and platform engineering.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Botsify",
                category: "AI · Agentic Platform",
                description: "Multi-LLM agentic AI layer with real-time voice calls, RAG pipelines, MCP integrations, and a Vue 3 management dashboard.",
                href: "https://botsify.com/",
                color: "from-[#C9A84C]/25 to-[#D4B86A]/10",
              },
              {
                title: "StaffViz",
                category: "SaaS · Workforce Intelligence",
                description: "End-to-end platform for recruitment, scheduling, tasks, and analytics with realtime updates.",
                href: "https://www.staffviz.com/",
                color: "from-[#A0843D]/20 to-[#C9A84C]/10",
              },
              {
                title: "MyTailorStore",
                category: "E‑commerce · Custom Tailoring",
                description: "High-conversion bespoke fashion storefront with configurable garments and fabric catalog.",
                href: "https://www.mytailorstore.com/",
                color: "from-[#D4B86A]/20 to-[#A0843D]/10",
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={reduce ? undefined : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group surface-card overflow-hidden"
              >
                {/* Mockup card */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="font-hero text-5xl text-[#FAFAF9]/[0.08]">{project.title[0]}</span>
                    </div>
                  </div>
                  {/* Device frame decoration */}
                  <div className="absolute bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-[#FAFAF9]/[0.06]" />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#A0843D]/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center rounded-lg bg-[#FAFAF9] px-5 text-sm font-semibold text-[#0D0D0D] transition-transform hover:scale-105"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#C9A84C]">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-[#FAFAF9]">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9A8B70]">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/projects" className="btn-cta-outline inline-flex h-11 items-center px-6 text-sm">
              More Works
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES / EXPERTISE
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1A1A1A] py-20 md:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#C9A84C]/[0.02] blur-[120px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Expertise</span>
            <h2 className="section-title mt-3 text-[#FAFAF9]">Why Work With Me</h2>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.048 4.025a3 3 0 01-2.436 1.958 2.25 2.25 0 01-2.42 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.994 15.994 0 003.388-1.62M15.362 15.63a3 3 0 002.436 1.958 2.25 2.25 0 012.42 2.245 4.5 4.5 0 00-8.4-2.245c0 .399.078.78.22 1.128zm0 0a15.995 15.995 0 00-3.388 1.62m5.048-4.025a3 3 0 012.436-1.958 2.25 2.25 0 012.42-2.245 4.5 4.5 0 00-8.4 2.245c0 .399.078.78.22 1.128zm0 0a15.993 15.993 0 003.388 1.62M7.5 15.362a3 3 0 00-2.436-1.958 2.25 2.25 0 01-2.42-2.245 4.5 4.5 0 008.4 2.245c0-.399-.078-.78-.22-1.128zm0 0a15.996 15.996 0 003.388-1.62M12 15.362a3 3 0 002.436-1.958 2.25 2.25 0 012.42-2.245 4.5 4.5 0 00-8.4 2.245c0 .399.078.78.22 1.128zm0 0a15.994 15.994 0 00-3.388 1.62M12 8.638a3 3 0 00-2.436 1.958 2.25 2.25 0 01-2.42 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.995 15.995 0 003.388-1.62M12 8.638a3 3 0 002.436-1.958 2.25 2.25 0 012.42-2.245 4.5 4.5 0 00-8.4 2.245c0 .399.078.78.22 1.128zm0 0a15.994 15.994 0 00-3.388 1.62" />
                  </svg>
                ),
                title: "Full Control",
                desc: "End-to-end ownership from architecture to deployment with clear communication at every step.",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
                title: "Rapid Growth",
                desc: "Systems designed to scale — from first users to millions without rewriting the foundation.",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                ),
                title: "Problem Solving",
                desc: "Complex challenges simplified — debugging, optimization, and architectural decisions that last.",
              },
            ].map((feat) => (
              <motion.div
                key={feat.title}
                variants={fadeUp}
                className="rounded-xl border border-[#FAFAF9]/[0.06] bg-[#FAFAF9]/[0.02] p-8 text-center transition-all duration-300 hover:border-[#C9A84C]/20 hover:bg-[#FAFAF9]/[0.04]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A84C]/10 text-[#C9A84C]">
                  {feat.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#FAFAF9]">{feat.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9A8B70]">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[#0D0D0D] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-title mt-3 text-[#FAFAF9]">What Clients Say</h2>
          </motion.div>

          <motion.div
            className="mt-14"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TestimonialCarousel />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ENGAGEMENT MODELS
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[#1A1A1A] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Engagement</span>
            <h2 className="section-title mt-3 text-[#FAFAF9]">Ways to Work Together</h2>
            <p className="section-subtitle mt-4">
              Flexible models based on what your project needs. No hidden fees, no surprises.
            </p>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              {
                name: "Project-Based",
                price: "Fixed Scope",
                desc: "Best for defined builds with clear deliverables. Fixed timeline, fixed budget, full ownership on delivery.",
                features: ["Scoped SOW", "Milestone payments", "30-day support"],
              },
              {
                name: "Hourly / Retainer",
                price: "Flexible",
                desc: "Ideal for ongoing work, maintenance, or teams that need senior capacity without a full-time hire.",
                features: ["Weekly reporting", "Priority Slack", "Pause anytime"],
                popular: true,
              },
              {
                name: "Consulting",
                price: "Per Session",
                desc: "Architecture reviews, code audits, or technical strategy. Book a single session or a weekly cadence.",
                features: ["Recorded sessions", "Written recommendations", "Follow-up Q&A"],
              },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                variants={scaleIn}
                className={`relative surface-card p-8 ${plan.popular ? "border-[#C9A84C]/30" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[#C9A84C] px-3 py-1 text-xs font-semibold text-[#0D0D0D]">
                    Most Popular
                  </span>
                )}
                <p className="text-sm font-medium text-[#9A8B70]">{plan.price}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#FAFAF9]">{plan.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9A8B70]">{plan.desc}</p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#B8A88A]">
                      <svg className="h-4 w-4 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[#0D0D0D] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            className="text-center"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title mt-3 text-[#FAFAF9]">Common Questions</h2>
          </motion.div>

          <motion.div
            className="mt-14"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              {
                q: "What timezone do you work in?",
                a: "I'm based in Pakistan (GMT+5) and have extensive experience working async with US and EU teams. I adjust my schedule for important meetings and standups.",
              },
              {
                q: "Do you sign NDAs?",
                a: "Absolutely. I routinely work under NDAs and respect client confidentiality. IP ownership transfers fully on project completion.",
              },
              {
                q: "How do you handle communication?",
                a: "Slack or Teams for daily async, scheduled video calls for milestones, and Notion or Confluence for documentation. Weekly written updates are standard.",
              },
              {
                q: "What tech stack do you specialize in?",
                a: "Laravel/PHP, TypeScript, React/Next.js, Node.js, MySQL, Redis, Docker. I choose the right tool for the job rather than forcing a favorite stack.",
              },
              {
                q: "Can you work with our existing team?",
                a: "Yes — I've integrated with teams of all sizes. I follow your Git workflow, coding standards, and review processes. Team collaboration is where I thrive.",
              },
            ].map((item) => (
              <FAQItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1A1A1A] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#C9A84C]/[0.02] to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-hero text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight text-[#FAFAF9]">
              Do You Have a Project?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#B8A88A]">
              Whether it is a new product, a rebuild, or a performance push — I work best with
              teams that value architecture and incremental delivery.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-cta-white inline-flex h-12 items-center px-8 text-sm">
                Contact Me
              </Link>
              <Link href="/resume" className="btn-cta-outline inline-flex h-12 items-center px-8 text-sm">
                View Résumé
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
