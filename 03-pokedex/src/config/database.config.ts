import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { Environment } from './config';
import { AppConfig, DatabaseConfig } from './interfaces/config.interface';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const { environment } = this.configService.get<AppConfig>('app');
    const { host, port, name, username, password } =
      this.configService.get<DatabaseConfig>('database');

    const uri =
      environment === Environment.PRODUCTION
        ? `mongodb+srv://${username}:${password}@${host}/${name}?retryWrites=true&w=majority`
        : `mongodb://${username}:${password}@${host}:${port}/${name}?authSource=admin`;

    return {
      uri,
    };
  }
}
