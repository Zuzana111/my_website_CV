const skillGroups = [
  {
    title: "Data & Analysis",
    items: ["Python", "SQL", "Pandas", "Plotly", "Jupyter"]
  },
  {
    title: "Machine Learning",
    items: ["scikit-learn", "Keras", "FAISS", "Feature Engineering"]
  },
  {
    title: "AI & LLM",
    items: ["LangChain", "OpenAI API", "RAG", "Prompt Engineering"]
  },
  {
    title: "Tools",
    items: ["Streamlit", "Git", "Dashboards", "ABAP"]
  }
];

const interests = [
  "Financial markets & trading systems",
  "Predictive modelling & ML applications",
  "Decision-support tools & dashboards",
  "Applied AI in real-world workflows"
];

function SkillChip({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/68">
      {children}
    </span>
  );
}

export default function AboutPage() {
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
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-[1.5rem] border border-border bg-white/75 p-6">
              <h3 className="text-xl font-semibold tracking-tight">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <SkillChip key={item}>{item}</SkillChip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Interests</h2>
        <ul className="mt-6 grid gap-4 text-base leading-8 text-foreground/74 md:grid-cols-2">
          {interests.map((interest) => (
            <li key={interest} className="rounded-[1.2rem] border border-border bg-white/75 px-5 py-4">
              {interest}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
