"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#FAFAF9]/[0.06] bg-[#0D0D0D]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-hero text-2xl tracking-tight text-[#FAFAF9]">
              {site.name}
            </span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-[#C9A84C] sm:inline-block" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-[#C9A84C]"
                      : "text-[#9A8B70] hover:text-[#FAFAF9]"
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-cta hidden h-10 items-center px-5 text-sm sm:inline-flex"
            >
              Hire Me
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#FAFAF9]/10 text-[#D4C8B0] transition-colors hover:border-[#C9A84C]/30 hover:text-[#FAFAF9] lg:hidden"
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
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#0D0D0D] lg:hidden"
          >
            {/* Background blur effect */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-[#C9A84C]/20 blur-[120px]" />
              <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#A0843D]/10 blur-[100px]" />
            </div>

            <div className="relative flex h-full flex-col px-8 pb-12 pt-24">
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-6 top-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#FAFAF9]/10 text-[#D4C8B0]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Nav links */}
              <nav className="flex flex-col gap-2" aria-label="Mobile primary">
                {navItems.map((item, i) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.1, duration: 0.35 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-baseline gap-3 py-3 ${
                          active ? "text-[#C9A84C]" : "text-[#FAFAF9]"
                        }`}
                      >
                        <span className="font-mono text-xs text-[#5A4F40]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-hero text-4xl uppercase tracking-tight transition-colors group-hover:text-[#C9A84C]">
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom section */}
              <div className="mt-auto border-t border-[#FAFAF9]/[0.06] pt-8">
                <p className="text-xs text-[#5A4F40]">Get in touch</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-lg text-[#B8A88A] hover:text-[#C9A84C]"
                >
                  {site.email}
                </a>
                <div className="mt-6 flex gap-4">
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[#9A8B70] hover:text-[#C9A84C]">
                    LinkedIn
                  </a>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-sm text-[#9A8B70] hover:text-[#C9A84C]">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
