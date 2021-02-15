NAME="atlas"
OUTPUT="dist/v4/${NAME}"
TILES=$(ls tmp/**/*.mbtiles)

if [ -d $OUTPUT ]; then
  echo "Deleting old output directory..."
  rm -rf $OUTPUT
fi
mkdir -p $OUTPUT

echo "${OUTPUT}"
tile-join \
  --name=$NAME \
  --no-tile-compression \
  --no-tile-size-limit \
  --force \
  --output-to-directory="${OUTPUT}" \
  $TILES
