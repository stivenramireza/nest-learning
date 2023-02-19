export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export interface AppConfig {
  port: number;
  environment: string;
  apiVersion: string;
  apiUrl: string;
}

export interface DatabaseConfig {
  host: string;
  port: number;
  name: string;
  username: string;
  password: string;
}

export interface AuthConfig {
  jwt: string;
}
