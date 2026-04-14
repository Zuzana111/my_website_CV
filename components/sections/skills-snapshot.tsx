"use client";

import { useCopy } from "@/components/layout/locale-provider";
import { SkillGroup } from "@/components/ui/skill-group";

export function SkillsSnapshot() {
  const content = useCopy();

  return (
    <section className="space-y-8">
      <p className="section-title">{content.skills.eyebrow}</p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {content.skills.groups.map((group) => (
          <SkillGroup key={group.title} {...group} />
        ))}
      </div>
    </section>
  );
}
