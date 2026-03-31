"use client";

import PageHeader from "@/components/PageHeader";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "Laravel",
  "HTML/CSS",
  "Tailwind CSS",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Docker",
  "Redis",
];

const stats = [
  { number: "5+", label: "Years in production engineering" },
  { number: "15+", label: "Shipped initiatives" },
  { number: "UET", label: "BS Computer Science" },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        eyebrow="Profile"
        title="About"
        description="Sr. full-stack software engineer with five years across enterprise SaaS and e‑commerce—shipping APIs, microservices, and frontends that hold up under load."
      />

      <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-8">
          <article className="surface-card p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold text-[var(--foreground)]">
              Summary
            </h2>
            <div className="mt-4 space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                I studied BS Computer Science at the University of Engineering and
                Technology (UET) Lahore. Professionally, I have focused on scalable
                APIs, service boundaries, and performance—especially in PHP/Laravel and
                TypeScript ecosystems.
              </p>
              <p>
                Quality is part of how I work: SOPs for implementation, unit testing
                where it matters, and deployments that are observable and repeatable
                (Docker, caching with Redis/Memcached, disciplined rollback paths).
              </p>
              <p>
                I aim to partner with teams that care about maintainability as much as
                shipping—clear ownership, documented decisions, and room to iterate.
              </p>
            </div>
          </article>

          <section className="surface-card p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold text-[var(--foreground)]">
              Technical skills
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] text-[var(--foreground)]">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          {stats.map((s) => (
            <div key={s.label} className="surface-card p-6">
              <p className="font-display text-3xl font-semibold text-[var(--foreground)]">
                {s.number}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)] leading-snug">{s.label}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
