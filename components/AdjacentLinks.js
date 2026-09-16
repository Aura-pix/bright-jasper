import Link from "next/link";

export default function AdjacentLinks({ previous, next, type = "article" }) {
  const label = type === "project" ? "project" : "article";

  if (!previous && !next) return null;

  return (
    <nav
      aria-label={`Adjacent ${label}s`}
      className="mt-14 grid grid-cols-2 gap-4 border-t border-ink/10 pt-6"
    >
      <div>
        {previous && (
          <Link
            href={`/${type === "project" ? "projects" : "blog"}/${previous.slug}`}
            className="group block"
          >
            <span className="block text-[12px] text-muted mb-1">
              Previous {label}
            </span>
            <span className="text-[14px] text-ink group-hover:text-accent">
              {previous.title}
            </span>
          </Link>
        )}
      </div>

      <div className="text-right">
        {next && (
          <Link
            href={`/${type === "project" ? "projects" : "blog"}/${next.slug}`}
            className="group block"
          >
            <span className="block text-[12px] text-muted mb-1">
              Next {label}
            </span>
            <span className="text-[14px] text-ink group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
