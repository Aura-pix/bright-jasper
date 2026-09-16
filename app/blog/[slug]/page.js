import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/posts";
import ResponsiveTable from "@/components/ResponsiveTable";
import { notFound } from "next/navigation";

// Pre-builds a static page for every .mdx file found in content/blog at build time.
// Add a new file there -> a new slug appears here automatically, no code change needed.
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — Bright Jasper`,
    description: post.excerpt,
    alternates: {
      canonical:
        post.canonical && !post.canonical.includes("URL_PLACEHOLDER")
          ? post.canonical
          : `https://brightjasper.com/blog/${post.slug}`,
    },
  };
}

function formatDate(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.excerpt || undefined,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    author: {
      "@type": "Person",
      name: "Bright Jasper",
      url: "https://brightjasper.com/about",
    },
    publisher: {
      "@type": "Person",
      name: "Bright Jasper",
      url: "https://brightjasper.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://brightjasper.com/blog/${post.slug}`,
    },
    image: "https://brightjasper.com/illustrations/book-writer.svg",
    keywords: post.keywords?.length
      ? post.keywords
      : [
          post.tag || "technical writing",
          "developer documentation",
          "web3",
          "technical explainers",
        ].filter(Boolean),
    articleSection: post.tag || "Technical writing",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://brightjasper.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://brightjasper.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://brightjasper.com/blog/${post.slug}`,
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
        <div className="flex items-center gap-2 text-[12px] text-muted mb-3">
          {post.tag && <span>{post.tag}</span>}
          {post.tag && post.date && <span aria-hidden="true">·</span>}
          {post.date && <span>{formatDate(post.date)}</span>}
          {post.readTime && <span aria-hidden="true">·</span>}
          {post.readTime && <span>{post.readTime}</span>}
        </div>

        <h1 className="text-[26px] sm:text-[30px] font-medium text-ink mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="prose-content">
          <MDXRemote
            source={post.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            components={{ table: ResponsiveTable }}
          />
        </div>
      </article>
    </>
  );
}
