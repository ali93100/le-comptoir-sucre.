import { MenuCard, type MenuCategory } from "@/components/menu/MenuCard";

const leftColumn: MenuCategory[] = [
  {
    title: "Cafés classiques",
    items: [
      { name: "Espresso", price: 70 },
      { name: "Double Espresso", price: 90 },
      { name: "Americano", price: 100 },
      { name: "Cappuccino", price: 120 },
      { name: "Café Latte", price: 130 },
    ],
  },
  {
    title: "Signatures",
    items: [
      { name: "Pistachio Latte", price: 150 },
      { name: "Tiramisu Latte", price: 150 },
      { name: "Spanish Latte", price: 150 },
      { name: "Salted Caramel Latte", price: 150 },
    ],
    note: "Chaud ou glacé",
  },
];

const rightColumn: MenuCategory[] = [
  {
    title: "Cafés glacés",
    items: [
      { name: "Iced Americano", price: 110 },
      { name: "Iced Latte", price: 140 },
      { name: "Iced Mocha", price: 150 },
      { name: "Iced Vanilla Latte", price: 150 },
    ],
  },
  {
    title: "Matcha & autres",
    items: [
      { name: "Matcha Latte", price: 140 },
      { name: "Strawberry Matcha", price: 150 },
      { name: "Chai Latte", price: 130 },
      { name: "Chocolat chaud", price: 130 },
    ],
  },
  {
    title: "Boissons fraîches",
    items: [
      { name: "Citronnade maison", price: 120 },
      { name: "Thé glacé pêche", price: 120 },
      { name: "Thé glacé passion", price: 120 },
      { name: "Mango Passion", price: 150 },
    ],
  },
];

/** Carte des boissons — contenu réel fourni (catégories, articles, prix). */
export function BoissonsMenu() {
  return (
    <MenuCard
      leftEyebrow={["Café", "Bonnes", "Rencontres"]}
      rightEyebrow={["Boissons", "Gourmandes", "Au quotidien"]}
      leftColumn={leftColumn}
      rightColumn={rightColumn}
      tagline={["Simplement", "de bonnes", "boissons"]}
      archTone="sauge"
    />
  );
}
