import getColors from '../colors';

export default (themeName: string) => {
  const colors = getColors(themeName);
  return [
    {
      id: 'osm_wetlands',
      source: 'atlas',
      'source-layer': 'osm_wetlands',
      type: 'fill',
      paint: {
        'fill-color': colors.wetland,
      },
    },
    {
      id: 'osm_water',
      source: 'atlas',
      'source-layer': 'osm_water',
      type: 'fill',
      paint: {
        'fill-color': colors.water,
      },
    },
    {
      id: 'osm_rivers_all',
      source: 'atlas',
      'source-layer': 'osm_rivers_all',
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
