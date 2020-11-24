#!/bin/bash

REPO="${HOME}/GitHub/fieldmaps/tiles"
INPUT="${REPO}/data"
TMP="${REPO}/data-tmp"
OUTPUT="${REPO}/dist/v4/wld_adm"
BOUNDS="wld_adm.mbtiles"
LABELS="wld_adm_labels.mbtiles"

mkdir -p $TMP

if [ -d $OUTPUT ]; then
  echo "Deleting old output directory..."
  rm -rf $OUTPUT
fi
mkdir -p $OUTPUT

tippecanoe \
  --name=$NAME \
  --drop-rate=1 \
  --minimum-zoom=2 \
  --maximum-zoom=10 \
  --read-parallel \
  --no-tile-compression \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/${LABELS}" \
  "${INPUT}/wld_adm0_labels.json" \
  "${INPUT}/wld_adm1_labels.json" \
  "${INPUT}/wld_adm2_labels.json" \
  "${INPUT}/wld_adm3_labels.json" \
  "${INPUT}/wld_adm4_labels.json" \
  "${INPUT}/wld_adm5_labels.json"

tippecanoe \
  --name=$NAME \
  --minimum-zoom=1 \
  --maximum-zoom=g \
  --detect-shared-borders \
  --simplify-only-low-zooms \
  --read-parallel \
  --no-tile-compression \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/${BOUNDS}" \
  "${INPUT}/wld_adm0.json" \
  "${INPUT}/wld_adm1.json" \
  "${INPUT}/wld_adm2.json" \
  "${INPUT}/wld_adm3.json" \
  "${INPUT}/wld_adm4.json" \
  "${INPUT}/wld_adm5.json"

tile-join \
  --name=$NAME \
  --no-tile-compression \
  --no-tile-size-limit \
  --output-to-directory="${OUTPUT}/${NAME}" \
  "${TMP}/${BOUNDS}" \
  "${TMP}/${LABELS}"
