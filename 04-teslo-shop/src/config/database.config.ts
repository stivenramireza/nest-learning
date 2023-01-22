import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import {
  AppConfig,
  DatabaseConfig,
  Environment,
} from './interfaces/config.interface';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const { environment } = this.configService.get<AppConfig>('app');
    const { host, port, name, username, password } =
      this.configService.get<DatabaseConfig>('database');

    return {
      type: 'postgres',
      host,
      port,
      database: name,
      username,
      password,
      autoLoadEntities: true,
      synchronize: environment === Environment.PRODUCTION ?? true,
    };
  }
}
