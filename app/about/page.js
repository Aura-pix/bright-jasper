import Image from "next/image";
import Link from "next/link";
import ResumeButton from "@/components/ResumeButton";
import { createPageMetadata } from "@/lib/metadata";

const PROFILE_GROUPS = [
  {
    title: "Writing",
    links: [
      { label: "Hashnode", href: "https://hashnode.com/@brightjasper" },
      { label: "Dev.to", href: "https://dev.to/bright-jasper" },
      { label: "Medium", href: "https://medium.com/@brghtjasper" },
    ],
  },
  {
    title: "Work with me",
    links: [
      {
        label: "Contra",
        href: "https://contra.com/bright_jasper_cj81z7g6",
      },
      {
        label: "Upwork",
        href: "https://www.upwork.com/freelancers/~018d2a2818ff617a2b",
      },
    ],
  },
  {
    title: "Professional profiles",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/bright-jasper-20a8223b3",
      },
      { label: "GitHub", href: "https://github.com/Aura-pix/bright-jasper" },
      { label: "X", href: "https://x.com/brightjasp" },
    ],
  },
];

export const metadata = createPageMetadata({
  title: "About | Bright Jasper",
  description:
    "I'm Bright Jasper — an SEO/GEO/AEO specialist, content writer, and technical writer. I help brands get found by search engines and AI through technical SEO fixes, developer docs, and content built for how AI models surface answers.",
  path: "/about",
  keywords: [
    "SEO GEO AEO specialist",
    "content writer",
    "technical writer",
    "technical SEO consultant",
    "developer documentation writer",
    "web3 content writer",
    "research-backed content writer",
    "Blockchain technical writer",
  ],
});

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-8">About</h1>
      <div className="prose-content">
        <p>
          I&apos;m Bright Jasper — an SEO/GEO/AEO specialist, content writer,
          and technical writer working across web2 and web3.
        </p>

        <p>
          I help brands get found by search engines and AI. That means fixing
          the technical groundwork most sites get wrong, then writing the
          content that earns visibility once it&apos;s fixable: SEO audits and
          fixes, developer docs, protocol explainers, product messaging, and
          everything in between, for technical and non-technical audiences
          alike.
        </p>

        <div className="my-8">
          <Image
            src="/illustrations/researching.svg"
            alt="Illustration of a person reviewing research documents"
            width={180}
            height={150}
          />
        </div>

        <p>
          Find it, then understand it. That&apos;s the job — I own the process
          from implementing fixes that improve discoverability to writing
          content that improves retainability.
        </p>

        <p>
          I work across technical and non-technical audiences, from brands that
          need useful, search-aware content to web2 and web3 teams that need
          complex products explained clearly.
        </p>

        <h2>How I work</h2>
        <p>
          <strong>SEO writing</strong>
        </p>
        <p>
          I audit sites end to end — metadata, canonicals, redirects, structured
          data, and backlinks — then fix what&apos;s broken before I touch a
          word of content. Once the technical layer is solid, the writing is
          built around search intent and how AI models actually surface answers.
        </p>

        <p>
          <strong>Content writing</strong>
        </p>
        <p>
          Blog posts, articles, and explainers across tech, finance, and web3. I
          research the source material first, verify what matters, and compare
          sources when they disagree before writing a word.
        </p>

        <p>
          <strong>Technical writing</strong>
        </p>
        <p>
          I write docs-as-code: content lives in version control, gets reviewed
          like code, and ships the same way. This portfolio is built that way
          too — pages and posts are version-controlled files, not entries in a
          CMS dashboard (you can see the repo{" "}
          <a
            href="https://github.com/Aura-pix/bright-jasper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            here
          </a>
          ). Claims get checked against primary sources before anything ships,
          and what&apos;s still unverified gets confirmed with the team before
          it goes live. I write for both technical and non-technical audiences,
          and I make sure the content is clear for both.
        </p>

        <h2>Background</h2>
        <p>
          I have a software engineering background and I&apos;m studying
          Computer Science, which gives me a practical foundation for
          understanding the products and systems I write about.
        </p>

        <h2>Right now</h2>
        <p>
          Writing and doing SEO work for web2 and web3 clients, building my own
          projects, and writing articles on my blog.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="https://brightjasper.com/contact"
          className="text-[14px] px-5 py-2.5 rounded-full bg-accent text-white hover:opacity-90"
        >
          Get in touch
        </Link>

        <ResumeButton />
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {PROFILE_GROUPS.map((group) => (
          <section key={group.title}>
            <h2 className="text-[14px] font-medium text-ink mb-3">
              {group.title}
            </h2>
            <ul className="space-y-2 text-[13px] text-muted">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
