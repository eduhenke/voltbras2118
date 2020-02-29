cp prisma-config.yml prisma.yml
sed -i -e '1iendpoint: http://localhost:4477\' prisma.yml
prisma generate
prisma deploy
jest