import { NestFactory } from '@nestjs/core';

import * as express from 'express';

import { AppModule } from './app.module';
import { AppLogger } from './globals/app-logger.global';

const Port = process.env.PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });

  app.use(
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ) => {
      if (req.path.startsWith('/proxy')) {
        return next();
      }
      express.json()(req, res, next);
    },
  );

  await app.listen(Port);
  let url = await app.getUrl();
  url = url.replace('[::1]', 'localhost');
  AppLogger.log(`Application is running on: ${url}`);
}

void bootstrap();
