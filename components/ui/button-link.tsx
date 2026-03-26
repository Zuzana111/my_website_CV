import type { ReactNode } from "react";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "border-b border-accent pb-1 text-accent-deep hover:border-accent-deep hover:text-accent-deep"
      : "text-foreground/72 hover:text-accent-deep";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}
