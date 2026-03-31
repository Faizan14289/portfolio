"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export default function Resume() {
  const [resumeContent, setResumeContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadResume = () => {
    setLoading(true);
    setError(null);
    fetch("/resume.md")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        setResumeContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading resume:", err);
        setError("Failed to load CV markdown.");
        setLoading(false);
      });
  };

  useEffect(() => {
    loadResume();
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        eyebrow="Résumé"
        title="Faizan Ali"
        description="Sr. full-stack software engineer (5+ years) · Laravel, TypeScript, Node (mid), scalable APIs and realtime product surfaces."
      />

      <div className="flex flex-wrap gap-3">
        <a
          href={site.resumePdfPath}
          download={site.resumePdfDownloadName}
          className="btn-cta inline-flex h-10 items-center px-4 text-sm"
        >
          Download PDF
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex h-10 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-medium text-[var(--foreground)]"
        >
          Print
        </button>
      </div>

      <div className="mt-8 flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.14em]">
        <a
          href="https://github.com/faizan14289"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--muted)] hover:text-[var(--foreground)]"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/faizan-ali-b0b167150"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--muted)] hover:text-[var(--foreground)]"
        >
          LinkedIn
        </a>
        <a
          href="mailto:faizali2152@gmail.com"
          className="text-[var(--muted)] hover:text-[var(--foreground)]"
        >
          Email
        </a>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-12">
        <section className="surface-card p-6 md:p-8 lg:col-span-5">
          <h2 className="font-display text-lg font-semibold text-[var(--foreground)]">
            Snapshot
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            Five years delivering production systems in SaaS and commerce—API design,
            Laravel services, caching, Dockerized deploys, and disciplined test coverage.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
            <li>
              <span className="font-medium text-[var(--foreground)]">Education · </span>
              BS Computer Science, UET Lahore
            </li>
            <li>
              <span className="font-medium text-[var(--foreground)]">Recent role · </span>
              Sr. Full Stack, StaffViz (2021–2024)
            </li>
            <li>
              <span className="font-medium text-[var(--foreground)]">Focus · </span>
              Laravel Octane, Redis/Memcached, Angular/Vue/TS fronts, MySQL at scale
            </li>
          </ul>
        </section>

        <section className="surface-card p-6 md:p-8 lg:col-span-7">
          <h2 className="font-display text-lg font-semibold text-[var(--foreground)]">
            Selected stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {[
              "HTML/CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Vue.js",
              "Angular",
              "Java",
              "Spring Boot",
              "Laravel",
              "PHP",
              "SQL",
              "MySQL",
              "Docker",
              "Redis",
              "Microservices",
              "REST APIs",
            ].map((skill) => (
              <li key={skill}>
                <span className="inline-flex rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[10px] text-[var(--foreground)]">
                  {skill}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 font-display text-base font-semibold text-[var(--foreground)]">
            StaffViz — highlights
          </h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[var(--muted)]">
            <li>Laravel / Octane microservices and solid API boundaries</li>
            <li>SOPs for coding, unit tests, performance and load practice</li>
            <li>Memcached/Redis for hot reads; collaboration with Angular/Vue</li>
          </ul>
        </section>
      </div>

      <section className="mt-10 surface-card p-6 md:p-10">
        <h2 className="font-display text-lg font-semibold text-[var(--foreground)]">
          CV (Markdown preview)
        </h2>
        {loading ? (
          <div className="mt-6 flex items-center gap-3 text-sm text-[var(--muted)]">
            <span
              className="inline-block size-4 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)]"
              aria-hidden
            />
            Loading resume…
          </div>
        ) : error ? (
          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200">
            <span>{error}</span>
            <button
              type="button"
              onClick={loadResume}
              className="rounded-md bg-red-700 px-3 py-1.5 text-white dark:bg-red-600"
            >
              Retry
            </button>
          </div>
        ) : resumeContent ? (
          <div className="prose prose-sm md:prose lg:prose-lg mt-6 max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
              {resumeContent}
            </ReactMarkdown>
          </div>
        ) : (
          <p className="mt-6 text-sm text-[var(--muted)]">
            No CV content found. Add <code className="font-mono text-xs">public/resume.md</code>.
          </p>
        )}
      </section>
    </div>
  );
}
