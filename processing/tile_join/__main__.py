import subprocess
from glob import glob
from pathlib import Path

cwd = Path(__file__).parent

name = 'atlas'
output = cwd / '../../dist/data'
file = output / 'atlas.mbtiles'
tiles = glob(str((cwd / '../../data/**/*.mbtiles').resolve()))

if __name__ == '__main__':
    file.unlink(missing_ok=True)
    output.mkdir(parents=True, exist_ok=True)
    subprocess.run([
        'tile-join',
        f'--name={name}',
        '--no-tile-size-limit',
        '--force',
        f'--output={file}',
        *tiles,
    ])
