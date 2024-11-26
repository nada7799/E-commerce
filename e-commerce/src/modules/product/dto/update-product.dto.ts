import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString({ message: 'product name must be string' })
  name: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString({ message: 'product description must be string' })
  description: string;

  @IsOptional()
  @IsString({ message: 'product sku must be string' })
  sku: string;

  @IsOptional()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsNumber()
  CategoryId: string;
}
