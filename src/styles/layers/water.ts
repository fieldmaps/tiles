import getColors from '../colors';

export default (themeName: string) => {
  const colors = getColors(themeName);
  return [
    {
      id: 'wetlands',
      source: 'atlas',
      'source-layer': 'wetlands',
      type: 'fill',
      paint: {
        'fill-color': colors.wetland,
      },
    },
    {
      id: 'water',
      source: 'atlas',
      'source-layer': 'water',
      type: 'fill',
      paint: {
        'fill-color': colors.water,
      },
    },
    {
      id: 'rivers_all',
      source: 'atlas',
      'source-layer': 'rivers_all',
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
  ];
};
