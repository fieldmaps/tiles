export default [
  {
    id: 'adm0_lines_disp',
    source: 'atlas',
    'source-layer': 'adm0_lines_disp',
    type: 'line',
    paint: {
      'line-dasharray': [2, 2],
      'line-color': 'black',
      'line-width': {
        stops: [
          [0, 0],
          [6, 2],
        ],
        base: 2,
      },
    },
  },
  {
    id: 'adm0_lines',
    source: 'atlas',
    'source-layer': 'adm0_lines',
    type: 'line',
    paint: {
      'line-color': 'black',
      'line-width': {
        stops: [
          [0, 0],
          [6, 2],
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
      'line-color': 'black',
      'line-width': {
        stops: [
          [3, 0],
          [9, 2],
        ],
        base: 2,
      },
    },
  },
  {
    id: 'adm2_lines',
    source: 'atlas',
    'source-layer': 'adm2_lines',
    type: 'line',
    paint: {
      'line-color': 'black',
      'line-width': {
        stops: [
          [6, 0],
          [9, 1],
        ],
        base: 2,
      },
    },
  },
  {
    id: 'adm3_lines',
    source: 'atlas',
    'source-layer': 'adm3_lines',
    type: 'line',
    paint: {
      'line-color': 'black',
      'line-width': {
        stops: [
          [9, 0],
          [10, 1],
        ],
        base: 2,
      },
    },
  },
];
