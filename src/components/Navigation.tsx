"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navItems = [
  { name: "Work", href: "/projects" },
  { name: "Case studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Services", href: "/services" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--surface-solid)_76%,transparent)] backdrop-blur-xl supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--surface-solid)_62%,transparent)]">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-6 md:h-20">
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          <motion.span
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-solid)] font-mono text-[11px] font-medium text-[var(--foreground)] shadow-[0_8px_24px_-12px_var(--glow)]"
            aria-hidden
            whileHover={
              reduce
                ? undefined
                : { rotate: [-2, 2, -1, 0], scale: 1.04 }
            }
            transition={{ duration: 0.45 }}
          >
            FA
          </motion.span>
          <span className="hidden sm:block">
            <span className="font-display text-base font-semibold tracking-tight text-[var(--foreground)]">
              Faizan Ali
            </span>
            <span className="mt-0.5 block bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text font-mono text-[10px] uppercase tracking-[0.18em] text-transparent">
              Full-stack engineer
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-0.5" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-lg px-3 py-2 text-sm font-medium"
              >
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] shadow-[0_10px_28px_-18px_var(--glow)]"
                    style={{ zIndex: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 34,
                    }}
                  />
                ) : null}
                <span
                  className={`relative z-10 transition-colors ${
                    active
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/testimonials"
            className={`hidden md:inline-flex rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              pathname === "/testimonials"
                ? "border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            Testimonials
          </Link>
          <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
            <Link
              href="/contact"
              className="btn-cta hidden sm:inline-flex h-9 items-center px-4 text-sm"
            >
              Let&apos;s talk
            </Link>
          </motion.div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-solid)] text-[var(--foreground)] shadow-[0_8px_24px_-14px_var(--glow)] lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--border)] bg-[color-mix(in_oklab,var(--surface-solid)_94%,transparent)] backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto max-w-6xl px-6 py-4" aria-label="Mobile primary">
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                      pathname === "/"
                        ? "border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? undefined : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduce ? 0 : 0.04 + i * 0.03 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                        pathname === item.href
                          ? "border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)]"
                          : "text-[var(--muted)]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
                <li>
                  <Link
                    href="/testimonials"
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                      pathname === "/testimonials"
                        ? "border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
