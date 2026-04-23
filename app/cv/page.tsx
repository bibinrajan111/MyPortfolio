import Image from "next/image";
import PrintCvButton from "@/components/print-cv-button";
import { educationTimeline } from "@/data/portfolio";

export const metadata = {
  title: "Bibin Rajan | ATS CV",
  description: "ATS-friendly printable CV for Bibin Rajan"
};

export default function CvPage() {
  return (
    <main className="cv-sheet mx-auto my-5 w-full max-w-[794px] bg-white px-6 py-7 text-black sm:my-8 sm:px-10 sm:py-10 page-break-avoid">
      <div className="no-print mb-6 flex justify-end">
        <PrintCvButton />
      </div>

      <header className="border-b-2 border-black pb-4">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/profile-bibin.jpg"
            alt="Bibin Rajan profile photo"
            width={96}
            height={96}
            className="h-24 w-24 rounded-full border-2 border-black object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Bibin Rajan</h1>
            <p className="text-sm font-medium">Data Analyst (Full-Stack Analytics) · Relocating to Munich</p>
            <p className="mt-1 text-xs sm:text-sm">Email: bibinrajanin@gmail.com | Phone: +91 9539202640 | LinkedIn: linkedin.com/in/bibin-rajan-8ba997158</p>
          </div>
        </div>
      </header>

      <section className="mt-5">
        <h2 className="text-base font-bold uppercase tracking-[0.12em]">Summary</h2>
        <p className="mt-2 text-sm leading-relaxed">
          Data Analyst with 3+ years of experience in UK financial services (mortgages and insurance), delivering end-to-end analytics systems across SQL, BI, and frontend dashboards.
          Proven record of improving SQL pipeline performance by 40%, automating reporting to save 12+ hours per week, and translating complex data into executive-ready business decisions.
        </p>
      </section>

      <section className="mt-5">
        <h2 className="text-base font-bold uppercase tracking-[0.12em]">Skills</h2>
        <p className="mt-2 text-sm leading-relaxed">
          SQL optimization, data modeling, Power BI dashboarding, React dashboard development, KPI framework design, API integrations, ETL process automation, data storytelling,
          stakeholder communication, financial analytics, mortgage analytics, insurance analytics.
        </p>
      </section>

      <section className="mt-5">
        <h2 className="text-base font-bold uppercase tracking-[0.12em]">Experience</h2>
        <article className="mt-2 border-l-2 border-black pl-4">
          <h3 className="text-sm font-bold">Jupiter Fincorp — Data Analyst (Full-Stack Analytics)</h3>
          <p className="text-sm">2022 – Present</p>
          <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed">
            <li>Built and scaled a Power BI reporting ecosystem for mortgage and insurance operations with standardized KPI definitions.</li>
            <li>Developed React-based internal dashboards that improved leadership visibility into conversions, claims, and pipeline quality.</li>
            <li>Optimized critical SQL queries and data workflows, reducing end-to-end processing time by 40%.</li>
            <li>Automated recurring reporting and reconciliation tasks, saving 12+ hours of manual effort per week.</li>
            <li>Partnered with business stakeholders to convert analytical findings into pricing, retention, and operational decisions.</li>
          </ul>
        </article>
      </section>

      <section className="mt-5">
        <h2 className="text-base font-bold uppercase tracking-[0.12em]">Education and Training</h2>
        <div className="mt-2 space-y-3">
          {educationTimeline.map((item) => (
            <article key={item.qualification} className="page-break-avoid border-l-2 border-black pl-4">
              <h3 className="text-sm font-bold">{item.qualification}</h3>
              <p className="text-sm">{item.institution}</p>
              <p className="text-xs">{item.period}</p>
              <p className="text-xs">{item.location}</p>
              <p className="text-xs">Field(s) of study: {item.details}</p>
              <p className="text-xs">Level in EQF: {item.eqf}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
