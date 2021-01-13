export default [
  {
    id: 'adm0_lines_disp',
    filter: ['==', 'wfp_disput', 'YES'],
    source: 'atlas',
    'source-layer': 'adm0_lines',
    type: 'line',
    paint: {
      'line-dasharray': [2, 2],
      'line-color': 'black',
      'line-width': {
        stops: [
          [0, 0],
          [5, 1],
        ],
        base: 2,
      },
    },
  },
  {
    id: 'adm0_lines',
    filter: ['==', 'wfp_disput', 'NO'],
    source: 'atlas',
    'source-layer': 'adm0_lines',
    type: 'line',
    paint: {
      'line-color': 'black',
      'line-width': {
        stops: [
          [0, 0],
          [5, 1],
        ],
        base: 2,
      },
    },
  },
  {
    id: 'adm1_lines',
    source: 'atlas',
    'source-layer': 'adm1_lines',
    type: 'line',
    paint: {
      'line-dasharray': [2, 2],
      'line-color': '#808080',
      'line-width': 1,
    },
  },
  {
    id: 'adm2_lines',
    source: 'atlas',
    'source-layer': 'adm2_lines',
    type: 'line',
    paint: {
      'line-dasharray': [2, 4],
      'line-color': '#808080',
      'line-width': 1,
    },
  },
  {
    id: 'adm3_lines',
    source: 'atlas',
    'source-layer': 'adm3_lines',
    type: 'line',
    paint: {
      'line-dasharray': [2, 4],
      'line-color': '#808080',
      'line-width': 1,
    },
  },
  {
    id: 'adm4_lines',
    source: 'atlas',
    'source-layer': 'adm4_lines',
    type: 'line',
    paint: {
      'line-dasharray': [2, 4],
      'line-color': '#808080',
      'line-width': 1,
    },
  },
];
