import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
};

/** Consistent horizontal rhythm for all inner pages. */
export default function PageShell({
  children,
  className = "",
  as: Tag = "div",
}: PageShellProps) {
  return (
    <Tag className={`mx-auto max-w-6xl px-6 py-16 md:py-24 ${className}`}>
      {children}
    </Tag>
  );
}
