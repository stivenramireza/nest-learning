FROM node:18-alpine3.15

RUN mkdir -p /var/www/pokedex
WORKDIR /var/www/pokedex

COPY . ./var/www/pokedex
COPY package.json tsconfig.json tsconfig.build.json /var/www/pokedex/
RUN yarn install --prod
RUN yarn build

RUN adduser --disabled-password pokeuser
RUN chown -R pokeuser:pokeuser /var/www/pokedex
USER pokeuser

RUN yarn cache clean --force

EXPOSE 3000

CMD ["yarn", "start"]
