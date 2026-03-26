"use client";

import { useCopy } from "@/components/layout/locale-provider";
import { PageIntro } from "@/components/layout/page-intro";
import { ProjectCard } from "@/components/ui/project-card";

export default function ProjectsPage() {
  const content = useCopy();

  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow={content.projectsPage.eyebrow}
        title={content.projectsPage.title}
        description={content.projectsPage.description}
      />
      <section className="grid gap-6 lg:grid-cols-3">
        {content.featuredProjects.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </div>
  );
}
