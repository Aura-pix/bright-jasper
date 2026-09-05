import Link from 'next/link';
import { getAllSamples } from '@/lib/posts';

export const metadata = {
  title: 'Writing samples — Bright Jasper',
  description: 'A curated set of technical documentation, research, and guides.',
};

const CATEGORIES = ['Documentation', 'Research & Explainers', 'Guides'];

export default function WritingSamplesPage() {
  const samples = getAllSamples();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-3">Writing samples</h1>
      <p className="text-[15px] text-muted mb-10 max-w-lg">
        If you're checking out my work for a project, start here. A shorter list, picked to
        actually show range — technical documentation (JS/TS, Python, Solidity), protocol
        explainers, and dev-facing guides.
      </p>

      {samples.length === 0 ? (
        <p className="text-[14px] text-muted">
          Samples are being added — check back soon, or see the full{' '}
          <Link href="/blog" className="text-accent hover:underline">blog</Link> in the meantime.
        </p>
      ) : (
        CATEGORIES.map((category) => {
          const items = samples.filter((s) => s.sampleCategory === category);
          if (items.length === 0) return null;

          return (
            <div key={category} className="mb-10">
              <h2 className="text-[16px] font-medium text-ink mb-4">{category}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {items.map((sample) => (
                  <Link
                    key={sample.slug}
                    href={`/blog/${sample.slug}`} // same post, same slug - samples is just a curated view
                    className="block p-4 rounded-lg border border-ink/10 hover:border-accent"
                  >
                    <p className="text-[15px] font-medium text-ink mb-1">{sample.title}</p>
                    {sample.excerpt && (
                      <p className="text-[13px] text-muted leading-relaxed">{sample.excerpt}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
