"use client";

import { useId, useMemo } from "react";

interface ProjectThumbnailProps {
  title: string;
  category?: string;
  className?: string;
}

function hashString(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return Math.abs(h) >>> 0;
}

function pseudoRandom(seed: number): () => number {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

const PALETTES = [
  ["#7c3aed", "#4c1d95", "#a78bfa", "#C9A84C"],   // AI / purple-gold
  ["#0ea5e9", "#0284c7", "#38bdf8", "#C9A84C"],   // SaaS / blue-gold
  ["#10b981", "#047857", "#34d399", "#D4C8B0"],   // commerce / sage
  ["#f59e0b", "#b45309", "#fbbf24", "#FAFAF9"],   // real estate / amber
  ["#ef4444", "#991b1b", "#f87171", "#FAFAF9"],   // realtime / red
  ["#8b5cf6", "#5b21b6", "#a78bfa", "#C9A84C"],   // database / violet
  ["#6366f1", "#312e81", "#818cf8", "#D4C8B0"],   // microservices / indigo
  ["#14b8a6", "#0f766e", "#2dd4bf", "#FAFAF9"],   // devops / teal
];

const CATEGORY_PALETTE: Record<string, number> = {
  "AI / Full Stack": 0,
  "AI · Agentic Platform": 0,
  "Full Stack": 1,
  "SaaS · Workforce Intelligence": 1,
  "E‑commerce · Custom Tailoring": 2,
  "E-Commerce": 2,
  "Real Estate": 3,
  "Real-time": 4,
  "Database": 5,
  "Microservices": 6,
  "Other": 7,
};

export default function ProjectThumbnail({ title, category = "", className = "" }: ProjectThumbnailProps) {
  const seed = useMemo(() => hashString(title + category), [title, category]);
  const rand = useMemo(() => pseudoRandom(seed), [seed]);
  const paletteIndex = CATEGORY_PALETTE[category] ?? (seed % PALETTES.length);
  const palette = PALETTES[paletteIndex];
  const id = useId().replace(/:/g, "");

  // Generate deterministic composition
  const circles = useMemo(() => {
    const list = [];
    for (let i = 0; i < 5; i++) {
      list.push({
        cx: 20 + rand() * 60,
        cy: 20 + rand() * 60,
        r: 8 + rand() * 24,
        opacity: 0.15 + rand() * 0.35,
        color: palette[Math.floor(rand() * palette.length)],
        blur: rand() > 0.5,
      });
    }
    return list;
  }, [rand, palette]);

  const lines = useMemo(() => {
    const list = [];
    for (let i = 0; i < 4; i++) {
      list.push({
        x1: rand() * 100,
        y1: rand() * 100,
        x2: rand() * 100,
        y2: rand() * 100,
        width: 0.5 + rand() * 1.5,
        opacity: 0.1 + rand() * 0.3,
        color: palette[Math.floor(rand() * palette.length)],
      });
    }
    return list;
  }, [rand, palette]);

  const squares = useMemo(() => {
    const list = [];
    for (let i = 0; i < 3; i++) {
      list.push({
        x: 10 + rand() * 70,
        y: 10 + rand() * 70,
        size: 6 + rand() * 18,
        rotate: rand() * 45,
        opacity: 0.1 + rand() * 0.25,
        color: palette[Math.floor(rand() * palette.length)],
      });
    }
    return list;
  }, [rand, palette]);

  const accent = palette[3];

  return (
    <svg
      viewBox="0 0 100 62.5"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    >
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={palette[0]} stopOpacity="0.25" />
          <stop offset="50%" stopColor={palette[1]} stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0D0D0D" stopOpacity="0.9" />
        </linearGradient>
        <filter id={`blur-${id}`}>
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        <pattern id={`grid-${id}`} width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke={accent} strokeOpacity="0.04" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* Base */}
      <rect width="100" height="62.5" fill="#0D0D0D" />
      <rect width="100" height="62.5" fill={`url(#grad-${id})`} />
      <rect width="100" height="62.5" fill={`url(#grid-${id})`} />

      {/* Soft circles */}
      {circles.map((c, i) => (
        <circle
          key={`c-${i}`}
          cx={c.cx}
          cy={c.cy}
          r={c.r}
          fill={c.color}
          opacity={c.opacity}
          filter={c.blur ? `url(#blur-${id})` : undefined}
        />
      ))}

      {/* Structural lines */}
      {lines.map((l, i) => (
        <line
          key={`l-${i}`}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke={l.color}
          strokeWidth={l.width}
          opacity={l.opacity}
        />
      ))}

      {/* Geometric squares */}
      {squares.map((s, i) => (
        <rect
          key={`s-${i}`}
          x={s.x}
          y={s.y}
          width={s.size}
          height={s.size}
          fill="none"
          stroke={s.color}
          strokeWidth="0.75"
          opacity={s.opacity}
          transform={`rotate(${s.rotate} ${s.x + s.size / 2} ${s.y + s.size / 2})`}
        />
      ))}

      {/* Accent corner mark */}
      <circle cx="92" cy="6.5" r="1.5" fill={accent} opacity="0.6" />
      <path d="M 86 6.5 L 90 6.5" stroke={accent} strokeWidth="0.5" opacity="0.4" />

      {/* Bottom reading line */}
      <rect x="42" y="58" width="16" height="1" rx="0.5" fill={accent} opacity="0.2" />
    </svg>
  );
}
