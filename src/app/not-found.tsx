"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">404</p>
        <h1 className="font-hero mt-4 text-[clamp(4rem,15vw,10rem)] leading-none tracking-tight text-gradient">
          404
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-[#B8A88A]">
          This page took a coffee break. Probably debugging something in production.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-cta inline-flex h-11 items-center px-6 text-sm">
            Back Home
          </Link>
          <Link
            href="/contact"
            className="btn-cta-outline inline-flex h-11 items-center px-6 text-sm"
          >
            Get In Touch
          </Link>
        </div>
      </motion.div>

      {/* Decorative code block */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-16 w-full max-w-lg overflow-hidden rounded-xl border border-[#FAFAF9]/[0.06] bg-[#1A1A1A] p-6 text-left font-mono text-xs"
      >
        <div className="flex items-center gap-2 text-[#9A8B70]">
          <span className="h-2 w-2 rounded-full bg-[#A0843D]" />
          <span>terminal</span>
        </div>
        <div className="mt-4 space-y-1 text-[#B8A88A]">
          <p>
            <span className="text-[#C9A84C]">$</span> find /pages -name "this-url"
          </p>
          <p className="text-[#9A8B70]">Error: Route not found (exit code 404)</p>
          <p className="pt-2">
            <span className="text-[#C9A84C]">$</span> grep -r "success" /career
          </p>
          <p className="text-[#D4B86A]">Found: 15+ shipped projects</p>
          <p className="pt-2">
            <span className="text-[#C9A84C]">$</span> _
            <span className="animate-pulse text-[#C9A84C]">▋</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
