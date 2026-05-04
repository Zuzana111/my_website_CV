"use client";

import type { ReactNode } from "react";
import { useLocale } from "@/components/layout/locale-provider";
import { trackEvent } from "@/lib/analytics";
import { siteMeta } from "@/lib/site-data";

const resumeContent = {
  en: {
    eyebrow: "Resume",
    name: "Zuzana Shivram Sami",
    title: "Data Analytics & Applied AI — Former SAP Basis & Security Specialist",
    downloadCv: "Download CV",
    sections: {
      professionalSummary: "Professional Summary",
      coreSkills: "Core Skills",
      experience: "Experience",
      education: "Education",
      languages: "Languages",
      certifications: "Certifications & Training",
      interests: "Interests"
    },
    summary:
      "Former SAP Basis and Security specialist with 10+ years of experience across enterprise environments, including Accenture, Škoda Auto, CETIN, and freelance work. Currently transitioning into data analytics and applied AI after completing an intensive data science bootcamp. Building practical projects in SQL, Python, machine learning, and decision-support tools, with a growing focus on trading analytics and real-world AI applications.",
    skills: [
      { label: "Languages", value: "Python, SQL, ABAP" },
      {
        label: "Data & ML",
        value:
          "pandas, NumPy, Matplotlib, Plotly, Keras, ETL, regression, decision trees, random forest, AdaBoost, NLP"
      },
      {
        label: "Analytics",
        value: "dashboards, exploratory analysis, feature engineering, model evaluation"
      },
      {
        label: "Enterprise / IT",
        value: "SAP Basis, SAP Security, transport management, monitoring, user management, release management"
      },
      { label: "Tools", value: "GitHub, Jupyter, Dash" }
    ],
    experience: [
      {
        title: "SAP Consultant, SAP Competence Center / Basis Team - CETIN",
        period: "Oct 2017 - Apr 2021",
        bullets: [
          "Managed SAP environments including Solution Manager, Portal, Oracle, ECC, and SRM.",
          "Supported transport management, monitoring, batch management, user management, and system maintenance.",
          "Participated in SAP upgrade planning and Oracle database administration.",
          "Troubleshot performance and operational issues across enterprise systems."
        ]
      },
      {
        title: "SAP Software Engineer - Accenture",
        period: "May 2015 - Jan 2018",
        bullets: [
          "Worked on release management, cutover coordination, conflict analysis, and landscape synchronization.",
          "Contributed to SAP security and architecture work across large international environments, with project experience in Geneva, Stuttgart, Bratislava, and Prague.",
          "Supported design and implementation of support processes including monitoring, incident handling, and job scheduling.",
          "Participated in security guideline design for more than 35 SAP systems."
        ]
      },
      {
        title: "SAP Consultant, FI/CO - Škoda Auto",
        period: "Jan 2014 - May 2015",
        bullets: [
          "Supported Volkswagen SAP FI systems and related CO/MM processes.",
          "Worked on incident management, change management, authorization management, and upgrade planning.",
          "Communicated across English- and German-speaking environments."
        ]
      },
      {
        title: "SAP System Analyst - Škoda Auto",
        period: "Aug 2012 - Dec 2013",
        bullets: [
          "Supported cross-functional SAP process delivery and rollout activities.",
          "Managed upgrade planning, testing, innovation initiatives, and authorization work.",
          "Led training and support-related activities for end users and key users."
        ]
      },
      {
        title: "SAP Basis Trainee - RWE",
        period: "Earlier role",
        bullets: [
          "Built early SAP operations experience through technical support, system work, and practical enterprise delivery."
        ]
      }
    ],
    education: [
      "Master's Degree, Informatics / Information Systems - Masaryk University Brno",
      "Bachelor's Degree, Applied Informatics - Masaryk University Brno"
    ],
    languages: ["Czech — native", "English — professional", "German — basic"],
    certifications: [
      "Data science bootcamp covering Python, SQL, machine learning, ETL, NLP, dashboards, and model tuning",
      "ITIL Foundation V3",
      "ITIL Intermediate Service Strategy",
      "ITIL Intermediate Service Transition",
      "SAP technical and reporting trainings"
    ],
    interests: ["Pilates / yoga / tennis", "Travelling", "Financial markets", "Self-education"]
  },
  cs: {
    eyebrow: "Životopis",
    name: "Zuzana Shivram Sami",
    title: "Datová analytika a aplikovaná AI — Bývalá specialistka na SAP Basis a Security",
    downloadCv: "Stáhnout CV",
    sections: {
      professionalSummary: "Profesní shrnutí",
      coreSkills: "Klíčové dovednosti",
      experience: "Praxe",
      education: "Vzdělání",
      languages: "Jazyky",
      certifications: "Certifikace a školení",
      interests: "Zájmy"
    },
    summary:
      "Bývalá specialistka na SAP Basis a Security s více než 10 lety zkušeností v enterprise prostředí, včetně Accenture, Škoda Auto, CETIN a freelance spoluprací. Aktuálně přecházím do datové analytiky a aplikované AI po absolvování intenzivního data science bootcampu. Stavím praktické projekty v SQL, Pythonu, machine learningu a decision-support nástrojích, se stále větším zaměřením na trading analytiku a reálné AI aplikace.",
    skills: [
      { label: "Jazyky", value: "Python, SQL, ABAP" },
      {
        label: "Data a ML",
        value:
          "pandas, NumPy, Matplotlib, Plotly, Keras, ETL, regrese, decision trees, random forest, AdaBoost, NLP"
      },
      {
        label: "Analytika",
        value: "dashboardy, exploratorní analýza, feature engineering, vyhodnocení modelů"
      },
      {
        label: "Enterprise / IT",
        value: "SAP Basis, SAP Security, transport management, monitoring, user management, release management"
      },
      { label: "Nástroje", value: "GitHub, Jupyter, Dash" }
    ],
    experience: [
      {
        title: "SAP Consultant, SAP Competence Center / Basis Team - CETIN",
        period: "Říj 2017 - Dub 2021",
        bullets: [
          "Spravovala SAP prostředí včetně Solution Manageru, Portalu, Oracle, ECC a SRM.",
          "Podporovala transport management, monitoring, batch management, user management a systémovou údržbu.",
          "Podílela se na plánování SAP upgrade a administraci Oracle databází.",
          "Řešila výkonnostní a provozní problémy v enterprise systémech."
        ]
      },
      {
        title: "SAP Software Engineer - Accenture",
        period: "Kvě 2015 - Led 2018",
        bullets: [
          "Pracovala na release managementu, cutover koordinaci, conflict analysis a landscape synchronization.",
          "Podílela se na SAP security a architektonické práci v rozsáhlých mezinárodních prostředích, včetně projektové zkušenosti v Ženevě, Stuttgartu, Bratislavě a Praze.",
          "Podporovala návrh a implementaci support procesů včetně monitoringu, incident handlingu a job scheduling.",
          "Podílela se na návrhu security guidelines pro více než 35 SAP systémů."
        ]
      },
      {
        title: "SAP Consultant, FI/CO - Škoda Auto",
        period: "Led 2014 - Kvě 2015",
        bullets: [
          "Podporovala Volkswagen SAP FI systémy a související CO/MM procesy.",
          "Pracovala na incident managementu, change managementu, authorization managementu a plánování upgrade.",
          "Komunikovala v anglicky a německy mluvícím prostředí."
        ]
      },
      {
        title: "SAP System Analyst - Škoda Auto",
        period: "Srp 2012 - Pro 2013",
        bullets: [
          "Podporovala cross-functional SAP delivery a rollout aktivity.",
          "Řídila upgrade planning, testing, innovation iniciativy a authorization work.",
          "Vedla školení a support aktivity pro end uživatele a key usery."
        ]
      },
      {
        title: "SAP Basis Trainee - RWE",
        period: "Dřívější role",
        bullets: [
          "Získala první SAP operations zkušenosti prostřednictvím technické podpory, systémové práce a praktického enterprise delivery."
        ]
      }
    ],
    education: [
      "Magisterský titul, Informatika / Informační systémy - Masarykova univerzita Brno",
      "Bakalářský titul, Aplikovaná informatika - Masarykova univerzita Brno"
    ],
    languages: ["Čeština — rodilá úroveň", "Angličtina — profesionální úroveň", "Němčina — základní úroveň"],
    certifications: [
      "Data science bootcamp zaměřený na Python, SQL, machine learning, ETL, NLP, dashboardy a ladění modelů",
      "ITIL Foundation V3",
      "ITIL Intermediate Service Strategy",
      "ITIL Intermediate Service Transition",
      "SAP technická a reporting školení"
    ],
    interests: ["Pilates / jóga / tenis", "Cestování", "Finanční trhy", "Sebevzdělávání"]
  }
} as const;

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
  const { locale } = useLocale();
  const content = resumeContent[locale];

  return (
    <div className="space-y-10">
      <section className="border-b border-border pb-10">
        <p className="section-title">{content.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{content.name}</h1>
        <p className="mt-3 text-xl text-foreground/76">{content.title}</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
          <a
            href="/resume.pdf"
            onClick={() =>
              trackEvent("resume_download", {
                source_page: "/resume",
                destination: "resume_pdf"
              })
            }
            className="border-b border-accent pb-1 text-accent-deep transition hover:border-accent-deep"
          >
            {content.downloadCv}
          </a>
          <a
            href={siteMeta.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent("linkedin_click", {
                link_location: "resume_header",
                destination: "linkedin"
              })
            }
            className="border-b border-transparent pb-1 text-foreground/72 transition hover:text-accent-deep"
          >
            LinkedIn
          </a>
          <a
            href={siteMeta.github}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent("github_click", {
                link_location: "resume_header",
                destination: "github"
              })
            }
            className="border-b border-transparent pb-1 text-foreground/72 transition hover:text-accent-deep"
          >
            GitHub
          </a>
        </div>
      </section>

      <ResumeSection title={content.sections.professionalSummary}>
        <p>{content.summary}</p>
      </ResumeSection>

      <ResumeSection title={content.sections.coreSkills}>
        <ul className="space-y-4">
          {content.skills.map((item) => (
            <li key={item.label}>
              <span className="font-semibold text-foreground">{item.label}:</span> {item.value}
            </li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title={content.sections.experience}>
        <div className="space-y-8">
          {content.experience.map((item) => (
            <article key={`${item.title}-${item.period}`} className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
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

      <ResumeSection title={content.sections.education}>
        <ul className="space-y-3">
          {content.education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title={content.sections.languages}>
        <ul className="space-y-3">
          {content.languages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title={content.sections.certifications}>
        <ul className="space-y-3">
          {content.certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title={content.sections.interests}>
        <ul className="space-y-3">
          {content.interests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResumeSection>
    </div>
  );
}
