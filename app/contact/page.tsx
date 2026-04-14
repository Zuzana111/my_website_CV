"use client";

import { FormEvent, useState } from "react";
import { useCopy } from "@/components/layout/locale-provider";
import { PageIntro } from "@/components/layout/page-intro";
import { siteMeta } from "@/lib/site-data";

function ContactIcon({ type }: { type: "phone" | "email" | "location" }) {
  const common = "h-5 w-5 text-accent-deep";

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={common} aria-hidden="true">
        <path d="M5 4.5c0 8.56 6.94 15.5 15.5 15.5h1.5a2 2 0 0 0 2-2v-2.28a1.5 1.5 0 0 0-1.28-1.48l-4.1-.58a1.5 1.5 0 0 0-1.47.62l-.9 1.2a1.2 1.2 0 0 1-1.45.38 12.56 12.56 0 0 1-6.67-6.67 1.2 1.2 0 0 1 .38-1.45l1.2-.9a1.5 1.5 0 0 0 .62-1.47l-.58-4.1A1.5 1.5 0 0 0 8.28 0H6a2 2 0 0 0-2 2v2.5Z" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={common} aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={common} aria-hidden="true">
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function ContactPage() {
  const content = useCopy();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const composedSubject = subject || `Portfolio contact from ${name || "website visitor"}`;
    const composedBody = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      "",
      message || "-"
    ].join("\n");

    window.location.href = `mailto:${siteMeta.email}?subject=${encodeURIComponent(composedSubject)}&body=${encodeURIComponent(composedBody)}`;
  }

  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow={content.contactPage.eyebrow}
        title={content.contactPage.title}
        description={content.contactPage.description}
      />
      <section className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-7 pt-1">
          <a
            href={`tel:${siteMeta.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-4 text-lg text-foreground/80 transition hover:text-accent-deep"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft/75">
              <ContactIcon type="phone" />
            </span>
            <span>{siteMeta.phone}</span>
          </a>
          <a
            href={`mailto:${siteMeta.email}`}
            className="flex items-center gap-4 text-lg text-foreground/80 transition hover:text-accent-deep"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft/75">
              <ContactIcon type="email" />
            </span>
            <span>{siteMeta.email}</span>
          </a>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.75rem] border border-border bg-white/65 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={content.contactPage.namePlaceholder}
              className="w-full border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-accent"
            />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={content.contactPage.emailPlaceholder}
              className="w-full border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-accent"
            />
          </div>
          <input
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            placeholder={content.contactPage.subjectPlaceholder}
            className="w-full border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-accent"
          />
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={content.contactPage.messagePlaceholder}
            rows={7}
            className="w-full resize-none border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-accent"
          />
          <button
            type="submit"
            className="inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-deep"
          >
            {content.contactPage.submitLabel}
          </button>
        </form>
      </section>
    </div>
  );
}
