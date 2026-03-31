"use client";

import Link from "next/link";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";

const projects = [
  {
    id: 1,
    title: "StaffViz (SaaS) — workforce intelligence",
    description:
      "Workforce platform spanning recruitment, scheduling, tasks, dashboards, and productivity insights with realtime monitoring.",
    technologies: [
      "TypeScript",
      "Angular",
      "Vue",
      "Laravel",
      "Docker",
      "Redis",
      "Memcached",
      "MySQL",
      "Spring Boot",
      "Java",
    ],
    category: "Full Stack",
    demo: "https://www.staffviz.com/",
  },
  {
    id: 2,
    title: "MyTailorStore — bespoke e‑commerce",
    description:
      "Custom fashion commerce with deep cataloging, fabric selection, and tailored flows for men and women.",
    technologies: ["Laravel", "MySQL", "React", "Bootstrap", "CSS3", "HTML5"],
    category: "E-Commerce",
    demo: "https://www.mytailorstore.com/",
  },
  {
    id: 3,
    title: "StreamlineMyREI — real estate operations",
    description:
      "Marketing and operations stack for US real estate pros—lead flow, automation, and virtual back-office support.",
    technologies: ["Angular", "Vue", "Laravel", "MySQL", "Docker", "Redis"],
    category: "Real Estate",
    demo: "https://streamlinerei.com/",
  },
  {
    id: 4,
    title: "Realtime chat (Socket.io)",
    description:
      "Instant messaging and presence integrated into StaffViz for distributed teams.",
    technologies: ["Socket.io", "TypeScript", "Angular", "Node.js", "Redis"],
    category: "Real-time",
    demo: "#",
  },
  {
    id: 5,
    title: "MySQL sharding initiative",
    description:
      "Horizontal partitioning for multi-tenant scale with clearer query paths and reduced hot spots.",
    technologies: ["MySQL", "Laravel", "Docker", "Redis", "Memcached"],
    category: "Database",
    demo: "#",
  },
  {
    id: 6,
    title: "Laravel Octane microservices",
    description:
      "High-throughput API surfaces with Octane, caching layers, and containerized deploys.",
    technologies: [
      "Laravel Octane",
      "Docker",
      "Redis",
      "Memcached",
      "MySQL",
      "Spring Boot",
    ],
    category: "Microservices",
    demo: "#",
  },
  {
    id: 7,
    title: "DevOps & delivery automation",
    description:
      "Compose-based environments, health checks, and release discipline across services.",
    technologies: ["Docker", "Docker Compose", "CI/CD", "Linux", "Shell"],
    category: "Other",
    demo: "#",
  },
  {
    id: 8,
    title: "Testing & QA foundations",
    description:
      "SOPs for coding and tests—module coverage, documented flows, and tighter QA collaboration.",
    technologies: ["Unit Tests", "SOPs", "QA", "TypeScript", "PHP"],
    category: "Other",
    demo: "#",
  },
  {
    id: 9,
    title: "Caching & performance passes",
    description:
      "Redis/Memcached for hot paths, fewer round trips to MySQL, and more predictable latency.",
    technologies: ["Redis", "Memcached", "MySQL", "Laravel", "Octane"],
    category: "Other",
    demo: "#",
  },
];

const categories = [
  "All",
  "Full Stack",
  "E-Commerce",
  "Real Estate",
  "Real-time",
  "Database",
  "Microservices",
  "Other",
] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        eyebrow="Work"
        title="Projects"
        description="Representative engagements spanning SaaS, commerce, realtime systems, and platform engineering—with emphasis on durable architecture."
      />

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-md border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                active
                  ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--foreground)]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <li key={project.id} className="surface-card flex flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                {project.category}
              </span>
            </div>
            <h2 className="font-display mt-3 text-lg font-semibold leading-snug text-[var(--foreground)]">
              {project.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <span className="inline-flex rounded border border-[var(--border-subtle)] bg-[var(--surface-2)] px-2 py-0.5 font-mono text-[10px] text-[var(--foreground)]">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.demo !== "#" ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  Live site
                </a>
              ) : (
                <span className="text-sm text-[var(--muted-2)]">Internal / NDA</span>
              )}
              <Link
                href="/contact"
                className="text-sm font-medium text-[var(--muted)] underline-offset-4 hover:text-[var(--foreground)] hover:underline"
              >
                Ask about this build
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <section className="mt-16 surface-card p-8 md:p-10">
        <h2 className="font-display text-xl font-semibold text-[var(--foreground)]">
          Interested in a similar technical program?
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Share context on stack, constraints, and timeline—I typically respond within one business day.
        </p>
        <Link
          href="/contact"
          className="btn-cta mt-6 inline-flex h-11 items-center px-5 text-sm"
        >
          Contact
        </Link>
      </section>
    </div>
  );
}
