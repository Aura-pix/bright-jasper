import Image from "next/image";
import Link from "next/link";
import ResumeButton from "@/components/ResumeButton";

export const metadata = {
  title: "About — Bright Jasper",
  description:
    "Technical writer, researcher, and computer science student writing for web2 and web3.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-8">About</h1>

      <div className="prose-content">
        <p>
          I'm Bright Jasper. I write technical content and documentation, mostly
          for web2 and web3 products — think developer guides, protocol
          explainers, and the occasional deep dive into something I got curious
          about at 1am.
        </p>

        <p>
          I'm also a computer science student, and I build things on the side —
          smart contracts, small tools, whatever I'm messing with that week. I'm
          active in DeFi daily, not as a trader — I just like being in that
          world and paying attention to it. Honestly I'm a bit of a generalist —
          CS, blockchain, writing, whatever pulls my curiosity that week — and
          it shows in the range of what I end up writing about.
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
          The one thing that stays consistent: I check what I write before I
          publish it. If I can't verify something, I say so instead of guessing
          and hoping it's right.
        </p>

        <p>
          I move between three related jobs on the same skill: writing the
          documentation, deciding what content a product actually needs and how
          it should be structured, and — increasingly — being the
          developer-facing voice explaining it. Technical writer, technical
          content strategist, and developer advocate aren't separate identities
          for me; they're the same instinct applied at different scope.
        </p>

        <h2>How I work</h2>
        <p>
          I write docs-as-code — content lives in version control, gets reviewed
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
          , keeping tutorials, how-to guides, reference material, and
          explanation distinct instead of blurring them into one long page. And
          before anything gets published, I verify claims against primary
          sources, compare sources when they disagree, and flag what still needs
          checking instead of asserting it as settled.
        </p>

        <h2>Background</h2>
        <p>
          Software engineering background — I studied Google's Technical Writing
          One and Two courses, and I'm comfortable in HTML, CSS, JavaScript, and
          Markdown. Documentation and CMS tools I use: Confluence, GitBook,
          ReadMe, MadCap Flare, Sanity CMS (used in production on Roomly), Git,
          MS Word, Adobe FrameMaker, and Jira.
        </p>

        <p>Based in UTC+1, open to remote work.</p>

        <h2>Right now</h2>
        <p>
          Studying CS, writing for web2 and web3 clients, and building my own
          projects.
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
