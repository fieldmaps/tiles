INPUT="data/adm0"
TMP="tmp/adm0"
MAX_ZOOM=10
mkdir -p $TMP

echo "adm0_polygons.mbtiles"
tippecanoe \
  --layer="adm0_polygons" \
  --maximum-zoom=$MAX_ZOOM \
  --simplify-only-low-zooms \
  --detect-shared-borders \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --exclude-all \
  --output="${TMP}/adm0_polygons.mbtiles" \
  "${INPUT}/adm0_polygons.geojsonl.gz"

echo "adm0_lines.mbtiles"
tippecanoe \
  --layer="adm0_lines" \
  --maximum-zoom=$MAX_ZOOM \
  --simplify-only-low-zooms \
  --no-simplification-of-shared-nodes \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --include="adm0_type" \
  --output="${TMP}/adm0_lines.mbtiles" \
  "${INPUT}/adm0_lines.geojsonl.gz"
