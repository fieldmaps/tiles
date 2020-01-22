const path = require('path');
const fs = require('fs');
const tippecanoe = require('tippecanoe');
const { execFile } = require('child_process');
const { promisify } = require('util');
const { csvParse } = require('d3-dsv');

const execFileSync = promisify(execFile);

const featureDir = path.resolve(__dirname, 'inputs', 'features');
const labelDir = path.resolve(__dirname, 'inputs', 'labels');
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

const data = csvParse(
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
  'admin0-labels.geojson',
  'admin1-labels.geojson',
  'admin2-labels.geojson',
  'admin3-labels.geojson',
  'admin4-labels.geojson',
  'protected-areas-labels.geojson',
  'settlements.geojson',
  'undetermined-areas-labels.geojson',
];

const getFeatureParams = dir => ({
  maximumZoom: 'g',
  noTileCompression: true,
  dropDensestAsNeeded: true,
  coalesceDensestAsNeeded: true,
  extendZoomsIfStillDropping: true,
  detectSharedBorders: true,
  outputToDirectory: path.resolve(tmpFeatureDir, dir),
  featureFilter: {
    settlements: ['!in', 'type', 1, 2, 3, 4, 5, 'city', 'town'],
  },
});

const getLabelParams = (dir, maxzoom) => ({
  maximumZoom: maxzoom,
  dropRate: 1,
  noTileCompression: true,
  extendZoomsIfStillDropping: true,
  outputToDirectory: path.resolve(tmpLabelDir, dir),
  featureFilter: {
    settlements: ['in', 'type', 1, 2, 3, 4, 5, 'city', 'town'],
  },
});

for (const row of data) {
  const featureList = features.map(f => path.resolve(featureDir, row.iso_3, f));
  const labelList = labels.map(f => path.resolve(labelDir, row.iso_3, f));
  const featureParams = getFeatureParams(row.iso_3);
  const labelParams = getLabelParams(row.iso_3, row.maxzoom);
  tippecanoe(featureList, featureParams, { echo: true });
  tippecanoe(labelList, labelParams, { echo: true });
  execFileSync(
    path.resolve('/usr/local/bin/tile-join'),
    [
      '--no-tile-compression',
      '--output-to-directory=' + path.resolve(distDir, row.iso_3),
      path.resolve(tmpFeatureDir, row.iso_3),
      path.resolve(tmpLabelDir, row.iso_3),
    ],
    error => {
      if (error) throw error;
    },
  );
}
