import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Url } from './models/url.model';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Url],
})
export class AppModule {}
