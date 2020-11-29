import fs from 'fs';
import path from 'path';
import base from './base';
import background from './layers/background';
import adminLines from './layers/admin-lines';
import adminLabels from './layers/admin-labels';

const outputDir = path.resolve(__dirname, '../../dist/styles/v1');
const output = path.resolve(outputDir, 'default.json');

const style = {
  ...base,
  layers: [...background, ...adminLines, ...adminLabels],
};

fs.writeFileSync(output, JSON.stringify(style));
