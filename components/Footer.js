import Link from "next/link";

const links = [
  { label: "X", href: "https://x.com/brightjasp" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bright-olorunfunmilola-20a8223b3",
  },
  { label: "Medium", href: "https://medium.com/@brghtjasper" },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~018d2a2818ff617a2b",
  },
  { label: "GitHub", href: "https://github.com/Aura-pix/bright-jasper" },
  { label: "Telegram", href: "https://t.me/Jasper074" },
  { label: "Facebook", href: "https://www.facebook.com/brightjasp" },
  { label: "Email", href: "mailto:brghtjasper@gmail.com" },
];

const sitemapLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Threads", href: "/threads" },
  { label: "Writing samples", href: "/writing-samples" },
  { label: "Technical writing", href: "/writing-samples/technical" },
  { label: "SEO writing", href: "/writing-samples/persuasive" },
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
        <nav aria-label="Sitemap" className="mb-6">
          <p className="text-[12px] text-muted mb-2">Sitemap</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted">
            {sitemapLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        <p className="text-[12px] text-muted">
          © {year} Bright Jasper | SEO/GEO specialist and content writer
        </p>
      </div>
    </footer>
  );
}
