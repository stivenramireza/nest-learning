import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonsModule } from 'src/pokemons/pokemons.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokemonsModule],
})
export class SeedModule {}
