import getColors from './colors';

export default (themeName: string) => {
  const colors = getColors(themeName);
  return [
    {
      id: 'osm_rivers_river',
      source: 'atlas',
      'source-layer': 'osm_rivers_river',
      type: 'line',
      paint: {
        'line-color': colors.water,
        'line-width': {
          stops: [
            [10, 0],
            [12, 2],
          ],
          base: 2,
        },
      },
    },
    {
      id: 'osm_roads_trunk',
      source: 'atlas',
      'source-layer': 'osm_roads_trunk',
      type: 'line',
      paint: {
        'line-color': colors.road,
        'line-width': {
          stops: [
            [4, 0],
            [8, 2],
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
            [6, 0],
            [10, 2],
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
            [8, 0],
            [12, 1],
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
        'line-width': {
          stops: [
            [10, 0],
            [12, 1],
          ],
          base: 2,
        },
      },
    },
  ];
};
