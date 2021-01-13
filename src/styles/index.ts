import fs from 'fs';
import path from 'path';
import base from './base';
import background from './layers/background';
import adminLines from './layers/admin-lines';
import adminPoints from './layers/admin-points';

const outputDir = path.resolve(__dirname, '../../dist/styles/v1');
const output = path.resolve(outputDir, 'default.json');

const style = {
  ...base,
  layers: [...background, ...adminLines, ...adminPoints],
};

fs.writeFileSync(output, JSON.stringify(style));
