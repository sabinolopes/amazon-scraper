# Use uma imagem base do Node.js
FROM node:20-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /backend

# Copie o arquivo package.json e o arquivo package-lock.json (se disponível)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o resto do código fonte do backend
COPY . .

# Exponha a porta em que o servidor do backend será executado
EXPOSE 3001

# Comando para iniciar o servidor
ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]