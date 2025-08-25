import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppLogger } from './globals/app-logger.global';

const Port = process.env.PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Port);
  let url = await app.getUrl();
  url = url.replace('[::1]', 'localhost');
  AppLogger.log(`Application is running on: ${url}`);
}

void bootstrap();
