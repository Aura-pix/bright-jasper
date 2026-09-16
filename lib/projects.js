import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

/**
 * Reads every .mdx file in content/projects and returns parsed frontmatter + slug.
 * Same mechanism as lib/posts.js: drop a file in, it shows up here. No JS to edit.
 *
 * status: "in-progress" | "completed" | "live" | "on-hold"
 * statusNote: optional extra detail shown alongside status (e.g. "Pending founder feedback")
 */
function readAllProjects() {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const projects = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fullPath = path.join(PROJECTS_DIR, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title || slug,
      role: data.role || "",
      tools: data.tools || "",
      status: data.status || "in-progress",
      statusNote: data.statusNote || null,
      date: data.date || null,
      excerpt: data.excerpt || "",
      link: data.link || null,
      linkLabel: data.linkLabel || "Read the full writeup",
    };
  });

  // newest first
  return projects.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date) - new Date(a.date);
  });
}

export function getAllProjects() {
  return readAllProjects();
}

export function getAdjacentProjects(slug) {
  const projects = readAllProjects();
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: projects[currentIndex + 1] || null,
    next: projects[currentIndex - 1] || null,
  };
}

export function getProjectBySlug(slug) {
  const fullPath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || slug,
    role: data.role || "",
    tools: data.tools || "",
    status: data.status || "in-progress",
    statusNote: data.statusNote || null,
    date: data.date || null,
    excerpt: data.excerpt || "",
    link: data.link || null,
    linkLabel: data.linkLabel || "Read the full writeup",
  };
}

export function getAllProjectSlugs() {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
