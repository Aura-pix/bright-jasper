import Link from "next/link";
import HireMeButton from "@/components/HireMeButton";
import { getAllSamples } from "@/lib/posts";

export const metadata = {
  title: "Persuasive Writing Samples — Bright Jasper",
  description:
    "Product copy, landing pages, SEO content, and developer-facing marketing written to convert.",
};

export default function PersuasiveWritingSamplesPage() {
  const samples = getAllSamples().filter((s) => s.track === "persuasive");

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-3">
        Persuasive writing samples
      </h1>
      <p className="text-[15px] text-muted mb-10 max-w-lg">
        Landing pages, product copy, SEO articles, and developer-facing
        marketing written to explain value clearly and move readers toward
        action.
      </p>

      {samples.length === 0 ? (
        <div className="border border-ink/10 rounded-lg p-8 text-center">
          <p className="text-[15px] text-ink/90 mb-4">
            This track is being built. No samples to show yet.
          </p>
          <p className="text-[14px] text-muted mb-6">
            Real posts will appear here as they&apos;re finished, same pattern
            as the technical track.
          </p>
          <Link
            href="/writing-samples/technical"
            className="inline-flex w-full max-w-[18rem] items-center justify-center rounded-full border border-ink/15 px-5 py-2.5 text-center text-[14px] leading-snug text-ink transition-colors hover:border-accent hover:text-accent sm:max-w-none"
          >
            View technical writing samples instead
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {samples.map((sample) => (
            <Link
              key={sample.slug}
              href={`/blog/${sample.slug}`}
              className="block p-4 rounded-lg border border-ink/10 hover:border-accent"
            >
              <p className="text-[15px] font-medium text-ink mb-1">
                {sample.title}
              </p>
              {sample.excerpt && (
                <p className="text-[13px] text-muted leading-relaxed">
                  {sample.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}

      <div className="mt-14 text-center">
        <p className="mb-4 text-[15px] text-ink/90">
          Need landing pages, product messaging, or conversion-focused copy that
          turns interest into action? Let&apos;s talk.
        </p>
        <HireMeButton />
      </div>
    </div>
  );
}
