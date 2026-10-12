import Image from "next/image";

import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SpeechBubble } from "@/components/ui/SpeechBubble";
import { WHATSAPP_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

/**
 * Dernière scène avant le footer : une carte blanche `shadow-elevated`
 * (l'ombre la plus marquée du système, réservée à ce moment "spotlight")
 * porte l'appel à l'action principal — commander en livraison, pas
 * réserver une table (le café n'a pas d'offre de réservation). On évite
 * un bandeau plein terracotta ici pour ne pas avoir à introduire une
 * nouvelle variante de `Button` juste pour assurer le contraste sur fond
 * foncé.
 *
 * C'est le point d'orgue de la brioche avec la section mascotte : image
 * fournie (`brioche-bags.png`, détourée de la même planche de poses que
 * le Hero), pose sacs de courses — colle bien au thème livraison. Elle et
 * sa bulle apparaissent avec un délai après la carte, comme si elle
 * surgissait au dernier moment pour appuyer l'invitation.
 */
export function DeliveryCtaSection() {
  return (
    <Section id="livraison" tone="cream" className="overflow-hidden">
      <Container>
        <Reveal distance={16} scaleFrom={0.96} className="mx-auto max-w-3xl">
          <div className="relative flex flex-col items-center gap-6 rounded-lg bg-white px-8 py-14 text-center shadow-elevated md:px-16 md:py-20">
            <BotanicalAccent className="absolute top-6 left-6 h-14 w-14 opacity-50" />

            <span className="font-ui text-sm font-medium tracking-[0.18em] text-terracotta uppercase">
              Livraison
            </span>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              Votre brioche arrive vite
            </h2>
            <p className="max-w-md font-ui text-base leading-relaxed text-ink-soft">
              Quelques clics suffisent pour vous faire livrer une brioche tiède et un bon
              café, où que vous soyez.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Commander en livraison
            </a>

            <Reveal
              delay={0.3}
              distance={0}
              scaleFrom={0.9}
              className="absolute -right-4 -bottom-6 flex items-end gap-2 sm:-right-6"
            >
              <Image
                src="/images/brioche-bags.png"
                alt="La mascotte du Comptoir Sucré, avec des sacs de livraison"
                width={100}
                height={83}
                className="transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:scale-[1.04]"
              />
              <SpeechBubble className="mb-6 -rotate-2" tailSide="left">
                J&apos;arrive !
              </SpeechBubble>
            </Reveal>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
