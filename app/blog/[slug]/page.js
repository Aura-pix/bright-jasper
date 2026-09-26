import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  getAdjacentBlogPosts,
} from "@/lib/posts";
import ResponsiveTable from "@/components/ResponsiveTable";
import AdjacentLinks from "@/components/AdjacentLinks";
import ImageLightbox from "@/components/ImageLightbox";
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

  const rawCover = post.coverImage || "/illustrations/book-writer.svg";
  const coverImage = rawCover.startsWith("http") ? rawCover : `https://brightjasper.com${rawCover}`;
  metadata.openGraph.images = [
    {
      url: coverImage,
      width: 1280,
      height: 670,
      alt: post.title,
    },
  ];
  metadata.twitter.images = [coverImage];

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

  const rawCover = post.coverImage || "/illustrations/book-writer.svg";
  const coverImage = rawCover.startsWith("http") ? rawCover : `https://brightjasper.com${rawCover}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `https://brightjasper.com/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt || undefined,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    author: {
      "@type": "Person",
      "@id": "https://brightjasper.com/#person",
      name: post.author || "Bright Jasper",
      url: "https://brightjasper.com/about",
      sameAs: [
        "https://x.com/brightjasp",
        "https://www.linkedin.com/in/bright-olorunfunmilola-20a8223b3",
        "https://medium.com/@brghtjasper",
        "https://github.com/Aura-pix/bright-jasper",
      ],
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://brightjasper.com/#organization",
      name: "Bright Jasper",
      url: "https://brightjasper.com",
      logo: {
        "@type": "ImageObject",
        url: "https://brightjasper.com/favicon-512x512.png",
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://brightjasper.com/blog/${post.slug}`,
    },
    image: coverImage,
    keywords: post.keywords?.length
      ? post.keywords
      : [
          post.tag || "technical writing",
          "developer documentation",
          "web3",
          "technical explainers",
        ].filter(Boolean),
    articleSection: post.tag || "Technical writing",
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
    img: ({ src, alt, ...props }) => (
      <ImageLightbox src={src} alt={alt || ""} {...props} />
    ),
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
        <h1 className="text-[26px] sm:text-[30px] font-medium text-ink mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-2 text-[12px] text-muted mb-5">
          {post.tag && <span>{post.tag}</span>}
          {post.tag && post.date && <span aria-hidden="true">·</span>}
          {post.date && <span>{formatDate(post.date)}</span>}
          {post.readTime && <span aria-hidden="true">·</span>}
          {post.readTime && <span>{post.readTime}</span>}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Image
              src="/author-image.jpeg"
              alt="Bright Jasper"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full border border-ink/10 object-cover"
            />
            <div>
              <Link
                href="/about"
                className="text-[13px] font-medium text-ink hover:text-accent"
              >
                {post.author || "Bright Jasper"}
              </Link>
              <p className="text-[12px] text-muted">Author</p>
            </div>
          </div>
          <ShareButton title={post.title} />
        </div>

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
