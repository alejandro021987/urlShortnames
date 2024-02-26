import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Url } from './models/url.model';
import { generateRandomString } from './utils/utils';

@Injectable()
export class AppService {
  constructor(@InjectModel('Url') private readonly urlModel: Model<Url>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async transformUrl(url: string): Promise<Url> {
    const shortName = generateRandomString(5);
    const newUrl = `http://localhost:3000/${shortName}`;
    // save in db newUrl , url
    const urlObject = new this.urlModel({ url, newUrl });
    await urlObject.save();
    return urlObject;
  }
}
