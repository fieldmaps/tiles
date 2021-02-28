import admLabels from './adm-labels';
import admLabelsMinor from './adm-labels-minor';
import admLines from './adm-lines';
import admLinesMinor from './adm-lines-minor';
import admPolygons from './adm-polygons';
import osmPlaces from './osm-places';
import osmHealth from './osm-health';
import osmRoads from './osm-roads';
import osmWater from './osm-water';

export const admin = (colorTheme: string) => [
  ...admPolygons(colorTheme),
  ...osmWater(colorTheme),
  ...osmRoads(colorTheme),
  ...admLines(colorTheme),
  ...admLabels(colorTheme),
];

export const places = (colorTheme: string) => [
  ...admPolygons(colorTheme),
  ...osmWater(colorTheme),
  ...osmRoads(colorTheme),
  ...admLinesMinor(colorTheme),
  ...osmPlaces(colorTheme),
  ...admLabelsMinor(colorTheme),
];

export const health = (colorTheme: string) => [
  ...admPolygons(colorTheme),
  ...osmWater(colorTheme),
  ...osmRoads(colorTheme),
  ...admLinesMinor(colorTheme),
  ...osmHealth(colorTheme),
  ...admLabelsMinor(colorTheme),
];
