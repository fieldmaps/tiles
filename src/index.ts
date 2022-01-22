import fs from 'fs';
import path from 'path';
import styles from './styles';

const inputConfig = path.resolve(__dirname, 'config.json');
const outputConfig = path.resolve(__dirname, '../dist/config.json');

styles();
fs.copyFileSync(inputConfig, outputConfig);
