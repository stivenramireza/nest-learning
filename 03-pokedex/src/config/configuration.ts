export default () => ({
  app: {
    port: parseInt(process.env.PORT),
    environment: process.env.ENV,
    apiVersion: process.env.API_VERSION,
  },
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
});
