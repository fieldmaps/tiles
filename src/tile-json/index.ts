import fs from 'fs';
import path from 'path';
import base from './base';
import layers from './layers';

export default (host: string) => {
  const outputDir = path.resolve(__dirname, '../../dist/v4');
  const output = path.resolve(outputDir, 'atlas.json');
  const tileJson = { ...base(host), vector_layers: layers };
  fs.writeFileSync(output, JSON.stringify(tileJson));
};
