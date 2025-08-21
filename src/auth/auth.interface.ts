import { Document } from 'mongoose';

export interface AuthInterface extends Document {
    username: String,
    password: String,
    fullname: String,
    email: String,
    phone: String
}