import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  desccription: String,
  image: String,
  price: Number,
  createAt: {
    type: Date,
    default: Date.now,
  },
});
