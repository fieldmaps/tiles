import getColors from '../colors';

const variableAnchor = [
  'bottom',
  'top',
  'left',
  'right',
  'bottom-left',
  'bottom-right',
  'top-left',
  'top-right',
];

export default (themeName: string) => {
  const colors = getColors(themeName);
  return [
    {
      id: 'health',
      source: 'atlas',
      'source-layer': 'health',
      type: 'circle',
      paint: {
        'circle-color': colors.health,
        'circle-radius': {
          stops: [
            [6, 2],
            [12, 5],
          ],
          base: 2,
        },
        'circle-stroke-width': 1,
        'circle-stroke-color': colors.pointOutline,
      },
    },
    {
      id: 'health_label',
      source: 'atlas',
      'source-layer': 'health',
      type: 'symbol',
      layout: {
        'text-field': '{name}',
        'text-font': ['noto-sans-condensed-light'],
        'text-size': 12,
        'text-offset': [0.5, 0.5],
        'text-variable-anchor': variableAnchor,
      },
      paint: {
        'text-color': colors.text,
        'text-halo-color': colors.textHalo,
        'text-halo-width': 1.5,
      },
    },
  ];
};
