import subprocess
import gzip
import shutil
from pathlib import Path
from multiprocessing import Pool
from .utils import (logging, polygon_steps, point_steps,
                    polygons, lines, points, roads, places)

logger = logging.getLogger(__name__)

cwd = Path(__file__).parent
inputs = cwd / '../../../external-data/data/osm'
outputs = cwd / '../../data'


def compress_file(output, compressed):
    compressed.unlink(missing_ok=True)
    with open(output, 'rb') as f_in:
        with gzip.open(compressed, 'wb', compresslevel=1) as f_out:
            shutil.copyfileobj(f_in, f_out)
            output.unlink()


def convert_polygons(layer, zoom, area):
    extra = f'{area * 4} > area AND' if zoom != 0 else ''
    output = outputs / f'osma/{layer}_z{zoom}.geojsonl'
    output.unlink(missing_ok=True)
    compressed = outputs / f'osma/{layer}_z{zoom}.geojsonl.gz'
    subprocess.run([
        'ogr2ogr',
        '-where', f'{extra} area >= {area}',
        output, inputs / f'{layer}.gpkg',
    ])
    compress_file(output, compressed)
    logger.info(f'{layer}_z{zoom}')


def convert_lines(layer, field, expression):
    output = outputs / f'osml/{layer}_{field}.geojsonl'
    output.unlink(missing_ok=True)
    compressed = outputs / f'osml/{layer}_{field}.geojsonl.gz'
    subprocess.run([
        'ogr2ogr',
        '-where', expression,
        output, inputs / f'{layer}.gpkg',
    ])
    compress_file(output, compressed)
    logger.info(f'{layer}_{field}')


def convert_points_area(layer, zoom, area):
    extra = f'{area * 4} > area OR' if zoom == 10 else ''
    output = outputs / f'osmp/{layer}_z{zoom}.geojsonl'
    output.unlink(missing_ok=True)
    compressed = outputs / f'osmp/{layer}_z{zoom}.geojsonl.gz'
    subprocess.run([
        'ogr2ogr',
        '-where',
        f'({extra} {area * 4} > area AND area >= {area}) AND NOT duplicate',
        output, inputs / f'{layer}.gpkg',
    ])
    compress_file(output, compressed)
    logger.info(f'{layer}_z{zoom}')


def convert_points_field(layer, field, expression):
    output = outputs / f'osmp/{layer}_{field}.geojsonl'
    output.unlink(missing_ok=True)
    compressed = outputs / f'osmp/{layer}_{field}.geojsonl.gz'
    subprocess.run([
        'ogr2ogr',
        '-where', expression,
        output, inputs / f'{layer}.gpkg',
    ])
    compress_file(output, compressed)
    logger.info(f'{layer}_{field}')


def main():
    for folder in ['osma', 'osml', 'osmp']:
        (outputs / folder).mkdir(parents=True, exist_ok=True)
    results = []
    pool = Pool()
    for layer in polygons:
        for zoom, area in polygon_steps:
            args = [layer, zoom, area]
            result = pool.apply_async(convert_polygons, args=args)
            results.append(result)
    for field, expression in roads:
        args = ['roads', field, expression]
        result = pool.apply_async(convert_lines, args=args)
        results.append(result)
    for layer in lines:
        args = [layer, 'all', 'TRUE']
        result = pool.apply_async(convert_lines, args=args)
        results.append(result)
    for layer in points:
        for zoom, area in point_steps:
            args = [layer, zoom, area]
            result = pool.apply_async(convert_points_area, args=args)
            results.append(result)
    for field, expression in places:
        args = ['places', field, expression]
        result = pool.apply_async(convert_points_field, args=args)
        results.append(result)
    pool.close()
    pool.join()
    for result in results:
        result.get()
