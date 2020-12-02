INPUT="data"
TMP="data-tmp"
MAX_ZOOM=10

# FILTER_FILE="${INPUT}/filter.json"
# --feature-filter-file=$FILTER_FILE

mkdir -p $TMP

tippecanoe \
  --minimum-zoom=0 \
  --maximum-zoom=$MAX_ZOOM \
  --no-simplification-of-shared-nodes \
  --simplify-only-low-zooms \
  --read-parallel \
  --force \
  --output="${TMP}/adm0_lines_disp.mbtiles" \
  "${INPUT}/adm0_lines_disp.json"

tippecanoe \
  --minimum-zoom=0 \
  --maximum-zoom=$MAX_ZOOM \
  --no-simplification-of-shared-nodes \
  --simplify-only-low-zooms \
  --read-parallel \
  --force \
  --output="${TMP}/adm0_lines.mbtiles" \
  "${INPUT}/adm0_lines.json"

tippecanoe \
  --minimum-zoom=1 \
  --maximum-zoom=$MAX_ZOOM \
  --no-simplification-of-shared-nodes \
  --simplify-only-low-zooms \
  --read-parallel \
  --force \
  --output="${TMP}/adm1_lines.mbtiles" \
  "${INPUT}/adm1_lines.json"

tippecanoe \
  --minimum-zoom=2 \
  --maximum-zoom=$MAX_ZOOM \
  --no-simplification-of-shared-nodes \
  --simplify-only-low-zooms \
  --read-parallel \
  --force \
  --output="${TMP}/adm2_lines.mbtiles" \
  "${INPUT}/adm2_lines.json"

tippecanoe \
  --minimum-zoom=3 \
  --maximum-zoom=$MAX_ZOOM \
  --no-simplification-of-shared-nodes \
  --simplify-only-low-zooms \
  --read-parallel \
  --force \
  --output="${TMP}/adm3_lines.mbtiles" \
  "${INPUT}/adm3_lines.json"

tippecanoe \
  --minimum-zoom=4 \
  --maximum-zoom=$MAX_ZOOM \
  --no-simplification-of-shared-nodes \
  --simplify-only-low-zooms \
  --read-parallel \
  --force \
  --output="${TMP}/adm4_lines.mbtiles" \
  "${INPUT}/adm4_lines.json"
