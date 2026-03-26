"use client";

import { useCopy } from "@/components/layout/locale-provider";

export function WritingSection() {
  const content = useCopy();

  return (
    <section className="border-t border-border pt-10">
      <div className="space-y-8">
        <div>
          <p className="section-title">{content.writing.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{content.writing.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/72">{content.writing.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {content.writing.items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="rounded-[1.5rem] border border-border bg-white/75 p-6 transition hover:-translate-y-1 hover:border-accent/40"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-deep">{item.tag}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-foreground/72">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
