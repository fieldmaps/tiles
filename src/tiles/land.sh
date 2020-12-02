INPUT="data"
TMP="data-tmp"
MAX_ZOOM=10

mkdir -p $TMP

tippecanoe \
  --maximum-zoom=$MAX_ZOOM \
  --detect-shared-borders \
  --simplify-only-low-zooms \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/land.mbtiles" \
  "${INPUT}/land.json"
