import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const MAPS_QUERY = "P947+MGG, Flic en Flac";
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
export const OPENING_HOURS = "7h – 20h";

/**
 * Localisation et ambiance. Adresse (plus code Google Maps) et horaires
 * sont réels et pilotent à la fois la carte intégrée et la liste de
 * détails — `MAPS_QUERY`/`OPENING_HOURS` servent de source unique,
 * réutilisée telle quelle par `SiteFooter`. Pas de jours précisés (on ne
 * nous les a pas donnés) : aucune donnée commerciale inventée au-delà de
 * ce qui a été fourni.
 *
 * Section délibérément calme : un reveal simple par colonne, pas de
 * stagger, pas de brioche — une respiration entre la Galerie et le CTA
 * de Livraison.
 */
export function LocationSection() {
  return (
    <Section id="ambiance" tone="beige">
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-soft">
            <iframe
              src={MAPS_EMBED_SRC}
              title="Le Comptoir Sucré sur Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6 md:col-span-6 md:col-start-7">
          <SectionHeading
            eyebrow="Où nous trouver"
            title="Une pause à deux pas de la plage"
            description="Le Comptoir Sucré s'installe dans un cadre pensé pour prendre son temps — à table, en terrasse ou sur le pouce."
          />

          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 font-ui text-sm text-ink-soft">
            <dt className="font-medium text-ink">Adresse</dt>
            <dd>{MAPS_QUERY}</dd>
            <dt className="font-medium text-ink">Horaires</dt>
            <dd>{OPENING_HOURS}</dd>
          </dl>

          <BotanicalAccent className="h-16 w-16 self-start opacity-60" />
        </Reveal>
      </Container>
    </Section>
  );
}
