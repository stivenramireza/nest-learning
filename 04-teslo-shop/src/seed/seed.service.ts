import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';

import { ProductsService } from 'src/products/products.service';
import { Repository } from 'typeorm';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(
    private readonly productsService: ProductsService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async runSeed() {
    await this.deleteTables();

    const adminUser = await this.insertNewUsers();
    await this.insertNewProducts(adminUser);

    return 'Seed executed';
  }

  private async deleteTables() {
    await this.productsService.deleteAllProducts();

    const queryBuildter = this.userRepository.createQueryBuilder();
    await queryBuildter.delete().where({}).execute();
  }

  private async insertNewUsers() {
    const seedUsers = initialData.users;

    const users: User[] = [];

    seedUsers.forEach((u) => {
      const user = this.userRepository.create(u);
      users.push(user);
    });

    await this.userRepository.save(users);

    return users[0];
  }

  private async insertNewProducts(user: User) {
    await this.productsService.deleteAllProducts();

    const products = initialData.products;

    const inserPromises = [];
    products.forEach((product) => {
      inserPromises.push(this.productsService.create(product, user));
    });

    await Promise.all(inserPromises);

    return true;
  }
}
