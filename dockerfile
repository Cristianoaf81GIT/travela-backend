# define a versao do node
FROM mhart/alpine-node:12.18

# criar pasta para projeto
RUN  mkdir -p /home/node_app 
# define a dir raiz do projeto
WORKDIR /home/node_app/
# copia o package.json para workdir
COPY package*.json ./
# instala pm2 global na imagem
RUN npm install pm2 knex -g
# instala pacotes especificados no package.json
RUN npm install 
# copia todos arq e pastas para workdir
COPY . . 
# expoe a porta 3000
EXPOSE 3000
# para usar pm2 com docker
CMD [ "pm2-runtime", "src/index.js", "--name travela-backend", "--watch"]