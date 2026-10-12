import Image from "next/image";

import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionWave } from "@/components/ui/SectionWave";
import { SpeechBubble } from "@/components/ui/SpeechBubble";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { WHATSAPP_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

/**
 * Hero — première scène de la narration homepage (voir doc, section 4).
 *
 * Composition volontairement asymétrique (texte 7/12, cluster visuel 5/12
 * décalé et non centré verticalement) plutôt qu'un split générique
 * "texte à gauche / image à droite". Pas d'`ArchFrame` autour de la
 * mascotte ici (retiré à la demande) — elle flotte directement sur la
 * photo, sans cadre de porte.
 *
 * Stagger de texte très court (eyebrow quasi immédiat, puis h1 → sous-titre
 * → CTA) pour ne pas retarder le message. La mascotte s'anime en entrée
 * avec une échelle très subtile (0.96→1), pas d'effet brusque.
 *
 * La mascotte ici est une image fournie (`public/images/brioche-wave.png`,
 * détourée d'une planche de poses fournie — fond uni retiré en alpha via
 * un script ponctuel, pas de retouche manuelle), pas le `BriocheCharacter`
 * SVG utilisé dans les deux autres scènes (Brioche & identité, Livraison)
 * — incohérence de style assumée pour l'instant, scope limité au Hero
 * comme demandé.
 */
export function HeroSection() {
  return (
    <Section
      id="accueil"
      tone="cream"
      className="overflow-hidden bg-ink pt-40 text-white md:pt-44"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cafe-interior.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/35 via-ink/35 to-ink/65" />
      </div>

      <SectionWave tone="beige" className="absolute inset-x-0 bottom-0" />

      <Container className="relative grid grid-cols-1 gap-16 md:grid-cols-12 md:items-center md:gap-8">
        <StaggerGroup
          staggerDelay={0.06}
          amount={0.1}
          className="flex flex-col items-start gap-6 md:col-span-7"
        >
          <StaggerItem>
            <span className="font-ui text-sm font-medium tracking-[0.18em] text-rose uppercase">
              Café, brioches &amp; douceurs — Flic en Flac
            </span>
          </StaggerItem>

          <StaggerItem>
            <h1 className="max-w-xl font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
              Entrez dans <em className="text-rose italic">l&apos;univers</em> du Comptoir
              Sucré
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-md font-ui text-base leading-relaxed text-white/80 md:text-lg">
              Brioches sucrées et salées faites maison, cafés de spécialité et un accueil
              qui sent bon la maison — à quelques pas de la plage de Flic en Flac.
            </p>
          </StaggerItem>

          <StaggerItem className="mt-2 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Commander en livraison
            </a>
            <a
              href="#carte"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white text-white hover:border-white hover:bg-white hover:text-ink",
              )}
            >
              Découvrir la carte
            </a>
          </StaggerItem>
        </StaggerGroup>

        <div className="relative flex justify-center md:col-span-5 md:col-start-8 md:justify-end">
          <Reveal delay={0.15} distance={0} scaleFrom={0.96}>
            <Image
              src="/images/brioche-wave.png"
              alt="La mascotte du Comptoir Sucré, en train de saluer"
              width={280}
              height={234}
              className="transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:scale-[1.04]"
            />
          </Reveal>

          <Reveal
            delay={0.4}
            distance={0}
            scaleFrom={0.9}
            className="absolute -top-2 left-0 sm:-left-6"
          >
            <SpeechBubble tailSide="right" className="-rotate-3">
              Bienvenue chez Le Comptoir Sucré !
            </SpeechBubble>
          </Reveal>

          <BotanicalAccent className="absolute -right-2 -bottom-8 h-20 w-20 opacity-70" />
        </div>
      </Container>
    </Section>
  );
}
