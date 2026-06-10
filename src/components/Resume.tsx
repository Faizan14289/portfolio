"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/editorial/PageShell";
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
    <PageShell>
      <PageHeader
        eyebrow="Résumé"
        title="Faizan Ali"
        description="Senior Full Stack AI Developer (5+ years) · Multi-LLM systems, real-time voice AI, RAG pipelines, Vue 3, Laravel, and production SaaS."
      />

      <div className="flex flex-wrap gap-3">
        <a
          href={site.resumePdfPath}
          download={site.resumePdfDownloadName}
          className="btn-cta inline-flex h-10 items-center px-5 text-sm"
        >
          Download PDF
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex h-10 items-center rounded-lg border border-[#FAFAF9]/[0.08] bg-[#1A1A1A] px-5 text-sm font-medium text-[#FAFAF9] hover:border-[#C9A84C]"
        >
          Print
        </button>
      </div>

      <div className="mt-8 flex flex-wrap gap-8 font-mono text-[10px] uppercase tracking-[0.16em]">
        <a href="https://github.com/faizan14289" target="_blank" rel="noopener noreferrer" className="text-[#9A8B70] hover:text-[#C9A84C]">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/faizan-ali-b0b167150" target="_blank" rel="noopener noreferrer" className="text-[#9A8B70] hover:text-[#C9A84C]">
          LinkedIn
        </a>
        <a href="mailto:faizali2152@gmail.com" className="text-[#9A8B70] hover:text-[#C9A84C]">
          Email
        </a>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-12">
        <section className="surface-card p-8 lg:col-span-5">
          <h2 className="eyebrow">Snapshot</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#B8A88A]">
            Five years delivering production systems in SaaS, AI, and commerce — multi-LLM architectures,
            real-time voice AI, RAG pipelines, Vue 3 dashboards, Laravel backends, Dockerized deploys,
            and disciplined test coverage.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[#B8A88A]">
            <li>
              <span className="font-medium text-[#FAFAF9]">Education · </span>
              BS Computer Science, UET Lahore
            </li>
            <li>
              <span className="font-medium text-[#FAFAF9]">Current · </span>
              Senior Full Stack AI Developer, Botsify (Feb 2026 – Present)
            </li>
            <li>
              <span className="font-medium text-[#FAFAF9]">Focus · </span>
              LLM orchestration, voice AI, RAG, Vue 3/TypeScript, Laravel Octane
            </li>
          </ul>
        </section>

        <section className="surface-card p-8 lg:col-span-7">
          <h2 className="eyebrow">Selected stack</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {[
              "Vue 3", "TypeScript", "Pinia", "React", "Angular",
              "Laravel", "PHP", "Node.js", "Java", "Spring Boot",
              "OpenAI", "Gemini", "AWS Bedrock", "Deepgram", "RAG",
              "MySQL", "Cloudflare Vectorize", "Docker", "Fly.io", "Twilio",
            ].map((skill) => (
              <li key={skill}>
                <span className="inline-flex rounded-lg border border-[#FAFAF9]/[0.08] bg-[#0D0D0D] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-[#B8A88A]">
                  {skill}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 eyebrow">Botsify — highlights</h3>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[#B8A88A]">
            <li>Multi-LLM engine with unified LLMService abstraction</li>
            <li>Real-time voice AI calls with sub-1s latency</li>
            <li>MCP integration layer for live agent tool connections</li>
            <li>RAG pipeline with Cloudflare Vectorize</li>
          </ul>
        </section>
      </div>

      <section className="mt-10 surface-card p-8 md:p-10">
        <h2 className="eyebrow">CV — Markdown preview</h2>
        {loading ? (
          <div className="mt-6 flex items-center gap-3 text-sm text-[#B8A88A]">
            <span className="inline-block size-4 animate-spin rounded-full border-2 border-[#FAFAF9]/10 border-t-[#C9A84C]" aria-hidden />
            Loading resume…
          </div>
        ) : error ? (
          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-lg border border-red-900/30 bg-red-900/10 px-4 py-3 text-sm text-red-400">
            <span>{error}</span>
            <button type="button" onClick={loadResume} className="rounded-md bg-red-800 px-3 py-1.5 text-[#FAFAF9]">
              Retry
            </button>
          </div>
        ) : resumeContent ? (
          <div className="prose prose-sm md:prose lg:prose-lg mt-8 max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
              {resumeContent}
            </ReactMarkdown>
          </div>
        ) : (
          <p className="mt-6 text-sm text-[#B8A88A]">
            No CV content found. Add <code className="font-mono text-xs">public/resume.md</code>.
          </p>
        )}
      </section>
    </PageShell>
  );
}
