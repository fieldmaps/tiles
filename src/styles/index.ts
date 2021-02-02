import fs from 'fs';
import path from 'path';
import base from './base';
import background from './layers/background';
import adminLines from './layers/admin-lines';
import adminPoints from './layers/admin-points';

const host = process.env.HOST ?? 'https://tiles.fieldmaps.io';
const themeNames = ['default', 'light', 'dark'];

for (const themeName of themeNames) {
  const outputDir = path.resolve(__dirname, '../../dist/styles/v1');
  const output = path.resolve(outputDir, themeName + '.json');
  const style = {
    ...base(host),
    layers: [
      ...background(themeName),
      ...adminLines(themeName),
      ...adminPoints(themeName),
    ],
  };
  fs.writeFileSync(output, JSON.stringify(style));
}
