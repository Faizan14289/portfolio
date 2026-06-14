"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  r: number;
  pulse: number;
  speed: number;
}

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 800, height: 1000 });
  const [reduceMotion, setReduceMotion] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    function measure() {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setSize({ width: rect.width, height: rect.height });
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    let raf: number;
    let last = performance.now();
    const loop = (now: number) => {
      if (now - last > 40) {
        setTick((t) => t + 1);
        last = now;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion]);

  const nodes = useMemo<Node[]>(() => {
    const count = 42;
    const list: Node[] = [];
    for (let i = 0; i < count; i++) {
      list.push({
        id: i,
        x: 0.08 + Math.random() * 0.84,
        y: 0.08 + Math.random() * 0.84,
        r: 1.2 + Math.random() * 2.8,
        pulse: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.04,
      });
    }
    return list;
  }, []);

  const { width, height } = size;

  const connections = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];
    const maxDist = 0.18;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          lines.push({
            x1: nodes[i].x * width,
            y1: nodes[i].y * height,
            x2: nodes[j].x * width,
            y2: nodes[j].y * height,
            opacity: 1 - dist / maxDist,
          });
        }
      }
    }
    return lines;
  }, [nodes, width, height]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[#0f0f0f]">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <radialGradient id="hero-visual-glow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#4c1d95" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0f0f0f" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hero-visual-gold" cx="70%" cy="80%" r="50%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0f0f0f" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base glow layers */}
        <rect width={width} height={height} fill="#0f0f0f" />
        <rect width={width} height={height} fill="url(#hero-visual-glow)" />
        <rect width={width} height={height} fill="url(#hero-visual-gold)" />

        {/* Grid */}
        <g opacity="0.04">
          {Array.from({ length: Math.ceil(width / 60) + 1 }).map((_, i) => (
            <line
              key={`vg-${i}`}
              x1={i * 60}
              y1={0}
              x2={i * 60}
              y2={height}
              stroke="#FAFAF9"
              strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: Math.ceil(height / 60) + 1 }).map((_, i) => (
            <line
              key={`hg-${i}`}
              x1={0}
              y1={i * 60}
              x2={width}
              y2={i * 60}
              stroke="#FAFAF9"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Connections */}
        <g>
          {connections.map((line, i) => (
            <line
              key={`conn-${i}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#C9A84C"
              strokeWidth="0.6"
              opacity={line.opacity * 0.35}
            />
          ))}
        </g>

        {/* Nodes */}
        <g>
          {nodes.map((node) => {
            const cx = node.x * width;
            const cy = node.y * height;
            const pulse = reduceMotion ? 1 : 0.7 + 0.3 * Math.sin(tick * node.speed + node.pulse);
            return (
              <g key={node.id}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={node.r * pulse * 1.8}
                  fill="#7c3aed"
                  opacity={0.15}
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r={node.r}
                  fill={node.id % 5 === 0 ? "#C9A84C" : "#a78bfa"}
                  opacity={0.85}
                />
              </g>
            );
          })}
        </g>

        {/* Accent rings */}
        <g opacity="0.25" fill="none" stroke="#C9A84C" strokeWidth="0.8">
          <circle cx={width * 0.25} cy={height * 0.3} r={Math.min(width, height) * 0.18} opacity="0.2" />
          <circle cx={width * 0.75} cy={height * 0.65} r={Math.min(width, height) * 0.12} opacity="0.15" />
        </g>

        {/* Corner markers */}
        <g stroke="#C9A84C" strokeWidth="0.8" opacity="0.3">
          <line x1={width - 40} y1={height - 20} x2={width - 20} y2={height - 20} />
          <line x1={width - 20} y1={height - 40} x2={width - 20} y2={height - 20} />
          <line x1={20} y1={20} x2={40} y2={20} />
          <line x1={20} y1={20} x2={20} y2={40} />
        </g>
      </svg>

      {/* Soft vignette edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/40 via-transparent to-[#0f0f0f]/60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/50 via-transparent to-[#0f0f0f]/30" />
    </div>
  );
}
