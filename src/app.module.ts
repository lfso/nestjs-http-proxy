import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpProxyModule } from './http-proxy/proxy-http.module';

@Module({
  imports: [HttpProxyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
