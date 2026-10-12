import { MenuCard, type MenuCategory } from "@/components/menu/MenuCard";

const leftColumn: MenuCategory[] = [
  {
    title: "Brioches salées",
    items: [
      { name: "Brioche jambon-fromage", price: 180 },
      { name: "Brioche saumon-avocat", price: 220 },
      { name: "Brioche poulet-crudités", price: 190 },
      { name: "Brioche végétarienne", price: 170 },
    ],
    note: "Fait maison, chaque matin",
  },
  {
    title: "Tartines & sandwichs",
    items: [
      { name: "Tartine avocat, œuf poché", price: 210 },
      { name: "Croque-monsieur maison", price: 190 },
      { name: "Club sandwich", price: 230 },
      { name: "Bagel saumon fumé", price: 240 },
    ],
  },
];

const rightColumn: MenuCategory[] = [
  {
    title: "Salades",
    items: [
      { name: "Salade César", price: 220 },
      { name: "Salade quinoa, légumes grillés", price: 210 },
      { name: "Salade de saison", price: 190 },
    ],
  },
  {
    title: "Pour bien commencer",
    items: [
      { name: "Œufs brouillés briochés", price: 180 },
      { name: "Assiette petit-déjeuner", price: 250 },
      { name: "Toast avocat", price: 200 },
      { name: "Granola, fruits frais", price: 170 },
    ],
  },
];

/**
 * Carte salée — contenu GÉNÉRÉ (pas la vraie carte du Comptoir Sucré, non
 * fournie à ce stade) : brioches salées/tartines/salades/petit-déjeuner
 * typiques d'un café comme celui-ci, prix extrapolés de la fourchette
 * déjà connue sur la carte Boissons. `indicative` affiche le bandeau
 * d'avertissement sur la page elle-même — à retirer dès que la vraie
 * carte est fournie, en repassant ce composant sur le même modèle que
 * `BoissonsMenu`.
 */
export function SaleMenu() {
  return (
    <MenuCard
      leftEyebrow={["Repas", "Fait", "Maison"]}
      rightEyebrow={["Salé", "Généreux", "Chaque jour"]}
      leftColumn={leftColumn}
      rightColumn={rightColumn}
      tagline={["Simplement", "de bons", "repas"]}
      archTone="sauge"
      indicative
    />
  );
}
