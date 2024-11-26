import mongoose from 'mongoose';

export interface UserInterface {
  _id?: mongoose.Types.ObjectId;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
}
