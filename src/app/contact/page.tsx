import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We would love to hear from you. Reach out for admissions, tours, or general inquiries."
      />

      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-10 sm:gap-12 sm:py-14 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-brand-ink">
            School Information
          </h2>
          <div className="mt-3 h-1 w-14 bg-brand-gold" />
          <dl className="mt-6 space-y-5 text-brand-ink/85">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Address
              </dt>
              <dd className="mt-1">
                123 Learning Avenue, Sample City, Province 0000
                <br />
                (Replace with your campus address)
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Phone
              </dt>
              <dd className="mt-1">(000) 123-4567</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:info@csib.edu.ph"
                  className="font-semibold text-brand-red underline-offset-2 hover:underline"
                >
                  info@csib.edu.ph
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Office Hours
              </dt>
              <dd className="mt-1">
                Monday–Friday, 8:00 AM – 4:00 PM
                <br />
                Closed on weekends and holidays
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-brand-ink">
            Send a Message
          </h2>
          <div className="mt-3 h-1 w-14 bg-brand-gold" />
          <form className="mt-6 space-y-4" action="#" method="post">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-brand-ink">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-md border border-brand-red/20 bg-white px-3 py-2.5 outline-none ring-brand-gold focus:ring-2"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-brand-ink">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-md border border-brand-red/20 bg-white px-3 py-2.5 outline-none ring-brand-gold focus:ring-2"
                placeholder="you@email.com"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-brand-ink">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-md border border-brand-red/20 bg-white px-3 py-2.5 outline-none ring-brand-gold focus:ring-2"
                placeholder="How can we help?"
              />
            </label>
            <button
              type="submit"
              className="rounded-md bg-brand-gold px-6 py-2.5 text-sm font-bold text-brand-ink transition hover:brightness-105"
            >
              Submit Inquiry
            </button>
            <p className="text-xs text-brand-ink/60">
              This form is a front-end mockup. Connect it to your email or CMS
              when you are ready.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
