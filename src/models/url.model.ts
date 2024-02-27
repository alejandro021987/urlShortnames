import { Document } from 'mongoose';

export interface UrlModel extends Document {
  url: string;
  shortCode: string;
  newUrl: string;
}
