from pathlib import Path
from .utils import (logging, polygons, points, polygon_zooms,
                    point_zooms, lines_zooms, places_zooms)

logger = logging.getLogger(__name__)

cwd = Path(__file__).parent
outputs = cwd / '../../data'


def main():
    for layer in polygons:
        for zoom in polygon_zooms:
            (outputs / f'osma/{layer}_z{zoom}.geojsonl.gz').unlink(
                missing_ok=True)
    for layer, fields in lines_zooms:
        for field, _ in fields:
            (outputs / f'osml/{layer}_{field}.geojsonl.gz').unlink(
                missing_ok=True)
    for layer in points:
        for zoom in point_zooms:
            (outputs / f'osmp/{layer}_z{zoom}.geojsonl.gz').unlink(
                missing_ok=True)
    for field, _ in places_zooms:
        (outputs / f'osmp/places_{field}.geojsonl.gz').unlink(missing_ok=True)
    logger.info('finished')
