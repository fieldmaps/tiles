from pathlib import Path
from .utils import logging, MAX_ZOOM

logger = logging.getLogger(__name__)

cwd = Path(__file__).parent
outputs = cwd / '../../data/adm'


def main():
    (outputs / 'adm0_polygons.geojsonl.gz').unlink(missing_ok=True)
    (outputs / 'adm0_lines.geojsonl.gz').unlink(missing_ok=True)
    for l in range(0, 5):
        for z in range(0, MAX_ZOOM + 1):
            (outputs / f'adm{l}_points_z{z}.geojsonl.gz').unlink(
                missing_ok=True)
    for l in range(1, 5):
        for z in range(0, MAX_ZOOM + 1):
            (outputs / f'adm{l}_lines_z{z}.geojsonl.gz').unlink(
                missing_ok=True)
    logger.info('finished')
