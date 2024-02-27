import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { urlSchema } from './schemas/url.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'), MongooseModule.forFeature([{ name: 'Url', schema: urlSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
