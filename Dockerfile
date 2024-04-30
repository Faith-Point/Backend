# Usa Node.js 18 Alpine como imagem base por ser leve e eficiente
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Instala as dependências necessárias para pacotes que requerem compilação de códigos nativos
RUN apk add --no-cache python3 make g++ && \
    npm install -g yarn --force

# Copia os arquivos de configuração do projeto
COPY package.json yarn.lock ./

# Permite a definição do ambiente no momento da construção do contêiner
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Instala as dependências usando Yarn baseando-se no ambiente
RUN if [ "${NODE_ENV}" = "production" ]; then \
    yarn install --frozen-lockfile --production; \
    else yarn install --frozen-lockfile; \
    fi

# Copia o código fonte do aplicativo
COPY src /app/src

# Compila a aplicação
RUN yarn build

# Instala TypeORM globalmente para permitir a execução das migrations
RUN yarn global add typeorm

# Expõe a porta 3000 para acesso ao servidor
EXPOSE 3000

# Comando para executar as migrations e iniciar a aplicação, garantindo que ambos os comandos sejam executados
CMD ["sh", "-c", "yarn typeorm migration:run && yarn start"]
