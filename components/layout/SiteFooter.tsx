import Image from "next/image";

import { MAPS_QUERY, OPENING_HOURS } from "@/components/sections/LocationSection";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#univers", label: "Présentation" },
  { href: "#carte", label: "Carte" },
  { href: "#livraison", label: "Livraison" },
  { href: "#galerie", label: "Galerie / Blog" },
  { href: "#ambiance", label: "Info / Contact" },
];

const INSTAGRAM_URL =
  "https://www.instagram.com/lecomptoirsucremu?exln=MXI1djY2b2hqbDRoeA%3D%3D";

/**
 * Pied de page — `<footer>` sémantique, distinct de `<Section>` (pas la
 * même intention narrative que les 8 scènes de la page). Adresse et
 * horaires viennent de `LocationSection` (`MAPS_QUERY`/`OPENING_HOURS`)
 * — une seule source pour les deux endroits où ils apparaissent.
 * Instagram est un vrai lien ; Facebook reste un PLACEHOLDER explicite,
 * à remplacer dès que son URL est connue. Logo et liens de navigation
 * identiques à `SiteHeader` (même logo réel, mêmes 6 ancres, même ordre)
 * — une seule liste de liens à tenir à jour entre les deux serait plus
 * robuste, mais `SiteHeader` gère aussi l'état "scrolled" (couleurs
 * conditionnelles) que le footer n'a pas besoin de reproduire ; dupliquer
 * ici reste le plus simple tant qu'il n'y a que deux endroits.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-beige">
      <Container className="flex flex-col gap-10 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full shadow-soft">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo Le Comptoir Sucré"
                  fill
                  sizes="44px"
                />
              </div>
              <span className="font-display text-lg text-ink">Le Comptoir Sucré</span>
            </div>
            <p className="font-ui text-sm text-ink-soft">
              Café, brioches sucrées &amp; salées à Flic en Flac.
            </p>
          </div>

          <nav aria-label="Navigation du pied de page" className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-ui text-sm text-ink-soft transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-terracotta"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 font-ui text-sm text-ink-soft">
            <span>{MAPS_QUERY}</span>
            <span>{OPENING_HOURS}</span>
            <span className="mt-2 flex items-center gap-1.5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-terracotta"
              >
                Instagram
              </a>
              <span aria-hidden="true">·</span>
              <span>Facebook</span>
            </span>
          </div>
        </div>

        <div className="border-t border-ink/10 pt-6 font-ui text-xs text-ink-soft">
          © 2026 Le Comptoir Sucré. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}
