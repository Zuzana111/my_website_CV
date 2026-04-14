"use client";

import { useCopy } from "@/components/layout/locale-provider";

const promptIcons = ["♙", "□", "</>", "✉"];

function HighlightedTitle({ title }: { title: string }) {
  const [before, after] = title.split("AI");

  if (!after) {
    return <>{title}</>;
  }

  return (
    <>
      {before}
      <span className="text-accent-deep">AI</span>
      {after}
    </>
  );
}

export function ChatbotShowcase() {
  const content = useCopy();

  return (
    <section className="border-t border-border pt-10">
      <div className="rounded-[1.75rem] border border-accent/18 bg-[#f7f2f8] p-6 shadow-soft sm:p-8">
        <div>
          <p className="section-title">{content.chatbot.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            <HighlightedTitle title={content.chatbot.title} />
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-foreground/74 lg:whitespace-nowrap">{content.chatbot.description}</p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={content.chatbot.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-accent-deep"
            >
              <span aria-hidden="true">✦</span>
              {content.chatbot.ctaLabel}
              <span aria-hidden="true" className="text-xs">
                ↗
              </span>
            </a>
            <a
              href={content.chatbot.repoHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-1 py-3 text-sm font-semibold text-foreground/76 transition hover:text-accent-deep"
            >
              {content.chatbot.repoLabel}
              <span aria-hidden="true">●</span>
            </a>
          </div>

          <div className="mt-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-deep">{content.chatbot.promptLabel}</p>
            <div className="mt-4 flex flex-col items-start gap-3">
              {content.chatbot.prompts.map((prompt, index) => (
                <a
                  key={prompt}
                  href={content.chatbot.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-accent/14 bg-white px-4 py-2.5 text-sm text-foreground/78 shadow-[0_10px_28px_rgba(91,54,75,0.06)] transition hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent-deep"
                >
                  <span className="font-semibold text-accent-deep" aria-hidden="true">
                    {promptIcons[index] ?? "✦"}
                  </span>
                  {prompt}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
