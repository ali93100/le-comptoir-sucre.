import sharp from "sharp";

const input = "scratch/brioche-sheet/wave-crop.png";
const output = "scratch/brioche-sheet/wave-cutout.png";

const img = sharp(input).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

// Couleur de référence du fond : coin haut-gauche, certainement hors
// personnage.
const refR = data[0];
const refG = data[1];
const refB = data[2];

const threshold = 30; // distance en-dessous de laquelle le pixel est transparent
const softEdge = 20; // bande de fondu pour un contour anti-crénelé

for (let i = 0; i < width * height; i++) {
  const idx = i * channels;
  const r = data[idx];
  const g = data[idx + 1];
  const b = data[idx + 2];
  const dist = Math.sqrt((r - refR) ** 2 + (g - refG) ** 2 + (b - refB) ** 2);

  if (dist < threshold) {
    data[idx + 3] = 0;
  } else if (dist < threshold + softEdge) {
    const t = (dist - threshold) / softEdge;
    data[idx + 3] = Math.round(255 * t);
  }
}

await sharp(data, { raw: { width, height, channels } }).png().toFile(output);
console.log("done", output);
