import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Programs",
};

const programs = [
  {
    title: "Preschool & Kindergarten",
    body: "Play-based and guided learning that builds literacy, numeracy, social skills, and a love of school. Our early childhood program balances discovery time with gentle structure.",
  },
  {
    title: "Elementary (Grades 1–6)",
    body: "A strong foundation in reading, writing, mathematics, science, and social studies—enriched by music, art, PE, and values education. Homeroom teachers partner with subject specialists.",
  },
  {
    title: "Junior High (Grades 7–10)",
    body: "Deeper academic challenge with exploratory electives, clubs, and leadership opportunities. Students develop study habits, critical thinking, and teamwork.",
  },
  {
    title: "Senior High (Grades 11–12)",
    body: "Track options such as Academic (STEM, ABM, HUMSS) and Tech-Voc pathways prepare learners for college and careers. Mentoring and college guidance support every student.",
  },
  {
    title: "Student Life & Activities",
    body: "Athletics, performing arts, student government, outreach ministries, and academic competitions help students discover gifts beyond the classroom.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageBanner
        title="Programs"
        subtitle="Academic pathways and campus experiences designed for every stage of growth."
      />

      <section className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <p className="leading-relaxed text-brand-ink/85">
          CSIB offers a continuous K–12 journey (edit levels to match your
          campus). Each program is aligned with national standards and enriched
          by our Christian identity.
        </p>

        <div className="mt-10 space-y-10">
          {programs.map((program) => (
            <article key={program.title}>
              <h2 className="font-display text-2xl font-bold text-brand-ink">
                {program.title}
              </h2>
              <div className="mt-2 h-1 w-12 bg-brand-gold" />
              <p className="mt-4 leading-relaxed text-brand-ink/85">
                {program.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
