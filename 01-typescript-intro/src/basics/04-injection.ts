import { HttpAdapter, AxiosAdapter, FetchAdapter } from '../api/http.adapter';
import { Move, PokeApiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(public readonly id: number, public name: string, private readonly http: HttpAdapter) {}

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);

        return data.moves;
    }
}

const axiosAdapter = new AxiosAdapter();
const fetchAdapter = new FetchAdapter();

export const charmander = new Pokemon(4, 'Charmander', fetchAdapter);

charmander.getMoves();
