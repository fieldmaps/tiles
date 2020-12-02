INPUT="data"
TMP="data-tmp"
MAX_ZOOM=10

# FILTER_FILE="${INPUT}/filter.json"
# --feature-filter-file=$FILTER_FILE

mkdir -p $TMP

tippecanoe \
  --drop-rate=1 \
  --minimum-zoom=0 \
  --maximum-zoom=$MAX_ZOOM \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/adm0_labels.mbtiles" \
  "${INPUT}/adm0_labels.json"

tippecanoe \
  --drop-rate=1 \
  --minimum-zoom=1 \
  --maximum-zoom=$MAX_ZOOM \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/adm1_labels.mbtiles" \
  "${INPUT}/adm1_labels.json"

tippecanoe \
  --drop-rate=1 \
  --minimum-zoom=2 \
  --maximum-zoom=$MAX_ZOOM \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/adm2_labels.mbtiles" \
  "${INPUT}/adm2_labels.json"

tippecanoe \
  --drop-rate=1 \
  --minimum-zoom=3 \
  --maximum-zoom=$MAX_ZOOM \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/adm3_labels.mbtiles" \
  "${INPUT}/adm3_labels.json"

tippecanoe \
  --drop-rate=1 \
  --minimum-zoom=4 \
  --maximum-zoom=$MAX_ZOOM \
  --read-parallel \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/adm4_labels.mbtiles" \
  "${INPUT}/adm4_labels.json"
