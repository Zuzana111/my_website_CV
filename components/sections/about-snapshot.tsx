"use client";

import Link from "next/link";
import { useCopy } from "@/components/layout/locale-provider";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSnapshot() {
  const content = useCopy();

  return (
    <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionHeading
        eyebrow={content.aboutSnapshot.eyebrow}
        title={content.aboutSnapshot.title}
        description={content.aboutSnapshot.description}
      />
      <div className="border-l border-border pl-8">
        <p className="text-base leading-8 text-foreground/72">{content.aboutSnapshot.body}</p>
        <Link href="/about" className="mt-6 inline-flex text-sm font-semibold text-accent-deep transition hover:text-accent">
          {content.aboutSnapshot.link}
        </Link>
      </div>
    </section>
  );
}
