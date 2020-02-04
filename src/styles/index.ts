import fs from 'fs';
import path from 'path';
import { csvParse } from 'd3-dsv';

import defaultStyle from './default';

const data = csvParse(
  fs.readFileSync(path.resolve(__dirname, '../../data.csv'), 'utf8'),
);

const styleTypes: any = [['default', defaultStyle]];

const prod = path.resolve(__dirname, '../../dist');
const localDev = path.resolve(__dirname, '../../local-dev');
const localProd = path.resolve(__dirname, '../../local-prod');

const origins = [
  ['https://atlas.fieldmaps.io', prod],
  ['http://localhost:8000', localDev],
  ['http://localhost:9000', localProd],
];

for (const [origin, dist] of origins) {
  const distTmpDir = path.resolve(dist, 'styles');
  const distDir = path.resolve(distTmpDir, 'v1');
  if (!fs.existsSync(dist)) fs.mkdirSync(dist);
  if (!fs.existsSync(distTmpDir)) fs.mkdirSync(distTmpDir);
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
  for (const [dir, func] of styleTypes) {
    for (const row of data) {
      const style = func(origin, row);
      const output = path.resolve(distDir, row.iso_3 || '');
      const jsonPath = path.resolve(output, dir + '.json');
      if (!fs.existsSync(output)) fs.mkdirSync(output);
      fs.writeFileSync(jsonPath, JSON.stringify(style));
    }
  }
}
