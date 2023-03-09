import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  aboutMe: String,
  image: String,
  address: {
    mz: String,
    city: String,
    country: String,
  },
  rol: String,
});

