import { getAllThreads } from "@/lib/threads";

export const metadata = {
  title: "Threads | Bright Jasper",
  description:
    "Short-form product thinking, technical observations, and web3 takes from Bright Jasper — written for quick, sharp reading.",
  alternates: {
    canonical: "https://brightjasper.com/threads",
  },
};

function formatDate(dateString) {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function ThreadsPage() {
  const threads = getAllThreads();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-3">Threads</h1>
      <p className="text-[15px] text-muted mb-10 max-w-lg">
        I use X as a lighter publishing layer: quick takes, product thinking,
        and technical observations that deserve a public record without needing
        a full article.
      </p>

      {threads.length === 0 ? (
        <div className="rounded-lg border border-ink/10 p-8 text-center">
          <p className="text-[15px] text-ink/90 mb-2">
            I&apos;m curating my X posts for the portfolio.
          </p>
          <p className="text-[14px] text-muted">
            This section will fill up with short-form ideas, product notes, and
            technical takes as I publish them.
          </p>
        </div>
      ) : (
        <div>
          {threads.map((thread) => (
            <a
              key={thread.slug}
              href={thread.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-5 border-b border-ink/10 group"
            >
              {thread.date && (
                <p className="text-[12px] text-muted mb-2">
                  {formatDate(thread.date)}
                </p>
              )}
              <p className="text-[16px] text-ink group-hover:text-accent leading-relaxed">
                {thread.hook}
              </p>
              <p className="text-[13px] text-accent mt-2">Read on X →</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
