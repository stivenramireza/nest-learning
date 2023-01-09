import { registerAs } from '@nestjs/config';

export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export default registerAs('config', () => ({
  app: {
    port: parseInt(process.env.PORT, 10),
    environment: process.env.ENV,
    apiVersion: process.env.API_VERSION,
  },
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
}));
