import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { DatabaseConfig } from './interfaces/config.interface';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const { host, port, name, username, password } =
      this.configService.get<DatabaseConfig>('database');
    return {
      uri: `mongodb://${username}:${password}@${host}:${port}/${name}?authSource=admin`,
    };
  }
}
