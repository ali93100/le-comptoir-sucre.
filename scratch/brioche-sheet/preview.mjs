import sharp from "sharp";

const meta = await sharp("scratch/brioche-sheet/wave-cutout.png").metadata();
console.log("hasAlpha:", meta.hasAlpha, meta.width, meta.height);

await sharp({
  create: { width: meta.width, height: meta.height, channels: 3, background: "#3e2e24" },
})
  .composite([{ input: "scratch/brioche-sheet/wave-cutout.png" }])
  .png()
  .toFile("scratch/brioche-sheet/preview-on-dark.png");

console.log("preview written");
