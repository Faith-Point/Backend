FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache python3 make g++ && \
    npm install -g yarn --force

COPY package.json yarn.lock tsconfig.json ./
RUN yarn install --frozen-lockfile

COPY src /app/src
COPY ormconfig.json /app/ormconfig.json
COPY src/config/init-db.sh /app/src/config/init-db.sh
COPY src/config/data-source.ts /app/src/config/data-source.ts


RUN yarn build

EXPOSE 3308


CMD ["sh", "-c", "yarn typeorm migration:run -d /app/src/config/data-source.ts && yarn seed && yarn start"]
