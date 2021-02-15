import fs from 'fs';
import path from 'path';
import base from './base';
import admPolygons from './layers/adm-polygons';
import admLines from './layers/adm-lines';
import admPoints from './layers/adm-points';
import osmPolygons from './layers/osm-polygons';
import osmLines from './layers/osm-lines';

const host = process.env.HOST ?? 'https://tiles.fieldmaps.io';
const themeNames = ['default', 'light', 'dark'];

for (const themeName of themeNames) {
  const outputDir = path.resolve(__dirname, '../../dist/styles/v1');
  const output = path.resolve(outputDir, themeName + '.json');
  const style = {
    ...base(host),
    layers: [
      ...admPolygons(themeName),
      ...osmPolygons(themeName),
      ...osmLines(themeName),
      ...admLines(themeName),
      ...admPoints(themeName),
    ],
  };
  fs.writeFileSync(output, JSON.stringify(style));
}
