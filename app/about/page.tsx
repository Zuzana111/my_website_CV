const technicalSkills = {
  strong: ["SQL", "Data analysis", "Data storytelling"],
  working: ["Python", "pandas", "Streamlit", "Plotly", "Jupyter", "Git"],
  familiar: ["scikit-learn", "Keras", "ABAP"]
};

const interests = [
  "Financial markets & trading systems",
  "Predictive modelling & ML applications",
  "Decision-support tools & dashboards",
  "Applied AI in real-world workflows"
];

function SkillChip({ children, tier }: { children: string; tier: "strong" | "working" | "familiar" }) {
  const styles = {
    strong: "border-accent bg-accent-soft/60 text-accent-deep opacity-100 font-bold",
    working: "border-border bg-white text-foreground/75 opacity-100",
    familiar: "border-border bg-white text-foreground/45 opacity-45"
  };

  return (
    <span className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${styles[tier]}`}>
      {children}
    </span>
  );
}

export default function AboutPage() {
  const allTechnicalSkills = [
    ...technicalSkills.strong.map((skill) => ({ skill, tier: "strong" as const })),
    ...technicalSkills.working.map((skill) => ({ skill, tier: "working" as const })),
    ...technicalSkills.familiar.map((skill) => ({ skill, tier: "familiar" as const }))
  ];

  return (
    <div className="space-y-10">
      <section className="border-b border-border pb-10">
        <p className="section-title">About</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Enterprise background. Analytics and AI focus, now.
        </h1>
      </section>

      <section className="space-y-8">
        <article className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold tracking-tight">Background</h2>
          <p className="mt-4 text-base leading-8 text-foreground/74">
            I spent 10+ years in enterprise IT — at Accenture, Škoda Auto, CETIN, and others — working on SAP environments
            where data quality and system reliability were business-critical. That work taught me how to operate
            inside complex technical environments, where precision matters and things break in ways that affect real
            people.
          </p>
        </article>

        <article className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold tracking-tight">The shift</h2>
          <p className="mt-4 text-base leading-8 text-foreground/74">
            My interest in financial markets is what pulled me fully into data and AI. I wanted to build systems that
            analyse and predict — not just maintain. After completing Data Science Bootcamp at Coding Bootcamp Praha, I
            built real projects: an ML classification model to target banking clients, deployed as a live Streamlit
            dashboard, and two event-driven trading bots in Python connected to the Interactive Brokers API. I write
            about my work on Medium, because explaining what you&apos;ve built is as important as building it.
          </p>
        </article>

        <article className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold tracking-tight">What I&apos;m looking for</h2>
          <p className="mt-4 text-base leading-8 text-foreground/74">
            I&apos;m open to roles across data analytics, data science, and applied AI — wherever analytical thinking
            and an understanding of how real organisations use data can make a difference. My background bridges the
            technical and the operational, and I&apos;m looking for work where that combination is genuinely useful.
          </p>
        </article>
      </section>

      <section className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-border bg-white/75 p-6">
            <h3 className="text-xl font-semibold tracking-tight">Technical skills</h3>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/58">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-deep" />
                Strong
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full border border-accent bg-white" />
                Working knowledge
              </span>
              <span className="inline-flex items-center gap-2 opacity-45">
                <span className="h-2.5 w-2.5 rounded-full border border-foreground/35 bg-white" />
                Familiar
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {allTechnicalSkills.map((item) => (
                <SkillChip key={item.skill} tier={item.tier}>
                  {item.skill}
                </SkillChip>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-border bg-white/75 p-6">
            <h3 className="text-xl font-semibold tracking-tight">Interests</h3>
            <ul className="mt-6 space-y-4 text-base leading-8 text-foreground/74">
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
