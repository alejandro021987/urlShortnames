import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Url } from './models/url.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getShortestUrl(@Body() url: string): Url {
    const newUrl = this.appService.transformUrl(url);
    return newUrl;
  }
}
