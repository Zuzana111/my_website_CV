"use client";

import { useCopy } from "@/components/layout/locale-provider";
import { PageIntro } from "@/components/layout/page-intro";

export default function AboutPage() {
  const content = useCopy();

  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow={content.aboutPage.eyebrow}
        title={content.aboutPage.title}
        description={content.aboutPage.description}
      />
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="section-card p-8">
          <h2 className="text-2xl font-semibold">{content.aboutPage.backgroundTitle}</h2>
          <p className="mt-4 text-base leading-8 text-foreground/72">{content.aboutPage.backgroundBody}</p>
        </div>
        <div className="section-card p-8">
          <h2 className="text-2xl font-semibold">{content.aboutPage.buildingTitle}</h2>
          <p className="mt-4 text-base leading-8 text-foreground/72">{content.aboutPage.buildingBody}</p>
        </div>
      </section>
    </div>
  );
}
