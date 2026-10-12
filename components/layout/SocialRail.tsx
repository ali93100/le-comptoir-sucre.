import { WHATSAPP_URL } from "@/lib/contact";

/**
 * Colonne d'icônes réseaux sociaux, flottante sur le bord droit de la
 * page — `fixed` au viewport (voir maquette), donc visible pendant tout
 * le scroll, pas seulement dans le Hero. Rendue une fois au niveau de la
 * page, pas à l'intérieur d'une section. Icônes génériques dessinées à la
 * main (pas de logos de marque reproduits). Seules celles avec un `href`
 * connu sont de vrais liens (`target="_blank"` + `rel="noopener
 * noreferrer"`, pratique standard pour un lien externe) ; Facebook reste
 * un repère visuel non cliquable tant que son URL n'est pas connue — pas
 * de `href="#"` qui ferait remonter la page en haut sans raison.
 * WhatsApp utilise le numéro PLACEHOLDER de `lib/contact.ts` (aucun vrai
 * numéro fourni). Masquée sous `sm` : une colonne flottante sur le bord
 * prendrait la place du pouce sur mobile.
 */

const items = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/lecomptoirsucremu?exln=MXI1djY2b2hqbDRoeA%3D%3D",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="16.2" cy="7.8" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M13.5 9.2h1.8V6.7h-1.8c-1.7 0-3 1.3-3 3v1.6H9v2.4h1.5V18h2.4v-4.3h1.8l.5-2.4h-2.3v-1.3c0-.45.35-.8.6-.8Z" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    icon: (
      <>
        <path d="M12 3.5c-4.7 0-8.5 3.6-8.5 8.1 0 1.5.4 2.9 1.2 4.1L4 20.5l4.9-1.3c1.2.6 2.6.9 4.1.9 4.7 0 8.5-3.6 8.5-8.1S16.7 3.5 12 3.5Z" />
        <path
          d="M9 9.3c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .6.4.2.4.6 1.4.7 1.5.1.1.1.3 0 .4-.1.2-.2.3-.3.4-.2.2-.3.3-.1.6.2.3.8 1.2 1.7 1.9 1.1.9 1.9 1.1 2.2 1 .3-.1.6-.4.8-.7.1-.2.3-.2.5-.1l1.3.6c.2.1.3.2.3.4 0 .5-.6 1.2-1.1 1.4-.5.2-1.1.3-2.9-.6-2.1-1-3.5-3-3.6-3.2-.1-.1-.9-1.2-.9-2.3 0-1.1.6-1.6.8-1.8Z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),
  },
];

export function SocialRail() {
  return (
    <div className="fixed top-1/2 right-4 z-[var(--z-nav)] hidden -translate-y-1/2 flex-col items-center gap-5 rounded-full bg-white px-3 py-5 shadow-elevated sm:right-6 sm:flex">
      {items.map((item) => {
        const icon = (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinejoin="round"
            className="h-full w-full"
          >
            {item.icon}
          </svg>
        );

        if (item.href) {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              className="flex h-6 w-6 items-center justify-center text-ink transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-terracotta"
            >
              {icon}
            </a>
          );
        }

        return (
          <span
            key={item.label}
            role="img"
            aria-label={item.label}
            title={item.label}
            className="flex h-6 w-6 items-center justify-center text-ink"
          >
            {icon}
          </span>
        );
      })}
    </div>
  );
}
