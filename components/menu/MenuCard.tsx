import { ArchFrame } from "@/components/ui/ArchFrame";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export interface MenuItem {
  name: string;
  price: number;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  note?: string;
}

export interface MenuCardProps {
  leftEyebrow: [string, string, string];
  rightEyebrow: [string, string, string];
  leftColumn: MenuCategory[];
  rightColumn: MenuCategory[];
  tagline: [string, string, string];
  /** Couleur de l'arche porteuse du texte en bas de carte ; l'autre arche
   * (décorative, derrière) prend automatiquement l'autre teinte. */
  archTone?: "sauge" | "rose";
  /** Bandeau "contenu indicatif" — à activer tant que la vraie carte
   * n'est pas fournie (voir `SucreMenu`/`SaleMenu`). Absent par défaut
   * (la carte Boissons, elle, est un contenu réel). */
  indicative?: boolean;
}

function CategoryBlock({ category }: { category: MenuCategory }) {
  return (
    <div>
      <h3 className="font-display text-2xl tracking-wide text-ink uppercase">
        {category.title}
      </h3>
      <div className="mt-2 mb-4 h-px w-full bg-ink/15" />
      <ul className="flex flex-col gap-3">
        {category.items.map((item) => (
          <li
            key={item.name}
            className="flex items-center gap-2 font-ui text-sm text-ink-soft md:text-base"
          >
            <span>{item.name}</span>
            <span className="h-0 flex-1 border-b border-dotted border-ink/25" />
            <span className="font-medium text-ink">{item.price}</span>
          </li>
        ))}
      </ul>
      {category.note && (
        <p className="mt-3 font-ui text-xs tracking-[0.15em] text-terracotta uppercase">
          {category.note}
        </p>
      )}
    </div>
  );
}

/**
 * Carte de menu générique — structure commune aux 3 pages `/carte/*`
 * (Boissons, Sucré, Salé) : carte beige arrondie, en-tête arche + titre
 * encadré d'éléments fins, deux colonnes de catégories avec lignes
 * pointillées entre nom et prix, arches décoratives en bas. Couleurs
 * limitées aux tokens existants — `sauge` et `rose` portent le "peu de
 * vert et de rose" en accents seulement (titres et prix restent en
 * `ink` pour la lisibilité).
 */
export function MenuCard({
  leftEyebrow,
  rightEyebrow,
  leftColumn,
  rightColumn,
  tagline,
  archTone = "sauge",
  indicative = false,
}: MenuCardProps) {
  const backTone = archTone === "sauge" ? "rose" : "sauge";

  return (
    <Section tone="cream">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-beige px-6 py-14 shadow-elevated sm:px-10 md:px-16 md:py-16">
            {indicative && (
              <p className="mb-8 text-center font-ui text-xs tracking-widest text-terracotta italic">
                Carte indicative, générée en attendant la carte définitive du Comptoir
                Sucré — prix et articles non confirmés.
              </p>
            )}

            <div className="hidden flex-col gap-1 text-left font-ui text-[11px] tracking-[0.15em] text-ink-soft uppercase md:absolute md:top-10 md:left-10 md:flex">
              <span>{leftEyebrow[0]}</span>
              <span>{leftEyebrow[1]}</span>
              <span>{leftEyebrow[2]}</span>
              <span className="mt-1 h-px w-6 bg-ink/30" />
            </div>
            <div className="hidden flex-col items-end gap-1 text-right font-ui text-[11px] tracking-[0.15em] text-ink-soft uppercase md:absolute md:top-10 md:right-10 md:flex">
              <span>{rightEyebrow[0]}</span>
              <span>{rightEyebrow[1]}</span>
              <span>{rightEyebrow[2]}</span>
              <span className="mt-1 h-px w-6 bg-ink/30" />
            </div>

            <div className="flex flex-col items-center gap-3 text-center">
              <ArchFrame tone={archTone} className="h-20 w-16" />
              <h1 className="font-display text-4xl tracking-wide text-ink uppercase md:text-5xl">
                Le Comptoir Sucré
              </h1>
              <p className="font-ui text-xs tracking-[0.3em] text-ink-soft uppercase">
                Coffee shop
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:mt-16 md:grid-cols-2">
              <div className="flex flex-col gap-10">
                {leftColumn.map((category) => (
                  <CategoryBlock key={category.title} category={category} />
                ))}
              </div>
              <div className="flex flex-col gap-10">
                {rightColumn.map((category) => (
                  <CategoryBlock key={category.title} category={category} />
                ))}
              </div>
            </div>

            <div className="mt-16 flex flex-wrap items-end justify-between gap-6">
              <div className="relative h-36 w-28 md:h-44 md:w-36">
                <div
                  className={cn(
                    "absolute bottom-0 left-5 h-full w-24 rounded-t-full opacity-70 md:left-6 md:w-28",
                    backTone === "rose" ? "bg-rose" : "bg-sauge",
                  )}
                />
                <div
                  className={cn(
                    "absolute bottom-0 left-0 flex h-[88%] w-28 flex-col justify-end gap-0.5 rounded-t-full px-4 pb-6 font-ui text-[10px] tracking-wide text-white uppercase md:w-32 md:text-xs",
                    archTone === "rose" ? "bg-rose" : "bg-sauge",
                  )}
                >
                  <span>{tagline[0]}</span>
                  <span>{tagline[1]}</span>
                  <span>{tagline[2]}</span>
                  <span className="mt-1 h-px w-6 bg-white/50" />
                </div>
              </div>
              <p className="font-ui text-xs tracking-[0.15em] text-ink-soft uppercase italic">
                Le plaisir
                <br />
                est un bon
                <br />
                réflexe
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
