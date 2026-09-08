import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About CSIB"
        subtitle="Get to know our school community, values, and the people who make learning come alive."
      />

      <section className="mx-auto max-w-3xl px-4 py-10 sm:py-14 md:py-16">
        <h2 className="font-display text-2xl font-bold text-brand-ink md:text-3xl">
          Who We Are
        </h2>
        <div className="mt-3 h-1 w-14 bg-brand-gold" />
        {about?.map((p, index) => (
          <p
            key={index}
            className="mt-6 text-base leading-relaxed text-brand-ink/85"
          >
            {p}
          </p>
        ))}

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-ink md:text-3xl">
          Core Values
        </h2>
        <div className="mt-3 h-1 w-14 bg-brand-gold" />
        <ul className="mt-6 space-y-4 text-brand-ink/85">
          <li>
            <strong className="text-brand-red">Integrity</strong> — We do what
            is right, even when it is difficult.
          </li>
          <li>
            <strong className="text-brand-red">Excellence</strong> — We give
            our best in studies, arts, sports, and service.
          </li>
          <li>
            <strong className="text-brand-red">Compassion</strong> — We care for
            one another and for our wider community.
          </li>
          <li>
            <strong className="text-brand-red">Faith</strong> — We grow in
            relationship with God and live out our beliefs.
          </li>
        </ul>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-ink md:text-3xl">
          Leadership
        </h2>
        <div className="mt-3 h-1 w-14 bg-brand-gold" />
        <p className="mt-6 leading-relaxed text-brand-ink/85">
          CSIB is guided by a school board and administrative team that work
          closely with faculty and parents. (Replace this section with your
          principal&apos;s message, staff directory, or organizational chart.)
        </p>
      </section>
    </>
  );
}
