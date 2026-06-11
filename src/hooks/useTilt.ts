"use client";

import { useEffect, useRef } from "react";

const isTouchDevice = () => {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

interface UseTiltOptions {
  max?: number;
  speed?: number;
  glare?: boolean;
  maxGlare?: number;
  scale?: number;
  perspective?: number;
  disabled?: boolean;
}

export function useTilt<T extends HTMLElement = HTMLDivElement>({
  max = 8,
  speed = 400,
  glare = true,
  maxGlare = 0.12,
  scale = 1.03,
  perspective = 800,
  disabled = isTouchDevice(),
}: UseTiltOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;

    let tiltInstance: any;

    import("vanilla-tilt").then((VanillaTilt) => {
      if (!ref.current) return;
      VanillaTilt.default.init(ref.current, {
        max,
        speed,
        glare,
        "max-glare": maxGlare,
        scale,
        perspective,
        transition: true,
        gyroscope: false,
      });
      tiltInstance = (ref.current as any).vanillaTilt;
    });

    return () => {
      if (tiltInstance && typeof tiltInstance.destroy === "function") {
        tiltInstance.destroy();
      }
    };
  }, [disabled, max, speed, glare, maxGlare, scale, perspective]);

  return ref;
}
