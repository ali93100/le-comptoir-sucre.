"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

import { motionDuration, motionEase } from "@/lib/motion";

export interface RevealProps {
  children: ReactNode;
  /** Délai avant le début de l'animation, en secondes. */
  delay?: number;
  duration?: number;
  /** Décalage vertical de départ, en px. 0 pour un simple fondu/échelle. */
  distance?: number;
  /** Échelle de départ (ex. 0.96 pour une entrée subtile). 1 = pas d'échelle. */
  scaleFrom?: number;
  /** Part de l'élément visible avant déclenchement (0-1). */
  amount?: number;
  className?: string;
}

/**
 * Reveal au scroll réutilisable — fondu + translation verticale (+ échelle
 * optionnelle), déclenché une seule fois (`viewport.once`). N'anime jamais
 * width/height/top/left, uniquement transform/opacity. Toute rotation
 * décorative statique (ex. `-rotate-3`) doit rester sur l'élément enfant,
 * pas ici, pour ne pas entrer en conflit avec le transform animé par Motion.
 */
export function Reveal({
  children,
  delay = 0,
  duration = motionDuration.base,
  distance = 20,
  scaleFrom = 1,
  amount = 0.3,
  className,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y: distance, scale: scaleFrom },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ duration, delay, ease: motionEase.outSoft }}
    >
      {children}
    </motion.div>
  );
}
