import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from '@/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 없는 필드 자동 제거
      forbidNonWhitelisted: true, // 허용되지 않은 필드 있으면 400 에러
      transform: true, // string → number 같은 타입 변환 지원
    }),
  );

  const configService = app.get(ConfigService);
  const SERVER_PORT = configService.get('PORT') ?? 8080;
  await app.listen(SERVER_PORT);

  console.log(`SERVER IS UP ON ${SERVER_PORT} PORT`);
}
bootstrap();
