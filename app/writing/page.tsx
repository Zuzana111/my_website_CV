"use client";

import { useCopy } from "@/components/layout/locale-provider";
import { PageIntro } from "@/components/layout/page-intro";
import { WritingSection } from "@/components/sections/writing-section";

export default function WritingPage() {
  const content = useCopy();

  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow={content.writingPage.eyebrow}
        title={content.writingPage.title}
        description={content.writingPage.description}
      />
      <WritingSection />
    </div>
  );
}
