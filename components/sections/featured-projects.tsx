"use client";

import Link from "next/link";
import { useCopy } from "@/components/layout/locale-provider";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProjects() {
  const content = useCopy();
  const homepageProjects = content.featuredProjects.projects.filter((project) => project.title !== "RAG Portfolio Assistant");

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow={content.featuredProjects.eyebrow}
          title={content.featuredProjects.title}
          description={content.featuredProjects.description}
        />
        <Link href="/projects" className="text-sm font-semibold text-accent-deep transition hover:text-accent">
          {content.featuredProjects.link}
        </Link>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {homepageProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
