import * as mongoose from 'mongoose';

export const urlSchema = new mongoose.Schema({
  url: { type: String, required: true },
  shortCode: { type: String, required: true },
  newUrl: { type: String, required: true },
},
{ timestamps: true });
