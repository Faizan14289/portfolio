"use client";

import { useEffect, useRef } from "react";

const DEFAULT_STRINGS = [
  "Senior Full Stack AI Developer",
  "Multi-LLM Systems Architect",
  "Real-Time Voice AI Engineer",
  "RAG Pipeline Specialist",
  "Production SaaS Builder",
];

interface TypewriterProps {
  strings?: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  className?: string;
  cursorColor?: string;
}

export default function Typewriter({
  strings = DEFAULT_STRINGS,
  typeSpeed = 45,
  backSpeed = 25,
  backDelay = 2000,
  loop = true,
  className = "",
  cursorColor = "#7c3aed",
}: TypewriterProps) {
  const elRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<any>(null);

  useEffect(() => {
    if (!elRef.current) return;

    let cancelled = false;

    import("typed.js").then((TypedModule) => {
      if (cancelled || !elRef.current) return;
      const Typed = TypedModule.default;
      typedRef.current = new Typed(elRef.current, {
        strings,
        typeSpeed,
        backSpeed,
        backDelay,
        loop,
        smartBackspace: true,
        cursorChar: "▋",
      });
    });

    return () => {
      cancelled = true;
      if (typedRef.current) {
        typedRef.current.destroy();
        typedRef.current = null;
      }
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);

  return (
    <span className={className}>
      <span ref={elRef} />
      <style jsx>{`
        :global(.typed-cursor) {
          color: ${cursorColor};
          font-weight: 100;
        }
      `}</style>
    </span>
  );
}
