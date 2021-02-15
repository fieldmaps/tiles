INPUT="data/osma"
TMP="tmp/osma"
MAX_ZOOM=10
mkdir -p $TMP

echo "wetlands.mbtiles"
tippecanoe \
  --layer="osm_wetlands" \
  --minimum-zoom=5 \
  --maximum-zoom=$MAX_ZOOM \
  --simplify-only-low-zooms \
  --detect-shared-borders \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --exclude-all \
  --output="${TMP}/wetlands.mbtiles" \
  "${INPUT}/wetlands.geojsonl.gz"

echo "water.mbtiles"
tippecanoe \
  --layer="osm_water" \
  --maximum-zoom=$MAX_ZOOM \
  --simplify-only-low-zooms \
  --detect-shared-borders \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --exclude-all \
  --output="${TMP}/water.mbtiles" \
  "${INPUT}/water.geojsonl.gz"
