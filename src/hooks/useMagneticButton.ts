"use client";

import { useEffect, useRef } from "react";

interface MagneticState {
  x: number;
  y: number;
}

export function useMagneticButton<T extends HTMLElement = HTMLButtonElement>({
  strength = 0.3,
  radius = 80,
  lerpFactor = 0.12,
}: {
  strength?: number;
  radius?: number;
  lerpFactor?: number;
} = {}) {
  const ref = useRef<T>(null);
  const target = useRef<MagneticState>({ x: 0, y: 0 });
  const current = useRef<MagneticState>({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const element = el;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    function animate() {
      current.current.x += (target.current.x - current.current.x) * lerpFactor;
      current.current.y += (target.current.y - current.current.y) * lerpFactor;

      element.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;

      if (
        Math.abs(target.current.x - current.current.x) > 0.01 ||
        Math.abs(target.current.y - current.current.y) > 0.01
      ) {
        rafId.current = requestAnimationFrame(animate);
      }
    }

    function onMouseMove(e: MouseEvent) {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < radius) {
        target.current.x = dx * strength;
        target.current.y = dy * strength;
      } else {
        target.current.x = 0;
        target.current.y = 0;
      }

      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(animate);
    }

    function onMouseLeave() {
      target.current.x = 0;
      target.current.y = 0;
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(animate);
    }

    element.addEventListener("mousemove", onMouseMove);
    element.addEventListener("mouseleave", onMouseLeave);

    return () => {
      element.removeEventListener("mousemove", onMouseMove);
      element.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [strength, radius, lerpFactor]);

  return ref;
}
