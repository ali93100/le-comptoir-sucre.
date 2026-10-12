import { cn } from "@/lib/utils";

export interface OrganicBlobProps {
  tone?: "terracotta" | "rose" | "sauge";
  className?: string;
}

const fillByTone: Record<NonNullable<OrganicBlobProps["tone"]>, string> = {
  terracotta: "fill-terracotta/25",
  rose: "fill-rose/40",
  sauge: "fill-sauge/30",
};

/**
 * Forme organique décorative en fond de section (voir maquette, section
 * Univers). Purement décoratif : `aria-hidden`, ne doit jamais recevoir de
 * contenu ni de sens.
 */
export function OrganicBlob({ tone = "terracotta", className }: OrganicBlobProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={cn("pointer-events-none absolute -z-10", fillByTone[tone], className)}
    >
      <path d="M50.2,-58.4C63.4,-49.6,71.6,-32.4,74.7,-14.3C77.8,3.9,75.8,23,66.4,37.8C57,52.7,40.2,63.3,21.6,68.8C3.1,74.3,-17.2,74.6,-34.8,67.5C-52.4,60.4,-67.3,45.8,-73.6,28.1C-79.9,10.4,-77.6,-10.4,-68.5,-27.4C-59.4,-44.5,-43.5,-57.8,-26.6,-65.6C-9.7,-73.4,8.3,-75.7,25.1,-71.4C41.9,-67.1,57.1,-56.3,50.2,-58.4Z" />
    </svg>
  );
}
