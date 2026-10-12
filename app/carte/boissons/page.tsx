import { SiteFooter } from "@/components/layout/SiteFooter";
import { SimplePageHeader } from "@/components/layout/SimplePageHeader";
import { BoissonsMenu } from "@/components/menu/BoissonsMenu";

/**
 * Carte des boissons — contenu réel (catégories/prix fournis par
 * l'utilisateur), à la différence de `/carte/sucre` et `/carte/sale`
 * (`SucreMenu`/`SaleMenu`) dont le contenu est généré en attendant les
 * vraies cartes — voir le bandeau "indicatif" sur ces deux pages.
 */
export default function BoissonsPage() {
  return (
    <>
      <SimplePageHeader />
      <main>
        <BoissonsMenu />
      </main>
      <SiteFooter />
    </>
  );
}
