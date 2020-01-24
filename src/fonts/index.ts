import path from 'path';
import fs from 'fs';
// @ts-ignore
import glyphs from '../../node_modules/glyph-pbf-composite/index';
import { execFile } from 'child_process';

const tmpDir = path.resolve(__dirname, 'tmp/');
const dist = path.resolve(__dirname, '../../dist');
const distDir = path.resolve(dist, 'fonts');
const outputDir = path.resolve(distDir, 'noto-sans-condensed-light');
const outputItalic = path.resolve(distDir, 'noto-sans-condensed-light-italic');

if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
if (!fs.existsSync(dist)) fs.mkdirSync(dist);
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
if (!fs.existsSync(outputItalic)) fs.mkdirSync(outputItalic);

const fontsDirs = [
  'NotoSans-CondensedLight',
  'NotoSansArabic-CondensedLight',
  'NotoSansEthiopic-CondensedLight',
  'NotoSansHebrew-CondensedLight',
  'NotoSansMyanmar-CondensedLight',
  'NotoSansThai-CondensedLight',
];

const fontsDirsAll = [...fontsDirs, 'NotoSans-CondensedLightItalic'];

const readPbfsFilesToCombine = (
  tmpDir: string,
  fontsDirs: string[],
  range: string,
) => {
  const pbfsFiles = [];
  for (let i = 0; i < fontsDirs.length; ++i) {
    const pbfFilePath = tmpDir + '/' + fontsDirs[i] + '/' + range + '.pbf';
    pbfsFiles.push(fs.readFileSync(pbfFilePath));
  }
  return pbfsFiles;
};

for (const file of fontsDirsAll) {
  const tmpPath = path.resolve(tmpDir, file);
  if (!fs.existsSync(tmpPath)) fs.mkdirSync(tmpPath);
  execFile(
    path.resolve(__dirname, '../../node_modules/.bin/build-glyphs'),
    [
      path.resolve(__dirname, 'inputs', file + '.ttf'),
      path.resolve(tmpDir, file),
    ],
    error => {
      if (error) throw error;
    },
  );
}

setTimeout(() => {
  for (let i = 0; i < 65536; i = i + 256) {
    const range = i + '-' + Math.min(i + 255, 65535);
    const pbfsToCombine = readPbfsFilesToCombine(tmpDir, fontsDirs, range);
    const combinedGlyphs = glyphs.combine(pbfsToCombine, fontsDirs.toString());
    fs.writeFileSync(outputDir + '/' + range + '.pbf', combinedGlyphs);
  }

  for (const file of ['0-255', '256-511']) {
    fs.copyFileSync(
      path.resolve(tmpDir, 'NotoSans-CondensedLightItalic', file + '.pbf'),
      path.resolve(outputItalic, file + '.pbf'),
    );
  }
}, 5000);

// 0-255.pbf: Basic Latin & Latin-1 Supplement
// 256-511.pbf: Latin Extended-A
// 512-767.pbf: Latin Extended-B
// 768-1023.pbf: Greek
// 1024-1279.pbf: Cyrillic
// 1280-1535.pbf: Hebrew
// 1536-1791.pbf: Arabic
// 1792-2047.pbf: Arabic Supplement
// 2048-2303.pbf: Arabic Extended-A
// 4096-4351.pbf: Myanmar
// 4608-4863.pbf: Ethiopic
// 4864-5119.pbf: Ethiopic
// 7680-7935.pbf: Latin Extended Additional
// 8192-8447.pbf: General Punctuation & Symbols
// 8448-8703.pbf: Symbols
// 64256-64511.pbf: Arabic Presentation Forms-A
// 64512-64767.pbf: Arabic Presentation Forms-A
// 64768-65023.pbf: Arabic Presentation Forms-A
// 65024-65279.pbf: Arabic Presentation Forms-B
