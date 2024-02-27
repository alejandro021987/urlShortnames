import { Body, Controller, Get, NotFoundException, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { UrlModel } from './models/url.model';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/u/:shortCode')
  async getUrl(@Param('shortCode') shortCode: string, @Res() res: Response): Promise<void> {
    try {
      const urlRecord = await this.appService.getUrl(shortCode);
      if (!urlRecord) {
        throw new NotFoundException('URL not found');
      }
      res.status(302).location(urlRecord.url).send();
    } catch (error) {
      throw new NotFoundException('URL not found');
    }
  }

  @Post()
  async getShortestUrl(@Body() body: any): Promise<UrlModel> {
    const newUrl = await this.appService.transformUrl(body?.url);
    return newUrl;
  }

  @Get('/top-100')
  async getTop100Urls(): Promise<UrlModel[]> {
    return await this.appService.getTop100Urls();
  }
}
