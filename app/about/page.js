import Image from "next/image";
import Link from "next/link";
import ResumeButton from "@/components/ResumeButton";

export const metadata = {
  title: "About — Bright Jasper",
  description:
    "Technical writer, content writer, SEO writer, and product copywriter helping web2 and web3 teams explain complex products clearly.",
  alternates: {
    canonical: "https://brightjasper.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-8">About</h1>
      <div className="prose-content">
        <p>
          I&apos;m Bright Jasper — a technical writer, content writer, SEO
          writer, and product copywriter working across web2 and web3.
        </p>

        <p>
          I write for teams building complex products and need their value
          explained clearly: developer docs, protocol explainers, SEO content,
          product messaging, and everything in between. I work across technical
          and non-technical audiences, turning complexity into language people
          can understand and use.
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
          I&apos;m comfortable in both web2 and web3 environments, from
          developer tooling and infrastructure to wallets, protocols, and
          product narratives. Before I write, I research the source material,
          verify what matters, and make sure the final copy is accurate,
          readable, and useful.
        </p>

        <p>
          The common thread across my work is simple: I help people understand
          what something is, how it works, and why it matters. Whether I&apos;m
          writing documentation, content, SEO copy, or product messaging, the
          goal is the same — clear communication built on real understanding.
        </p>

        <h2>How I work</h2>
        <p>
          I write docs-as-code: content lives in version control, gets reviewed
          like code, and ships the same way. This portfolio is built that way
          too: pages and posts are version-controlled files, not entries in a
          CMS dashboard (you can see the repo{" "}
          <a
            href="https://github.com/Aura-pix/bright-jasper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            here
          </a>
          ). I structure documentation using the{" "}
          <a
            href="https://diataxis.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Diataxis framework
          </a>
          — keeping tutorials, how-to guides, reference material, and
          explanations separate, not blurred into one long page. Before anything
          ships, I verify claims against primary sources, compare sources when
          they disagree, and flag what still needs checking rather than
          asserting it as settled.
        </p>

        <h2>Background</h2>
        <p>
          I have a software engineering background and I&apos;m studying
          Computer Science, which gives me a practical foundation for
          understanding the products and systems I write about. I&apos;m
          comfortable in HTML, CSS, JavaScript, and Markdown, with workflows
          built around Git, GitBook, ReadMe, and documentation systems.
        </p>

        <p>Based in UTC+1, open to remote work.</p>

        <h2>Right now</h2>
        <p>
          Studying Computer Science, writing for web2 and web3 clients, and
          building my own projects.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/blog"
          className="text-[14px] px-5 py-2.5 rounded-full bg-accent text-white hover:opacity-90"
        >
          See what I've written
        </Link>

        <ResumeButton />
      </div>

      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted">
        <a
          href="https://x.com/brightjasp"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          X
        </a>
        <a
          href="https://www.linkedin.com/in/bright-olorunfunmilola-20a8223b3"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href="https://medium.com/@brghtjasper"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          Medium
        </a>
        <a
          href="https://github.com/Aura-pix/bright-jasper"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
