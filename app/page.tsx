import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BriocheIdentitySection } from "@/components/sections/BriocheIdentitySection";
import { DeliveryCtaSection } from "@/components/sections/DeliveryCtaSection";
import { GalleryPreviewSection } from "@/components/sections/GalleryPreviewSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { MenuDiscoverySection } from "@/components/sections/MenuDiscoverySection";
import { SocialRail } from "@/components/layout/SocialRail";
import { SectionWave } from "@/components/ui/SectionWave";

/**
 * Homepage — étape 3 : squelette visuel + premières interactions (voir
 * doc, section 4). Chaque scène est un composant autonome et réutilisable
 * dans `components/sections/` ; cette page ne fait qu'assembler la
 * séquence narrative.
 *
 * `SectionWave` n'est posée qu'aux 3 vraies ruptures narratives (entrée
 * dans l'univers, rencontre de la mascotte, clôture avant le footer) —
 * pas à chaque transition, pour que la vague reste un signal fort plutôt
 * qu'un motif répété. Les autres transitions sont de simples changements
 * de fond entre `Section`.
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <SocialRail />
      <main>
        <HeroSection />
        <IntroSection />
        <SectionWave tone="white" />
        <BriocheIdentitySection />
        <MenuDiscoverySection />
        <GalleryPreviewSection />
        <LocationSection />
        <DeliveryCtaSection />
        <SectionWave tone="beige" />
      </main>
      <SiteFooter />
    </>
  );
}
