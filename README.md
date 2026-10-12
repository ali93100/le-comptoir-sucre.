# Le Comptoir Sucré

Site du café Le Comptoir Sucré (Flic en Flac, Île Maurice). Next.js (App
Router) + TypeScript + Tailwind CSS v4.

## Démarrer

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## État du projet — Étape 1 : fondation

Cette étape pose uniquement la fondation technique : tokens de design,
typographie, primitives UI génériques et un placeholder de la mascotte.
**Aucune page finale, aucune animation complexe, aucune galerie/formulaire
n'est encore implémentée** — ce sera l'objet des étapes suivantes.

`app/page.tsx` est une page de vérification temporaire (pas la homepage
finale) : elle affiche les tokens de couleur, la typographie et les
primitives pour valider visuellement la fondation avant de construire les
vraies sections.

## Scripts

| Commande               | Rôle                                     |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Serveur de développement                 |
| `npm run build`        | Build de production                      |
| `npm run typecheck`    | Vérification TypeScript (`tsc --noEmit`) |
| `npm run lint`         | ESLint                                   |
| `npm run format`       | Formatage Prettier (écrit les fichiers)  |
| `npm run format:check` | Vérifie le formatage sans modifier       |

## Design tokens — source unique de vérité

Toutes les valeurs de couleur, rayon, ombre et espacement sont définies une
seule fois, dans `app/globals.css` (`:root` pour les valeurs brutes, bloc
`@theme inline` pour les exposer comme classes Tailwind : `bg-terracotta`,
`rounded-pill`, `shadow-soft`, `font-display`, etc.). Ne jamais dupliquer
une valeur en dur dans un composant — l'ajouter comme token si besoin.

## Typographie

- **Fraunces** (affichage/titres) — police finale, auto-hébergée.
- **Police UI/texte** — placeholder temporaire (Plus Jakarta Sans) en
  attendant les fichiers réels de "General Sans" (Fontshare, gratuit). Voir
  `app/fonts/README.md` pour la marche à suivre au remplacement.

## Documentation du projet

L'architecture complète (design system, comportement de la mascotte,
transitions de page, modèle de données, SEO, etc.) est documentée
séparément et validée avec le client avant chaque étape d'implémentation.
