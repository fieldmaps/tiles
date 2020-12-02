const { HOST } = process.env;

export default {
  version: 8,
  name: 'Atlas Default',
  sprite: `${HOST}/sprites/v1/default/sprite`,
  glyphs: `${HOST}/fonts/v1/{fontstack}/{range}.pbf`,
  sources: {
    atlas: { url: `${HOST}/v4/atlas.json`, type: 'vector' },
  },
};
