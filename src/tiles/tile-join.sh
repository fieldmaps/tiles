TMP="data-tmp"
NAME="atlas"
OUTPUT="dist/v4/${NAME}"

if [ -d $OUTPUT ]; then
  echo "Deleting old output directory..."
  rm -rf $OUTPUT
fi
mkdir -p $OUTPUT

tile-join \
  --name=$NAME \
  --no-tile-compression \
  --no-tile-size-limit \
  --output-to-directory="${OUTPUT}" \
  "${TMP}/land.mbtiles" \
  "${TMP}/adm0_lines_disp.mbtiles" \
  "${TMP}/adm0_lines.mbtiles" \
  "${TMP}/adm1_lines.mbtiles" \
  "${TMP}/adm2_lines.mbtiles" \
  "${TMP}/adm3_lines.mbtiles" \
  "${TMP}/adm4_lines.mbtiles" \
  "${TMP}/adm0_labels.mbtiles" \
  "${TMP}/adm1_labels.mbtiles" \
  "${TMP}/adm2_labels.mbtiles" \
  "${TMP}/adm3_labels.mbtiles" \
  "${TMP}/adm4_labels.mbtiles"
