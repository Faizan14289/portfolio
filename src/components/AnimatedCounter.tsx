"use client";

import { useEffect, useRef, useState } from "react";

const easeOutExpo = (t: number) => 1 - Math.pow(2, -10 * t);

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1800,
  className = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {
      setDisplay(
        `${prefix}${target.toFixed(decimals)}${suffix}`
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            observer.disconnect();

            const startTime = performance.now();
            let rafId = 0;

            const tick = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = easeOutExpo(progress);
              const current = eased * target;

              setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);

              if (progress < 1) {
                rafId = requestAnimationFrame(tick);
              }
            };

            rafId = requestAnimationFrame(tick);

            return () => {
              if (rafId) cancelAnimationFrame(rafId);
            };
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, suffix, prefix, duration, decimals]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${target}${suffix}`}>
      {display}
    </span>
  );
}
