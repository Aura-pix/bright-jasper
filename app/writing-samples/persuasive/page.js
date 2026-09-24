import Link from "next/link";
import HireMeButton from "@/components/HireMeButton";
import { getAllSamples } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "SEO writing & process | Bright Jasper",
  description:
    "SEO articles, technical SEO audits broken down, and practical how-tos from Bright Jasper for fixing what is actually wrong with a site.",
  path: "/writing-samples/persuasive",
  keywords: [
    "SEO writing samples",
    "SEO content writer",
    "technical SEO audits",
    "GEO content writing",
    "AEO content writing",
    "SEO how-to articles",
  ],
});

export default function SeoWritingPage() {
  const seoSamples = getAllSamples().filter(
    (sample) =>
      sample.track === "persuasive" && sample.sampleCategory === "SEO Writing",
  );
  const samples = getAllSamples().filter(
    (sample) =>
      sample.track === "persuasive" && sample.sampleCategory !== "SEO Writing",
  );
  const productProjects = getAllProjects().filter((project) =>
    project.tracks.includes("persuasive"),
  );
  const seoProjects = getAllProjects().filter(
    (project) => project.slug === "seo-geo-case-study",
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-3">
        SEO writing &amp; process
      </h1>
      <p className="text-[15px] text-muted mb-10 max-w-lg">
        SEO articles, audits broken down, and how-tos on fixing what&apos;s
        actually wrong with a site&apos;s discoverability.
      </p>

      <section aria-labelledby="new-work-heading">
        <h2
          id="new-work-heading"
          className="text-[20px] font-medium text-ink mb-4"
        >
          New work
        </h2>
        <p className="text-[15px] text-muted mb-6 max-w-2xl">
          This is where SEO articles, &quot;how I fixed X&quot; breakdowns, and
          practical how-tos will live going forward.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {seoSamples.map((sample) => (
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
          {seoProjects.map((project) => (
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

      <section className="mt-12" aria-labelledby="earlier-work-heading">
        <h2
          id="earlier-work-heading"
          className="text-[18px] font-medium text-ink mb-4"
        >
          Earlier work
        </h2>
        <p className="text-[15px] text-muted mb-6">
          Landing page and product copy work from earlier projects — kept here
          for reference.
        </p>
        {samples.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
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
        <div className="grid sm:grid-cols-2 gap-4">
          {productProjects.map((project) => (
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
                View project case study
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-14 text-center">
        <p className="mb-4 text-[15px] text-ink/90">
          Need SEO writing and optimization that helps the right people find
          your site? Let&apos;s talk.
        </p>
        <HireMeButton />
      </div>
    </div>
  );
}
