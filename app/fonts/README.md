# Polices auto-hébergées

- `fraunces-variable-*.woff2` — police finale (Fraunces), extraite du
  paquet npm `@fontsource-variable/fraunces` (licence SIL Open Font
  License 1.1). Ne pas remplacer.
- `ui-sans-placeholder-*.woff2` — **placeholder temporaire** (Plus Jakarta
  Sans, même licence OFL), en attente des fichiers réels de "General Sans"
  (gratuits sur https://www.fontshare.com/fonts/general-sans). Quand ils
  sont disponibles : remplacer ces deux fichiers et mettre à jour les
  chemins dans `app/layout.tsx` (variable `uiSans`) — aucun autre fichier
  du projet ne référence la police par son nom.
