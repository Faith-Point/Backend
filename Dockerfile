FROM node:18-alpine

# Instalar dependências necessárias incluindo Docker Compose
RUN apk add --no-cache \
    py3-pip \
    python3-dev \
    libffi-dev \
    openssl-dev \
    gcc \
    libc-dev \
    make \
    docker-compose

# Definir o diretório de trabalho
WORKDIR /app

# Instalar yarn globalmente e dependências necessárias
RUN apk add --no-cache python3 make g++ && \
    npm install -g yarn --force

# Copiar os arquivos de dependências e instalar os pacotes
COPY package.json yarn.lock tsconfig.json ./
RUN yarn install --frozen-lockfile

# Copiar os arquivos de código
COPY src /app/src
COPY ormconfig.ts /app/ormconfig.ts
COPY src/config/cli.ts /app/src/config/cli.ts
COPY src/config/init-db.sh /app/src/config/init-db.sh
COPY src/config/data-source.ts /app/src/config/data-source.ts
COPY src/config/seed.ts /app/src/config/seed.ts

# Certifique-se de que o wait-for-it.sh seja copiado corretamente
COPY src/config/wait-for-it.sh /app/src/config/wait-for-it.sh
RUN chmod +x /app/src/config/wait-for-it.sh

# Rodar o build do projeto
RUN yarn build

# Expor a porta do aplicativo
EXPOSE 3308

# Comando de inicialização sem passar o host diretamente
CMD ["sh", "-c", "/app/src/config/wait-for-it.sh -- yarn typeorm migration:run -d /app/src/config/data-source.ts && yarn seed && yarn start"]
