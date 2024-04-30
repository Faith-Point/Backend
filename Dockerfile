FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm ci --only=production

COPY src /app/src

RUN npm run build

RUN npm install typeorm -g

EXPOSE 3000

CMD ["sh", "-c", "npm run typeorm migration:run && npm start"]
