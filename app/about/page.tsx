"use client";

import { useCopy } from "@/components/layout/locale-provider";

function SkillChip({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/68">
      {children}
    </span>
  );
}

export default function AboutPage() {
  const content = useCopy();

  return (
    <div className="space-y-10">
      <section className="border-b border-border pb-10">
        <p className="section-title">{content.aboutPage.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {content.aboutPage.title}
        </h1>
      </section>

      <section className="space-y-8">
        <article className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold tracking-tight">{content.aboutPage.backgroundTitle}</h2>
          <p className="mt-4 text-base leading-8 text-foreground/74">{content.aboutPage.backgroundBody}</p>
        </article>

        <article className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold tracking-tight">{content.aboutPage.shiftTitle}</h2>
          <p className="mt-4 text-base leading-8 text-foreground/74">{content.aboutPage.shiftBody}</p>
        </article>

        <article className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold tracking-tight">{content.aboutPage.lookingTitle}</h2>
          <p className="mt-4 text-base leading-8 text-foreground/74">{content.aboutPage.lookingBody}</p>
        </article>
      </section>

      <section className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">{content.aboutPage.skillsTitle}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {content.aboutPage.skillGroups.map((group) => (
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
        <h2 className="text-2xl font-semibold tracking-tight">{content.aboutPage.interestsTitle}</h2>
        <ul className="mt-6 grid gap-4 text-base leading-8 text-foreground/74 md:grid-cols-2">
          {content.aboutPage.interests.map((interest) => (
            <li key={interest} className="rounded-[1.2rem] border border-border bg-white/75 px-5 py-4">
              {interest}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
