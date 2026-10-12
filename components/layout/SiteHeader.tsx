"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WHATSAPP_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#accueil", label: "Accueil", active: true },
  { href: "#univers", label: "Présentation" },
  { href: "#carte", label: "Carte" },
  { href: "#livraison", label: "Livraison" },
  { href: "#galerie", label: "Galerie / Blog" },
  { href: "#ambiance", label: "Info / Contact" },
];

const SCROLL_THRESHOLD = 60;

/**
 * En-tête du site — `fixed` : reste à l'écran en permanence pendant le
 * scroll au lieu de disparaître avec le Hero (`sticky` ne convenait pas
 * ici : il réserve sa propre place dans la mise en page, ce qui aurait
 * cassé la superposition transparente sur la photo du Hero — `fixed`,
 * comme `absolute` avant lui, ne réserve aucun espace, donc le `pt-40
 * md:pt-44` du Hero reste nécessaire pour compenser). Transparent + texte
 * blanc en haut de page (lisible sur le fond sombre du Hero), puis
 * bascule vers un fond clair + texte sombre dès qu'on a commencé à
 * scroller — sinon le texte blanc deviendrait illisible une fois sur les
 * sections claires. "use client" uniquement pour ce petit état de scroll.
 *
 * Le logo (`public/images/logo.jpg`) est le vrai logo du Comptoir Sucré,
 * extrait de son compte Instagram — remplace l'ancien badge texte +
 * mascotte SVG placeholder.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[var(--z-nav)] transition-colors duration-[var(--duration-base)] ease-[var(--ease-standard)]",
        scrolled && "bg-cream/95 shadow-soft backdrop-blur-sm",
      )}
    >
      <Container className="flex h-28 items-center justify-between gap-6">
        <a
          href="#accueil"
          aria-label="Le Comptoir Sucré — retour en haut de page"
          className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full shadow-soft"
        >
          <Image src="/images/logo.jpg" alt="Logo Le Comptoir Sucré" fill sizes="96px" />
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative pb-1 font-ui text-[11px] font-medium tracking-[0.14em] whitespace-nowrap uppercase transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
                scrolled
                  ? "text-ink hover:text-terracotta"
                  : "text-white hover:text-rose",
                link.active &&
                  cn(
                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px",
                    scrolled ? "after:bg-terracotta" : "after:bg-rose",
                  ),
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "text-xs tracking-[0.12em] uppercase",
          )}
        >
          Commander
        </a>
      </Container>
    </header>
  );
}
