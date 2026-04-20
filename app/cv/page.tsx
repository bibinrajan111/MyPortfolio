import Image from "next/image";
import PrintCvButton from "@/components/print-cv-button";

export const metadata = {
  title: "Bibin Rajan | ATS CV",
  description: "ATS-friendly printable CV for Bibin Rajan"
};

export default function CvPage() {
  return (
    <main className="mx-auto my-6 w-full max-w-[794px] bg-white px-8 py-8 text-black sm:my-10 sm:px-12 page-break-avoid">
      <div className="no-print mb-6 flex justify-end">
        <PrintCvButton />
      </div>

      <header>
        <div className="mb-4 flex items-start gap-4">
          <Image
            src="/assets/profile-bibin.jpg"
            alt="Bibin Rajan profile photo"
            width={96}
            height={96}
            className="h-24 w-24 rounded object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">Bibin Rajan</h1>
            <p className="mt-1 text-sm">Data Analyst (Full-Stack Analytics) · Relocating to Munich</p>
            <p className="mt-1 text-sm">Email: bibinrajanin@gmail.com | Phone: +91 9539202640 | LinkedIn: linkedin.com/in/bibin-rajan-8ba997158</p>
          </div>
        </div>
      </header>

      <section className="mt-6">
        <h2 className="border-b border-black pb-1 text-lg font-bold">Summary</h2>
        <p className="mt-2 text-sm leading-relaxed">
          Data Analyst with 3+ years of experience in UK financial services (mortgages and insurance), delivering end-to-end analytics systems across SQL, BI, and frontend dashboards.
          Proven record of improving SQL pipeline performance by 40%, automating reporting to save 12+ hours per week, and translating complex data into executive-ready business decisions.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="border-b border-black pb-1 text-lg font-bold">Skills</h2>
        <p className="mt-2 text-sm leading-relaxed">
          SQL optimization, data modeling, Power BI dashboarding, React dashboard development, KPI framework design, API integrations, ETL process automation, data storytelling, stakeholder communication, financial analytics, mortgage analytics, insurance analytics.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="border-b border-black pb-1 text-lg font-bold">Experience</h2>
        <article className="mt-3">
          <h3 className="text-base font-bold">Jupiter Fincorp — Data Analyst (Full-Stack Analytics)</h3>
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

      <section className="mt-6">
        <h2 className="border-b border-black pb-1 text-lg font-bold">Education</h2>
        <p className="mt-2 text-sm">Bachelor&apos;s Degree (details available on request)</p>
      </section>
    </main>
  );
}
