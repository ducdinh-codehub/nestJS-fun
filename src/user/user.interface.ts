import { Document } from 'mongoose';

export interface UserInterface extends Document {
    fullname: String,
    age: Number,
    dob: Date,
    email: String,
    phone: String,
    address: String,
    gender: String,
}