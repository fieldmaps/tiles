export default (host: string) => ({
  version: 8,
  name: 'Atlas Default',
  sprite: `${host}/sprites/v1/default/sprite`,
  glyphs: `${host}/fonts/v1/{fontstack}/{range}.pbf`,
  sources: {
    atlas: { url: `${host}/v4/atlas.json`, type: 'vector' },
  },
});
