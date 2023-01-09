import { Inject, Injectable } from '@nestjs/common';
import config from './config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  createMongooseOptions(): MongooseModuleOptions {
    const { host, port, name, username, password } =
      this.configService.database;
    return {
      uri: `mongodb://${username}:${password}@${host}:${port}/${name}?authSource=admin`,
    };
  }
}
