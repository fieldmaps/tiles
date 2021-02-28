import getColors from '../colors';

export default (themeName: string) => {
  const colors = getColors(themeName);
  return [
    {
      id: 'osm_roads_trunk',
      source: 'atlas',
      'source-layer': 'osm_roads_trunk',
      type: 'line',
      paint: {
        'line-color': colors.road,
        'line-width': {
          stops: [
            [4, 0.5],
            [7, 3],
          ],
          base: 2,
        },
      },
    },
    {
      id: 'osm_roads_primary',
      source: 'atlas',
      'source-layer': 'osm_roads_primary',
      type: 'line',
      paint: {
        'line-color': colors.road,
        'line-width': {
          stops: [
            [5, 0.5],
            [9, 2],
          ],
          base: 2,
        },
      },
    },
    {
      id: 'osm_roads_secondary',
      source: 'atlas',
      'source-layer': 'osm_roads_secondary',
      type: 'line',
      paint: {
        'line-color': colors.road,
        'line-width': {
          stops: [
            [7, 0.5],
            [10, 1],
          ],
          base: 2,
        },
      },
    },
    {
      id: 'osm_roads_tertiary',
      source: 'atlas',
      'source-layer': 'osm_roads_tertiary',
      type: 'line',
      paint: {
        'line-color': colors.road,
        'line-dasharray': [2, 2],
        'line-width': {
          stops: [
            [9, 0.5],
            [11, 1],
          ],
          base: 2,
        },
      },
    },
  ];
};
