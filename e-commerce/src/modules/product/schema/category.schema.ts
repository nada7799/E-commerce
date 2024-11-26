import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Product } from './product.schema';
@Schema({ timestamps: true })
export class Category {
  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  product: Product;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
