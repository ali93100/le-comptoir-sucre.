import type { Metadata } from "next";
import localFont from "next/font/local";

import { MotionProvider } from "@/components/providers/MotionProvider";

import "./globals.css";

/**
 * Police d'affichage — Fraunces (voir doc, section 3 "Typographie").
 *
 * Auto-hébergée via `next/font/local` (fichiers variables, licence SIL Open
 * Font License) plutôt que `next/font/google` : ça évite toute requête
 * réseau au build ou au runtime vers les serveurs Google, conformément à la
 * consigne "éviter les imports Google Fonts côté client". `weight`
 * déclare la plage variable (100–900) exposée via `font-weight` normal.
 */
const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-variable-normal.woff2", style: "normal" },
    { path: "./fonts/fraunces-variable-italic.woff2", style: "italic" },
  ],
  weight: "100 900",
  variable: "--font-fraunces",
  display: "swap",
});

/**
 * Police UI/texte — PLACEHOLDER TEMPORAIRE.
 *
 * La cible du design system est "General Sans" (Fontshare), qui doit être
 * auto-hébergée ici même une fois ses fichiers .woff2 récupérés (licence
 * gratuite sur fontshare.com) — il suffira de remplacer les deux fichiers
 * dans `app/fonts/` et de mettre à jour les chemins ci-dessous, sans
 * toucher au reste du projet. En attendant, Plus Jakarta Sans (même
 * famille géométrique, bon rendu en majuscules espacées) sert de
 * remplacement fonctionnel auto-hébergé.
 */
const uiSans = localFont({
  src: [
    { path: "./fonts/ui-sans-placeholder-normal.woff2", style: "normal" },
    { path: "./fonts/ui-sans-placeholder-italic.woff2", style: "italic" },
  ],
  weight: "200 800",
  variable: "--font-ui-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Comptoir Sucré — Café, brioches sucrées & salées à Flic en Flac",
  description:
    "Le Comptoir Sucré, café brunch/lunch à Flic en Flac, Île Maurice. Brioches sucrées et salées faites maison, café et boissons.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${uiSans.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
