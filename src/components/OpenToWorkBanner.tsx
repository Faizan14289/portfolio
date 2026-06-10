"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const STORAGE_KEY = "portfolio-open-to-work-dismissed";

export default function OpenToWorkBanner() {
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      setShow(localStorage.getItem(STORAGE_KEY) !== "1");
    } catch {
      setShow(true);
    }
  }, []);

  if (show === null || !show) return null;

  return (
    <div className="border-b border-[#FAFAF9]/[0.06] border-l-4 border-l-[#C9A84C] bg-[#1A1A1A] px-6 py-3">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
            {site.openToWork.title}
          </p>
          <p className="mt-1 text-sm leading-snug text-[#D4C8B0]">
            {site.openToWork.summary}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={site.openToWork.ctaHref}
            className="btn-cta inline-flex h-9 items-center px-4 text-xs"
          >
            {site.openToWork.ctaLabel}
          </Link>
          <button
            type="button"
            onClick={() => {
              try {
                localStorage.setItem(STORAGE_KEY, "1");
              } catch {
                /* ignore */
              }
              setShow(false);
            }}
            className="rounded-lg border border-[#FAFAF9]/[0.08] bg-[#1A1A1A] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#9A8B70] hover:text-[#D4C8B0] transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
