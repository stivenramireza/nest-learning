import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  findAll() {
    return this.pokemonModel.find();
  }

  async findOne(params: { id?: string; name?: string; no?: number }) {
    const { id, name, no } = params;

    return await this.pokemonModel.findOne({
      $or: [{ _id: id }, { name }, { no }],
      $and: [{ active: true }],
    });
  }

  async findById(id: string) {
    const pokemon = await this.findOne({ id });
    if (!pokemon) throw new NotFoundException('Pokemon not found');
    return pokemon;
  }

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();

    const pokemon = await this.findOne({ ...createPokemonDto });
    if (pokemon) throw new ConflictException('Pokemon already exists');

    const createdPokemon = await this.pokemonModel.create(createPokemonDto);
    return createdPokemon;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
