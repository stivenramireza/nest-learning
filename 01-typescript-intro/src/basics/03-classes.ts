import axios from 'axios';

import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
    // public id: number;
    // public name: string;

    // constructor(id: number, name: string) {
    //     this.id = id;
    //     this.name = name;
    //     console.log('called constructor');
    // }

    constructor(public readonly id: number, public name: string) {}

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    scream(): void {
        console.log(`${this.name.toUpperCase()}!!!!`);
    }

    speak(): void {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves[0].move.name.toUpperCase());

        return data.moves;
    }
}

export const charmander = new Pokemon(4, 'Charmander');

// charmander.id = 10;
// charmander.name = 'Mew';

// console.log(charmander);
// charmander.scream();
// charmander.speak();

charmander.getMoves();
