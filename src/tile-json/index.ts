import fs from 'fs';
import path from 'path';
import base from './base';
import admPolygons from './layers/adm-polygons';
import admLines from './layers/adm-lines';
import admPoints from './layers/adm-points';
import osmPolygons from './layers/osm-polygons';
import osmLines from './layers/osm-lines';

const outputDir = path.resolve(__dirname, '../../dist/v4');
const output = path.resolve(outputDir, 'atlas.json');

const tileJson = {
  ...base,
  vector_layers: [
    ...admPolygons,
    ...osmPolygons,
    ...admLines,
    ...osmLines,
    ...admPoints,
  ],
};

fs.writeFileSync(output, JSON.stringify(tileJson));
