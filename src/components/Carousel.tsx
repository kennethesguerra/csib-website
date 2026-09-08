"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type CarouselSlide = {
  src: string;
  alt: string;
  caption?: string;
};

type CarouselProps = {
  slides: CarouselSlide[];
  intervalMs?: number;
  className?: string;
  aspectClassName?: string;
};

export default function Carousel({
  slides,
  intervalMs = 5000,
  className = "",
  aspectClassName = "aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/8]",
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [count, intervalMs, index]);

  const goTo = (i: number) => setIndex(((i % count) + count) % count);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  if (!count) return null;

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`relative w-full overflow-hidden bg-brand-red-dark ${aspectClassName}`}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src + i}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            {slide.caption && i === index && (
              <p className="absolute bottom-4 left-4 right-4 font-display text-lg font-semibold leading-snug text-white drop-shadow sm:bottom-6 sm:left-6 sm:right-6 sm:text-2xl md:text-3xl">
                {slide.caption}
              </p>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/35 p-2 text-white backdrop-blur-sm transition hover:bg-brand-red md:left-5"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/35 p-2 text-white backdrop-blur-sm transition hover:bg-brand-red md:right-5"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 bg-brand-red px-4 py-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            data-active={i === index}
            onClick={() => goTo(i)}
            className="carousel-dot h-2.5 w-2.5 rounded-full bg-white/40 hover:bg-white/70"
          />
        ))}
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
