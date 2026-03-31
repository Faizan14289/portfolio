import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-[var(--border)] bg-[color-mix(in_oklab,var(--surface-solid)_70%,transparent)] backdrop-blur-lg">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-80"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl font-semibold">
              <span className="text-gradient">Faizan Ali</span>
            </p>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              Full-stack engineer focused on reliable APIs, performance, and
              maintainable systems.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] text-[var(--muted)]">
            © {year} Faizan Ali. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 font-mono text-[11px]">
            <a
              href="https://github.com/faizan14289"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] transition-colors hover:text-[var(--accent-2)]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/faizan-ali-b0b167150"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:faizali2152@gmail.com"
              className="text-[var(--muted)] transition-colors hover:text-[var(--accent-2)]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
