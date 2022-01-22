from . import geojsonl, mbtiles, cleanup
from .utils import logging

logger = logging.getLogger(__name__)

if __name__ == '__main__':
    logger.info('starting')
    geojsonl.main()
    mbtiles.main()
    cleanup.main()
