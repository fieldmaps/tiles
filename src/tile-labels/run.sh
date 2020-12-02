#!/bin/bash

node_modules/.bin/ts-node src/tile-labels --layer=adm0 &
node_modules/.bin/ts-node src/tile-labels --layer=adm1 &
node_modules/.bin/ts-node src/tile-labels --layer=adm2 &
node_modules/.bin/ts-node src/tile-labels --layer=adm3 &
node_modules/.bin/ts-node src/tile-labels --layer=adm4 &
node_modules/.bin/ts-node src/tile-labels --layer=adm5 &
