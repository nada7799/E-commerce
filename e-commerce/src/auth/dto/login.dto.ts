import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'user@gmail.com',
    description: 'email of the user',
    type: String,
  })
  @IsString({ message: 'the provided email must be string' })
  @IsNotEmpty({ message: 'first name must be provided' })
  email: string;

  @ApiProperty({
    example: 'Aa!123mm@',
    description: 'the password of the user',
    type: String,
  })
  @IsString({ message: 'password must be string' })
  @IsNotEmpty({ message: 'password is required' })
  password: string;
}
