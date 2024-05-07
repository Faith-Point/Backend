FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache python3 make g++ && \
    npm install -g yarn --force

RUN npm install -g yarn 
RUN npm install -g typeorm

COPY package.json yarn.lock tsconfig.json ./

RUN yarn install --frozen-lockfile

COPY src /app/src

RUN ls -la /app
RUN ls -la /app/src

RUN yarn build

EXPOSE 3000

CMD ["sh", "-c", "yarn typeorm migration:run && yarn start"]
