import { SiteFooter } from "@/components/layout/SiteFooter";
import { SimplePageHeader } from "@/components/layout/SimplePageHeader";
import { SaleMenu } from "@/components/menu/SaleMenu";

export default function SalePage() {
  return (
    <>
      <SimplePageHeader />
      <main>
        <SaleMenu />
      </main>
      <SiteFooter />
    </>
  );
}
