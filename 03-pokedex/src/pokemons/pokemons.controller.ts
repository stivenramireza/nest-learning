import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get()
  findAll() {
    return this.pokemonsService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.pokemonsService.findOne(term);
  }

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonsService.create(createPokemonDto);
  }

  @Patch(':term')
  update(
    @Param('term') term: string,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ) {
    return this.pokemonsService.update(term, updatePokemonDto);
  }

  @Delete(':term')
  remove(@Param('term') term: string) {
    return this.pokemonsService.remove(term);
  }
}
