export interface AppConfig {
  port: number;
  environment: string;
  apiVersion: string;
  defaultLimit: number;
}

export interface DatabaseConfig {
  host: string;
  port: number;
  name: string;
  username: string;
  password: string;
}
