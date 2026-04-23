"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import {
  analyticsSeed,
  educationTimeline,
  kpiDataset,
  performanceData,
  skills,
  storytellingData
} from "@/data/portfolio";
import { FadeInSection, SectionTitle } from "@/components/ui";

type NavMetric = { section: string; clicks: number };

const timelines = [
  {
    company: "Jupiter Fincorp",
    role: "Data Analyst (Full-Stack Analytics)",
    period: "2022 — Present",
    highlights: [
      "Built and scaled a Power BI reporting ecosystem for mortgage and insurance stakeholders.",
      "Developed a React-based internal performance dashboard for operations and risk teams.",
      "Optimized critical SQL pipelines and improved end-to-end processing speed by 40%.",
      "Automated recurring reporting flows, saving teams 12+ hours every week."
    ]
  }
];

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Analytics", href: "#analytics" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

const STORAGE_KEY = "portfolio_nav_clicks_v1";

export default function PortfolioPage() {
  const [navMetrics, setNavMetrics] = useState<NavMetric[]>(analyticsSeed);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const fromStorage = localStorage.getItem(STORAGE_KEY);
    if (fromStorage) {
      try {
        const parsed = JSON.parse(fromStorage) as NavMetric[];
        if (Array.isArray(parsed) && parsed.length > 0) setNavMetrics(parsed);
      } catch {
        // ignore malformed local storage and keep seed
      }
    }
  }, []);

  const topInterest = useMemo(
    () => [...navMetrics].sort((a, b) => b.clicks - a.clicks)[0],
    [navMetrics]
  );

  const registerNavClick = (label: string) => {
    setNavMetrics((prev) => {
      const next = prev.map((metric) =>
        metric.section === label ? { ...metric, clicks: metric.clicks + 1 } : metric
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  return (
    <main className="overflow-x-hidden bg-mesh-gradient">
      <header className="section-shell sticky top-0 z-50 mt-3 sm:mt-4">
        <div className="glass rounded-2xl px-3 py-3 shadow-glow sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-white">Bibin Rajan</p>
            <Link
              href="/cv"
              onClick={() => registerNavClick("Download CV")}
              className="rounded-full border border-white/20 px-4 py-1.5 text-xs text-white transition hover:border-accentPurple sm:text-sm"
            >
              Download CV
            </Link>
          </div>
          <nav className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted sm:gap-4 sm:text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => registerNavClick(item.label)}
                className="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-accentPurple hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="section-shell relative flex min-h-[calc(100vh-2rem)] flex-col justify-center pb-12 pt-10 sm:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <FadeInSection>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-accentGreen sm:text-sm">Data Analyst · Full-Stack Analytics</p>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Turning Financial Data into Business Decisions</h1>
            <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">I build high-performance data systems, dashboards, and insights that drive revenue.</p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a href="#projects" className="rounded-full bg-gradient-to-r from-accentGreen to-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-110 sm:px-6 sm:py-3">View Projects</a>
              <a href="#contact" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-accentPurple hover:text-accentPurple sm:px-6 sm:py-3">Contact Me</a>
            </div>
            <p className="mt-6 text-sm text-muted">3+ years in UK financial services · Relocating to Munich</p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative mx-auto h-[340px] w-full max-w-sm sm:h-[420px] sm:max-w-md">
              <div className="glass absolute inset-7 rounded-[2rem]" />
              <Image
                src="/assets/profile-bibin.jpg"
                alt="Bibin Rajan professional headshot"
                width={520}
                height={640}
                priority
                className="absolute inset-0 h-full w-full rounded-[2rem] border border-white/10 object-cover shadow-glow"
              />
            </div>
          </FadeInSection>
        </div>

        <motion.div aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 sm:h-44">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={kpiDataset}>
              <defs>
                <linearGradient id="heroLine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16E08B" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#16E08B" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="premiums" stroke="#16E08B" fill="url(#heroLine)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </section>

      <section className="section-shell py-16" id="about">
        <FadeInSection>
          <SectionTitle
            eyebrow="About"
            title="End-to-end ownership from raw data to boardroom decisions"
            description="I work across the full analytics lifecycle—data ingestion, SQL optimization, visualization, and executive storytelling. My focus is turning fragmented financial data into trusted decision systems that business leaders can act on quickly."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Owns data pipelines, KPI definitions, and quality governance.",
              "Bridges operations, risk, and leadership with actionable dashboards.",
              "Designs narratives that convert insights into measurable commercial outcomes."
            ].map((item) => (
              <article key={item} className="glass rounded-2xl p-5 text-sm leading-relaxed text-muted">
                {item}
              </article>
            ))}
          </div>
        </FadeInSection>
      </section>

      <section className="section-shell py-16" id="analytics">
        <FadeInSection>
          <SectionTitle
            eyebrow="Live Analytics"
            title="What recruiters are clicking most"
            description="Great idea — this tracks navbar interaction trends to show what visitors prioritize on your profile. Data persists per browser using local storage."
          />
          <article className="glass rounded-3xl p-5 sm:p-7">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={navMetrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#263141" />
                  <XAxis dataKey="section" stroke="#9AA6B2" />
                  <YAxis stroke="#9AA6B2" />
                  <Tooltip contentStyle={{ backgroundColor: "#101826", border: "1px solid #334155" }} />
                  <Bar dataKey="clicks" fill="#16E08B" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-muted">
              Result: <span className="text-white">{topInterest?.section}</span> is currently the most viewed nav intent with <span className="text-accentGreen">{topInterest?.clicks}</span> clicks in this browser session history.
            </p>
          </article>
        </FadeInSection>
      </section>

      <section className="section-shell py-16" id="experience">
        <FadeInSection>
          <SectionTitle
            eyebrow="Experience"
            title="Interactive timeline"
            description="Built for speed, trust, and executive visibility in high-stakes mortgage and insurance operations."
          />
          {timelines.map((item) => (
            <div key={item.company} className="glass rounded-3xl p-6 sm:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <h3 className="text-2xl font-semibold">{item.company}</h3>
                  <p className="text-muted">{item.role}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/assets/jupiter-logo.png" alt="Jupiter Fincorp logo" width={180} height={64} className="rounded-md bg-white/90 p-2" />
                  <span className="text-sm text-muted">{item.period}</span>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-muted sm:text-base">
                {item.highlights.map((line) => (
                  <li key={line} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-accentGreen" />{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </FadeInSection>
      </section>

      <section className="section-shell py-16" id="projects">
        <FadeInSection>
          <SectionTitle
            eyebrow="Projects"
            title="Interactive analytics products"
            description="Each module behaves like a production feature, demonstrating analysis depth, visualization quality, and business relevance."
          />
        </FadeInSection>
        <div className="grid gap-6 lg:grid-cols-3">
          <FadeInSection>
            <article className="glass rounded-3xl p-6">
              <h3 className="text-xl font-semibold">Financial KPI Dashboard</h3>
              <p className="mt-2 text-sm text-muted">Mortgage and insurance metrics with trend intelligence for leadership reviews.</p>
              <div className="mt-6 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={kpiDataset}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#263141" />
                    <XAxis dataKey="month" stroke="#9AA6B2" />
                    <YAxis stroke="#9AA6B2" />
                    <Tooltip contentStyle={{ backgroundColor: "#101826", border: "1px solid #334155" }} />
                    <Legend />
                    <Line type="monotone" dataKey="premiums" stroke="#16E08B" strokeWidth={3} />
                    <Line type="monotone" dataKey="claims" stroke="#8B5CF6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-sm text-muted">Insight: Premium growth outpaced claims by 14%, indicating stronger underwriting quality.</p>
            </article>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <article className="glass rounded-3xl p-6">
              <h3 className="text-xl font-semibold">SQL Optimization Case Study</h3>
              <p className="mt-2 text-sm text-muted">Before vs after query execution profiling on a reporting pipeline.</p>
              <div className="mt-6 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#263141" />
                    <XAxis dataKey="stage" stroke="#9AA6B2" />
                    <YAxis stroke="#9AA6B2" />
                    <Tooltip contentStyle={{ backgroundColor: "#101826", border: "1px solid #334155" }} />
                    <Legend />
                    <Bar dataKey="before" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="after" fill="#16E08B" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-sm text-muted">Outcome: Overall runtime reduced from 35.6s to 19.0s (≈46% faster).</p>
            </article>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <article className="glass rounded-3xl p-6">
              <h3 className="text-xl font-semibold">Data Storytelling App</h3>
              <p className="mt-2 text-sm text-muted">Narrative decision board linking customer retention actions to renewal outcomes.</p>
              <div className="mt-6 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={storytellingData}>
                    <defs>
                      <linearGradient id="retention" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#263141" />
                    <XAxis dataKey="quarter" stroke="#9AA6B2" />
                    <YAxis stroke="#9AA6B2" />
                    <Tooltip contentStyle={{ backgroundColor: "#101826", border: "1px solid #334155" }} />
                    <Area type="monotone" dataKey="policyRenewal" stroke="#8B5CF6" fill="url(#retention)" />
                    <Line type="monotone" dataKey="churn" stroke="#16E08B" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-sm text-muted">Decision impact: Retention interventions increased renewals by 13 points while reducing churn.</p>
            </article>
          </FadeInSection>
        </div>
      </section>

      <section className="section-shell py-16" id="skills">
        <FadeInSection>
          <SectionTitle
            eyebrow="Skills"
            title="Full-stack analytics toolkit"
            description="From semantic modeling to frontend delivery, optimized for business-facing reliability."
          />
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.name} className="glass rounded-2xl p-4">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="text-muted">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-accentGreen to-accentPurple"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.07 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      <section className="section-shell py-16" id="education">
        <FadeInSection>
          <SectionTitle
            eyebrow="Education"
            title="Academic foundation in software and analytics"
            description="Strong technical grounding across software development, applied computing, and information systems."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {educationTimeline.map((item) => (
              <article key={item.qualification} className="glass rounded-2xl p-5">
                <h3 className="text-lg font-semibold">{item.qualification}</h3>
                <p className="mt-1 text-sm text-white">{item.institution}</p>
                <p className="mt-1 text-sm text-muted">{item.period}</p>
                <p className="mt-1 text-sm text-muted">{item.location}</p>
                <p className="mt-2 text-sm text-muted">{item.details}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-accentGreen">{item.eqf}</p>
              </article>
            ))}
          </div>
        </FadeInSection>
      </section>

      <section className="section-shell py-16" id="contact">
        <FadeInSection>
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build measurable growth from data"
            description="Open to Data Analyst / Analytics Engineer roles across Europe, with a focus on Munich."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass rounded-3xl p-6 text-sm text-muted">
              <p><span className="text-white">Email:</span> bibinrajanin@gmail.com</p>
              <p className="mt-2"><span className="text-white">LinkedIn:</span> <a href="https://www.linkedin.com/in/bibin-rajan-8ba997158/" className="underline-offset-4 hover:underline">linkedin.com/in/bibin-rajan-8ba997158</a></p>
              <p className="mt-2"><span className="text-white">Phone:</span>&nbsp;<a href="tel:+919539202640" suppressHydrationWarning>+91 9539202640</a></p>
            </div>
            <form className="glass rounded-3xl p-6" action="mailto:bibinrajanin@gmail.com" method="post" encType="text/plain">
              <label className="mb-3 block text-sm">Name
                <input className="mt-2 w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2 outline-none ring-accentPurple focus:ring-2" name="name" required />
              </label>
              <label className="mb-3 block text-sm">Email
                <input type="email" className="mt-2 w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2 outline-none ring-accentPurple focus:ring-2" name="email" required />
              </label>
              <label className="mb-4 block text-sm">Message
                <textarea className="mt-2 min-h-28 w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2 outline-none ring-accentPurple focus:ring-2" name="message" required />
              </label>
              <button type="submit" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90">Send Message</button>
            </form>
          </div>
        </FadeInSection>
      </section>
    </main>
  );
}
