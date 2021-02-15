import getColors from './colors';

export default (themeName: string) => {
  const colors = getColors(themeName);
  return [
    {
      id: 'ocean',
      type: 'background',
      paint: {
        'background-color': colors.water,
      },
    },
    {
      id: 'adm0_polygons',
      source: 'atlas',
      'source-layer': 'adm0_polygons',
      type: 'fill',
      paint: {
        'fill-color': colors.land,
      },
    },
  ];
};
