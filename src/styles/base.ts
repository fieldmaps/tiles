export default () => ({
  version: 8,
  name: 'Atlas Default',
  sprite: 'default/sprite',
  glyphs: '{fontstack}/{range}.pbf',
  sources: {
    atlas: {
      url: 'mbtiles://atlas.mbtiles',
      type: 'vector',
    },
  },
});
