import { getAllBlogPosts } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";
import NotFoundClient from "./not-found-client";

export default function NotFound() {
  const posts = getAllBlogPosts();
  const projects = getAllProjects();
  
  const availableRoutes = [
    { url: "/", title: "Home", type: "Page", slug: "home" },
    { url: "/about", title: "About", type: "Page", slug: "about" },
    { url: "/blog", title: "Blog", type: "Page", slug: "blog" },
    { url: "/projects", title: "Projects", type: "Page", slug: "projects" },
    { url: "/writing-samples", title: "Writing Samples", type: "Page", slug: "writing samples" },
    ...posts.map(p => ({
      url: `/blog/${p.slug}`,
      title: p.title,
      type: "Blog Post",
      slug: p.slug
    })),
    ...projects.map(p => ({
      url: `/projects/${p.slug}`,
      title: p.title,
      type: "Project",
      slug: p.slug
    }))
  ];

  return <NotFoundClient availableRoutes={availableRoutes} />;
}
