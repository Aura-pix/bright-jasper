import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import HireMeButton from "@/components/HireMeButton";

export const metadata = {
  title: "Projects — Bright Jasper",
  description:
    "Selected client work and product-side deliverables from Bright Jasper, with proof of work as projects are completed.",
  alternates: {
    canonical: "https://brightjasper.com/projects",
  },
};

const STATUS_LABELS = {
  "in-progress": "In progress",
  completed: "Completed",
  live: "Live",
  "on-hold": "On hold",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-4">Projects</h1>

      <p className="text-[15px] text-muted mb-10 max-w-lg">
        This is where I keep the strongest proof of work: client work,
        product-side documentation, and implementation support that I can point
        to. I&apos;m still early in the journey, so this section stays
        intentionally light until fresh case studies are ready.
      </p>

      {projects.length === 0 ? (
        <div className="rounded-lg border border-ink/10 p-8 text-center">
          <p className="text-[15px] text-ink/90 mb-2">
            No client work is on display yet.
          </p>
          <p className="text-[14px] text-muted max-w-md mx-auto">
            This section is intentionally empty while I build stronger case
            studies and client deliverables that show the actual work behind the
            writing.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block border border-ink/10 rounded-lg p-6 hover:border-accent transition-colors"
            >
              <h2 className="text-[18px] font-medium text-ink mb-1">
                {project.title}
              </h2>
              <p className="text-[12px] text-muted mb-3">
                {STATUS_LABELS[project.status] || project.status}
                {project.statusNote ? ` — ${project.statusNote}` : ""}
              </p>

              {project.role && (
                <p className="text-[13px] text-muted mb-1">
                  <span className="font-medium text-ink/80">Role:</span>{" "}
                  {project.role}
                </p>
              )}
              {project.tools && (
                <p className="text-[13px] text-muted mb-4">
                  <span className="font-medium text-ink/80">Tools:</span>{" "}
                  {project.tools}
                </p>
              )}

              {project.excerpt && (
                <p className="text-[15px] text-ink/90 leading-relaxed">
                  {project.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}

      {/* Hire Me trigger */}
      <div className="mt-14 text-center">
        <p className="text-[15px] text-ink/90 mb-4">
          Need product documentation, writing support, or clear communication
          for a real product or brand? Let&apos;s talk.
        </p>
        <HireMeButton />
      </div>
    </div>
  );
}
