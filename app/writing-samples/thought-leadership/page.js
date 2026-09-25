import Link from "next/link";
import HireMeButton from "@/components/HireMeButton";
import { getAllSamples } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Thought Leadership writing samples | Bright Jasper",
  description:
    "Opinionated, research-driven writing on technology, finance, Web3, and the systems shaping what comes next.",
  path: "/writing-samples/thought-leadership",
  keywords: [
    "thought leadership writing samples",
    "technology thought leadership",
    "Web3 writing samples",
    "finance analysis writing",
    "research-driven content",
  ],
});

export default function ThoughtLeadershipPage() {
  const samples = getAllSamples().filter(
    (sample) => sample.track === "thought-leadership",
  );
  const projects = getAllProjects().filter((project) =>
    project.tracks.includes("thought-leadership"),
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-3">
        Thought Leadership
      </h1>
      <p className="text-[15px] text-muted mb-10 max-w-lg">
        Looking for a writer who can take a position, work through the evidence,
        and make a complex idea worth reading? These are opinionated deep dives
        on technology, finance, Web3, and the systems behind them.
      </p>

      <section aria-labelledby="articles-heading">
        <h2
          id="articles-heading"
          className="text-[20px] font-medium text-ink mb-4"
        >
          Articles and deep dives
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
              <p className="text-[12px] text-accent mt-3">Read the deep dive</p>
            </Link>
          ))}
        </div>
      </section>

      {projects.length > 0 && (
        <section aria-labelledby="projects-heading" className="mt-10">
          <h2
            id="projects-heading"
            className="text-[20px] font-medium text-ink mb-4"
          >
            Projects and case studies
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
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
      )}

      <div className="mt-14 text-center">
        <p className="mb-4 text-[15px] text-ink/90">
          Need a clear, defensible point of view on a complex subject?
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
