import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "History",
};

const timeline = [
  {
    year: "1998",
    title: "Founding",
    body: "CSIB opened its doors with a small preschool class and a dream to offer quality Christian education to local families. (Update with your real founding year and story.)",
  },
  {
    year: "2005",
    title: "Elementary Expansion",
    body: "Growing enrollment led to a full elementary program and the first permanent campus building.",
  },
  {
    year: "2012",
    title: "Junior High Begins",
    body: "The school expanded into secondary education, adding laboratories, a library wing, and varsity athletics.",
  },
  {
    year: "2018",
    title: "Senior High Launch",
    body: "Senior High tracks were introduced so learners could complete their basic education journey on campus.",
  },
  {
    year: "2024",
    title: "Campus Renewal",
    body: "Facilities upgrades and digital learning tools strengthened classroom experiences for every grade level.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageBanner
        title="Our History"
        subtitle="Decades of faith, growth, and service in education."
      />

      <section className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <p className="leading-relaxed text-brand-ink/85">
          From humble beginnings to a thriving learning community, CSIB&apos;s
          story is written by teachers, parents, alumni, and students who
          believed in something greater. Replace the milestones below with your
          school&apos;s actual timeline.
        </p>

        <ol className="mt-12 space-y-10 border-l-2 border-brand-red/30 pl-6 md:pl-8">
          {timeline.map((item) => (
            <li key={item.year} className="relative">
              <span className="absolute -left-[1.9rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-brand-gold bg-brand-red md:-left-[2.15rem]" />
              <p className="text-sm font-bold uppercase tracking-wider text-brand-red">
                {item.year}
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold text-brand-ink">
                {item.title}
              </h2>
              <p className="mt-3 leading-relaxed text-brand-ink/85">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
