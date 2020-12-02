import fs from 'fs';
import path from 'path';
import base from './base';
import background from './layers/background';
import adminLines from './layers/admin-lines';
import adminLabels from './layers/admin-labels';

const outputDir = path.resolve(__dirname, '../../dist/v4');
const output = path.resolve(outputDir, 'atlas.json');

const tileJson = {
  ...base,
  vector_layers: [...background, ...adminLines, ...adminLabels],
};

fs.writeFileSync(output, JSON.stringify(tileJson));
