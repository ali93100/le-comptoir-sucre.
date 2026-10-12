import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface SpeechBubbleProps {
  children: ReactNode;
  tailSide?: "left" | "right";
  className?: string;
}

/**
 * Bulle de dialogue façon bande dessinée pour la mascotte (voir maquette,
 * hero : "Bienvenue chez Le Comptoir Sucré !"). La petite queue est un carré
 * tourné à 45°, dans le même fond que la bulle.
 */
export function SpeechBubble({
  children,
  tailSide = "left",
  className,
}: SpeechBubbleProps) {
  return (
    <div
      className={cn(
        "relative w-fit max-w-[220px] rounded-2xl bg-white px-4 py-3 shadow-soft",
        "font-ui text-sm text-ink",
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "absolute -bottom-1.5 h-3 w-3 rotate-45 bg-white",
          tailSide === "left" ? "left-6" : "right-6",
        )}
      />
    </div>
  );
}
