"use client";

import { MotionConfig } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Point d'entrée unique de la config Motion pour toute l'app.
 *
 * `reducedMotion="user"` fait respecter `prefers-reduced-motion` à TOUTE
 * animation Motion automatiquement — sans ça, chaque composant devrait
 * vérifier `useReducedMotion()` individuellement. Ne couvre que Motion : la
 * règle `prefers-reduced-motion` pour les transitions CSS (hover, etc.)
 * reste gérée séparément par le bloc `@media` déjà présent dans
 * `app/globals.css`.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
