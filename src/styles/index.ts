import fs from 'fs';
import path from 'path';
import base from './base';
import * as layers from './layers';

const render = (host: string, layers: any, name: string) => {
  const outputDir = path.resolve(__dirname, '../../dist/styles/v1');
  const output = path.resolve(outputDir, name + '.json');
  const style = { ...base(host), layers };
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(output, JSON.stringify(style));
};

export default (host: string) => {
  render(host, layers.admin('mono-light'), 'admin-light');
  render(host, layers.admin('mono-dark'), 'admin-dark');
  render(host, layers.places('color-light'), 'places-light');
  render(host, layers.places('color-dark'), 'places-dark');
  render(host, layers.health('color-light'), 'health-light');
  render(host, layers.health('color-dark'), 'health-dark');
};
