import fs from 'fs';
import path from 'path';
import { csvParse } from 'd3-dsv';

import getServer from './server';

const data: any = csvParse(
  fs.readFileSync(path.resolve(__dirname, '../../data.csv'), 'utf8'),
);

const inputDir = path.resolve(__dirname, 'inputs');
const dist = path.resolve(__dirname, '../../dist');
const distDir = path.resolve(dist, 'styles');
if (!fs.existsSync(dist)) fs.mkdirSync(dist);
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

for (const row of data) {
  const server = getServer(row.iso_3);
  const output = path.resolve(distDir, row.iso_3 || '');
  const jsonPath = path.resolve(output, 'VectorTileServer.json');
  if (!fs.existsSync(output)) fs.mkdirSync(output);
  fs.writeFileSync(jsonPath, JSON.stringify(server));
  fs.copyFileSync(
    path.resolve(inputDir, 'tilemap.json'),
    path.resolve(output, 'tilemap.json'),
  );
}
