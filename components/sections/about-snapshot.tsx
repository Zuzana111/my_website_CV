"use client";

import Link from "next/link";
import { useCopy } from "@/components/layout/locale-provider";

export function AboutSnapshot() {
  const content = useCopy();

  return (
    <section className="border-t border-border pt-10">
      <p className="section-title">{content.aboutSnapshot.eyebrow}</p>
      <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/72">{content.aboutSnapshot.description}</p>
      <Link href="/about" className="mt-6 inline-flex text-sm font-semibold text-accent-deep transition hover:text-accent">
        {content.aboutSnapshot.link}
      </Link>
    </section>
  );
}
