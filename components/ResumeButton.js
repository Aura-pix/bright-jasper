"use client";

import { useState, useRef, useEffect } from "react";

const RESUME_FILES = [
  {
    label: "PDF",
    href: "/resume.pdf",
    downloadName: "Bright Jasper Resume Updated.pdf",
  },
  {
    label: "DOCX",
    href: "/resume.docx",
    downloadName: "Bright Jasper Resume Updated.docx",
  },
];

/**
 * ResumeButton
 *
 * Click opens a small popover with PDF/DOCX choices.
 * Closes on outside click or Escape.
 *
 * Usage:
 *   import ResumeButton from '@/components/ResumeButton';
 *   <ResumeButton />
 */
export default function ResumeButton({
  label = "Download resume",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

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

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div ref={wrapperRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={
          className ||
          "text-[14px] px-5 py-2.5 rounded-full border border-ink/15 text-ink hover:border-accent hover:text-accent"
        }
      >
        {label}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-white border border-ink/10 rounded-lg shadow-lg py-2 z-50"
        >
          {RESUME_FILES.map((file) => (
            <a
              key={file.label}
              href={file.href}
              download={file.downloadName}
              role="menuitem"
              className="block px-4 py-2 text-[14px] text-ink/90 hover:bg-ink/5 hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {file.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
