export default (name: string) => ({
  version: 8,
  name: name
    .replace('-', ' ')
    .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase())),
  sprite: 'default/sprite',
  glyphs: '{fontstack}/{range}.pbf',
  sources: {
    atlas: {
      url: 'mbtiles://atlas.mbtiles',
      type: 'vector',
    },
  },
});
