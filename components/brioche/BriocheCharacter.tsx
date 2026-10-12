import { useId } from "react";

/**
 * Poses implémentées à l'étape 4. `walk` et `open-door` restent une
 * direction artistique retenue pour la suite (voir doc) mais n'ont pas de
 * rendu — ne pas élargir cette union tant que leur SVG n'existe pas.
 */
export type BriochePose = "idle" | "wave" | "happy" | "carry-tray";

export interface BriocheCharacterProps {
  pose: BriochePose;
  size?: number;
  className?: string;
  /** Texte alternatif ; un défaut sensé existe par pose si non fourni. */
  label?: string;
}

const defaultLabels: Record<BriochePose, string> = {
  idle: "La mascotte du Comptoir Sucré",
  wave: "La mascotte du Comptoir Sucré, en train de saluer",
  happy: "La mascotte du Comptoir Sucré, joyeuse",
  "carry-tray": "La mascotte du Comptoir Sucré, portant un plateau",
};

interface Lobe {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

const waveLobes: Lobe[] = [
  { cx: 42, cy: 95, rx: 15, ry: 13 },
  { cx: 32, cy: 68, rx: 13, ry: 14 },
  { cx: 38, cy: 42, rx: 11, ry: 10 },
];
const trayLeftLobes: Lobe[] = [
  { cx: 35, cy: 145, rx: 13, ry: 12 },
  { cx: 60, cy: 158, rx: 11, ry: 9 },
];
const trayRightLobes: Lobe[] = [
  { cx: 165, cy: 145, rx: 13, ry: 12 },
  { cx: 140, cy: 158, rx: 11, ry: 9 },
];

/**
 * Silhouette commune à toutes les poses — une tranche de brioche coupée,
 * vue de face : contour de croûte irrégulier (dégradé terracotta →
 * terracotta-dark, pour un effet cuit/bombé sans nouvelle couleur), mie
 * intérieure indépendante (dégradé cream → beige), un reflet doux flouté
 * en haut à gauche pour la sensation moelleuse/gonflée, et quelques
 * alvéoles discrètes. La forme ne change JAMAIS entre les poses.
 */
function Silhouette({
  crustUrl,
  crumbUrl,
  blurUrl,
}: {
  crustUrl: string;
  crumbUrl: string;
  blurUrl: string;
}) {
  return (
    <>
      <path
        d="M70,14 C95,10 120,12 140,18 C162,24 178,38 182,55 C186,75 180,95 178,110 C176,128 162,142 145,152 C120,162 95,160 75,158 C50,156 30,148 25,130 C18,108 14,85 16,70 C18,50 30,28 50,20 C57,17 63,15 70,14 Z"
        fill={crustUrl}
      />
      <path
        d="M76,32 C95,26 112,27 128,34 C144,41 156,50 160,62 C164,78 160,95 156,108 C152,120 142,128 130,134 C112,140 96,139 80,136 C64,133 50,126 42,116 C34,104 32,88 38,72 C42,58 58,38 76,32 Z"
        fill={crumbUrl}
      />
      <ellipse
        cx={66}
        cy={55}
        rx={22}
        ry={14}
        fill="var(--color-cream)"
        opacity={0.5}
        filter={blurUrl}
      />
      <g className="fill-ink" opacity={0.09}>
        <ellipse cx={52} cy={50} rx={4} ry={3} />
        <ellipse cx={145} cy={48} rx={3.5} ry={5} />
        <ellipse cx={150} cy={100} rx={4.5} ry={3.5} />
        <ellipse cx={48} cy={115} rx={4} ry={3} />
        <ellipse cx={95} cy={125} rx={5} ry={3.5} />
      </g>
    </>
  );
}

/** Petit museau rond, posé dans la mie — même dégradé que la croûte. */
function Nose({ crustUrl }: { crustUrl: string }) {
  return <circle cx={98} cy={85} r={9} fill={crustUrl} />;
}

/**
 * Bras/jambe en pâte tressée — de petits lobes de croûte qui se
 * chevauchent, plutôt qu'un tube lisse. Dessinés APRÈS la silhouette pour
 * que leur base se fonde dans le contour de croûte (même remplissage,
 * aucune couture visible), et n'apparaissent que sur les poses qui en ont
 * réellement besoin.
 */
function BraidLobes({ lobes, crustUrl }: { lobes: Lobe[]; crustUrl: string }) {
  return (
    <>
      {lobes.map((lobe, i) => (
        <ellipse
          key={i}
          cx={lobe.cx}
          cy={lobe.cy}
          rx={lobe.rx}
          ry={lobe.ry}
          fill={crustUrl}
        />
      ))}
    </>
  );
}

/** Yeux fermés discrets + petit sourire — idle & carry-tray. */
function EyesMouthCalm() {
  return (
    <g className="stroke-ink" strokeWidth={3} strokeLinecap="round" fill="none">
      <path d="M78,70 Q83,66 88,70" />
      <path d="M108,70 Q113,66 118,70" />
      <path d="M85,101 Q98,105 111,101" />
    </g>
  );
}

/** Petits yeux ouverts + sourire chaud — wave. */
function EyesMouthAlert() {
  return (
    <>
      <g className="fill-ink">
        <ellipse cx={83} cy={70} rx={2.6} ry={3.6} />
        <ellipse cx={113} cy={70} rx={2.6} ry={3.6} />
      </g>
      <path
        d="M83,100 Q98,110 113,100"
        fill="none"
        className="stroke-ink"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </>
  );
}

/** Yeux rieurs + sourire ouvert + joues rosées — happy. */
function EyesMouthHappy() {
  return (
    <>
      <g className="stroke-ink" strokeWidth={3} strokeLinecap="round" fill="none">
        <path d="M75,72 Q83,62 91,72" />
        <path d="M105,72 Q113,62 121,72" />
      </g>
      <path
        d="M80,99 Q98,112 116,99"
        fill="none"
        className="stroke-ink"
        strokeWidth={3.5}
        strokeLinecap="round"
      />
      <ellipse cx={68} cy={90} rx={6} ry={4} className="fill-rose" opacity={0.6} />
      <ellipse cx={128} cy={90} rx={6} ry={4} className="fill-rose" opacity={0.6} />
    </>
  );
}

/**
 * Personnage brioche du Comptoir Sucré — tranche coupée, mie visible.
 * Rendu SVG pur, sans animation interne (la transition entre poses sera
 * le rôle d'une couche dédiée, construite plus tard). Les dégradés
 * (croûte, mie) réutilisent des paires clair/foncé déjà présentes dans
 * les tokens du projet — aucune couleur nouvelle. `useId` garantit des
 * identifiants de dégradé uniques même si plusieurs instances du
 * personnage sont rendues sur la même page.
 */
export function BriocheCharacter({
  pose,
  size = 160,
  className,
  label,
}: BriocheCharacterProps) {
  const uid = useId();
  const crustId = `brioche-crust-${uid}`;
  const crumbId = `brioche-crumb-${uid}`;
  const blurId = `brioche-blur-${uid}`;
  const crustUrl = `url(#${crustId})`;
  const crumbUrl = `url(#${crumbId})`;
  const blurUrl = `url(#${blurId})`;

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label={label ?? defaultLabels[pose]}
      className={className}
    >
      <defs>
        <linearGradient id={crustId} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="var(--color-terracotta)" />
          <stop offset="100%" stopColor="var(--color-terracotta-dark)" />
        </linearGradient>
        <radialGradient id={crumbId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="var(--color-cream)" />
          <stop offset="100%" stopColor="var(--color-beige)" />
        </radialGradient>
        <filter id={blurId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <Silhouette crustUrl={crustUrl} crumbUrl={crumbUrl} blurUrl={blurUrl} />
      <Nose crustUrl={crustUrl} />

      {pose === "wave" && (
        <>
          <BraidLobes lobes={waveLobes} crustUrl={crustUrl} />
          <g
            className="stroke-terracotta-dark"
            strokeWidth={1.5}
            opacity={0.4}
            fill="none"
            strokeLinecap="round"
          >
            <path d="M36,88 Q44,82 34,76" />
            <path d="M34,60 Q40,54 32,50" />
          </g>
        </>
      )}
      {pose === "carry-tray" && (
        <>
          <BraidLobes lobes={trayLeftLobes} crustUrl={crustUrl} />
          <BraidLobes lobes={trayRightLobes} crustUrl={crustUrl} />
        </>
      )}

      {pose === "idle" && <EyesMouthCalm />}
      {pose === "wave" && <EyesMouthAlert />}
      {pose === "happy" && <EyesMouthHappy />}
      {pose === "carry-tray" && <EyesMouthCalm />}

      {pose === "carry-tray" && (
        <>
          <ellipse
            cx={100}
            cy={168}
            rx={40}
            ry={11}
            className="fill-white stroke-terracotta"
            strokeWidth={4}
          />
          <path
            d="M120,166 Q126,160 132,164"
            fill="none"
            className="stroke-sauge"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
