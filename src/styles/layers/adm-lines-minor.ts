import getColors from '../colors';

const WIDTH_STOP = 6;
const WIDTH_0 = 2;
const WIDTH_1 = WIDTH_0;
const WIDTH_2 = WIDTH_1 / 2;
const WIDTH_3 = WIDTH_2 / 4;
const WIDTH_4 = WIDTH_3;

const D = 4;
const DASH_0 = [D, D];
const DASH_2 = [D, D];
const DASH_3 = [D, D * 2];
const DASH_4 = [D * 2, D * 8];

export default (themeName: string) => {
  const colors = getColors(themeName);
  return [
    {
      id: 'adm0_lines_disp',
      filter: ['>', 'adm0_type', 1],
      source: 'atlas',
      'source-layer': 'adm0_lines',
      type: 'line',
      paint: {
        'line-dasharray': DASH_0,
        'line-color': colors.adm0Line,
        'line-width': {
          stops: [
            [0, 0],
            [WIDTH_STOP, WIDTH_0],
          ],
          base: 2,
        },
      },
    },
    {
      id: 'adm0_lines',
      filter: ['==', 'adm0_type', 1],
      source: 'atlas',
      'source-layer': 'adm0_lines',
      type: 'line',
      paint: {
        'line-color': colors.adm0Line,
        'line-width': {
          stops: [
            [0, 0],
            [WIDTH_STOP, WIDTH_0],
          ],
          base: 2,
        },
      },
    },
  ];
};
