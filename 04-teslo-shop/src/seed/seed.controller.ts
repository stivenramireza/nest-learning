import { Controller, Post } from '@nestjs/common';
import { Auth } from 'src/auth/decorators';
import { Role } from 'src/auth/interfaces';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  @Auth(Role.ADMIN)
  async executeSeed() {
    return await this.seedService.runSeed();
  }
}
