import { cn } from "@/lib/utils";

export interface ImagePlaceholderProps {
  label?: string;
  ratio?: "square" | "portrait" | "landscape";
  className?: string;
}

const ratioClasses: Record<NonNullable<ImagePlaceholderProps["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

/**
 * Placeholder TEMPORAIRE pour tout visuel (photo, carte) qui n'existe pas
 * encore — même langage visuel que `BriocheCharacterPlaceholder` (bordure
 * pointillée terracotta) pour que le contenu à remplacer reste repérable
 * d'un coup d'œil. Volontairement minimal : à remplacer par `next/image`
 * dès que les vrais visuels seront disponibles, sans changer les appels
 * (mêmes props `className` pour la mise en page).
 */
export function ImagePlaceholder({
  label = "Photo à venir",
  ratio = "square",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex items-center justify-center rounded-lg border-2 border-dashed border-terracotta/40 bg-white px-4 text-center font-ui text-xs tracking-wide text-terracotta/80 uppercase",
        ratioClasses[ratio],
        className,
      )}
    >
      {label}
    </div>
  );
}
