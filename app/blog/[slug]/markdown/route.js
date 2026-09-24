import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/posts';

export async function GET(_req, { params }) {
  const slug = params.slug;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return new Response('Not found', { status: 404 });
  }

  const markdown = `---\ntitle: "${post.title}"\ndate: "${post.date}"\ntag: "${post.tag}"\nexcerpt: "${post.excerpt}"\nreadTime: "${post.readTime}"\n---\n\n${post.content}`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}