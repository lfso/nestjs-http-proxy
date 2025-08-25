import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppLogger } from 'src/globals/app-logger.global';

@Controller('hello-world')
export class HelloWorldController {
  @Get()
  getHello() {
    return { timestamp: new Date().toISOString(), message: 'Hello, world!' };
  }

  @Post()
  createHello(@Body() payload: unknown) {
    AppLogger.log('Request payload:', payload);
    return {
      timestamp: new Date().toISOString(),
      message: 'Hello, world! (created)',
    };
  }
}
