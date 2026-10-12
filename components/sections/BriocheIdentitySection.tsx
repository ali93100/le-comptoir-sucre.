import Image from "next/image";

import { ArchFrame } from "@/components/ui/ArchFrame";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpeechBubble } from "@/components/ui/SpeechBubble";

/**
 * Scène dédiée à la mascotte et à l'identité du lieu — volontairement
 * centrée et symétrique, en contraste avec l'asymétrie du Hero et de
 * l'Introduction, pour marquer une respiration dans le rythme de la page.
 *
 * C'est ici que la brioche reçoit sa chorégraphie la plus riche (avec la
 * Livraison) : l'arche s'ouvre légèrement plus que celle du Hero
 * (échelle 0.94→1, c'est SA scène), puis la bulle "pop" avec un délai
 * supplémentaire, comme si elle prenait un instant avant de saluer.
 * `ArchFrame` reste volontairement non-interactive ici : cette arche est
 * décorative, pas une porte cliquable.
 *
 * Mascotte en image fournie (`brioche-croissant.png`, détourée de la même
 * planche de poses que le Hero) plutôt que le `BriocheCharacter` SVG —
 * pose croissant choisie pour coller à "un brin gourmande" dans le texte
 * ci-dessous.
 */
export function BriocheIdentitySection() {
  return (
    <Section id="brioche" tone="white" className="overflow-hidden">
      <Container className="flex flex-col items-center gap-10 text-center">
        <Reveal className="w-full">
          <SectionHeading
            align="center"
            eyebrow="Notre mascotte"
            title="La brioche qui donne son nom à la maison"
            description="Espiègle, un brin gourmande, elle veille sur chaque fournée et accueille chaque visiteur comme un habitué."
          />
        </Reveal>

        <div className="relative flex items-start justify-center gap-6">
          <BotanicalAccent className="mt-16 hidden h-20 w-20 -scale-x-100 opacity-60 sm:block" />

          <div className="relative">
            <Reveal distance={0} scaleFrom={0.94}>
              <ArchFrame
                tone="sauge"
                className="flex h-[280px] w-[240px] items-end justify-center overflow-hidden sm:h-[320px] sm:w-[280px]"
              >
                <Image
                  src="/images/brioche-croissant.png"
                  alt="La mascotte du Comptoir Sucré, croquant un croissant"
                  width={220}
                  height={183}
                  className="mb-[-10px] transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:scale-[1.04]"
                />
              </ArchFrame>
            </Reveal>

            <Reveal
              delay={0.25}
              distance={0}
              scaleFrom={0.9}
              className="absolute -top-6 -right-8 sm:-right-14"
            >
              <SpeechBubble className="rotate-2">Coucou, c&apos;est moi !</SpeechBubble>
            </Reveal>
          </div>

          <BotanicalAccent className="mt-16 hidden h-20 w-20 opacity-60 sm:block" />
        </div>
      </Container>
    </Section>
  );
}
