"use client";

import { trackEvent } from "@/lib/analytics";

type ProjectCardProps = {
  title: string;
  description: string;
  type: string;
  stack: readonly string[];
  links?: readonly {
    label: string;
    href: string;
  }[];
};

export function ProjectCard({ title, description, type, stack, links }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.4rem] border border-border bg-white/82 p-5 transition hover:-translate-y-1 hover:border-accent/35">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">{type}</p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-foreground/70">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-[#fcfbfa] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/55"
          >
            {item}
          </span>
        ))}
      </div>
      {links?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("project_click", {
                  project_name: title,
                  link_label: link.label,
                  source_page: window.location.pathname
                })
              }
              className="inline-flex rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-accent-deep"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
