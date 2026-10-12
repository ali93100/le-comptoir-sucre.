/**
 * Constantes Motion — recopient les tokens CSS de `app/globals.css`
 * (`--duration-*`, `--ease-*`) plutôt que d'introduire de nouvelles valeurs :
 * Motion anime en JS et ne peut pas lire directement les `var(--...)` CSS
 * dans ses props `transition`, d'où cette copie explicite. Toute nouvelle
 * durée/easing doit d'abord exister dans `globals.css`.
 */
export const motionDuration = {
  fast: 0.15,
  base: 0.3,
  slow: 0.6,
} as const;

export const motionEase = {
  standard: [0.4, 0, 0.2, 1] as const,
  outSoft: [0.16, 1, 0.3, 1] as const,
};
