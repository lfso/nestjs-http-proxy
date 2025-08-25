import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HttpProxyModule } from './http-proxy/http-proxy.module';
import { HelloWorldModule } from './hello-world/hello-world.module';

@Module({
  imports: [HttpProxyModule, HelloWorldModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
