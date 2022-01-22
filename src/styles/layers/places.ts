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
      id: 'places_city',
      source: 'atlas',
      'source-layer': 'places_city',
      type: 'circle',
      paint: {
        'circle-color': colors.place,
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
      id: 'places_town',
      source: 'atlas',
      'source-layer': 'places_town',
      type: 'circle',
      paint: {
        'circle-color': colors.place,
        'circle-radius': {
          stops: [
            [8, 2],
            [12, 4],
          ],
          base: 2,
        },
        'circle-stroke-width': 1,
        'circle-stroke-color': colors.pointOutline,
      },
    },
    {
      id: 'places_village',
      source: 'atlas',
      'source-layer': 'places_village',
      type: 'circle',
      paint: {
        'circle-color': colors.place,
        'circle-radius': {
          stops: [
            [10, 1],
            [12, 3],
          ],
          base: 2,
        },
        'circle-stroke-width': 1,
        'circle-stroke-color': colors.pointOutline,
      },
    },
    {
      id: 'places_village_label',
      source: 'atlas',
      'source-layer': 'places_village',
      type: 'symbol',
      minzoom: 12,
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
    {
      id: 'places_town_label',
      source: 'atlas',
      'source-layer': 'places_town',
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
    {
      id: 'places_city_label',
      source: 'atlas',
      'source-layer': 'places_city',
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
