cp prisma-config.yml prisma.yml
sed -i -e '1iendpoint: http://prisma:4466\' prisma.yml
prisma generate
prisma deploy
ts-node src/index.ts