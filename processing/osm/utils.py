import logging

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# MAX_ZOOM = 13
MAX_ZOOM = 10

polygon_steps = [
    (0, 65536e5),
    (3, 16384e5),
    (4, 4096e5),
    (5, 1024e5),
    (6, 256e5),
    (7, 64e5),
    (8, 16e5),
    (9, 4e5),
    (10, 1e5),
]

point_steps = [
    (0, 9e99),
    (1, 1048576e2),
    (2, 262144e2),
    (3, 65536e2),
    (4, 16384e2),
    (5, 4096e2),
    (6, 1024e2),
    (7, 256e2),
    (8, 64e2),
    (9, 16e2),
    (10, 4e2)
]

polygons = ['water', 'wetlands']
lines = ['rivers', 'rails']
points = ['health', 'education', 'markets', 'airports', 'seaports']

roads = [
    ('trunk', "type IN ('motorway','motorway_link','trunk','trunk_link')"),
    ('primary', "type IN ('primary','primary_link')"),
    ('secondary', "type IN ('secondary','secondary_link')"),
    ('tertiary', "type IN ('tertiary','tertiary_link')")
]
places = [
    ('city', "type = 'city'"),
    ('town', "type = 'town'"),
    ('village', "type NOT IN ('city','town')"),
]

polygon_zooms = [0, 3, 4, 5, 6, 7, 8, 9, 10]
point_zooms = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lines_zooms = [
    ('rivers', [('all', 10)]),
    ('rails', [('all', 5)]),
    ('roads',
     [('trunk', 4), ('primary', 5), ('secondary', 7), ('tertiary', 9)]),
]

places_zooms = [
    ('city', 6),
    ('town', 8),
    ('village', 10)
]
