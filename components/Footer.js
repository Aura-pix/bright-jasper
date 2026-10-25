const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bright-jasper-20a8223b3",
  },
  { label: "Email", href: "mailto:brghtjasper@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 mt-24">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-[15px] font-medium text-ink mb-4">
          I research, understand, then write clearly.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted mb-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="https://brightjasper.com/sitemap.xml"
          className="inline-block text-[13px] text-muted hover:text-accent mb-6"
        >
          Sitemap
        </a>
        <p className="text-[12px] text-muted">
          © {year} Bright Jasper | SEO/GEO specialist, content writer, and technical writer
        </p>
      </div>
    </footer>
  );
}
