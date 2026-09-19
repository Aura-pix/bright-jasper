"use client";

import { useState } from "react";

export default function ShareButton({ title }) {
  const [status, setStatus] = useState("");

  async function handleShare() {
    const shareData = {
      title,
      text: title,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setStatus("Shared");
        return;
      }

      await navigator.clipboard.writeText(window.location.href);
      setStatus("Link copied");
    } catch (error) {
      if (error.name !== "AbortError") {
        setStatus("Could not share");
      }
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={handleShare}
        className="border border-ink/15 rounded-lg px-4 py-2 text-[13px] text-ink hover:border-accent hover:text-accent transition-colors"
      >
        Share article
      </button>
      {status && <span className="text-[13px] text-muted">{status}</span>}
    </div>
  );
}
