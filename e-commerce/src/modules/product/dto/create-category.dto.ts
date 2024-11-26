import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCategoryDto {
  @IsNotEmpty({ message: 'category name is required' })
  @IsString({ message: 'category name must be string' })
  name: string;
}
