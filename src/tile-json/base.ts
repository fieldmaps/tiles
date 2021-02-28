const MAX_ZOOM = 10;

export default (host: string) => ({
  attribution:
    "<a href='https://www.openstreetmap.org/copyright'>© OpenStreetMap</a>, <a href='https://fieldmaps.io'>Fieldmaps.io</a>",
  bounds: [-180, -90, 180, 90],
  center: [0, 0, MAX_ZOOM],
  fillzoom: MAX_ZOOM,
  format: 'pbf',
  id: 'atlas',
  mapbox_logo: false,
  maskLevel: MAX_ZOOM,
  maxzoom: MAX_ZOOM,
  minzoom: 0,
  name: 'Atlas Default',
  scheme: 'xyz',
  tilejson: '2.2.0',
  tiles: [`${host}/v4/atlas/{z}/{x}/{y}.pbf`],
});
