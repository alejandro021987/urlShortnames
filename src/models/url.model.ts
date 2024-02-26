import { Document } from 'mongoose';

export class Url extends Document {
  url: string;
  newUrl: string;
}
