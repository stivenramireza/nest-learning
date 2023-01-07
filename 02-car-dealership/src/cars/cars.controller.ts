import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dtos/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get('/')
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get('/:id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post('/')
  createCar(@Body() createCarDTO: CreateCarDTO) {
    return createCarDTO;
  }

  @Patch('/:id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return {
      ok: true,
      method: 'PATCH',
      id,
      body,
    };
  }

  @Delete('/:id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      ok: true,
      method: 'DELETE',
      id,
    };
  }
}
