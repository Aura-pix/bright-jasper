import Link from 'next/link';

export default function Nav() {
  return (
    <header className="border-b border-ink/10">
      <nav className="max-w-3xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-y-2">
        <Link href="/" className="text-[15px] font-medium text-ink">
          Bright Jasper
        </Link>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-[13px] sm:text-[14px] text-muted">
          <Link href="/" className="hover:text-accent">Home</Link>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <Link href="/writing-samples" className="hover:text-accent">Writing samples</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
        </div>
      </nav>
    </header>
  );
}
