# Usa Node.js 18 Alpine como imagem base por ser leve e eficiente
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Instala as dependências necessárias para pacotes que requerem compilação de códigos nativos
RUN apk add --no-cache python3 make g++ && \
    npm install -g yarn --force

# Instala Yarn - verificação de versão para instalação condicional removida, assumindo que o ambiente será sempre preparado.
RUN npm install -g yarn 
RUN npm install -g typeorm

# Copia os arquivos de configuração do projeto
COPY package.json yarn.lock tsconfig.json ./

# Instala as definições de tipo e dependências do projeto usando Yarn
RUN yarn install --frozen-lockfile

# Copia o código fonte do aplicativo
COPY src /app/src

# Listar os diretórios e arquivos para garantir que tudo está no lugar (Opcional, para debug)
RUN ls -la /app
RUN ls -la /app/src

# Compila a aplicação
RUN yarn build

# Expõe a porta 3000 para acesso ao servidor
EXPOSE 3000

# Comando para executar as migrations e iniciar a aplicação, garantindo que ambos os comandos sejam executados
CMD ["sh", "-c", "yarn typeorm migration:run && yarn start"]
