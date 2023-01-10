import * as Joi from 'joi';

export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export const ConfigSchema = Joi.object({
  PORT: Joi.number().required(),
  ENV: Joi.string()
    .valid(...Object.values(Environment))
    .required(),
  API_VERSION: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_NAME: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DEFAULT_LIMIT: Joi.number().required(),
});

export default () => ({
  app: {
    port: +process.env.PORT,
    environment: process.env.ENV,
    apiVersion: process.env.API_VERSION,
    defaultLimit: process.env.DEFAULT_LIMIT,
  },
  database: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
});
