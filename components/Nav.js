"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenu from "@/components/nav/HamburgerMenu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/writing-samples/technical", label: "Technical Writing" },
  { href: "/writing-samples/persuasive", label: "Persuasive Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/threads", label: "Threads" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-ink/10">
      <nav className="relative max-w-3xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-[15px] font-medium text-ink flex-shrink-0"
        >
          Bright Jasper
        </Link>

        <div className="hidden sm:flex flex-1 justify-end gap-x-6 gap-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] ${
                pathname === link.href
                  ? "text-accent font-medium"
                  : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <HamburgerMenu />
      </nav>
    </header>
  );
}
