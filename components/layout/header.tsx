"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCopy, useLocale } from "@/components/layout/locale-provider";
import { trackEvent } from "@/lib/analytics";
import { siteMeta } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  const content = useCopy();

  return (
    <header className="border-b border-border">
      <div className="page-shell flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <Link href="/" className="text-sm font-semibold tracking-[0.28em] text-accent-deep uppercase">
            {siteMeta.name}
          </Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {content.nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition ${
                    isActive ? "font-semibold text-accent-deep" : "text-foreground/66 hover:text-accent-deep"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`text-sm transition ${
                locale === "en" ? "font-semibold text-accent-deep" : "text-foreground/66 hover:text-accent-deep"
              }`}
            >
              {content.ui.english}
            </button>
            <span className="text-foreground/30">/</span>
            <button
              type="button"
              onClick={() => setLocale("cs")}
              className={`text-sm transition ${
                locale === "cs" ? "font-semibold text-accent-deep" : "text-foreground/66 hover:text-accent-deep"
              }`}
            >
              {content.ui.czech}
            </button>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {content.sidebar.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() =>
                  trackEvent(`${link.label.toLowerCase()}_click`, {
                    link_location: "header",
                    destination: link.label.toLowerCase()
                  })
                }
                className="text-sm text-foreground/66 transition hover:text-accent-deep"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
