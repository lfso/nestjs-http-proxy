import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppLogger } from './globals/app-logger.global';
import { createProxyMiddleware } from 'http-proxy-middleware';
// No need to import Request, Response, NextFunction

const Port = process.env.PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Add proxy middleware before starting the app
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'https://httpbin.org/anything',
      changeOrigin: true,
      secure: true,
      pathRewrite: {
        '^/proxy': '',
      },
    }),
  );

  await app.listen(Port);
  let url = await app.getUrl();
  url = url.replace('[::1]', 'localhost');
  AppLogger.log(`Application is running on: ${url}`);
}

void bootstrap();
