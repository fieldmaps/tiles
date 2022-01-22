import subprocess

funcs = ['osm', 'adm', 'tile_join']

if __name__ == '__main__':
    for func in funcs:
        subprocess.run([
            'python3',
            '-m', f'processing.{func}'
        ])
