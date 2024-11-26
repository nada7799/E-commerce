import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  firstName: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  lastName: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  })
  email: string;

  @Prop({
    type: String,
    trim: true,
  })
  password: string;

  @Prop({
    type: String,
    trim: true,
  })
  phoneNumber: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
