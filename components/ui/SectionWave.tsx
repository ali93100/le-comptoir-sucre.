import { cn } from "@/lib/utils";

export interface SectionWaveProps {
  tone?: "cream" | "beige" | "white";
  flip?: boolean;
  className?: string;
}

const fillByTone: Record<NonNullable<SectionWaveProps["tone"]>, string> = {
  cream: "fill-cream",
  beige: "fill-beige",
  white: "fill-white",
};

/**
 * Divideur en vague entre deux sections (voir maquette, pied du hero).
 * `tone` = la couleur de la section qui SUIT la vague (celle que la vague
 * "recouvre" visuellement). `flip` retourne la vague pour l'utiliser en
 * haut de section plutôt qu'en pied.
 */
export function SectionWave({
  tone = "cream",
  flip = false,
  className,
}: SectionWaveProps) {
  return (
    <svg
      viewBox="0 0 1440 100"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none block h-16 w-full md:h-24",
        flip && "rotate-180",
        fillByTone[tone],
        className,
      )}
    >
      <path d="M0,40 C240,100 480,0 720,30 C960,60 1200,100 1440,40 L1440,100 L0,100 Z" />
    </svg>
  );
}
