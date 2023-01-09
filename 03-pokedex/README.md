<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Pokedex API

## Development execution

1. Clone the repository.

2. Execute the dependencies installer.

```bash
yarn install
```
3. Install Nest CLI.

```bash
npm i -g @nestjs/cli
```

4. The dabase must be loaded.

```bash
docker-compose up -d
```

5. Build the database with the seed.

```bash
curl -X POST http://localhost:3000/api/v2/seed
```

## Technologies stack

- [Nest.js](https://nestjs.com)
- [MongoDB](https://www.mongodb.com)
