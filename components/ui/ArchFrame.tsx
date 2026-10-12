import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const archFrameVariants = cva(
  "relative overflow-hidden rounded-t-full rounded-b-3xl border-4 shadow-soft",
  {
    variants: {
      tone: {
        rose: "border-rose bg-rose/20",
        sauge: "border-sauge bg-sauge/20",
        // bg-white + border-terracotta/30 (pas border-beige) : posée sur
        // une section au fond beige, une bordure beige devient quasi
        // invisible (contraste quasi nul) — repéré sur le rendu réel de
        // la porte "Boissons".
        beige: "border-terracotta/30 bg-white",
      },
      // Neutre par défaut : le hover ne doit s'activer que sur une arche
      // qui représente une vraie interaction (ex. les portes de la Carte),
      // jamais sur une arche purement décorative (Hero, mascotte) — un
      // élément qui réagit au survol doit laisser penser qu'il est
      // actionnable (voir doc, section 4).
      interactive: {
        true: "cursor-pointer transition-[transform,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out-soft)] hover:scale-[1.02] hover:shadow-hover",
        false: "",
      },
    },
    defaultVariants: {
      tone: "beige",
      interactive: false,
    },
  },
);

export interface ArchFrameProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof archFrameVariants> {}

/**
 * La "porte de boutique" en plein cintre — motif central du design system
 * (voir doc, section 3). Le rayon n'arrondit que le haut, pour simuler une
 * arche ; utilisé pour les 3 portes de la Carte et, plus tard, pour la
 * transition entre pages.
 */
export function ArchFrame({ className, tone, interactive, ...props }: ArchFrameProps) {
  return (
    <div className={cn(archFrameVariants({ tone, interactive }), className)} {...props} />
  );
}
