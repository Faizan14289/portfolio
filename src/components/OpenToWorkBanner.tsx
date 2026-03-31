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
    <div className="border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--accent)_12%,var(--surface-solid))] px-6 py-2.5">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            {site.openToWork.title}
          </p>
          <p className="mt-0.5 text-sm leading-snug text-[var(--foreground)]">
            {site.openToWork.summary}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={site.openToWork.ctaHref}
            className="btn-cta inline-flex h-8 items-center px-3 text-xs sm:h-9 sm:px-4 sm:text-sm"
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
            className="rounded-md border border-[var(--border)] bg-[var(--surface-solid)] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
