import path from 'path';
import fs from 'fs';
// @ts-ignore
import tippecanoe from 'tippecanoe';
import { execFile } from 'child_process';
import { csvParse } from 'd3-dsv';

const inputDir = path.resolve(__dirname, 'inputs');
const featureDir = path.resolve(inputDir, 'features');
const tmpDir = path.resolve(__dirname, 'tmp');
const tmpFeatureDir = path.resolve(tmpDir, 'features');
const tmpLabelDir = path.resolve(tmpDir, 'labels');
const dist = path.resolve(__dirname, '../../dist');
const distDir = path.resolve(dist, 'tiles');

if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
if (!fs.existsSync(tmpFeatureDir)) fs.mkdirSync(tmpFeatureDir);
if (!fs.existsSync(tmpLabelDir)) fs.mkdirSync(tmpLabelDir);
if (!fs.existsSync(dist)) fs.mkdirSync(dist);
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

const data: any = csvParse(
  fs.readFileSync(path.resolve(__dirname, '../../data.csv'), 'utf8'),
);

const features = [
  'admin0.geojson',
  'admin1.geojson',
  'admin2.geojson',
  'admin3.geojson',
  'admin4.geojson',
  'airports.geojson',
  'education-facilities.geojson',
  'financial-services.geojson',
  'health-facilities.geojson',
  'lakes.geojson',
  'protected-areas.geojson',
  'railways.geojson',
  'rivers.geojson',
  'roads.geojson',
  'sea-ports.geojson',
  'settlements.geojson',
  'undetermined-areas.geojson',
];

const labels = [
  ['labels', 'admin0-labels.geojson'],
  ['labels', 'admin1-labels.geojson'],
  ['labels', 'admin2-labels.geojson'],
  ['labels', 'admin3-labels.geojson'],
  ['labels', 'admin4-labels.geojson'],
  ['labels', 'protected-areas-labels.geojson'],
  ['labels', 'undetermined-areas-labels.geojson'],
  ['features', 'settlements.geojson'],
];

const settlementTypes = [1, 2, 3, 4, 5, 'city', 'town'];

const getFeatureParams = (dir: string) => ({
  detectSharedBorders: true,
  featureFilter: { settlements: ['!in', 'type', settlementTypes] },
  maximumZoom: 'g',
  noTileSizeLimit: true,
  output: path.resolve(tmpFeatureDir, dir),
  simplifyOnlyLowZooms: true,
});

const getLabelParams = (dir: string, maxzoom: number) => ({
  dropRate: 1,
  featureFilter: { settlements: ['in', 'type', settlementTypes] },
  maximumZoom: maxzoom,
  output: path.resolve(tmpLabelDir, dir),
});

for (const row of data) {
  const featureList = features.map(f => path.resolve(featureDir, row.iso_3, f));
  const labelList = labels.map(([d, f]) =>
    path.resolve(inputDir, d, row.iso_3, f),
  );
  const featureParams = getFeatureParams(row.iso_3);
  const labelParams = getLabelParams(row.iso_3, row.maxzoom);
  tippecanoe(featureList, featureParams, { echo: true });
  tippecanoe(labelList, labelParams, { echo: true });
  execFile(
    path.resolve('/usr/local/bin/tile-join'),
    [
      '--no-tile-compression',
      '--no-tile-size-limit',
      '--output-to-directory=' + path.resolve(distDir, row.iso_3),
      path.resolve(tmpFeatureDir, row.iso_3),
      path.resolve(tmpLabelDir, row.iso_3),
    ],
    (error: any) => {
      if (error) throw error;
    },
  );
}
