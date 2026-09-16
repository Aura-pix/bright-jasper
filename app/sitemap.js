import { getAllBlogPosts } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";

const SITE_URL = "https://brightjasper.vercel.app";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/projects",
    "/threads",
    "/writing-samples",
    "/writing-samples/technical",
    "/writing-samples/persuasive",
    "/rss.xml",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      route === ""
        ? 1
        : route === "/blog"
          ? 0.95
          : route === "/writing-samples"
            ? 0.9
            : route === "/writing-samples/technical"
              ? 0.88
              : route === "/writing-samples/persuasive"
                ? 0.88
                : route === "/about"
                  ? 0.7
                  : 0.6,
  }));

  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: project.date ? new Date(project.date) : new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
