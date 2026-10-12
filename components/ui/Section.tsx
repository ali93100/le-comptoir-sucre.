import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("relative scroll-mt-28 py-16 md:py-24", {
  variants: {
    tone: {
      cream: "bg-cream",
      beige: "bg-beige",
      white: "bg-white",
    },
  },
  defaultVariants: {
    tone: "cream",
  },
});

export interface SectionProps
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {}

/**
 * Bloc de section pleine largeur avec espacement vertical constant et fond
 * pris dans la palette. Une page est une suite de <Section>, chacune avec
 * une intention narrative propre (voir doc, section 4 : homepage comme
 * narration continue).
 *
 * `scroll-mt-28` (112px) : `SiteHeader` est `fixed` en permanence, donc
 * sans cette marge, un lien d'ancre (`#carte`, `#galerie`...) ferait
 * défiler le haut de la section juste sous le header, caché derrière
 * lui.
 */
export function Section({ className, tone, ...props }: SectionProps) {
  return <section className={cn(sectionVariants({ tone }), className)} {...props} />;
}
