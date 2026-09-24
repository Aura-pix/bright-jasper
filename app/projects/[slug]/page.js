import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  getAdjacentProjects,
} from "@/lib/projects";
import ResponsiveTable from "@/components/ResponsiveTable";
import AdjacentLinks from "@/components/AdjacentLinks";
import { getLinkProps } from "@/lib/linkProps";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

const SITE_URL = "https://brightjasper.com";

// Pre-builds a static page for every .mdx file found in content/projects at build time.
// Add a new file there -> a new slug appears here automatically, no code change needed.
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return createPageMetadata({
    title: `${project.title} — Bright Jasper`,
    description: project.excerpt,
    keywords: project.keywords,
    path: `/projects/${project.slug}`,
    type: "article",
  });
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${SITE_URL}/projects/${project.slug}#article`,
    headline: project.title,
    description: project.excerpt || undefined,
    datePublished: project.date || undefined,
    dateModified: project.date || undefined,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Bright Jasper",
      url: `${SITE_URL}/about`,
      sameAs: [
        "https://x.com/brightjasp",
        "https://www.linkedin.com/in/bright-olorunfunmilola-20a8223b3",
        "https://medium.com/@brghtjasper",
        "https://github.com/Aura-pix/bright-jasper",
      ],
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Bright Jasper",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon-512x512.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/projects/${project.slug}`,
    },
    image: `${SITE_URL}/refinery.png`,
    keywords: project.keywords?.length
      ? project.keywords
      : ["case study", "technical writing", "SEO", "GEO"].filter(Boolean),
    articleSection: "Case Study",
    inLanguage: "en",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${SITE_URL}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${SITE_URL}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
          components={{
            table: ResponsiveTable,
            a: ({ href, children, ...props }) => (
              <a {...props} {...getLinkProps(href)}>
                {children}
              </a>
            ),
          }}
        />
      </div>

      <AdjacentLinks
        previous={adjacentProjects.previous}
        next={adjacentProjects.next}
        type="project"
      />
    </article>
    </>
  );
}
