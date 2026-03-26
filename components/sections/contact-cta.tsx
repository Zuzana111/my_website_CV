"use client";

import { useCopy } from "@/components/layout/locale-provider";
import { ButtonLink } from "@/components/ui/button-link";
import { siteMeta } from "@/lib/site-data";

export function ContactCta() {
  const content = useCopy();

  return (
    <section className="border-t border-border pt-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <p className="section-title">{content.contactCta.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{content.contactCta.title}</h2>
          <p className="mt-4 text-base leading-7 text-foreground/72">{content.contactCta.description}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/contact">{content.contactCta.button}</ButtonLink>
          <a
            href={`mailto:${siteMeta.email}`}
            className="inline-flex items-center justify-center text-sm font-semibold text-foreground/72 transition hover:text-accent-deep"
          >
            {siteMeta.email}
          </a>
        </div>
      </div>
    </section>
  );
}
