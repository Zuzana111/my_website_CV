"use client";

import { useCopy } from "@/components/layout/locale-provider";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillGroup } from "@/components/ui/skill-group";

export function SkillsSnapshot() {
  const content = useCopy();

  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow={content.skills.eyebrow}
        title={content.skills.title}
        description={content.skills.description}
      />
      <div className="grid gap-8 md:grid-cols-3">
        {content.skills.groups.map((group) => (
          <SkillGroup key={group.title} {...group} />
        ))}
      </div>
    </section>
  );
}
