import { getAllThreads } from '@/lib/threads';

export const metadata = {
  title: 'Threads — Bright Jasper',
  description: 'Short-form threads posted on X — quick takes that never became full articles.',
};

function formatDate(dateString) {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function ThreadsPage() {
  const threads = getAllThreads();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-3">Threads</h1>
      <p className="text-[15px] text-muted mb-10 max-w-lg">
        Shorter takes that live on X instead of here — quick thoughts, not full articles.
      </p>

      {threads.length === 0 ? (
        <p className="text-[14px] text-muted">Nothing posted here yet.</p>
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
                <p className="text-[12px] text-muted mb-2">{formatDate(thread.date)}</p>
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