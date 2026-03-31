"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

const contactInfo = [
  {
    title: "Email",
    value: "faizali2152@gmail.com",
    link: "mailto:faizali2152@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/faizan-ali-b0b167150",
    link: "https://www.linkedin.com/in/faizan-ali-b0b167150",
  },
  {
    title: "GitHub",
    value: "github.com/faizan14289",
    link: "https://github.com/faizan14289",
  },
  {
    title: "Phone",
    value: "+92 308 3415250",
    link: "tel:+923083415250",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const to = "faizali2152@gmail.com";
      const subject = `[Portfolio] ${formData.subject} — from ${formData.name}`;
      const body = `From: ${formData.name} <${formData.email}>\n\n${formData.message}`;
      const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Open mail client failed:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk"
        description="Tell me about the problem space, your timeline, and how you measure success. I’ll follow up with next steps."
      />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="surface-card space-y-5 p-6 md:p-8"
          >
            <h2 className="font-display text-lg font-semibold text-[var(--foreground)]">
              Send a message
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]"
                >
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]"
              >
                Subject *
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                placeholder="e.g. Staff engineer search"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full resize-none rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                placeholder="Context, stack, constraints…"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-cta inline-flex h-11 items-center px-5 text-sm disabled:opacity-50"
            >
              {isSubmitting ? "Opening mail…" : "Compose in email"}
            </button>
            {submitStatus === "success" ? (
              <p className="text-sm text-[var(--muted)]" role="status">
                Your mail client should open—if not, use the email address on the right.
              </p>
            ) : null}
            {submitStatus === "error" ? (
              <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                Something went wrong. Please try again or email directly.
              </p>
            ) : null}
          </form>
        </div>

        <aside className="lg:col-span-5 space-y-4">
          <div className="surface-card p-6 md:p-8">
            <h2 className="font-display text-lg font-semibold text-[var(--foreground)]">
              Direct lines
            </h2>
            <ul className="mt-5 space-y-3">
              {contactInfo.map((info) => (
                <li key={info.title}>
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block rounded-md border border-transparent px-0 py-2 transition-colors hover:border-[var(--border)]"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                      {info.title}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-[var(--foreground)] group-hover:underline decoration-1 underline-offset-4">
                      {info.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
              Response
            </p>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              I aim to reply within one business day for serious inquiries. If you are
              hiring, include role level, location policy, and stack.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
