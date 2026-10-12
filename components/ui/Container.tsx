import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

/**
 * Conteneur centré, largeur maximale alignée sur les proportions de la
 * maquette (~1280–1440px). Toujours utilisé pour aligner le contenu d'une
 * section — jamais de marge horizontale en dur ailleurs.
 *
 * Marge droite élargie à partir de `sm` : `SocialRail` est fixe sur le
 * bord droit du viewport à cette largeur (voir `components/layout/
 * SocialRail.tsx`) ; sans cette réserve, le contenu des sections larges
 * (ex. les portes de la Carte) vient buter dessous.
 */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] pr-6 pl-6 sm:pr-24 md:pr-28 md:pl-10",
        className,
      )}
      {...props}
    />
  );
}
