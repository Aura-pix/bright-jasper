import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About — Bright Jasper',
  description: 'Technical writer, researcher, and computer science student writing for web2 and web3.',
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-8">About</h1>

      <div className="prose-content">
        <p>
          I'm Bright Jasper. I write technical content and documentation, mostly for web2 and
          web3 products — think developer guides, protocol explainers, and the occasional deep
          dive into something I got curious about at 1am.
        </p>

        <p>
          I'm also a computer science student, and I build things on the side — smart
          contracts, small tools, whatever I'm messing with that week. I'm active in DeFi
          daily, not as a trader, just as someone who genuinely likes being in that world and
          paying attention to it. Honestly I'm a bit of a generalist — CS, blockchain, writing,
          whatever pulls my curiosity that week — and it shows in the range of what I end up
          writing about.
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
          The one thing that stays consistent: I check what I write before I publish it. If I
          can't verify something, I say so instead of guessing and hoping it's right.
        </p>

        <h2>Right now</h2>
        <p>
          Studying CS, writing for web2 and web3 clients, building my own projects, and
          learning persuasive writing on the side.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/blog"
          className="text-[14px] px-5 py-2.5 rounded-full bg-accent text-white hover:opacity-90"
        >
          See what I've written
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted">
        <a href="https://x.com/brightjasp" target="_blank" rel="noopener noreferrer" className="hover:text-accent">X</a>
        <a href="https://www.linkedin.com/in/bright-olorunfunmilola-20a8223b3" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
        <a href="https://medium.com/@brghtjasper" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Medium</a>
        <a href="https://GitHub.com/Aura-pix" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
      </div>
    </div>
  );
}
