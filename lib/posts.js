import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

/**
 * Reads every .mdx file in content/blog and returns parsed frontmatter + slug.
 * The filename (without extension) becomes the slug automatically -
 * that's the whole "how do new pages get added" mechanism: drop a file in,
 * it shows up here.
 *
 * Writing Samples is NOT a separate content folder - it's a curated view of
 * these same posts. Add `sample: true` and `sampleCategory: "..."` to a
 * post's frontmatter and it'll surface on /writing-samples too, linking to
 * the exact same /blog/[slug] page. One file, no duplication.
 */
function readAllBlogPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const fullPath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title || slug,
      date: data.date || null,
      tag: data.tag || null,
      excerpt: data.excerpt || '',
      readTime: data.readTime || null,
      canonical: data.canonical || null,
      sample: data.sample || false,
      sampleCategory: data.sampleCategory || null, // e.g. "Documentation", "Research & Explainers", "Guides"
    };
  });

  // newest first
  return posts.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date) - new Date(a.date);
  });
}

export function getAllBlogPosts() {
  return readAllBlogPosts();
}

export function getAllSamples() {
  return readAllBlogPosts().filter((post) => post.sample);
}

export function getBlogPostBySlug(slug) {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || slug,
    date: data.date || null,
    tag: data.tag || null,
    excerpt: data.excerpt || '',
    readTime: data.readTime || null,
    canonical: data.canonical || null,
  };
}

export function getAllBlogSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}
