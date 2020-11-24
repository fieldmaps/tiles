#!/bin/bash

node_modules/.bin/ts-node src/tile-labels --layer=wld_adm0 &
node_modules/.bin/ts-node src/tile-labels --layer=wld_adm1 &
node_modules/.bin/ts-node src/tile-labels --layer=wld_adm2 &
node_modules/.bin/ts-node src/tile-labels --layer=wld_adm3 &
node_modules/.bin/ts-node src/tile-labels --layer=wld_adm4 &
node_modules/.bin/ts-node src/tile-labels --layer=wld_adm5 &
