import { cn } from "@/lib/utils";

export interface BotanicalAccentProps {
  className?: string;
}

/**
 * Trait botanique fin, en accent uniquement (voir design system, section 3 :
 * jamais dominant). Un seul motif pour l'instant ; d'autres variantes
 * pourront être ajoutées ici sans changer les appels existants.
 */
export function BotanicalAccent({ className }: BotanicalAccentProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("pointer-events-none stroke-sauge", className)}
      fill="none"
      strokeWidth={1.5}
    >
      <path d="M10,90 C20,60 15,30 40,10" />
      <path d="M18,55 C28,50 34,42 32,30" />
      <path d="M14,72 C25,70 32,64 30,54" />
    </svg>
  );
}
