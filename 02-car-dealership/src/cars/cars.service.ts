import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { v4 as uuid } from 'uuid';
import { CreateCarDTO, UpdateCarDTO } from './dto';

import { Car } from './interfaces/cars.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException('Car not found');

    return car;
  }

  findOneByModel(model: string) {
    const car = this.cars.find((car) => car.model === model);

    if (car) throw new ConflictException('Car model is already registered');
  }

  create(createCarDTO: CreateCarDTO) {
    const { brand, model } = createCarDTO;

    this.findOneByModel(model);

    const newCar: Car = {
      id: uuid(),
      brand,
      model,
    };
    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCarDTO: UpdateCarDTO) {
    let carDB = this.findOneById(id);

    if (updateCarDTO?.id !== id) {
      throw new BadRequestException('Car id is not valid');
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDTO,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const car = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
