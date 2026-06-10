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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#FAFAF9]/[0.06] bg-[#0D0D0D]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-hero text-2xl tracking-tight text-[#FAFAF9]">
            {site.name}
          </span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-[#C9A84C] sm:inline-block" />
        </Link>

        {/* Desktop nav */}
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
                    : "text-[#B8A88A] hover:text-[#FAFAF9]"
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

        {/* CTA + Mobile toggle */}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[#FAFAF9]/[0.06] bg-[#0D0D0D]/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto max-w-7xl px-6 py-4" aria-label="Mobile primary">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                        pathname === item.href
                          ? "text-[#C9A84C]"
                          : "text-[#B8A88A]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="btn-cta inline-flex h-10 items-center px-5 text-sm"
                  >
                    Hire Me
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
