import subprocess
from pathlib import Path

cwd = Path(__file__).parent
srcs = ['data', 'fonts', 'sprites', 'styles']

if __name__ == '__main__':
    subprocess.run([
        's3cmd', 'sync',
        '--acl-public',
        cwd / 'dist/config.json',
        f's3://data.fieldmaps.io/tiles/config.json',
    ])
    for src in srcs:
        subprocess.run([
            's3cmd', 'sync',
            '--acl-public',
            '--delete-removed',
            '--rexclude', '\/\.',
            '--multipart-chunk-size-mb=5120',
            cwd / f'dist/{src}',
            f's3://data.fieldmaps.io/tiles/',
        ])
