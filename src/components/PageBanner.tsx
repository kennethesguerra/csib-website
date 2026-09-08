import { Mail } from "lucide-react";
import Link from "next/link";

type PageBannerProps = {
  title: string;
  subtitle?: string;
};

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-brand-red px-4 py-10 text-white sm:py-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #f5c80c55, transparent 45%), radial-gradient(circle at 80% 70%, #ffffff22, transparent 40%)",
        }}
      />
      <div className="site-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="animate-fade-up font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="animate-fade-up-delay mx-auto mt-3 max-w-2xl text-sm text-white/90 sm:mt-4 sm:text-base md:text-lg">
            {subtitle}
          </p>
        )}
        <div className="animate-fade-up-delay-2 mt-6 sm:mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-5 py-2.5 text-sm font-bold text-brand-ink transition hover:brightness-105 sm:px-6"
          >
            <Mail className="size-4" aria-hidden />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
