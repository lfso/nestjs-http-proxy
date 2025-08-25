import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HttpProxyMiddleware } from './http-proxy.middleware';

@Module({})
export class HttpProxyModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpProxyMiddleware).forRoutes('/proxy');
  }
}
