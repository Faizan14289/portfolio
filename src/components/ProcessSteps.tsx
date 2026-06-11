"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Discover",
    desc: "I start by understanding the problem, users, and constraints before writing a single line of code.",
  },
  {
    step: "02",
    title: "Architect",
    desc: "I design systems that are modular, observable, and ready to scale with your growth.",
  },
  {
    step: "03",
    title: "Build",
    desc: "I ship clean, tested code with CI/CD, documentation, and production-grade tooling.",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "I deploy, monitor, and iterate so the product keeps improving after launch.",
  },
];

export default function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical animated progress line — desktop only */}
      <div className="absolute left-8 top-0 hidden h-full w-px bg-[#FAFAF9]/[0.06] md:left-10 lg:block">
        <motion.div
          className="w-full bg-[#7c3aed]"
          style={{ height: reduce ? "100%" : lineHeight }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
        {steps.map((item, i) => (
          <motion.div
            key={item.step}
            initial={reduce ? undefined : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: reduce ? 0 : i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative surface-card p-8 lg:pl-12"
          >
            <span className="font-hero text-4xl text-[#5A4F40] transition-colors group-hover:text-[#7c3aed]">
              {item.step}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-[#FAFAF9]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#9A8B70]">
              {item.desc}
            </p>
            <div className="absolute -bottom-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
