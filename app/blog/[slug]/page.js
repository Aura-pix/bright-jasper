import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  getAdjacentBlogPosts,
} from "@/lib/posts";
import ResponsiveTable from "@/components/ResponsiveTable";
import AdjacentLinks from "@/components/AdjacentLinks";
import ShareButton from "@/components/ShareButton";
import { getLinkProps } from "@/lib/linkProps";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

// Pre-builds a static page for every .mdx file found in content/blog at build time.
// Add a new file there -> a new slug appears here automatically, no code change needed.
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  const canonicalUrl =
    post.canonical && !post.canonical.includes("URL_PLACEHOLDER")
      ? post.canonical
      : `https://brightjasper.com/blog/${post.slug}`;
  const metadata = createPageMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    url: canonicalUrl,
    type: "article",
  });

  if (post.slug === "dangote-refinery-stock-10000") {
    metadata.openGraph.images = [
      {
        url: "https://brightjasper.com/refinery.png",
        width: 1280,
        height: 853,
        alt: "Dangote refinery at sunset with the Nigerian flag",
      },
    ];
    metadata.twitter.images = ["https://brightjasper.com/refinery.png"];
  }

  return metadata;
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
  const adjacentPosts = getAdjacentBlogPosts(params.slug, post.track);

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
    image:
      post.slug === "dangote-refinery-stock-10000"
        ? "https://brightjasper.com/refinery.png"
        : "https://brightjasper.com/illustrations/book-writer.svg",
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

  const mdxComponents = {
    table: ResponsiveTable,
    a: ({ href, children, ...props }) => (
      <a {...props} {...getLinkProps(href)}>
        {children}
      </a>
    ),
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

        <ShareButton title={post.title} />

        <div className="prose-content">
          <MDXRemote
            source={post.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            components={mdxComponents}
          />
        </div>

        <AdjacentLinks
          previous={adjacentPosts.previous}
          next={adjacentPosts.next}
        />
      </article>
    </>
  );
}
