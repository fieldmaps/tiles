const getStyle = require('./style');
const getStops = require('./stops');

module.exports = (origin, row) => {
  const stops = getStops(Number(row.basezoom));
  return getStyle(origin, stops, row);
};
