export default [
  {
    id: 'wld_adm0_labels',
    source: 'wld_adm',
    'source-layer': 'wld_adm0_labels',
    type: 'symbol',
    layout: {
      'text-field': '{name1_0}',
      'text-font': ['noto-sans-condensed-light-italic'],
      'text-size': 22,
    },
    minzoom: 3,
    maxzoom: 6,
    paint: {
      'text-color': 'black',
      'text-halo-color': 'rgba(255, 255, 255, 0.9)',
      'text-halo-width': 1.5,
    },
  },
  {
    id: 'wld_adm1_labels',
    source: 'wld_adm',
    'source-layer': 'wld_adm1_labels',
    type: 'symbol',
    layout: {
      'text-field': '{name1_1}',
      'text-font': ['noto-sans-condensed-light-italic'],
      'text-size': 22,
    },
    minzoom: 6,
    maxzoom: 8,
    paint: {
      'text-color': 'black',
      'text-halo-color': 'rgba(255, 255, 255, 0.9)',
      'text-halo-width': 1.5,
    },
  },
  {
    id: 'wld_adm2_labels',
    source: 'wld_adm',
    'source-layer': 'wld_adm2_labels',
    type: 'symbol',
    layout: {
      'text-field': '{name1_2}',
      'text-font': ['noto-sans-condensed-light-italic'],
      'text-size': 22,
    },
    minzoom: 8,
    maxzoom: 10,
    paint: {
      'text-color': 'black',
      'text-halo-color': 'rgba(255, 255, 255, 0.9)',
      'text-halo-width': 1.5,
    },
  },
];
