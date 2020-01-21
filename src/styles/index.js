const fs = require('fs');
const path = require('path');
const { csvParse } = require('d3-dsv');

const defaultStyle = require('./default');

const origin = 'https://atlas.fieldmaps.io';
const data = csvParse(
  fs.readFileSync(path.resolve(__dirname, '../../data.csv'), 'utf8'),
);
const styleTypes = [['default', defaultStyle]];

const dist = path.resolve(__dirname, '../../dist');
const distDir = path.resolve(dist, 'styles');
if (!fs.existsSync(dist)) fs.mkdirSync(dist);
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

for (const row of data) {
  for (const [dir, func] of styleTypes) {
    const style = func(origin, row);
    const output = path.resolve(distDir, dir);
    const jsonPath = path.resolve(output, row.iso_3 + '.json');
    if (!fs.existsSync(output)) fs.mkdirSync(output);
    fs.writeFileSync(jsonPath, JSON.stringify(style));
  }
}
