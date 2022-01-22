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
        'text-field': '{adm0_name}',
        'text-font': ['noto-sans-condensed-light'],
        'text-size': 12,
      },
      paint: {
        'text-color': colors.text,
        'text-halo-color': colors.textHalo,
        'text-halo-width': 1.5,
      },
    },
    {
      id: 'adm1_labels',
      source: 'atlas',
      'source-layer': 'adm1_points',
      type: 'symbol',
      layout: {
        'text-field': '{adm1_name}',
        'text-font': ['noto-sans-condensed-light'],
        'text-size': 12,
      },
      paint: {
        'text-color': colors.text,
        'text-halo-color': colors.textHalo,
        'text-halo-width': 1.5,
      },
    },
    {
      id: 'adm2_labels',
      source: 'atlas',
      'source-layer': 'adm2_points',
      type: 'symbol',
      layout: {
        'text-field': '{adm2_name}',
        'text-font': ['noto-sans-condensed-light'],
        'text-size': 12,
      },
      paint: {
        'text-color': colors.text,
        'text-halo-color': colors.textHalo,
        'text-halo-width': 1.5,
      },
    },
    {
      id: 'adm3_labels',
      source: 'atlas',
      'source-layer': 'adm3_points',
      type: 'symbol',
      layout: {
        'text-field': '{adm3_name}',
        'text-font': ['noto-sans-condensed-light'],
        'text-size': 12,
      },
      paint: {
        'text-color': colors.text,
        'text-halo-color': colors.textHalo,
        'text-halo-width': 1.5,
      },
    },
    {
      id: 'adm4_labels',
      source: 'atlas',
      'source-layer': 'adm4_points',
      type: 'symbol',
      layout: {
        'text-field': '{adm4_name}',
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
