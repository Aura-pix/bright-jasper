import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  getAdjacentProjects,
} from "@/lib/projects";
import ResponsiveTable from "@/components/ResponsiveTable";
import AdjacentLinks from "@/components/AdjacentLinks";
import { notFound } from "next/navigation";

// Pre-builds a static page for every .mdx file found in content/projects at build time.
// Add a new file there -> a new slug appears here automatically, no code change needed.
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Bright Jasper`,
    description: project.excerpt,
    alternates: {
      canonical: `https://brightjasper.com/projects/${project.slug}`,
    },
  };
}

const STATUS_LABELS = {
  "in-progress": "In progress",
  completed: "Completed",
  live: "Live",
  "on-hold": "On hold",
};

function formatDate(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const adjacentProjects = getAdjacentProjects(params.slug);

  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-[26px] sm:text-[30px] font-medium text-ink mb-1 leading-tight">
        {project.title}
      </h1>
      <p className="text-[12px] text-muted mb-6">
        {STATUS_LABELS[project.status] || project.status}
        {project.statusNote ? ` — ${project.statusNote}` : ""}
        {project.date ? ` · ${formatDate(project.date)}` : ""}
      </p>

      <div className="flex flex-wrap gap-x-8 gap-y-1 text-[13px] text-muted mb-8">
        {project.role && (
          <p>
            <span className="font-medium text-ink/80">Role:</span>{" "}
            {project.role}
          </p>
        )}
        {project.tools && (
          <p>
            <span className="font-medium text-ink/80">Tools:</span>{" "}
            {project.tools}
          </p>
        )}
      </div>

      <div className="prose-content">
        <MDXRemote
          source={project.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          components={{ table: ResponsiveTable }}
        />
      </div>

      <AdjacentLinks
        previous={adjacentProjects.previous}
        next={adjacentProjects.next}
        type="project"
      />
    </article>
  );
}
