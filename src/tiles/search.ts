import fs from 'fs';
import path from 'path';
import * as turf from '@turf/turf';
import { csvParse, csvFormat } from 'd3-dsv';

const data: any = csvParse(
  fs.readFileSync(path.resolve(__dirname, '../../data.csv'), 'utf8'),
);

const inputDir = path.resolve(__dirname, 'inputs', 'features');
const distDir = path.resolve(__dirname, '../../local');
const tmpDir = path.resolve(distDir, 'search');

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

for (const row of data) {
  const outputDir = path.resolve(tmpDir, row.iso_3);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
  const file = path.resolve(inputDir, row.iso_3, 'settlements.geojson');
  const features = JSON.parse(fs.readFileSync(file, 'utf8'));
  const output: any[] = [];
  turf.featureEach(features, (feature: any) => {
    const [x, y] = feature.geometry.coordinates;
    const { name } = feature.properties;
    const newRow = { x, y, name };
    if (name) output.push(newRow);
  });
  const textRows = csvFormat(output);
  const writePath = path.resolve(outputDir, 'default.csv');
  fs.writeFileSync(writePath, textRows, 'utf8');
}
