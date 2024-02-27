import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UrlModel } from './models/url.model';
import { generateRandomString } from './utils/utils';

@Injectable()
export class AppService {
  constructor(@InjectModel('Url') private readonly urlModel: Model<UrlModel>) {}

  getHello(): string {
    return 'Hello World!';
  }
  async getUrl(shortCode: string): Promise<UrlModel> {
    return await this.urlModel.findOne({ shortCode }).exec();
  }

  async transformUrl(url: string): Promise<UrlModel> {
    const shortCode = generateRandomString(5);
    const newUrl = `http://localhost:3000/u/${shortCode}`; //this will be accessed by get to return url
    const urlObject = new this.urlModel({ shortCode, url, newUrl });
    return await urlObject.save();
  }

  async getTop100Urls(): Promise<any[]> {
    return this.urlModel.aggregate([
      {
        $group: {
          _id: "$url",
          count: { $sum: 1 },
          docs: { $push: "$$ROOT" }
        }
      },
      {
        $project: {
          _id: 0,
          url: "$_id",
          count: 1,
          docs: 1
        }
      }
    ]).exec();
  }
}
