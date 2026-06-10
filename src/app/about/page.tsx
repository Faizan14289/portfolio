"use client";

import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/editorial/PageShell";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Vue 3", "Node.js",
  "PHP", "Laravel", "HTML/CSS", "Tailwind CSS", "MySQL", "PostgreSQL",
  "Git", "Docker", "Redis", "OpenAI", "Gemini", "AWS Bedrock",
];

const experience = [
  {
    role: "Senior Full Stack AI Developer",
    company: "Botsify",
    period: "Feb 2026 – Present",
    highlights: [
      "Architected multi-LLM provider engine (OpenAI, Gemini, AWS Bedrock, OpenRouter, DigitalOcean AI, Alibaba Qwen)",
      "Built real-time voice AI call system with Twilio, Deepgram STT/TTS, and OpenAI",
      "Designed MCP (Model Context Protocol) integration layer for AI agent tool connections",
      "Implemented RAG with Cloudflare Vectorize for document-grounded bot responses",
      "Built Vue 3 + TypeScript + Pinia AI management dashboard (20+ views)",
      "Developed AI Skills marketplace with Fly.io isolated execution environments",
      "Extended Laravel multi-tenant backend with full agentic AI layer",
      "Built whitelabel enterprise platform with custom SSL, auth, and billing",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "StaffViz",
    period: "Jan 2021 – Sep 2025",
    highlights: [
      "Designed StaffViz B2B SaaS workforce management platform",
      "Enforced SOPs for development, testing, and performance",
      "Architected real-time chat with Socket.io and automated multi-tenant DB provisioning",
      "Delivered Docker-based deployment pipelines via Laravel Octane",
      "Implemented MySQL database sharding for enterprise scale",
      "Applied Memcached and Redis caching for high-traffic APIs",
    ],
  },
];

const stats = [
  { number: "5+", label: "Years in production" },
  { number: "6+", label: "LLM providers integrated" },
  { number: "UET", label: "BS Computer Science" },
];

export default function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Profile"
        title="About"
        description="Senior Full Stack AI Developer with 5+ years designing and shipping end-to-end intelligent systems — from multi-LLM backends and real-time voice AI pipelines to modern SaaS frontends and enterprise multi-tenant platforms."
      />

      <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
        <div className="space-y-8 lg:col-span-2">
          {/* Experience */}
          {experience.map((job) => (
            <article key={job.company} className="surface-card p-8 md:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold text-[#FAFAF9]">{job.role}</h2>
                <span className="text-xs text-[#9A8B70]">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-[#C9A84C]">{job.company}</p>
              <ul className="mt-5 space-y-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-[#B8A88A]">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {/* Skills */}
          <section className="surface-card p-8 md:p-10">
            <h2 className="eyebrow">Technical skills</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex rounded-lg border border-[#FAFAF9]/[0.08] bg-[#0D0D0D] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#B8A88A]">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar stats */}
        <aside className="space-y-4">
          {stats.map((s) => (
            <div key={s.label} className="surface-dark p-6">
              <p className="font-hero text-3xl font-normal text-[#FAFAF9]">{s.number}</p>
              <p className="mt-2 text-sm text-[#9A8B70]">{s.label}</p>
            </div>
          ))}

          <div className="surface-card p-6">
            <p className="eyebrow">Currently</p>
            <p className="mt-3 text-sm leading-relaxed text-[#B8A88A]">
              Building Botsify's entire agentic AI layer — multi-LLM engines, real-time voice agents,
              RAG pipelines, and Vue 3 AI dashboard.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
