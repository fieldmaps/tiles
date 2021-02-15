INPUT="data/osml"
TMP="tmp/osml"
MAX_ZOOM=10
mkdir -p $TMP

echo "rivers_river.mbtiles"
tippecanoe \
  --layer="osm_rivers_river" \
  --minimum-zoom=10 \
  --maximum-zoom=$MAX_ZOOM \
  --simplify-only-low-zooms \
  --no-simplification-of-shared-nodes \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --exclude-all \
  --output="${TMP}/rivers_river.mbtiles" \
  "${INPUT}/rivers_river.geojsonl.gz"

echo "roads_trunk.mbtiles"
tippecanoe \
  --layer="osm_roads_trunk" \
  --minimum-zoom=4 \
  --maximum-zoom=$MAX_ZOOM \
  --simplify-only-low-zooms \
  --no-simplification-of-shared-nodes \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --exclude-all \
  --output="${TMP}/roads_trunk.mbtiles" \
  "${INPUT}/roads_motorway.geojsonl.gz" \
  "${INPUT}/roads_trunk.geojsonl.gz"

echo "roads_primary.mbtiles"
tippecanoe \
  --layer="osm_roads_primary" \
  --minimum-zoom=6 \
  --maximum-zoom=$MAX_ZOOM \
  --simplify-only-low-zooms \
  --no-simplification-of-shared-nodes \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --exclude-all \
  --output="${TMP}/roads_primary.mbtiles" \
  "${INPUT}/roads_primary.geojsonl.gz"

echo "roads_secondary.mbtiles"
tippecanoe \
  --layer="osm_roads_secondary" \
  --minimum-zoom=8 \
  --maximum-zoom=$MAX_ZOOM \
  --simplify-only-low-zooms \
  --no-simplification-of-shared-nodes \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --exclude-all \
  --output="${TMP}/roads_secondary.mbtiles" \
  "${INPUT}/roads_secondary.geojsonl.gz"

echo "roads_tertiary.mbtiles"
tippecanoe \
  --layer="osm_roads_tertiary" \
  --minimum-zoom=10 \
  --maximum-zoom=$MAX_ZOOM \
  --simplify-only-low-zooms \
  --no-simplification-of-shared-nodes \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --exclude-all \
  --output="${TMP}/roads_tertiary.mbtiles" \
  "${INPUT}/roads_tertiary.geojsonl.gz"
