import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Label + titre éditorial réutilisés en tête de chaque section (voir
 * maquette : "NOTRE CARTE" / "Sucré, salé, toujours fait avec passion.").
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="font-ui text-sm font-medium tracking-[0.18em] text-terracotta uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="font-ui text-base leading-relaxed text-ink-soft">{description}</p>
      ) : null}
    </div>
  );
}
