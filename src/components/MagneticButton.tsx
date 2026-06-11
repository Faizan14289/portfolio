"use client";

import { useMagneticButton } from "@/hooks/useMagneticButton";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useCallback, useRef, useState } from "react";

interface Particle {
  id: number;
  endX: number;
  endY: number;
  size: number;
  duration: number;
  hue: number;
}

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  burst?: boolean;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  burst = true,
}: MagneticButtonProps) {
  const ref = useMagneticButton<HTMLDivElement>({
    strength: 0.3,
    radius: 80,
    lerpFactor: 0.12,
  });
  const reduce = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);
  const idRef = useRef(0);

  const spawnParticles = useCallback(() => {
    if (reduce || !burst) return;
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const newParticles: Particle[] = [];
    const count = 10;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
      const distance = 30 + Math.random() * 30;
      newParticles.push({
        id: idRef.current++,
        endX: Math.cos(angle) * distance,
        endY: Math.sin(angle) * distance,
        size: 3 + Math.random() * 3,
        duration: 0.5 + Math.random() * 0.2,
        hue: 255 + Math.random() * 30, // purple/violet range
      });
    }
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 800);
  }, [burst, reduce]);

  return (
    <div
      ref={reduce ? undefined : ref}
      className={`relative inline-block ${className}`}
      onMouseEnter={spawnParticles}
      onClick={onClick}
      role="button"
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
      {!reduce && particles.length > 0 && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-inherit">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute left-1/2 top-1/2 rounded-full"
              initial={{
                x: "-50%",
                y: "-50%",
                opacity: 0.9,
                scale: 1,
              }}
              animate={{
                x: `calc(-50% + ${p.endX}px)`,
                y: `calc(-50% + ${p.endY}px)`,
                opacity: 0,
                scale: 0.5,
              }}
              transition={{
                duration: p.duration,
                ease: "easeOut",
              }}
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: `hsl(${p.hue}, 80%, 65%)`,
              }}
            />
          ))}
        </span>
      )}
    </div>
  );
}
