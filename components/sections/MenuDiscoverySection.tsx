import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

/**
 * Aperçu de la carte — composition en deux colonnes (texte à gauche,
 * portes à droite). Les portes sont l'image fournie directement (3
 * portes illustrées, feuillage inclus) plutôt qu'une reconstruction en
 * `ArchFrame` : ce style texturé/éclairé n'est pas reproductible à la
 * main en SVG plat — même limite déjà rencontrée pour le personnage.
 *
 * Le PNG n'a pas de transparence (fond blanc en dur dans les pixels) ;
 * `mix-blend-multiply` fond ce blanc dans le beige de la section sans
 * retouche d'image — les couleurs des portes elles-mêmes restent
 * lisibles, juste légèrement teintées par la multiplication.
 *
 * Les portes sont cliquables via 3 `Link` transparents superposés en
 * tiers égaux à l'image (pas de vraies limites de porte détectables sur
 * une image plate) — une approximation raisonnable tant que ce ne sont
 * pas des éléments distincts. Chacune mène à sa page `/carte/<catégorie>`
 * (voir `components/menu/MenuCard` et ses 3 usages).
 *
 * Mascotte en image fournie (`brioche-run.png`, détourée de la même
 * planche de poses que le Hero) — pose course choisie pour "accourir"
 * ouvrir la porte, cohérente avec le texte à côté.
 */
export function MenuDiscoverySection() {
  return (
    <Section id="carte" tone="beige" className="overflow-hidden">
      <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-10">
        <Reveal className="flex flex-col items-start gap-5 md:col-span-5">
          <span className="font-ui text-sm font-medium tracking-[0.18em] text-terracotta uppercase">
            Notre carte
          </span>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            Sucré, salé, toujours fait avec passion.
          </h2>
          <div aria-hidden="true" className="flex items-center gap-3">
            <span className="h-px w-8 bg-rose" />
            <svg viewBox="0 0 24 24" className="h-3 w-3 fill-rose">
              <path d="M12 21s-7.5-4.6-10-9.3C.4 8.1 2.3 4.5 6 4.5c2 0 3.6 1.2 4.5 2.8.9-1.6 2.5-2.8 4.5-2.8 3.7 0 5.6 3.6 4 7.2C19.5 16.4 12 21 12 21Z" />
            </svg>
            <span className="h-px w-8 bg-rose" />
          </div>
          <p className="max-w-sm font-ui text-base leading-relaxed text-ink-soft">
            Des brioches artisanales préparées chaque jour avec des ingrédients frais et
            locaux.
          </p>
          <button type="button" className={cn(buttonVariants({ variant: "outline" }))}>
            Voir toute la carte
          </button>
        </Reveal>

        <div className="relative md:col-span-7">
          <Reveal>
            <div className="relative h-64 w-full sm:h-80 md:h-96">
              <Image
                src="/images/carte-portes.png"
                alt="Trois portes illustrées : Sucré, Salé et Boissons, la porte Salé entrouverte"
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-contain mix-blend-multiply"
              />
              <div className="absolute inset-0 grid grid-cols-3">
                <Link
                  href="/carte/sucre"
                  aria-label="Voir la carte Sucré"
                  className="group relative"
                >
                  <span className="absolute inset-4 rounded-md transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:bg-white/15 group-focus-visible:ring-2 group-focus-visible:ring-terracotta" />
                </Link>
                <Link
                  href="/carte/sale"
                  aria-label="Voir la carte Salé"
                  className="group relative"
                >
                  <span className="absolute inset-4 rounded-md transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:bg-white/15 group-focus-visible:ring-2 group-focus-visible:ring-terracotta" />
                </Link>
                <Link
                  href="/carte/boissons"
                  aria-label="Voir la carte Boissons"
                  className="group relative"
                >
                  <span className="absolute inset-4 rounded-md transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:bg-white/15 group-focus-visible:ring-2 group-focus-visible:ring-terracotta" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
            <Image
              src="/images/brioche-run.png"
              alt="La mascotte du Comptoir Sucré, qui accourt pour vous ouvrir la porte"
              width={64}
              height={53}
            />
            <p className="font-ui text-sm text-ink-soft italic">
              Clique ou laisse-moi t&apos;ouvrir !
            </p>
            <svg
              viewBox="0 0 32 24"
              aria-hidden="true"
              className="hidden h-5 w-7 stroke-terracotta sm:block"
              fill="none"
              strokeWidth={1.8}
              strokeLinecap="round"
            >
              <path d="M2 4c6 2 16 2 22 14" />
              <path d="M19 15l5 3-1-6" />
            </svg>
          </div>
        </div>
      </Container>
    </Section>
  );
}
