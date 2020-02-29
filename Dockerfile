FROM node:12
WORKDIR /home/app
COPY . .
RUN npm i
RUN npm i -g prisma
CMD ["npm", "run", "start"]