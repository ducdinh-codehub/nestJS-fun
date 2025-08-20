import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  fullname: String,
  age: Number,
  dob: Date,
  email: String,
  phone: String,
  address: String,
  gender: String,
});