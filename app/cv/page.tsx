import Image from "next/image";
import PrintCvButton from "@/components/print-cv-button";
import { educationTimeline } from "@/data/portfolio";

export const metadata = {
  title: "Bibin Rajan | ATS CV",
  description: "ATS-friendly printable CV for Bibin Rajan"
};

export default function CvPage() {
  return (
    <main className="cv-sheet cv-font mx-auto my-5 w-full max-w-[794px] bg-white text-black page-break-avoid">
      <div className="no-print flex justify-end px-6 pt-5 sm:px-8">
        <PrintCvButton />
      </div>

      <header className="mt-3 bg-black px-6 py-5 text-white sm:px-8">
        <h1 className="cv-heading text-3xl">Bibin Rajan</h1>
        <p className="mt-1 text-sm">Data Analyst (Full-Stack Analytics) · Relocating to Munich</p>
      </header>

      <section className="grid gap-0 md:grid-cols-[0.36fr_0.64fr]">
        <aside className="border-r border-black/15 px-6 py-6 sm:px-8">
          <div className="mx-auto mb-5 w-fit">
            <Image
              src="/assets/profile-bibin.jpg"
              alt="Bibin Rajan profile photo"
              width={120}
              height={120}
              className="h-28 w-28 rounded-full border-2 border-black object-cover"
            />
          </div>

          <h2 className="cv-heading text-sm uppercase tracking-[0.12em]">Contact</h2>
          <p className="mt-2 text-xs leading-relaxed">bibinrajanin@gmail.com</p>
          <p className="text-xs leading-relaxed">+91 9539202640</p>
          <p className="text-xs leading-relaxed">linkedin.com/in/bibin-rajan-8ba997158</p>

          <h2 className="cv-heading mt-6 text-sm uppercase tracking-[0.12em]">Skills</h2>
          <p className="mt-2 text-xs text-justify leading-relaxed">
            SQL optimization, data modeling, Power BI dashboarding, React dashboard development, KPI framework design,
            API integrations, ETL process automation, data storytelling, stakeholder communication, financial analytics,
            mortgage analytics, insurance analytics.
          </p>
        </aside>

        <div className="px-6 py-6 sm:px-8">
          <section>
            <h2 className="cv-heading text-sm uppercase tracking-[0.12em]">Summary</h2>
            <p className="mt-2 text-sm text-justify leading-relaxed">
              Data Analyst with 3+ years of experience in UK financial services (mortgages and insurance), delivering end-to-end analytics systems across SQL, BI, and frontend dashboards.
              Proven record of improving SQL pipeline performance by 40%, automating reporting to save 12+ hours per week, and translating complex data into executive-ready business decisions.
            </p>
          </section>

          <section className="mt-5">
            <h2 className="cv-heading text-sm uppercase tracking-[0.12em]">Experience</h2>
            <article className="mt-2 border-l-2 border-black pl-4">
              <h3 className="cv-heading text-sm">Jupiter Fincorp — Data Analyst (Full-Stack Analytics)</h3>
              <p className="text-xs">2022 – Present</p>
              <ul className="mt-2 list-disc pl-4 text-sm text-justify leading-relaxed">
                <li>Built and scaled a Power BI reporting ecosystem for mortgage and insurance operations with standardized KPI definitions.</li>
                <li>Developed React-based internal dashboards that improved leadership visibility into conversions, claims, and pipeline quality.</li>
                <li>Optimized critical SQL queries and data workflows, reducing end-to-end processing time by 40%.</li>
                <li>Automated recurring reporting and reconciliation tasks, saving 12+ hours of manual effort per week.</li>
                <li>Partnered with business stakeholders to convert analytical findings into pricing, retention, and operational decisions.</li>
              </ul>
            </article>
          </section>

          <section className="mt-5">
            <h2 className="cv-heading text-sm uppercase tracking-[0.12em]">Education and Training</h2>
            <div className="mt-2 space-y-3">
              {educationTimeline.map((item) => (
                <article key={item.qualification} className="page-break-avoid border-l-2 border-black pl-4">
                  <h3 className="cv-heading text-sm">{item.qualification}</h3>
                  <p className="text-sm">{item.institution}</p>
                  <p className="text-xs">{item.period}</p>
                  <p className="text-xs">{item.location}</p>
                  <p className="text-xs text-justify">Field(s) of study: {item.details}</p>
                  <p className="text-xs">Level in EQF: {item.eqf}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
