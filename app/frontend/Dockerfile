# Use uma imagem base do Node.js
FROM node:20-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /frontend

# Copie o arquivo package.json e o arquivo package-lock.json (se disponível)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o resto do código fonte do frontend
COPY . .

# Build do projeto
RUN npm run build

# Exponha a porta em que o servidor do frontend será executado
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev-docker"]
