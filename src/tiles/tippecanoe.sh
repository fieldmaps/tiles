INPUT="data"
TMP="data-tmp"
MAX_ZOOM=10

if [ -d $TMP ]; then
  echo "Deleting old tmp directory..."
  rm -rf $TMP
fi
mkdir -p $TMP

echo "adm0_polygons.mbtiles"
tippecanoe \
  --layer="adm0_polygons" \
  --maximum-zoom=$MAX_ZOOM \
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
  --no-simplification-of-shared-nodes \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --include="adm0_type" \
  --output="${TMP}/adm0_lines.mbtiles" \
  "${INPUT}/adm0_lines.geojsonl.gz"

for l in {0..4}; do
  for z in {0..10}; do
    echo "adm${l}_points_z${z}.mbtiles"
    tippecanoe \
      --layer="adm${l}_points" \
      --drop-rate="1" \
      --minimum-zoom=$z \
      --maximum-zoom=$z \
      --read-parallel \
      --no-tile-size-limit \
      --force \
      --include="adm${l}_name1" \
      --include="adm0_label" \
      --output="${TMP}/adm${l}_points_z${z}.mbtiles" \
      "${INPUT}/adm${l}_points_z${z}.geojsonl.gz"
  done
done

for l in {1..4}; do
  for z in {0..10}; do
    echo "adm${l}_lines_z${z}.mbtiles"
    tippecanoe \
      --layer="adm${l}_lines" \
      --minimum-zoom=$z \
      --maximum-zoom=$MAX_ZOOM \
      --no-simplification-of-shared-nodes \
      --read-parallel \
      --no-tile-size-limit \
      --force \
      --exclude-all \
      --output="${TMP}/adm${l}_lines_z${z}.mbtiles" \
      "${INPUT}/adm${l}_lines_z${z}.geojsonl.gz"
  done
done

# TESTING ONLY
# for l in {0..4}; do
#   echo "adm${l}_points.mbtiles"
#   tippecanoe \
#     --layer="adm${l}_points" \
#     --drop-rate="1" \
#     --maximum-zoom=$MAX_ZOOM \
#     --read-parallel \
#     --no-tile-size-limit \
#     --force \
#     --include="adm${l}_name1" \
#     --include="wfp_label" \
#     --output="${TMP}/adm${l}_points.mbtiles" \
#     "${INPUT}/adm${l}_points.geojsonl.gz"
# done

# for l in {1..4}; do
#   echo "adm${l}_lines.mbtiles"
#   tippecanoe \
#     --layer="adm${l}_lines" \
#     --maximum-zoom=$MAX_ZOOM \
#     --no-simplification-of-shared-nodes \
#     --read-parallel \
#     --no-tile-size-limit \
#     --force \
#     --exclude-all \
#     --output="${TMP}/adm${l}_lines.mbtiles" \
#     "${INPUT}/adm${l}_lines.geojsonl.gz"
# done
