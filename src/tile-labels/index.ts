import fs from 'fs';
import path from 'path';
import polylabel from 'polylabel';
import * as turf from '@turf/turf';
import ndjson from 'ndjson';
import yargs from 'yargs';

const getLargestPolygon = (geometry: any) => {
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

const applyLabel = (transformStream: any, data: any) => {
  const polyCoords = getLargestPolygon(data.geometry);
  const coordinates = polylabel(polyCoords, 0.0001);
  const point = { type: 'Point', coordinates };
  const geometry = turf.truncate(point, { precision: 4 });
  transformStream.write({ ...data, geometry });
};

const inputDir = path.resolve(__dirname, '..', '..', 'data');
const labels = [
  'wld_adm0',
  'wld_adm1',
  'wld_adm2',
  'wld_adm3',
  'wld_adm4',
  'wld_adm5',
];

const { argv } = yargs
  .usage('$0 [--layer=name]')
  .option('layer', {
    alias: 'l',
    choices: labels,
    describe: 'Layer name',
  })
  .help('h', 'Show help.')
  .alias('h', 'help');

const input = path.resolve(inputDir, argv.layer + '.json');
const output = path.resolve(inputDir, argv.layer + '_labels.json');

const transformStream = ndjson.stringify();
const outputStream = fs.createWriteStream(output);

transformStream.pipe(outputStream);
fs.createReadStream(input)
  .pipe(ndjson.parse())
  .on('data', (data: any) => applyLabel(transformStream, data))
  .on('end', () => transformStream.end());

console.log(`Starting: ${argv.layer}`);
outputStream.on('finish', () => console.log(`Finished: ${argv.layer}`));
