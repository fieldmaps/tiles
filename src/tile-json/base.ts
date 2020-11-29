const { HOST } = process.env;
const MIN_ZOOM = 0;
const MAX_ZOOM = 10;

export default {
  attribution: "<a href='https://fieldmaps.io'>Fieldmaps.io</a>",
  bounds: [-180, -90, 180, 90],
  center: [0, 0, MAX_ZOOM],
  fillzoom: MAX_ZOOM,
  format: 'pbf',
  id: 'wld_adm',
  mapbox_logo: false,
  maskLevel: MAX_ZOOM,
  maxzoom: MAX_ZOOM,
  minzoom: MIN_ZOOM,
  name: 'Atlas Default',
  scheme: 'xyz',
  tilejson: '2.2.0',
  tiles: [`${HOST}/v4/wld_adm/{z}/{x}/{y}.pbf`],
};
