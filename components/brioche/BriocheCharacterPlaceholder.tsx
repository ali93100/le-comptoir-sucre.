import { cn } from "@/lib/utils";

export interface BriocheCharacterPlaceholderProps {
  size?: number;
  label?: string;
  className?: string;
}

/**
 * Placeholder TEMPORAIRE de la mascotte brioche.
 *
 * Ce n'est pas le design final — il sert uniquement à vérifier les
 * dimensions, le positionnement et l'intégration dans une section avant que
 * les vrais assets (SVG + Lottie, voir doc "Assets à produire") n'existent.
 * `BriocheCharacter` (le composant final, piloté par `BriocheController`)
 * remplacera ce composant à l'étape dédiée au personnage — ne pas
 * anticiper son design ici.
 */
export function BriocheCharacterPlaceholder({
  size = 160,
  label = "brioche",
  className,
}: BriocheCharacterPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder du personnage (${label})`}
      style={{ width: size, height: size }}
      className={cn(
        "flex items-center justify-center rounded-full border-2 border-dashed border-terracotta/50 bg-terracotta/10 font-ui text-xs tracking-wide text-terracotta uppercase",
        className,
      )}
    >
      {label}
    </div>
  );
}
