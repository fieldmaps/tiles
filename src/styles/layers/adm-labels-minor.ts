import getColors from '../colors';

export default (themeName: string) => {
  const colors = getColors(themeName);
  return [
    {
      id: 'adm0_labels',
      source: 'atlas',
      'source-layer': 'adm0_points',
      type: 'symbol',
      layout: {
        'text-field': '{adm0_label}',
        'text-font': ['noto-sans-condensed-light'],
        'text-size': 12,
      },
      paint: {
        'text-color': colors.text,
        'text-halo-color': colors.textHalo,
        'text-halo-width': 1.5,
      },
    },
  ];
};
