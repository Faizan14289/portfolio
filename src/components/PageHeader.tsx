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
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <header className={`mb-14 md:mb-20 max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="eyebrow mb-4">{eyebrow}</p>
      ) : null}
      <h1 className="font-hero text-[clamp(2rem,5vw,3.25rem)] font-normal uppercase leading-[1.05] tracking-tight text-[#FAFAF9]">
        {title}
      </h1>
      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#B8A88A] md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
