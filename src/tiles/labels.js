const polylabel = require('polylabel');
const fs = require('fs');
const path = require('path');
const turf = require('@turf/turf');
const { csvParse } = require('d3-dsv');

const inputDir = path.resolve(__dirname, 'inputs', 'features');
const tmpDir = path.resolve(__dirname, 'inputs', 'labels');

if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

const data = csvParse(
  fs.readFileSync(path.resolve(__dirname, '../../data.csv'), 'utf8'),
);

const labels = [
  'admin0',
  'admin1',
  'admin2',
  'admin3',
  'admin4',
  'protected-areas',
  'undetermined-areas',
];

const getLargestPolygon = geometry => {
  if (geometry.type === 'Polygon') return geometry.coordinates;
  let area = 0;
  let coordinates = geometry.coordinates[0];
  for (const coords of geometry.coordinates) {
    const a = turf.area(turf.polygon(coords));
    if (a > area) {
      area = a;
      coordinates = coords;
    }
  }
  return coordinates;
};

for (const row of data) {
  console.log(row.iso_3);
  for (const label of labels) {
    const outputDir = path.resolve(tmpDir, row.iso_3);
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
    const file = path.resolve(inputDir, row.iso_3, label + '.geojson');
    const features = JSON.parse(fs.readFileSync(file, 'utf8'));
    const featureNew = { type: 'FeatureCollection', features: [] };
    turf.featureEach(features, currentFeature => {
      const polyCoords = getLargestPolygon(currentFeature.geometry);
      const coordinates = polylabel(polyCoords, 0.0001);
      const point = { type: 'Point', coordinates };
      const geometry = turf.truncate(point, { precision: 4 });
      featureNew.features.push({ ...currentFeature, geometry });
    });
    const writePath = path.resolve(outputDir, label + '-labels.geojson');
    fs.writeFileSync(writePath, JSON.stringify(featureNew), 'utf8');
  }
}
