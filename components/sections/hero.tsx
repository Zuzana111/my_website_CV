"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCopy } from "@/components/layout/locale-provider";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  const content = useCopy();
  const [typedGreeting, setTypedGreeting] = useState("");

  useEffect(() => {
    setTypedGreeting("");
    let index = 0;
    let welcomeIndex = 0;
    let phase: "greeting" | "pause" | "welcome" = "greeting";
    let pauseTicks = 0;
    const greetingTarget = content.hero.greeting;
    const welcomeTarget = content.hero.welcome;

    const timer = window.setInterval(() => {
      if (phase === "greeting") {
        if (index < greetingTarget.length) {
          index += 1;
          setTypedGreeting(greetingTarget.slice(0, index));
          return;
        }

        phase = "pause";
        return;
      }

      if (phase === "pause") {
        pauseTicks += 1;
        if (pauseTicks >= 10) {
          if (index >= greetingTarget.length) {
            phase = "welcome";
            setTypedGreeting("");
          } else {
            phase = "greeting";
            index = 0;
            welcomeIndex = 0;
            setTypedGreeting("");
          }
          pauseTicks = 0;
        }
        return;
      }

      if (welcomeIndex < welcomeTarget.length) {
        welcomeIndex += 1;
        setTypedGreeting(welcomeTarget.slice(0, welcomeIndex));
        return;
      }

      phase = "pause";
      index = 0;
    }, 70);

    return () => window.clearInterval(timer);
  }, [content.hero.greeting, content.hero.welcome]);

  return (
    <section className="border-b border-border pb-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="relative mb-10 mt-2 flex h-80 w-full max-w-3xl items-center justify-center sm:h-[26rem]">
          <div className="hero-orbit">
            <span className="hero-ambient-glow" />
            <span className="hero-ring h-52 w-52 sm:h-64 sm:w-64" />
            <span className="hero-ring h-64 w-64 sm:h-80 sm:w-80" />
            <span className="hero-ring h-80 w-80 sm:h-[24rem] sm:w-[24rem]" />
            <span className="hero-orbit-dot left-[12%] top-[25%] h-5 w-5 sm:h-6 sm:w-6" />
            <span className="hero-orbit-dot right-[13%] top-[22%] h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hero-orbit-dot bottom-[20%] left-[18%] h-6 w-6 sm:h-7 sm:w-7" />
            <span className="hero-orbit-dot bottom-[16%] right-[17%] h-5 w-5 sm:h-6 sm:w-6" />
            <span className="hero-orbit-dot left-[24%] top-[10%] h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hero-orbit-dot right-[24%] top-[9%] h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hero-orbit-dot left-[28%] bottom-[7%] h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hero-orbit-dot right-[29%] bottom-[6%] h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hero-orbit-dot left-[38%] top-[4%] h-2.5 w-2.5 sm:h-3 sm:w-3" />
            <span className="hero-orbit-dot right-[39%] top-[4%] h-2.5 w-2.5 sm:h-3 sm:w-3" />
            <span className="hero-orbit-dot left-[8%] top-[45%] h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hero-orbit-dot right-[8%] top-[46%] h-3 w-3 sm:h-4 sm:w-4" />
          </div>
          <div className="relative z-10 h-44 w-44 overflow-hidden rounded-full border border-white/90 shadow-[0_14px_40px_rgba(107,79,91,0.14)] sm:h-52 sm:w-52">
            <Image
              src="/profile.jpg"
              alt="Portrait of Zuzana"
              fill
              sizes="(max-width: 640px) 176px, 208px"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <p className="section-title">{content.hero.eyebrow}</p>
        <h1 className="type-cursor mt-5 w-full max-w-3xl text-center text-3xl font-semibold tracking-tight text-accent-deep sm:text-4xl">
          {typedGreeting}
        </h1>
        <p className="mt-6 w-full max-w-3xl text-center text-lg leading-8 text-foreground/72">{content.hero.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <ButtonLink href="/projects">{content.hero.primaryCta}</ButtonLink>
          <ButtonLink href="/resume" variant="secondary">
            {content.hero.secondaryCta}
          </ButtonLink>
        </div>
        <div className="mt-12 flex w-full max-w-2xl flex-col items-center border-t border-border pt-6 text-center">
          <p className="section-title text-center">{content.hero.focusTitle}</p>
          <ul className="mt-5 max-w-xl space-y-4 text-sm leading-7 text-foreground/72">
            {content.hero.focusItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
