"use client";

import { useCopy } from "@/components/layout/locale-provider";

const accentStyles = {
  violet: "text-[#5f56b3]",
  green: "text-[#23765a]",
  sand: "text-[#b58b63]"
} as const;

type Accent = keyof typeof accentStyles;

export function WritingSection() {
  const content = useCopy();

  return (
    <section className="border-t border-border pt-10">
      <div className="grid gap-5 md:grid-cols-2">
        {content.writing.items.map((item) => {
          const isDisabled = "status" in item && Boolean(item.status);
          const accent = item.accent as Accent;
          const cardClass = `rounded-lg border border-border bg-white/78 p-6 transition ${
            isDisabled ? "cursor-default opacity-55" : "hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
          }`;
          const body = (
            <>
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${accentStyles[accent]}`}>{item.category}</p>
              <h2 className="mt-3 text-lg font-semibold leading-7 tracking-tight">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-foreground/72">{item.description}</p>
              <div className="mt-5 flex items-center justify-between gap-4 text-sm text-foreground/58">
                <span>{isDisabled ? item.status : "Read on Medium →"}</span>
                <span>{item.readTime}</span>
              </div>
            </>
          );

          if (isDisabled) {
            return (
              <article key={item.title} className={cardClass}>
                {body}
              </article>
            );
          }

          return (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className={cardClass}>
              {body}
            </a>
          );
        })}
      </div>
    </section>
  );
}
