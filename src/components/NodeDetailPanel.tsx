"use client";

import { AnimatePresence, motion } from "framer-motion";

export interface NodeData {
  type: "project" | "skill";
  label: string;
  category: string;
  description: string;
  tags: string[];
  link: string | null;
  color: number;
  accent: string;
}

interface NodeDetailPanelProps {
  isOpen: boolean;
  onClose: () => void;
  data: NodeData | null;
}

export default function NodeDetailPanel({
  isOpen,
  onClose,
  data,
}: NodeDetailPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && data && (
        <motion.div
          key={data.label}
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl border bg-[#0d0d1a] p-6 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md"
          style={{ borderColor: `${data.accent}40` }}
        >
          {/* close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute -right-3 -top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1a1a2e] text-white shadow-lg transition-all hover:scale-110 hover:bg-[#252538] hover:text-white"
            style={{ color: data.accent }}
            aria-label="Close panel"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* type badge */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-2 block font-mono text-xs uppercase tracking-widest"
            style={{ color: data.accent }}
          >
            {data.type === "project" ? "◆ Project" : "◈ Skill"}
          </motion.span>

          {/* title */}
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mb-1 text-2xl font-semibold text-white"
          >
            {data.label}
          </motion.h3>

          {/* category */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="mb-3 text-sm text-white/40"
          >
            {data.category}
          </motion.p>

          {/* divider line that draws itself */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            style={{
              height: "1px",
              background: `${data.accent}50`,
              transformOrigin: "left",
              marginBottom: "16px",
            }}
          />

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5 text-sm leading-relaxed text-white/70"
          >
            {data.description}
          </motion.p>

          {/* tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="mb-5 flex flex-wrap gap-2"
          >
            {data.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.28 + i * 0.04 }}
                className="rounded-md px-2.5 py-1 font-mono text-xs"
                style={{
                  background: `${data.accent}18`,
                  color: data.accent,
                  border: `1px solid ${data.accent}30`,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* link button — only if project */}
          {data.link && (
            <motion.a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all hover:scale-105"
              style={{
                background: `${data.accent}20`,
                color: data.accent,
                border: `1px solid ${data.accent}40`,
              }}
            >
              View Project →
            </motion.a>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
