"use client";

import { useCopy } from "@/components/layout/locale-provider";
import { siteMeta } from "@/lib/site-data";

export function Footer() {
  const content = useCopy();

  return (
    <footer className="border-t border-border py-8">
      <div className="content-column flex flex-col gap-2 text-sm text-foreground/58 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {siteMeta.name} • {content.footer.title}
        </p>
        <p>{content.footer.location}</p>
      </div>
    </footer>
  );
}
