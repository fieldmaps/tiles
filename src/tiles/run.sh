#!/bin/bash

REPO="${HOME}/GitHub/fieldmaps/tiles"
INPUT="${REPO}/data"
TMP="${REPO}/data-tmp"
OUTPUT="${REPO}/dist/v4/wld_adm"
BOUNDS_0=wld_adm_0.mbtiles
BOUNDS_1=wld_adm_1.mbtiles
LABELS_0=wld_adm_labels_0.mbtiles
LABELS_1=wld_adm_labels_1.mbtiles
FILTER_FILE="${INPUT}/filter.json"
MAX_ZOOM=10

mkdir -p $TMP

if [ -d $OUTPUT ]; then
  echo "Deleting old output directory..."
  rm -rf $OUTPUT
fi
mkdir -p $OUTPUT

tippecanoe \
  --name=$NAME \
  --drop-rate=1 \
  --maximum-zoom=$MAX_ZOOM \
  --read-parallel \
  --no-tile-compression \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/${LABELS_0}" \
  "${INPUT}/wld_adm0_labels.json"

tippecanoe \
  --name=$NAME \
  --feature-filter-file=$FILTER_FILE \
  --drop-rate=1 \
  --minimum-zoom=2 \
  --maximum-zoom=$MAX_ZOOM \
  --read-parallel \
  --no-tile-compression \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/${LABELS_1}" \
  "${INPUT}/wld_adm1_labels.json" \
  "${INPUT}/wld_adm2_labels.json" \
  "${INPUT}/wld_adm3_labels.json" \
  "${INPUT}/wld_adm4_labels.json" \
  "${INPUT}/wld_adm5_labels.json"

tippecanoe \
  --name=$NAME \
  --maximum-zoom=$MAX_ZOOM \
  --detect-shared-borders \
  --simplify-only-low-zooms \
  --read-parallel \
  --no-tile-compression \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/${BOUNDS_0}" \
  "${INPUT}/wld_adm0.json"

tippecanoe \
  --name=$NAME \
  --feature-filter-file=$FILTER_FILE \
  --minimum-zoom=2 \
  --maximum-zoom=$MAX_ZOOM \
  --detect-shared-borders \
  --simplify-only-low-zooms \
  --read-parallel \
  --no-tile-compression \
  --no-tile-size-limit \
  --force \
  --output="${TMP}/${BOUNDS_1}" \
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
  "${TMP}/${BOUNDS_0}" \
  "${TMP}/${BOUNDS_1}" \
  "${TMP}/${LABELS_0}" \
  "${TMP}/${LABELS_1}"
