INPUT="data/adm"
TMP="tmp/adm"
MAX_ZOOM=10
mkdir -p $TMP

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
      --include="adm0_label" \
      --include="adm${l}_name1" \
      --include="adm${l}_point" \
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
      --simplify-only-low-zooms \
      --no-simplification-of-shared-nodes \
      --read-parallel \
      --no-tile-size-limit \
      --force \
      --include="adm${l}_line" \
      --output="${TMP}/adm${l}_lines_z${z}.mbtiles" \
      "${INPUT}/adm${l}_lines_z${z}.geojsonl.gz"
  done
done
