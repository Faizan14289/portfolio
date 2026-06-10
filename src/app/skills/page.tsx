"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/editorial/PageShell";

type Skill = { name: string; level: number; category: string };

const skills: Skill[] = [
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "React", level: 88, category: "Frontend" },
  { name: "Next.js", level: 82, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Java", level: 75, category: "Backend" },
  { name: "MongoDB", level: 78, category: "Database" },
  { name: "PostgreSQL", level: 75, category: "Database" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 72, category: "Tools" },
  { name: "AWS", level: 68, category: "Cloud" },
];

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Cloud",
] as const;

export default function SkillsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Capability map"
        title="Skills"
        description="Relative depth across stacks I use in production—not vanity percentages, but honest signal for hiring managers."
      />

      <div className="space-y-14">
        {categories.map((category) => {
          const list = skills.filter((s) => s.category === category);
          if (list.length === 0) return null;
          return (
            <section key={category}>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A0843D]">
                {category}
              </h2>
              <ul className="mt-5 grid gap-4 md:grid-cols-2">
                {list.map((skill, index) => (
                  <li key={skill.name} className="surface-card p-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-medium text-[var(--void)]">{skill.name}</span>
                      <span className="font-mono text-[10px] text-[var(--muted)]">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="mt-3 h-1 overflow-hidden rounded-full bg-black/5"
                      role="presentation"
                    >
                      <motion.div
                        className="h-full rounded-full bg-[#A0843D]"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 0.9,
                          delay: index * 0.03,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <section className="surface-dark mt-16 p-8 md:p-10">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
          How to read this
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#B8A88A]">
          Percentages summarize breadth versus depth. Production work is rarely single-axis:
          integration, observability, and review habits often matter as much as syntax
          familiarity.
        </p>
      </section>
    </PageShell>
  );
}
