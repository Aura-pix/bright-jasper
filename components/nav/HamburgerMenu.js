"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/writing-samples", label: "Writing Samples" },
  { href: "/blog", label: "Blog" },
  { href: "/credentials", label: "Credentials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Me" },
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, {
        passive: true,
      });
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative ml-auto sm:hidden" ref={menuRef}>
      <button
        type="button"
        className="flex items-center justify-center p-2 text-ink hover:text-accent rounded-full transition-colors"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <div
        id="mobile-menu"
        className={`absolute right-0 top-full z-50 mt-2 w-56 origin-top-right rounded-xl border border-ink/10 bg-white p-2 shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-all duration-200 ease-out ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-lg px-3 py-2 text-[14px] transition-colors ${
                  isActive(link.href)
                    ? "bg-accent/10 text-accent font-medium"
                    : "text-muted hover:bg-ink/5 hover:text-ink"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
              {link.href === "/services" && (
                <div className="pl-4 pt-1 pb-1 space-y-1">
                  <Link
                    href="/services/agencies"
                    className={`block rounded-lg px-2.5 py-1.5 text-[13px] transition-colors ${
                      pathname === "/services/agencies"
                        ? "text-accent font-medium bg-accent/5"
                        : "text-muted hover:text-ink hover:bg-ink/5"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    ↳ For Agencies
                  </Link>
                  <Link
                    href="/services/documentation"
                    className={`block rounded-lg px-2.5 py-1.5 text-[13px] transition-colors ${
                      pathname === "/services/documentation"
                        ? "text-accent font-medium bg-accent/5"
                        : "text-muted hover:text-ink hover:bg-ink/5"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    ↳ Documentation
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
