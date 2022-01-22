import getColors from '../colors';

export default (themeName: string) => {
  const colors = getColors(themeName);
  return [
    {
      id: 'roads_trunk',
      source: 'atlas',
      'source-layer': 'roads_trunk',
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
      id: 'roads_primary',
      source: 'atlas',
      'source-layer': 'roads_primary',
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
      id: 'roads_secondary',
      source: 'atlas',
      'source-layer': 'roads_secondary',
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
      id: 'roads_tertiary',
      source: 'atlas',
      'source-layer': 'roads_tertiary',
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
