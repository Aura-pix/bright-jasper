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
  { label: "GitHub", href: "https://GitHub.com/Aura-pix" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 mt-24">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-[15px] font-medium text-ink mb-4">
          I research, understand, then write.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted mb-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-[12px] text-muted">© {year} Bright Jasper</p>
      </div>
    </footer>
  );
}
