"use client";

import Link from "next/link";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/editorial/PageShell";
import TiltCard from "@/components/TiltCard";
import ProjectThumbnail from "@/components/ProjectThumbnail";

const projects = [
  {
    id: 1,
    title: "Botsify — Agentic AI Platform",
    description:
      "Multi-LLM engine, real-time voice AI calls, RAG pipelines, MCP integrations, and Vue 3 AI management dashboard for a no-code chatbot platform.",
    technologies: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Node.js",
      "Laravel",
      "OpenAI",
      "Gemini",
      "AWS Bedrock",
      "Deepgram",
      "Twilio",
      "Cloudflare Vectorize",
      "Fly.io",
      "Docker",
    ],
    category: "AI / Full Stack",
    demo: "https://botsify.com/",
  },
  {
    id: 2,
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
    id: 3,
    title: "MyTailorStore — bespoke e‑commerce",
    description:
      "Custom fashion commerce with deep cataloging, fabric selection, and tailored flows for men and women.",
    technologies: ["Laravel", "MySQL", "React", "Bootstrap", "CSS3", "HTML5"],
    category: "E-Commerce",
    demo: "https://www.mytailorstore.com/",
  },
  {
    id: 4,
    title: "StreamlineMyREI — real estate operations",
    description:
      "Marketing and operations stack for US real estate pros—lead flow, automation, and virtual back-office support.",
    technologies: ["Angular", "Vue", "Laravel", "MySQL", "Docker", "Redis"],
    category: "Real Estate",
    demo: "https://streamlinerei.com/",
  },
  {
    id: 5,
    title: "Realtime chat (Socket.io)",
    description:
      "Instant messaging and presence integrated into StaffViz for distributed teams.",
    technologies: ["Socket.io", "TypeScript", "Angular", "Node.js", "Redis"],
    category: "Real-time",
    demo: "#",
  },
  {
    id: 6,
    title: "MySQL sharding initiative",
    description:
      "Horizontal partitioning for multi-tenant scale with clearer query paths and reduced hot spots.",
    technologies: ["MySQL", "Laravel", "Docker", "Redis", "Memcached"],
    category: "Database",
    demo: "#",
  },
  {
    id: 7,
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
    id: 8,
    title: "DevOps & delivery automation",
    description:
      "Compose-based environments, health checks, and release discipline across services.",
    technologies: ["Docker", "Docker Compose", "CI/CD", "Linux", "Shell"],
    category: "Other",
    demo: "#",
  },
  {
    id: 9,
    title: "Testing & QA foundations",
    description:
      "SOPs for coding and tests—module coverage, documented flows, and tighter QA collaboration.",
    technologies: ["Unit Tests", "SOPs", "QA", "TypeScript", "PHP"],
    category: "Other",
    demo: "#",
  },
  {
    id: 10,
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
  "AI / Full Stack",
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
    <PageShell>
      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        description="Production systems across SaaS, commerce, realtime, and platform engineering—with emphasis on durable architecture."
      />

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-md border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${
                active
                  ? "border-[var(--void)] bg-[var(--void)] text-[#FAFAF9]"
                  : "border-[#FAFAF9]/10 bg-[#FAFAF9] text-[var(--muted)] hover:border-[#A0843D]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <TiltCard key={project.id} className="project-card h-full">
            <li className="surface-card flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                <ProjectThumbnail title={project.title} category={project.category} />
              </div>
              <div className="flex h-full flex-col p-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#a78bfa]">
                {project.category}
              </span>
            <h2 className="mt-3 font-hero text-xl font-normal uppercase leading-snug tracking-tight text-[var(--void)]">
              {project.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <span className="inline-flex rounded border border-[#FAFAF9]/10 bg-[var(--page-canvas)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-[var(--void)]">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 border-t border-[#FAFAF9]/6 pt-5">
              {project.demo !== "#" ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#A0843D] hover:underline"
                >
                  Live site
                </a>
              ) : (
                <span className="font-mono text-[10px] text-[var(--muted-2)]">Internal / NDA</span>
              )}
              <Link
                href="/contact"
                className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] hover:text-[var(--void)]"
              >
                Discuss →
              </Link>
            </div>
          </div>
          </li>
        </TiltCard>
      ))}
      </ul>

      <section className="surface-dark mt-20 p-10 md:p-12">
        <h2 className="font-hero text-2xl font-normal uppercase tracking-tight text-[#FAFAF9]">
          Planning something similar?
        </h2>
        <p className="mt-3 max-w-xl text-sm text-[#B8A88A]">
          Share stack, constraints, and timeline—I typically respond within one business day.
        </p>
        <Link
          href="/contact"
          className="btn-cta mt-8 inline-flex h-11 items-center px-6 text-sm"
        >
          Contact
        </Link>
      </section>
    </PageShell>
  );
}
