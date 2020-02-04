import path from 'path';
import fs from 'fs';
import { csvParse } from 'd3-dsv';

const prod = path.resolve(__dirname, '../../dist');
const localDev = path.resolve(__dirname, '../../local-dev');
const localProd = path.resolve(__dirname, '../../local-prod');

const origins = [
  ['https://atlas.fieldmaps.io', prod],
  ['http://localhost:8000', localDev],
  ['http://localhost:9000', localProd],
];

const layers = [
  { attrType: 2, name: 'admin0' },
  { attrType: 2, name: 'admin0labels' },
  { attrType: 2, name: 'admin1' },
  { attrType: 2, name: 'admin1labels' },
  { attrType: 2, name: 'admin2' },
  { attrType: 2, name: 'admin2labels' },
  { attrType: 2, name: 'admin3' },
  { attrType: 2, name: 'admin3labels' },
  { attrType: 2, name: 'admin4' },
  { attrType: 2, name: 'admin4labels' },
  { attrType: 3, name: 'airports' },
  { attrType: 3, name: 'educationfacilities' },
  { attrType: 3, name: 'financialservices' },
  { attrType: 5, name: 'healthfacilities' },
  { attrType: 3, name: 'lakes' },
  { attrType: 3, name: 'protectedareas' },
  { attrType: 3, name: 'protectedareaslabels' },
  { attrType: 3, name: 'railways' },
  { attrType: 3, name: 'rivers' },
  { attrType: 3, name: 'roads' },
  { attrType: 3, name: 'seaports' },
  { attrType: 4, name: 'settlements' },
  { attrType: 1, name: 'undeterminedareas' },
  { attrType: 1, name: 'undeterminedareaslabels' },
];

const data: any = csvParse(
  fs.readFileSync(path.resolve(__dirname, '../../data.csv'), 'utf8'),
);

const getAttributes = (attrType: number) => {
  switch (attrType) {
    case 1:
      return { name: 'String' };
    case 2:
      return { name: 'String', pcode: 'String' };
    case 3:
      return { name: 'String', type: 'String' };
    case 4:
      return { name: 'String', pcode: 'String', type: 'Number' };
    case 5:
      return { emergency: 'String', name: 'String', type: 'Number' };
    default:
      return {};
  }
};

const getLayer = (attrType: number, name: string, slug: string) => ({
  description: '',
  fields: getAttributes(attrType),
  id: name,
  maxzoom: 22,
  minzoom: 0,
  source: slug,
  source_name: `${slug.toUpperCase()} Atlas`,
});

const getTileJson = (
  origin: string,
  bounds: number[],
  center: number[],
  slug: string,
  maxzoom: number,
) => ({
  attribution: "<a href='https://fieldmaps.io'>Fieldmaps.io</a>",
  bounds,
  center: [...center, maxzoom],
  fillzoom: maxzoom,
  format: 'pbf',
  id: slug,
  mapbox_logo: false,
  maskLevel: maxzoom,
  maxzoom,
  minzoom: 0,
  name: `${slug.toUpperCase()} Atlas`,
  scheme: 'xyz',
  tilejson: '2.2.0',
  tiles: [`${origin}/v4/${slug}/{z}/{x}/{y}.pbf`],
  vector_layers: layers.map(({ attrType, name }) =>
    getLayer(attrType, name, slug),
  ),
});

for (const [origin, dist] of origins) {
  const distDir = path.resolve(dist, 'v4');
  if (!fs.existsSync(dist)) fs.mkdirSync(dist);
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
  for (const row of data) {
    const { bounds_tiles, center: center_tiles, maxzoom, iso_3 } = row;
    const bounds = bounds_tiles.split(',').map(Number);
    const center = center_tiles.split(',').map(Number);
    const tileJson = getTileJson(
      origin,
      bounds,
      center,
      iso_3,
      Number(maxzoom),
    );
    const jsonPath = path.resolve(distDir, iso_3 + '.json');
    fs.writeFileSync(jsonPath, JSON.stringify(tileJson));
  }
}
