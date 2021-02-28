import styles from './styles';
import tileJson from './tile-json';

const remoteHost = 'https://tiles.fieldmaps.io';
const host = process.env.HOST ?? remoteHost;

styles(host);
tileJson(host);
