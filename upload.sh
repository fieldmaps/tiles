# s3cmd rm --force --recursive --quiet s3://fieldmapstiles/
s3cmd put dist/fonts/* s3://fieldmapstiles/fonts/ --quiet --recursive --acl-public --exclude '.DS_Store'
s3cmd put dist/sprites/* s3://fieldmapstiles/sprites/ --quiet --recursive --acl-public --exclude '.DS_Store'
s3cmd put dist/styles/* s3://fieldmapstiles/styles/ --quiet --recursive --acl-public --exclude '.DS_Store'
s3cmd put dist/v4/atlas.json s3://fieldmapstiles/v4/atlas.json --quiet --recursive --acl-public --exclude '.DS_Store'
s3cmd put dist/v4/atlas/metadata.json s3://fieldmapstiles/v4/atlas/metadata.json --quiet --recursive --acl-public --exclude '.DS_Store'
echo "s3://fieldmapstiles/v4/atlas/0/"
s3cmd put dist/v4/atlas/0/* s3://fieldmapstiles/v4/atlas/0/ --quiet --recursive --acl-public --exclude '.DS_Store'
echo "s3://fieldmapstiles/v4/atlas/1/"
s3cmd put dist/v4/atlas/1/* s3://fieldmapstiles/v4/atlas/1/ --quiet --recursive --acl-public --exclude '.DS_Store'
echo "s3://fieldmapstiles/v4/atlas/2/"
s3cmd put dist/v4/atlas/2/* s3://fieldmapstiles/v4/atlas/2/ --quiet --recursive --acl-public --exclude '.DS_Store'
echo "s3://fieldmapstiles/v4/atlas/3/"
s3cmd put dist/v4/atlas/3/* s3://fieldmapstiles/v4/atlas/3/ --quiet --recursive --acl-public --exclude '.DS_Store'
echo "s3://fieldmapstiles/v4/atlas/4/"
s3cmd put dist/v4/atlas/4/* s3://fieldmapstiles/v4/atlas/4/ --quiet --recursive --acl-public --exclude '.DS_Store'
echo "s3://fieldmapstiles/v4/atlas/5/"
s3cmd put dist/v4/atlas/5/* s3://fieldmapstiles/v4/atlas/5/ --quiet --recursive --acl-public --exclude '.DS_Store'
echo "s3://fieldmapstiles/v4/atlas/6/"
s3cmd put dist/v4/atlas/6/* s3://fieldmapstiles/v4/atlas/6/ --quiet --recursive --acl-public --exclude '.DS_Store'
echo "s3://fieldmapstiles/v4/atlas/7/"
s3cmd put dist/v4/atlas/7/* s3://fieldmapstiles/v4/atlas/7/ --quiet --recursive --acl-public --exclude '.DS_Store'
echo "s3://fieldmapstiles/v4/atlas/8/"
s3cmd put dist/v4/atlas/8/* s3://fieldmapstiles/v4/atlas/8/ --quiet --recursive --acl-public --exclude '.DS_Store'
echo "s3://fieldmapstiles/v4/atlas/9/"
s3cmd put dist/v4/atlas/9/* s3://fieldmapstiles/v4/atlas/9/ --quiet --recursive --acl-public --exclude '.DS_Store'
echo "s3://fieldmapstiles/v4/atlas/10/"
s3cmd put dist/v4/atlas/10/* s3://fieldmapstiles/v4/atlas/10/ --quiet --recursive --acl-public --exclude '.DS_Store'
