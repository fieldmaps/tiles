import subprocess
import gzip
import shutil
import pandas as pd
from pathlib import Path
from sqlite3 import connect
from multiprocessing import Pool
from .utils import logging, MAX_ZOOM

logger = logging.getLogger(__name__)

cwd = Path(__file__).parent
inputs = cwd / '../../../admin-boundaries/data/edge_matched/humanitarian/intl'
outputs = cwd / '../../data/adm'
attrs_zoom = cwd / '../../meta.csv'


def compress_file(output, compressed):
    compressed.unlink(missing_ok=True)
    with open(output, 'rb') as f_in:
        with gzip.open(compressed, 'wb', compresslevel=1) as f_out:
            shutil.copyfileobj(f_in, f_out)
            output.unlink()


def export_adm0(layer):
    input = cwd / f'../../../adm0-generator/data/intl/adm0_{layer}.gpkg'
    output = outputs / f'adm0_{layer}.geojsonl'
    output.unlink(missing_ok=True)
    compressed = outputs / f'adm0_{layer}.geojsonl.gz'
    subprocess.run([
        'ogr2ogr',
        '-mapFieldType', 'Date=String',
        '-sql', f"SELECT * FROM adm0_{layer}",
        output, input,
    ])
    compress_file(output, compressed)
    logger.info(f'adm0_{layer}')


def join_attributes(layer, df1):
    input = inputs / f'/adm4_{layer}.gpkg'
    tmp = outputs / f'adm4_{layer}.gpkg'
    tmp.unlink(missing_ok=True)
    shutil.copyfile(input, tmp)
    conn = connect(tmp)
    for level in range(5):
        if layer != 'lines' or level != 0:
            merge = ['adm0_src', 'adm0_name', 'adm0_name1']
            df = pd.read_sql_query(f'SELECT * FROM adm{level}_{layer}', conn)
            df = df.merge(df1, on=merge, how='left')
            df.to_sql(f'adm{level}_{layer}', conn,
                      if_exists='replace', index=False)
    conn.close()
    logger.info(f'adm0_{layer}')


def export_points(l, z):
    input = outputs / f'adm4_points.gpkg'
    output = outputs / f'adm{l}_points_z{z}.geojsonl'
    output.unlink(missing_ok=True)
    compressed = outputs / f'adm{l}_points_z{z}.geojsonl.gz'
    extra = ''
    if l < 4:
        extra = f'AND ({z} < adm{l+1}_point OR adm{l+1}_point IS NULL)'
    subprocess.run([
        'ogr2ogr',
        '-sql',
        f"SELECT * FROM 'adm{l}_points' WHERE {z} >= adm{l}_point {extra} OR ({z} = {MAX_ZOOM} AND adm{l}_point >= {MAX_ZOOM})",
        output, input,
    ])
    compress_file(output, compressed)
    logger.info(f'adm{l}_points_z{z}')


def export_lines(l, z):
    input = outputs / f'adm4_lines.gpkg'
    output = outputs / f'adm{l}_lines_z{z}.geojsonl'
    output.unlink(missing_ok=True)
    compressed = outputs / f'adm{l}_lines_z{z}.geojsonl.gz'
    subprocess.run([
        'ogr2ogr',
        '-sql',
        f"SELECT * FROM 'adm{l}_lines' WHERE {z} = adm{l}_line OR ({z} = {MAX_ZOOM} AND adm{l}_line >= {MAX_ZOOM})",
        output, input,
    ])
    compress_file(output, compressed)
    logger.info(f'adm{l}_lines_z{z}')


def main():
    df = pd.read_csv(attrs_zoom)
    outputs.mkdir(parents=True, exist_ok=True)
    results = []
    pool = Pool()
    for layer in ['lines', 'polygons']:
        result = pool.apply_async(export_adm0, args=[layer])
        results.append(result)
    for layer in ['points', 'lines']:
        join_attributes(layer, df)
    for l in range(0, 5):
        for z in range(0, MAX_ZOOM + 1):
            result = pool.apply_async(export_points, args=[l, z])
            results.append(result)
    for l in range(1, 5):
        for z in range(0, MAX_ZOOM + 1):
            result = pool.apply_async(export_lines, args=[l, z])
            results.append(result)
    pool.close()
    pool.join()
    for result in results:
        result.get()
    (outputs / 'adm4_points.gpkg').unlink()
    (outputs / 'adm4_lines.gpkg').unlink()
    logger.info('finished')
