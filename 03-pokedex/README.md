<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Pokedex API

## Development execution

1. Clone the file ```.env.template``` and rename to ```.env```.

2. Fill the environment variables defined in the ```.env``` file.

3. Build and run the application in **development** mode:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

4. Fill the database with the seed endpoint.

```bash
curl -X POST http://localhost:3000/api/v2/seed
```

## Production execution

1. Clone the file ```.env.template``` and rename to ```.env```.

2. Fill the environment variables defined in the ```.env``` file.

3. Run the application in **production** mode:

```bash
docker-compose up
```

4. Fill the database with the seed endpoint.

```bash
curl -X POST http://0.0.0.0:3000/api/v2/seed
```

## Technologies stack

- [Nest.js](https://nestjs.com)
- [MongoDB](https://www.mongodb.com)
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose)
