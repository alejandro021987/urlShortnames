import * as mongoose from 'mongoose';

export const urlSchema = new mongoose.Schema({
  url: String,
  newUrl: String,
});
