import { MenuCard, type MenuCategory } from "@/components/menu/MenuCard";

const leftColumn: MenuCategory[] = [
  {
    title: "Brioches signature",
    items: [
      { name: "Brioche nature", price: 90 },
      { name: "Brioche pépites de chocolat", price: 110 },
      { name: "Brioche praliné-noisette", price: 120 },
      { name: "Brioche cannelle", price: 110 },
    ],
    note: "Fait maison, chaque matin",
  },
  {
    title: "Viennoiseries",
    items: [
      { name: "Croissant", price: 60 },
      { name: "Pain au chocolat", price: 70 },
      { name: "Chausson aux pommes", price: 75 },
      { name: "Croissant amande", price: 90 },
    ],
  },
];

const rightColumn: MenuCategory[] = [
  {
    title: "Pâtisseries maison",
    items: [
      { name: "Tarte aux fruits de saison", price: 160 },
      { name: "Fondant au chocolat", price: 150 },
      { name: "Cheesecake vanille", price: 170 },
      { name: "Tiramisu maison", price: 160 },
    ],
  },
  {
    title: "Pour les gourmands",
    items: [
      { name: "Pancakes, sirop d'érable", price: 200 },
      { name: "Gaufre liégeoise", price: 180 },
      { name: "Crêpe sucrée nutella-banane", price: 170 },
      { name: "French toast brioché", price: 190 },
    ],
  },
];

/**
 * Carte sucrée — contenu GÉNÉRÉ (pas la vraie carte du Comptoir Sucré,
 * non fournie à ce stade) : brioches/viennoiseries/pâtisseries typiques
 * d'un café comme celui-ci, prix extrapolés de la fourchette déjà connue
 * sur la carte Boissons (70-150). `indicative` affiche le bandeau
 * d'avertissement sur la page elle-même — à retirer dès que la vraie
 * carte est fournie, en repassant ce composant sur le même modèle que
 * `BoissonsMenu`.
 */
export function SucreMenu() {
  return (
    <MenuCard
      leftEyebrow={["Pâtisserie", "Fait", "Maison"]}
      rightEyebrow={["Sucré", "Gourmand", "Chaque jour"]}
      leftColumn={leftColumn}
      rightColumn={rightColumn}
      tagline={["Simplement", "de bonnes", "brioches"]}
      archTone="rose"
      indicative
    />
  );
}
