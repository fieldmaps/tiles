// @ts-ignore
import spritezero from '@mapbox/spritezero';
import fs from 'fs';
import glob from 'glob';
import path from 'path';

const dist = path.resolve(__dirname, '../../dist');
const distDir = path.resolve(dist, 'sprites');
if (!fs.existsSync(dist)) fs.mkdirSync(dist);
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

const spriteTypes = ['default'];

for (const pxRatio of [1, 2, 4]) {
  for (const spriteType of spriteTypes) {
    const typeDir = path.resolve(distDir, spriteType);
    if (!fs.existsSync(typeDir)) fs.mkdirSync(typeDir);
    const svgs = glob
      .sync(path.resolve(__dirname, spriteType, '*.svg'))
      .map(f => ({
        svg: fs.readFileSync(f),
        id: path.basename(f).replace('.svg', ''),
      }));
    const pngPath = path.resolve(typeDir, 'sprite@' + pxRatio + 'x.png');
    const jsonPath = path.resolve(typeDir, 'sprite@' + pxRatio + 'x.json');
    spritezero.generateLayout(
      { imgs: svgs, pixelRatio: pxRatio, format: true },
      (err: any, dataLayout: any) => {
        if (err) return;
        fs.writeFileSync(jsonPath, JSON.stringify(dataLayout));
      },
    );
    spritezero.generateLayout(
      { imgs: svgs, pixelRatio: pxRatio, format: false },
      (err: any, imageLayout: any) => {
        spritezero.generateImage(imageLayout, (err: any, image: any) => {
          if (err) return;
          fs.writeFileSync(pngPath, image);
        });
      },
    );
  }
}
