import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const THREADS_DIR = path.join(process.cwd(), 'content/threads');

/**
 * Threads are lightweight - just a hook line, a link out to X, and a date.
 * No long body content, since the actual thread lives on X. Add a new
 * thread by dropping a new .md file in content/threads/, same pattern
 * as blog posts.
 */
export function getAllThreads() {
  if (!fs.existsSync(THREADS_DIR)) return [];

  const files = fs.readdirSync(THREADS_DIR).filter((f) => f.endsWith('.md'));

  const threads = files.map((filename) => {
    const fullPath = path.join(THREADS_DIR, filename);
    const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
    return {
      slug: filename.replace(/\.md$/, ''),
      hook: data.hook || '',
      url: data.url || '#',
      date: data.date || null,
    };
  });

  return threads.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date) - new Date(a.date);
  });
}