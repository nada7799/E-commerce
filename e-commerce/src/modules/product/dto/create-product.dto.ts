import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'product name is required' })
  @IsString({ message: 'product name must be string' })
  name: string;

  @IsNotEmpty({ message: 'product price is required' })
  @IsNumber()
  price: number;

  @IsNotEmpty({ message: 'product description is required' })
  @IsString({ message: 'product description must be string' })
  description: string;

  @IsNotEmpty({ message: 'product sku is required' })
  @IsString({ message: 'product sku must be string' })
  sku: string;

  @IsNotEmpty({ message: 'product quantity is required' })
  @IsNumber()
  quantity: number;

  @IsNotEmpty({ message: 'product category is required' })
  @IsNumber()
  CategoryId: string;
}
