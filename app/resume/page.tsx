"use client";

import type { ReactNode } from "react";
import { siteMeta } from "@/lib/site-data";

const coreSkills = [
  {
    label: "Languages",
    value: "Python, SQL"
  },
  {
    label: "Data & ML",
    value: "pandas, NumPy, Matplotlib, Plotly, Keras, ETL, regression, decision trees, random forest, AdaBoost, NLP"
  },
  {
    label: "Analytics",
    value: "dashboards, exploratory analysis, feature engineering, model evaluation"
  },
  {
    label: "Enterprise / IT",
    value: "SAP Basis, SAP Security, transport management, monitoring, user management, release management"
  },
  {
    label: "Tools",
    value: "GitHub, Jupyter, Dash"
  }
];

const experience = [
  {
    company: "CETIN",
    role: "Freelancer, SAP Competence Center / Basis Team",
    period: "Oct 2017 - Apr 2021",
    bullets: [
      "Managed SAP environments including Solution Manager, Portal, Oracle, ECC, and SRM.",
      "Supported transport management, monitoring, batch management, user management, and system maintenance.",
      "Participated in SAP upgrade planning and Oracle database administration.",
      "Troubleshot performance and operational issues across enterprise systems."
    ]
  },
  {
    company: "Accenture",
    role: "SAP Software Engineer",
    period: "May 2015 - Jan 2018",
    bullets: [
      "Worked on release management, cutover coordination, conflict analysis, and landscape synchronization.",
      "Contributed to SAP security and architecture work across large international environments.",
      "Supported design and implementation of support processes including monitoring, incident handling, and job scheduling.",
      "Participated in security guideline design for more than 35 SAP systems."
    ]
  },
  {
    company: "Škoda Auto",
    role: "SAP Consultant, FI/CO",
    period: "Jan 2014 - May 2015",
    bullets: [
      "Supported Volkswagen SAP FI systems and related CO/MM processes.",
      "Worked on incident management, change management, authorization management, and upgrade planning.",
      "Communicated across English- and German-speaking environments."
    ]
  },
  {
    company: "Škoda Auto",
    role: "SAP System Analyst",
    period: "Aug 2012 - Dec 2013",
    bullets: [
      "Supported cross-functional SAP process delivery and rollout activities.",
      "Managed upgrade planning, testing, innovation initiatives, and authorization work.",
      "Led training and support-related activities for end users and key users."
    ]
  },
  {
    company: "Škoda Auto",
    role: "SAP Basis Trainee",
    period: "Earlier role",
    bullets: [
      "Built early SAP operations experience through technical support, system work, and practical enterprise delivery."
    ]
  }
];

const education = [
  "Master's Degree, Informatics / Information Systems - Masaryk University Brno, 2011-2012",
  "Bachelor's Degree, Applied Informatics - Masaryk University Brno, 2008-2011"
];

const certifications = [
  "ITIL Foundation V3",
  "ITIL Intermediate Service Strategy",
  "ITIL Intermediate Service Transition",
  "SAP technical and reporting training",
  "Data science bootcamp covering Python, SQL, machine learning, ETL, NLP, dashboards, and model tuning"
];

const projects = [
  "Gap Fill Analytics Dashboard",
  "Gap Fill Prediction Model",
  "Trading Automation / Trading App",
  "Bootcamp case study"
];

const interests = ["Pilates / yoga / tennis", "Travelling", "Stock trading", "Self-education"];

function ResumeSection({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-5 text-base leading-8 text-foreground/74">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <section className="border-b border-border pb-10">
        <p className="section-title">Resume</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Zuzana Shivram Sami</h1>
        <p className="mt-3 text-xl text-foreground/76">
          Data Analytics & Applied AI | Former SAP Basis &amp; Security Specialist
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/72">
          I have 9+ years of experience in SAP Basis, Security, and enterprise support across Accenture, Škoda Auto,
          CETIN, and freelance roles. After completing an intensive data science bootcamp, I am now building practical
          projects in SQL, Python, machine learning, and applied AI, with a focus on analytics, decision support, and
          automation.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
          <a href="/resume.pdf" className="border-b border-accent pb-1 text-accent-deep transition hover:border-accent-deep">
            Download CV
          </a>
          <a href={siteMeta.linkedin} className="border-b border-transparent pb-1 text-foreground/72 transition hover:text-accent-deep">
            LinkedIn
          </a>
          <a href={siteMeta.github} className="border-b border-transparent pb-1 text-foreground/72 transition hover:text-accent-deep">
            GitHub
          </a>
        </div>
      </section>

      <ResumeSection title="Professional Summary">
        <p>
          I have 9+ years of experience in SAP Basis, Security, and enterprise support across Accenture, Škoda Auto,
          CETIN, and freelance roles. After completing an intensive data science bootcamp, I am now building practical
          projects in SQL, Python, machine learning, and applied AI, with a focus on analytics, decision support, and
          automation.
        </p>
      </ResumeSection>

      <ResumeSection title="Core Skills">
        <ul className="space-y-4">
          {coreSkills.map((item) => (
            <li key={item.label}>
              <span className="font-semibold text-foreground">{item.label}:</span> {item.value}
            </li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="Experience">
        <div className="space-y-8">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.company} - {item.role}
                </h3>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent-deep">{item.period}</p>
              </div>
              <ul className="space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="leading-7">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        <ul className="space-y-3">
          {education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="Certifications & Training">
        <ul className="space-y-3">
          {certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="Projects">
        <ul className="space-y-3">
          {projects.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="Interests">
        <ul className="space-y-3">
          {interests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResumeSection>
    </div>
  );
}
