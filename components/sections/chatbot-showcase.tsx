"use client";

import { useEffect, useState } from "react";
import { useCopy, useLocale } from "@/components/layout/locale-provider";
import { featuredProjects, siteMeta } from "@/lib/site-data";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

function buildAnswer(question: string, locale: "en" | "cs") {
  const normalized = question.toLowerCase();

  if (
    normalized.includes("background") ||
    normalized.includes("experience") ||
    normalized.includes("resume") ||
    normalized.includes("zkušen")
  ) {
    return locale === "cs"
      ? "Zuzana má 10+ let zkušeností v SAP Basis a Security napříč Accenture, Škoda Auto, CETIN a freelance rolemi. Teď přechází do datové analytiky a aplikované AI po intenzivním data science bootcampu."
      : "Zuzana has 10+ years of experience in SAP Basis and Security across Accenture, Škoda Auto, CETIN, and freelance consulting. She is now transitioning into data analytics and applied AI after an intensive data science bootcamp.";
  }

  if (
    normalized.includes("project") ||
    normalized.includes("working on") ||
    normalized.includes("build") ||
    normalized.includes("projekt")
  ) {
    const projectList = featuredProjects.map((project) => project.title).join(", ");
    return locale === "cs"
      ? `Momentálně staví portfolio kolem projektů ${projectList}. Důraz je na analytiku, prediktivní modelování a praktické AI workflow pro rozhodování.`
      : `She is currently building a portfolio around ${projectList}. The focus is analytics, predictive modeling, and practical AI workflows for decision support.`;
  }

  if (
    normalized.includes("skill") ||
    normalized.includes("stack") ||
    normalized.includes("tool") ||
    normalized.includes("doved")
  ) {
    return locale === "cs"
      ? "Její hlavní dovednosti zahrnují Python, SQL, ABAP, pandas, NumPy, Plotly, ETL, strojové učení, dashboardy, SAP Basis, SAP Security, GitHub a Jupyter."
      : "Her core skills include Python, SQL, ABAP, pandas, NumPy, Plotly, ETL, machine learning, dashboards, SAP Basis, SAP Security, GitHub, and Jupyter.";
  }

  if (
    normalized.includes("contact") ||
    normalized.includes("email") ||
    normalized.includes("reach") ||
    normalized.includes("kontakt")
  ) {
    return locale === "cs"
      ? `Můžete ji kontaktovat na ${siteMeta.email} nebo telefonicky na ${siteMeta.phone}. LinkedIn i GitHub odkazy jsou také dostupné v navigaci a na stránce Kontakt.`
      : `You can reach her at ${siteMeta.email} or by phone at ${siteMeta.phone}. LinkedIn and GitHub links are also available in the navigation and on the Contact page.`;
  }

  return locale === "cs"
    ? "Mohu pomoci s otázkami o zkušenostech Zuzany, jejích projektech, dovednostech nebo kontaktu. Zkuste se zeptat třeba na background, projekty nebo kontakt."
    : "I can help with questions about Zuzana's background, projects, skills, or contact details. Try asking about her experience, projects, or how to get in touch.";
}

export function ChatbotShowcase() {
  const content = useCopy();
  const { locale } = useLocale();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: content.chatbot.welcome }
  ]);

  useEffect(() => {
    setMessages([{ role: "assistant", text: content.chatbot.welcome }]);
    setInput("");
  }, [content.chatbot.welcome]);

  function submitQuestion(question: string) {
    const trimmed = question.trim();
    if (!trimmed) {
      return;
    }

    const answer = buildAnswer(trimmed, locale);

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: answer }
    ]);
    setInput("");
  }

  return (
    <section className="border-t border-border pt-10">
      <div className="space-y-8">
        <div>
          <p className="section-title">{content.chatbot.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{content.chatbot.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/72">{content.chatbot.description}</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-deep">{content.chatbot.promptLabel}</p>
            <div className="flex flex-wrap gap-3">
              {content.chatbot.prompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => submitQuestion(prompt)}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm text-foreground/75 transition hover:border-accent hover:text-accent-deep"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-white/80 p-4 shadow-soft">
            <div className="max-h-[28rem] space-y-4 overflow-y-auto px-2 py-2">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                      message.role === "user"
                        ? "bg-accent text-white"
                        : "border border-border bg-[#fcfbfa] text-foreground/78"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                submitQuestion(input);
              }}
              className="mt-4 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={content.chatbot.inputPlaceholder}
                className="min-w-0 flex-1 rounded-full border border-border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-accent"
              />
              <button
                type="submit"
                className="inline-flex justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-deep"
              >
                {content.chatbot.sendLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
