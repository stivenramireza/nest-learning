import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
import { AuthConfig } from './interfaces/config.interface';

@Injectable()
export class AuthConfigService implements JwtOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createJwtOptions(): JwtModuleOptions {
    const { jwt: jwtSecret } = this.configService.get<AuthConfig>('auth');

    return {
      secret: jwtSecret,
      signOptions: { expiresIn: '5m' },
    };
  }
}
