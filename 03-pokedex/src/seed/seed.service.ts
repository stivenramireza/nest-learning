import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokemonsService } from 'src/pokemons/pokemons.service';
import { PokeApiResponse } from './interfaces/poke-api-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(private readonly pokemonsService: PokemonsService) {}

  async executeSeed() {
    const { data } = await this.axios.get<PokeApiResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=500',
    );

    const results = data.results;

    let counter = 0;
    const chunks = 20;

    while (counter <= results.length) {
      const data = results.slice(counter, counter + chunks);

      data.forEach(async ({ name, url }) => {
        const segments = url.split('/');
        const no: number = +segments[segments.length - 2];
        const pokemon = { name, no };

        await this.pokemonsService.create(pokemon);
      });

      counter = counter + chunks;
    }

    return 'Seed executed';
  }
}
