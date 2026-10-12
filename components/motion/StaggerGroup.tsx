"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

import { motionDuration, motionEase } from "@/lib/motion";

export interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  /** Délai entre l'apparition de chaque enfant, en secondes. */
  staggerDelay?: number;
  amount?: number;
}

/**
 * Groupe de reveal en cascade — réservé aux vraies collections sémantiques
 * (ex. les 3 portes de la Carte, la grille Galerie), jamais à du texte
 * isolé. Les enfants doivent être des `<StaggerItem>` : ils héritent de
 * l'orchestration `hidden`/`visible` du parent sans déclencher leur propre
 * observation de viewport.
 */
export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.06,
  amount = 0.2,
}: StaggerGroupProps) {
  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.base, ease: motionEase.outSoft },
  },
};

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
