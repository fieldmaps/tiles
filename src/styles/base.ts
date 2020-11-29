const { HOST } = process.env;

export default {
  version: 8,
  name: 'Atlas Default',
  sprite: `${HOST}/sprites/v1/default/sprite`,
  glyphs: `${HOST}/fonts/v1/{fontstack}/{range}.pbf`,
  sources: {
    wld_adm: { url: `${HOST}/v4/wld_adm.json`, type: 'vector' },
  },
};
