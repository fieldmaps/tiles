import subprocess
from pathlib import Path
from .utils import logging, MAX_ZOOM

logger = logging.getLogger(__name__)

cwd = Path(__file__).parent
output_path = cwd / '../../data/adm'


def adm0_polygons():
    subprocess.run([
        'tippecanoe',
        '--layer=adm0_polygons',
        f'--maximum-zoom={MAX_ZOOM}',
        '--simplify-only-low-zooms',
        '--detect-shared-borders',
        '--read-parallel',
        '--no-tile-size-limit',
        '--force',
        '--exclude-all',
        f'--output={output_path}/adm0_polygons.mbtiles',
        f'{output_path}/adm0_polygons.geojsonl.gz',
    ])
    logger.info('adm0_polygons')


def adm0_lines():
    subprocess.run([
        'tippecanoe',
        '--layer=adm0_lines',
        f'--maximum-zoom={MAX_ZOOM}',
        '--simplify-only-low-zooms',
        '--no-simplification-of-shared-nodes',
        '--read-parallel',
        '--no-tile-size-limit',
        '--force',
        '--include=rank',
        f'--output={output_path}/adm0_lines.mbtiles',
        f'{output_path}/adm0_lines.geojsonl.gz',
    ])
    logger.info('adm0_lines')


def admx_points(l, z):
    subprocess.run([
        'tippecanoe',
        f'--layer=adm{l}_points',
        f'--minimum-zoom={z}',
        f'--maximum-zoom={z}',
        '--drop-rate=1',
        '--read-parallel',
        '--no-tile-size-limit',
        '--force',
        '--include=adm0_name',
        f'--include=adm{l}_name',
        f'--include=adm{l}_point',
        f'--output={output_path}/adm{l}_points_z{z}.mbtiles',
        f'{output_path}/adm{l}_points_z{z}.geojsonl.gz',
    ])
    logger.info(f'adm{l}_points_z{z}')


def admx_lines(l, z):
    subprocess.run([
        'tippecanoe',
        f'--layer=adm{l}_lines',
        f'--minimum-zoom={z}',
        f'--maximum-zoom={MAX_ZOOM}',
        '--simplify-only-low-zooms',
        '--no-simplification-of-shared-nodes',
        '--read-parallel',
        '--no-tile-size-limit',
        '--force',
        f'--include=adm{l}_line',
        f'--output={output_path}/adm{l}_lines_z{z}.mbtiles',
        f'{output_path}/adm{l}_lines_z{z}.geojsonl.gz',
    ])
    logger.info(f'adm{l}_lines_z{z}')


def main():
    adm0_polygons()
    adm0_lines()
    for l in range(0, 5):
        for z in range(0, MAX_ZOOM + 1):
            admx_points(l, z)
    for l in range(1, 5):
        for z in range(0, MAX_ZOOM + 1):
            admx_lines(l, z)
