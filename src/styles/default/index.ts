import getStyle from './style';
import getStops from './stops';

export default (origin: string, row: any) => {
  const stops = getStops(Number(row.basezoom));
  return getStyle(origin, stops, row);
};
