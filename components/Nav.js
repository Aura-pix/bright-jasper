"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenu from "@/components/nav/HamburgerMenu";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/writing-samples", label: "Writing Samples" },
  { href: "/blog", label: "Blog" },
  { href: "/credentials", label: "Credentials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact me" },
];

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white">
      <nav className="relative max-w-3xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-medium text-ink flex-shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Bright Jasper logo"
            width={28}
            height={28}
            className="rounded-md"
            priority
          />
          <span>Bright Jasper</span>
        </Link>

        <div className="hidden sm:flex flex-1 justify-end items-center gap-x-6 gap-y-1">
          {NAV_LINKS.map((link) => {
            if (link.href === "/services") {
              return (
                <div key={link.href} className="relative group inline-block py-1">
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 text-[13px] ${
                      isActive(link.href)
                        ? "text-accent font-medium"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg
                      className="w-3 h-3 transition-transform group-hover:rotate-180 opacity-60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  <div className="absolute left-0 top-full hidden group-hover:block pt-2 z-50">
                    <div className="w-56 rounded-lg border border-ink/10 bg-white p-2 shadow-lg">
                      <Link
                        href="/services/agencies"
                        className="block rounded px-3 py-2 text-[13px] text-ink hover:bg-ink/5 hover:text-accent transition-colors"
                      >
                        <span className="font-medium block">For Agencies</span>
                        <span className="text-[11px] text-muted block">
                          SEO, GEO &amp; AEO delivery
                        </span>
                      </Link>
                      <Link
                        href="/services/documentation"
                        className="block rounded px-3 py-2 text-[13px] text-ink hover:bg-ink/5 hover:text-accent transition-colors"
                      >
                        <span className="font-medium block">Documentation</span>
                        <span className="text-[11px] text-muted block">
                          Web3, AI &amp; developer tools
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] ${
                  isActive(link.href)
                    ? "text-accent font-medium"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <HamburgerMenu />
      </nav>
    </header>
  );
}
