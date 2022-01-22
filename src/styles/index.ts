import fs from 'fs';
import path from 'path';
import base from './base';
import {
  adminLayer,
  placesLayer,
  healthLayer,
  educationLayer,
  marketsLayer,
} from './layers';

const render = (layers: any, name: string) => {
  const outputDir = path.resolve(__dirname, '../../dist/styles');
  const output = path.resolve(outputDir, name + '.json');
  const style = { ...base(name), layers };
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(output, JSON.stringify(style));
};

export default () => {
  render(adminLayer('mono-light'), 'admin-light');
  render(adminLayer('mono-dark'), 'admin-dark');
  render(placesLayer('color-light'), 'places-light');
  render(placesLayer('color-dark'), 'places-dark');
  render(healthLayer('color-light'), 'health-light');
  render(healthLayer('color-dark'), 'health-dark');
  render(educationLayer('color-light'), 'education-light');
  render(educationLayer('color-dark'), 'education-dark');
  render(marketsLayer('color-light'), 'markets-light');
  render(marketsLayer('color-dark'), 'markets-dark');
};
