<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Tesla Shop API

## Development execution

1. Clone the repository.

2. Install the application dependencies:

```bash
yarn install
```

2. Clone the file ```.env.template``` and rename to ```.env```.

3. Fill the environment variables defined in the ```.env``` file.

4. Load the database:

```bash
docker-compose -f docker-compose.dev.yml up
```

5. Run the application in **development** mode:

```bash
yarn start:dev
```

6. Fill the database with the seed endpoint.

```bash
curl -X POST http://localhost:3000/api/v1/seed
```

## Technologies stack

- [Nest.js](https://nestjs.com)
- [PostgreSQL](https://www.postgresql.org)
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose)
