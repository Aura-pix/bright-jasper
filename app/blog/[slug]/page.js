import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';

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
    // This is the canonical URL mechanism discussed: if a post is also
    // crossposted to Medium, set `canonical` in that Medium import to point
    // back here, so this site keeps the SEO credit as the original source.
    alternates: {
      canonical: `https://brightjasper.vercel.app/blog/${post.slug}`,
    },
  };
}

function formatDate(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
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
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
