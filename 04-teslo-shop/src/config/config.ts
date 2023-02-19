import * as Joi from 'joi';
import { Environment } from './interfaces/config.interface';

export const ConfigSchema = Joi.object({
  PORT: Joi.number().required(),
  ENV: Joi.string()
    .valid(...Object.values(Environment))
    .required(),
  API_VERSION: Joi.string().required(),
  API_URL: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_NAME: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
});

export default () => ({
  app: {
    port: +process.env.PORT,
    environment: process.env.ENV,
    apiVersion: process.env.API_VERSION,
    apiUrl: process.env.API_URL,
  },
  database: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    name: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  auth: {
    jwt: process.env.JWT_SECRET,
  },
});
