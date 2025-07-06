import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const SERVER_PORT = configService.get('PORT') ?? 8080;
  await app.listen(SERVER_PORT);

  console.log(`SERVER IS UP ON ${SERVER_PORT}`);
}
bootstrap();
