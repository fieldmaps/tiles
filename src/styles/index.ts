import fs from 'fs';
import path from 'path';
import { csvParse } from 'd3-dsv';

import defaultStyle from './default';

const data = csvParse(
  fs.readFileSync(path.resolve(__dirname, '../../data.csv'), 'utf8'),
);

const styleTypes: any = [['default', defaultStyle]];

const prod = path.resolve(__dirname, '../../dist');
const local = path.resolve(__dirname, '../../local');

const origins = [
  ['https://atlas.fieldmaps.io', prod],
  ['http://localhost:8000', local],
];

for (const [origin, dist] of origins) {
  const distDir = path.resolve(dist, 'styles');
  if (!fs.existsSync(dist)) fs.mkdirSync(dist);
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
  for (const [dir, func] of styleTypes) {
    for (const row of data) {
      const style = func(origin, row);
      const output = path.resolve(distDir, dir);
      const jsonPath = path.resolve(output, row.iso_3 + '.json');
      if (!fs.existsSync(output)) fs.mkdirSync(output);
      fs.writeFileSync(jsonPath, JSON.stringify(style));
    }
  }
}
