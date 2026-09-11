import { getAllProjects } from '@/lib/projects';

export const metadata = {
  title: 'Projects — Bright Jasper',
  description: 'Projects built or audited, separate from the writing samples — what I did, how I did it, and what I delivered.',
};

const STATUS_LABELS = {
  'in-progress': 'In progress',
  completed: 'Completed',
  live: 'Live',
  'on-hold': 'On hold',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-4">Projects</h1>

      <p className="text-[15px] text-muted mb-10 max-w-lg">
        Things I've built or audited, separate from the writing samples above. Each entry
        links to a full writeup — what I did, how I did it, and what I delivered.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="border border-ink/10 rounded-lg p-6 hover:border-accent transition-colors"
          >
            <h2 className="text-[18px] font-medium text-ink mb-1">{project.title}</h2>
            <p className="text-[12px] text-muted mb-3">
              {STATUS_LABELS[project.status] || project.status}
              {project.statusNote ? ` — ${project.statusNote}` : ''}
            </p>

            {project.role && (
              <p className="text-[13px] text-muted mb-1">
                <span className="font-medium text-ink/80">Role:</span> {project.role}
              </p>
            )}
            {project.tools && (
              <p className="text-[13px] text-muted mb-4">
                <span className="font-medium text-ink/80">Tools:</span> {project.tools}
              </p>
            )}

            {project.excerpt && (
              <p className="text-[15px] text-ink/90 leading-relaxed mb-4">
                {project.excerpt}
              </p>
            )}

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-accent hover:underline"
              >
                {project.linkLabel} →
              </a>
            ) : (
              <span className="text-[14px] text-muted italic">
                Writeup coming soon
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Hire Me trigger — placeholder link until popover component is built */}
      <div className="mt-14 text-center">
        <p className="text-[15px] text-ink/90 mb-4">
          Working on something that could use documentation, a content audit, or a developer-facing voice?
        </p>
        <a
          href="https://x.com/brightjasp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[14px] px-5 py-2.5 rounded-full bg-accent text-white hover:opacity-90"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
