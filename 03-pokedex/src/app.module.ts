import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonsModule } from './pokemons/pokemons.module';
import { ConfigModule } from '@nestjs/config';

import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(
      `mongodb://${configuration().database.host}:${
        configuration().database.port
      }/${configuration().database.name}`,
    ),
    PokemonsModule,
  ],
})
export class AppModule {}
