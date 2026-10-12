import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { cn } from "@/lib/utils";

const galleryItems = [
  { label: "Photo — comptoir", ratio: "portrait" as const },
  { label: "Photo — brioche du jour", ratio: "square" as const },
  { label: "Photo — terrasse", ratio: "landscape" as const },
  { label: "Photo — ambiance", ratio: "square" as const },
  { label: "Photo — préparation", ratio: "portrait" as const },
  { label: "Photo — clientèle", ratio: "square" as const },
];

/**
 * Grille aux ratios volontairement variés (portrait / carré / paysage) pour
 * un rythme moins mécanique qu'une grille uniforme — cohérent avec la
 * direction "organique / légèrement quirky" du design system.
 *
 * Stagger un peu plus rapide qu'à la Carte (6 éléments contre 3) pour que
 * la cascade reste lisible sans traîner.
 */
export function GalleryPreviewSection() {
  return (
    <Section id="galerie" tone="cream">
      <Container className="flex flex-col items-center gap-12">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Galerie / Blog"
            title="Un aperçu de la maison"
            description="Quelques instantanés, en attendant la galerie complète."
          />
        </Reveal>

        <StaggerGroup
          staggerDelay={0.05}
          className="grid w-full grid-cols-2 items-start gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {galleryItems.map((item) => (
            <StaggerItem key={item.label}>
              <ImagePlaceholder label={item.label} ratio={item.ratio} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <button type="button" className={cn(buttonVariants({ variant: "outline" }))}>
            Voir la galerie complète
          </button>
        </Reveal>
      </Container>
    </Section>
  );
}
