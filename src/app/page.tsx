import Carousel from "@/components/Carousel";
import { campusSlides, heroSlides, mission, vision } from "@/lib/content";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Carousel slides={heroSlides} />

      <section className="relative px-4 py-12 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:gap-16">
          <article className="animate-fade-up">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
              Our Vision
            </p>
            <h2 className="font-display text-2xl font-bold text-brand-ink sm:text-3xl md:text-4xl">
              Vision
            </h2>
            <div className="mt-3 h-1 w-14 bg-brand-gold" />
            <p className="mt-5 text-base leading-relaxed text-brand-ink/85 sm:mt-6 md:text-lg">
              {vision}
            </p>
          </article>

          <article className="animate-fade-up-delay">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
              Our Mission
            </p>
            <h2 className="font-display text-2xl font-bold text-brand-ink sm:text-3xl md:text-4xl">
              Mission
            </h2>
            <div className="mt-3 h-1 w-14 bg-brand-gold" />
            <p className="mt-5 text-base leading-relaxed text-brand-ink/85 sm:mt-6 md:text-lg">
              {mission}
            </p>
          </article>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl justify-center sm:mt-12">
          <Link
            href="/about"
            className="rounded-md bg-brand-gold px-6 py-3 text-sm font-bold text-brand-ink transition hover:brightness-105 sm:px-7"
          >
            Learn More About CSIB
          </Link>
        </div>
      </section>

      <section className="pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto mb-6 max-w-5xl px-4 text-center sm:mb-8">
          <h2 className="font-display text-2xl font-bold text-brand-ink sm:text-3xl md:text-4xl">
            Life at CSIB
          </h2>
          <p className="mt-3 text-sm text-brand-ink/75 sm:text-base">
            Moments from classrooms, campus, and community.
          </p>
        </div>
        <Carousel
          slides={campusSlides}
          intervalMs={4500}
          aspectClassName="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]"
        />
      </section>
    </>
  );
}
