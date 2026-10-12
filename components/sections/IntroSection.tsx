import Image from "next/image";

import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Introduction — pose l'ambiance et l'histoire du café avant de présenter la
 * brioche (voir doc, section 4). Composition en collage asymétrique (deux
 * cadres photo décalés, légèrement inclinés) plutôt qu'une simple colonne
 * texte + image, pour varier le rythme après le Hero.
 *
 * Section volontairement calme : reveals simples, sans stagger ni brioche —
 * une respiration après l'entrée en scène du Hero. La photo "détail
 * brioche" apparaît avec un léger délai après la photo de salle, pour
 * suggérer un collage qui s'assemble.
 */
export function IntroSection() {
  return (
    <Section id="univers" tone="beige" className="overflow-hidden">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Notre univers"
            title="Un coin de douceur, posé entre plage et jardin"
            description="Le Comptoir Sucré est né d'une envie simple : un endroit où prendre le temps, entre bon café, brioches tièdes et lumière du matin."
            className="mx-auto"
          />
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="font-ui text-base leading-relaxed text-ink-soft md:text-lg">
              Ici, chaque brioche est façonnée à la main, chaque table est pensée comme un
              coin de jardin intérieur, et chaque visite commence par un accueil
              chaleureux — celui d&apos;une maison plus que d&apos;un café.
            </p>
          </Reveal>

          <div className="relative md:col-span-6 md:col-start-7">
            <Reveal distance={16}>
              <div className="relative h-56 w-full -rotate-2 overflow-hidden rounded-lg shadow-soft sm:h-64 md:h-72">
                <Image
                  src="/images/hero-cafe-interior.jpg"
                  alt="Salle du café, ambiance chaleureuse"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover"
                  style={{ objectPosition: "75% 20%" }}
                />
              </div>
            </Reveal>
            <Reveal
              delay={0.15}
              distance={16}
              className="absolute -bottom-10 -left-6 w-2/5 sm:-left-10"
            >
              <ImagePlaceholder
                ratio="portrait"
                label="Photo — détail brioche"
                className="w-full rotate-3 shadow-elevated"
              />
            </Reveal>
            <BotanicalAccent className="absolute -top-8 right-0 h-16 w-16 opacity-60" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
