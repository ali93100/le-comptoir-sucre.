import { SiteFooter } from "@/components/layout/SiteFooter";
import { SimplePageHeader } from "@/components/layout/SimplePageHeader";
import { SucreMenu } from "@/components/menu/SucreMenu";

export default function SucrePage() {
  return (
    <>
      <SimplePageHeader />
      <main>
        <SucreMenu />
      </main>
      <SiteFooter />
    </>
  );
}
