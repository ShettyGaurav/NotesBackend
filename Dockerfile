FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only= production


COPY . .
RUN npm install -g prisma

RUN npx prisma generate --schema ./prisma/schema.prisma

CMD ["sh", "-c", "npx prisma db push && node index.js"]