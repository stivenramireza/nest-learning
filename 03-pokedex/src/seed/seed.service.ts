import { Injectable } from '@nestjs/common';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { PokemonsService } from 'src/pokemons/pokemons.service';
import { InsertedPokemon } from './interfaces/inserted-pokemon.interface';
import { PokeApiResponse } from './interfaces/poke-api-response.interface';

@Injectable()
export class SeedService {
  constructor(
    private readonly http: AxiosAdapter,
    private readonly pokemonsService: PokemonsService,
  ) {}

  async executeSeed() {
    this.pokemonsService.removeMany();

    const data = await this.http.get<PokeApiResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonsToInsert: InsertedPokemon[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      const pokemon = { name, no };

      pokemonsToInsert.push(pokemon);
    });

    this.pokemonsService.createMany(pokemonsToInsert);

    return 'Seed executed';
  }
}
