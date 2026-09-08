import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-red text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center md:px-6">
        <Link
          href="https://web.facebook.com/csib.official/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-5 py-2.5 text-sm font-bold text-brand-ink transition hover:brightness-105"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
          </svg>
          Visit our Facebook Page
        </Link>

        <p className="text-sm text-white/90">
          All rights reserved 2026
        </p>
        <p className="text-xs text-white/70">
          Powered by{" "}
          <a
            href="https://github.com/kennethesguerra"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-gold underline-offset-2 hover:underline"
          >
            kennethesguerra
          </a>
        </p>
      </div>
    </footer>
  );
}
