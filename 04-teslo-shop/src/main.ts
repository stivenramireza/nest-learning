import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('NestApplication');

  const configService = app.get(ConfigService);

  app.setGlobalPrefix(configService.get('API_VERSION'));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(configService.get('PORT'));
  logger.log(
    `App running at port ${configService.get('PORT')} in ${configService.get(
      'ENV',
    )} mode`,
  );
}
bootstrap();
