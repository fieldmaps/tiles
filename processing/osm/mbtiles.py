import subprocess
from pathlib import Path
from .utils import (logging, MAX_ZOOM, polygons, points,
                    polygon_zooms, point_zooms, lines_zooms, places_zooms)

logger = logging.getLogger(__name__)

cwd = Path(__file__).parent
outputs = cwd / '../../data'


def tile_polygons(layer, zoom):
    subprocess.run([
        'tippecanoe',
        f'--layer={layer}',
        f'--minimum-zoom={zoom}',
        f'--maximum-zoom={MAX_ZOOM}',
        '--simplify-only-low-zooms',
        '--detect-shared-borders',
        '--coalesce',
        '--reorder',
        '--read-parallel',
        '--drop-densest-as-needed',
        '--force',
        '--exclude-all',
        f'--output={outputs}/osma/{layer}_z{zoom}.mbtiles',
        f'{outputs}/osma/{layer}_z{zoom}.geojsonl.gz',
    ])
    logger.info(f'{layer}_z{zoom}')


def tile_lines(layer, field, zoom):
    subprocess.run([
        'tippecanoe',
        f'--layer={layer}_{field}',
        f'--minimum-zoom={zoom}',
        f'--maximum-zoom={MAX_ZOOM}',
        '--simplify-only-low-zooms',
        '--coalesce',
        '--reorder',
        '--read-parallel',
        '--drop-densest-as-needed',
        '--force',
        '--exclude-all',
        f'--output={outputs}/osml/{layer}_{field}.mbtiles',
        f'{outputs}/osml/{layer}_{field}.geojsonl.gz',
    ])
    logger.info(f'{layer}_{field}')


def tile_points(layer, zoom):
    subprocess.run([
        'tippecanoe',
        f'--layer={layer}',
        f'--minimum-zoom={zoom}',
        f'--maximum-zoom={MAX_ZOOM}',
        '--drop-rate=1',
        '--read-parallel',
        '--drop-densest-as-needed',
        '--force',
        '--include="name"',
        '--include="type"',
        '--include="area"',
        f'--output={outputs}/osmp/{layer}_z{zoom}.mbtiles',
        f'{outputs}/osmp/{layer}_z{zoom}.geojsonl.gz',
    ])
    logger.info(f'{layer}_z{zoom}')


def tile_places(layer, field, zoom):
    subprocess.run([
        'tippecanoe',
        f'--layer={layer}_{field}',
        f'--minimum-zoom={zoom}',
        f'--maximum-zoom={MAX_ZOOM}',
        '--drop-rate=1',
        '--read-parallel',
        '--drop-densest-as-needed',
        '--force',
        '--include="name"',
        f'--output={outputs}/osmp/{layer}_{field}.mbtiles',
        f'{outputs}/osmp/{layer}_{field}.geojsonl.gz',
    ])
    logger.info(f'{layer}_{field}')


def main():
    for folder in ['osma', 'osml', 'osmp']:
        (outputs / folder).mkdir(parents=True, exist_ok=True)
    for layer in polygons:
        for zoom in polygon_zooms:
            tile_polygons(layer, zoom)
    for layer, fields in lines_zooms:
        for field, min_zoom in fields:
            tile_lines(layer, field, min_zoom)
    for layer in points:
        for zoom in point_zooms:
            tile_points(layer, zoom)
    for field, min_zoom in places_zooms:
        tile_places('places', field, min_zoom)
