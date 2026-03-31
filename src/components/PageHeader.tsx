type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: PageHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <header className={`mb-12 md:mb-16 max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[var(--foreground)] leading-[1.15]">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-base md:text-lg text-[var(--muted)] leading-relaxed">
          {description}
        </p>
      ) : null}
    </header>
  );
}
