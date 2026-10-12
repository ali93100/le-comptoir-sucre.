import { cn } from "@/lib/utils";

/**
 * Placeholder de logo — badge circulaire avec les initiales.
 *
 * Ce n'est PAS le design final : le vrai logo (mascotte + texte arqué,
 * voir maquette) fait partie des assets à produire (voir doc, section
 * finale "Assets à produire"). Ce composant existe pour valider les
 * dimensions et l'emplacement dans la navigation.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full border border-terracotta/30 bg-white font-display text-sm text-terracotta shadow-soft",
        className,
      )}
      role="img"
      aria-label="Le Comptoir Sucré"
    >
      LCS
    </div>
  );
}
