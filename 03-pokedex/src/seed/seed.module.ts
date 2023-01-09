import { Module } from '@nestjs/common';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonsModule } from '../pokemons/pokemons.module';
import { CommonModule } from '../common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokemonsModule, CommonModule],
})
export class SeedModule {}
