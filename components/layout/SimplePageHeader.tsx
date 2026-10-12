import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

export interface SimplePageHeaderProps {
  backHref?: string;
  backLabel?: string;
}

/**
 * En-tête simple et opaque pour les pages hors homepage (`/carte/*`).
 * `SiteHeader` ne convient pas ici : il est transparent avec du texte
 * blanc, pensé pour reposer sur la photo sombre du Hero — sans ce fond,
 * le texte blanc serait illisible dès le chargement. Un bandeau
 * `bg-cream` uni avec texte sombre reste simple et toujours lisible, quel
 * que soit le contenu de la page.
 */
export function SimplePageHeader({
  backHref = "/#carte",
  backLabel = "← Retour à la carte",
}: SimplePageHeaderProps) {
  return (
    <header className="border-b border-ink/10 bg-cream">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="Le Comptoir Sucré — retour à l'accueil"
          className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full shadow-soft"
        >
          <Image src="/images/logo.jpg" alt="Logo Le Comptoir Sucré" fill sizes="44px" />
        </Link>
        <Link
          href={backHref}
          className="font-ui text-sm font-medium text-ink-soft transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-terracotta"
        >
          {backLabel}
        </Link>
      </Container>
    </header>
  );
}
