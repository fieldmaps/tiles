INPUT="data"
TMP="data-tmp"
MAX_ZOOM=10

if [ -d $TMP ]; then
  echo "Deleting old tmp directory..."
  rm -rf $TMP
fi
mkdir -p $TMP

tippecanoe \
  --layer="land" \
  --maximum-zoom=$MAX_ZOOM \
  --detect-shared-borders \
  --simplify-only-low-zooms \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/land.mbtiles" \
  "${INPUT}/land.geojsonl"

tippecanoe \
  --layer="adm0_lines" \
  --maximum-zoom=$MAX_ZOOM \
  --no-simplification-of-shared-nodes \
  --simplify-only-low-zooms \
  --read-parallel \
  --force \
  --include="wfp_disput" \
  --output="${TMP}/adm0_lines.mbtiles" \
  "${INPUT}/adm0_lines.geojsonl"

for l in {1..4}; do
  for z in {0..10}; do
    tippecanoe \
      --layer="adm${l}_lines" \
      --minimum-zoom=$z \
      --maximum-zoom=$z \
      --no-simplification-of-shared-nodes \
      --simplify-only-low-zooms \
      --read-parallel \
      --force \
      --exclude-all \
      --output="${TMP}/adm${l}_lines_z${z}.mbtiles" \
      "${INPUT}/adm${l}_lines_z${z}.geojsonl"
  done
done

for l in {0..4}; do
  for z in {0..10}; do
    tippecanoe \
      --layer="adm${l}_points" \
      --drop-rate="1" \
      --minimum-zoom=$z \
      --maximum-zoom=$z \
      --read-parallel \
      --no-tile-size-limit \
      --force \
      --include="adm${l}_name1" \
      --include="wfp_label" \
      --output="${TMP}/adm${l}_points_z${z}.mbtiles" \
      "${INPUT}/adm${l}_points_z${z}.geojsonl"
  done
done
