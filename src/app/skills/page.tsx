"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

type Skill = {
  name: string;
  level: number;
  category: string;
};

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
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        eyebrow="Capability map"
        title="Skills"
        description="A structured view of tools I use regularly—not vanity percentages, but honest relative depth for UI, services, and infrastructure work."
      />

      <div className="space-y-12">
        {categories.map((category) => {
          const list = skills.filter((s) => s.category === category);
          if (list.length === 0) return null;
          return (
            <section key={category}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                {category}
              </h2>
              <ul className="mt-4 grid gap-4 md:grid-cols-2">
                {list.map((skill, index) => (
                  <li key={skill.name} className="surface-card p-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-medium text-[var(--foreground)]">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-[var(--muted)]">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--surface-2)]"
                      role="presentation"
                    >
                      <motion.div
                        className="h-full rounded-full bg-[var(--accent)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 0.9,
                          delay: index * 0.04,
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

      <section className="mt-16 surface-card p-6 md:p-8">
        <h2 className="font-display text-xl font-semibold text-[var(--foreground)]">
          How I think about depth
        </h2>
        <p className="mt-3 max-w-3xl text-[var(--muted)] leading-relaxed">
          Percentages summarize breadth versus specialist depth. Production work is
          rarely single-axis: integration, observability, and code review habits often
          matter more than raw syntax familiarity.
        </p>
      </section>
    </div>
  );
}
