"use client";

import { useState, useRef, useEffect } from "react";

// Contact channels shown in the popover.
const CONTACT_LINKS = [
  { label: "X", href: "https://x.com/brightjasp" },
  { label: "Email", href: "mailto:brghtjasper@gmail.com" },
  { label: "Telegram", href: "https://t.me/Jasper074" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bright-olorunfunmilola-20a8223b3",
  },
  { label: "Facebook", href: "https://www.facebook.com/share/1EvxWUj7Vn/" },
];

/**
 * HireMeButton
 *
 * A button that opens a small popover listing contact channels.
 * Opens on click (works on mobile) and on hover (works on desktop).
 * Closes on outside click, Escape key, or mouse leaving both the
 * trigger and the panel.
 *
 * Usage:
 *   import HireMeButton from '@/components/HireMeButton';
 *   <HireMeButton />
 *
 */

export default function HireMeButton({
  label = "Get in touch",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef(null);
  const wrapperRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  function handleMouseEnter() {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    closeTimeout.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div
      ref={wrapperRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={
          className ||
          "text-[14px] px-5 py-2.5 rounded-full bg-accent text-white hover:opacity-90"
        }
      >
        {label}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-ink/10 rounded-lg shadow-lg py-2 z-50"
        >
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              role="menuitem"
              className="block px-4 py-2 text-[14px] text-ink/90 hover:bg-ink/5 hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
