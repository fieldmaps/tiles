import admLabels from './adm-labels';
import admLabelsMinor from './adm-labels-minor';
import admLines from './adm-lines';
import admLinesMinor from './adm-lines-minor';
import admPolygons from './adm-polygons';
import places from './places';
import health from './health';
import education from './education';
import markets from './markets';
import roads from './roads';
import water from './water';

export const adminLayer = (colorTheme: string) => [
  ...admPolygons(colorTheme),
  ...water(colorTheme),
  ...roads(colorTheme),
  ...admLines(colorTheme),
  ...admLabels(colorTheme),
];

export const placesLayer = (colorTheme: string) => [
  ...admPolygons(colorTheme),
  ...water(colorTheme),
  ...roads(colorTheme),
  ...admLinesMinor(colorTheme),
  ...places(colorTheme),
  ...admLabelsMinor(colorTheme),
];

export const healthLayer = (colorTheme: string) => [
  ...admPolygons(colorTheme),
  ...water(colorTheme),
  ...roads(colorTheme),
  ...admLinesMinor(colorTheme),
  ...health(colorTheme),
  ...admLabelsMinor(colorTheme),
];

export const educationLayer = (colorTheme: string) => [
  ...admPolygons(colorTheme),
  ...water(colorTheme),
  ...roads(colorTheme),
  ...admLinesMinor(colorTheme),
  ...education(colorTheme),
  ...admLabelsMinor(colorTheme),
];

export const marketsLayer = (colorTheme: string) => [
  ...admPolygons(colorTheme),
  ...water(colorTheme),
  ...roads(colorTheme),
  ...admLinesMinor(colorTheme),
  ...markets(colorTheme),
  ...admLabelsMinor(colorTheme),
];
