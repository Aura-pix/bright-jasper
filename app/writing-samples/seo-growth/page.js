import Link from "next/link";
import HireMeButton from "@/components/HireMeButton";
import { getAllSamples } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "SEO & Growth writing samples | Bright Jasper",
  description:
    "SEO articles, technical SEO audits, ranking experiments, and organic growth case studies from Bright Jasper.",
  path: "/writing-samples/seo-growth",
  keywords: [
    "SEO writing samples",
    "SEO content writer",
    "technical SEO audits",
    "GEO content writing",
    "AEO content writing",
    "organic growth case studies",
  ],
});

export default function SeoGrowthPage() {
  const samples = getAllSamples().filter(
    (sample) => sample.track === "seo-growth",
  );
  const projects = getAllProjects().filter((project) =>
    project.tracks.includes("seo-growth"),
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-3">
        SEO &amp; Growth
      </h1>
      <p className="text-[15px] text-muted mb-10 max-w-lg">
        Need content that earns attention and helps the right people find your
        work? These samples show how I diagnose discoverability problems,
        explain the fix, and build content around organic growth.
      </p>

      <section aria-labelledby="articles-heading">
        <h2
          id="articles-heading"
          className="text-[20px] font-medium text-ink mb-4"
        >
          Articles and breakdowns
        </h2>
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
              <p className="text-[12px] text-accent mt-3">Read the article</p>
            </Link>
          ))}
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block p-4 rounded-lg border border-ink/10 hover:border-accent"
            >
              <p className="text-[15px] font-medium text-ink mb-1">
                {project.title}
              </p>
              <p className="text-[13px] text-muted leading-relaxed">
                {project.excerpt}
              </p>
              <p className="text-[12px] text-accent mt-3">
                Read the case study
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-14 text-center">
        <p className="mb-4 text-[15px] text-ink/90">
          Need SEO and growth content built around a real search problem?
          Let&apos;s talk.
        </p>
        <HireMeButton />
      </div>

      <div className="mt-8 flex justify-center gap-4 text-[14px]">
        <Link href="/writing-samples" className="text-accent hover:underline">
          All writing samples
        </Link>
        <Link href="/blog" className="text-accent hover:underline">
          Browse all writing
        </Link>
      </div>
    </div>
  );
}
