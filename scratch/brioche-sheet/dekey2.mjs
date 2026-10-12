import sharp from "sharp";

const jobs = [
  {
    input: "scratch/brioche-sheet/croissant-crop.png",
    output: "scratch/brioche-sheet/croissant-cutout.png",
  },
  {
    input: "scratch/brioche-sheet/bags-crop.png",
    output: "scratch/brioche-sheet/bags-cutout.png",
  },
];

for (const { input, output } of jobs) {
  const img = sharp(input).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const refR = data[0];
  const refG = data[1];
  const refB = data[2];

  const threshold = 30;
  const softEdge = 20;

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
}
