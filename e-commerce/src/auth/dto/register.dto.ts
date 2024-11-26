import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'Ahmed',
    description: 'the first name of the user',
    type: String,
  })
  @IsString({ message: 'first name must be string' })
  @IsNotEmpty({ message: 'first name must be provided' })
  firstName: string;

  @ApiProperty({
    example: 'mohamed',
    description: 'last name of the user',
    type: String,
  })
  @IsString({ message: 'last name must be string' })
  @IsNotEmpty({ message: 'last name must be provided' })
  lastName: string;

  @ApiProperty({
    example: 'user@gmail.com',
    description: 'email of the user',
    type: String,
  })
  @IsEmail(
    { allow_display_name: true },
    { message: 'Please enter a valid email address' },
  )
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
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
    message:
      'password must include at least one uppercase letter and one special symbol , and must be at least 8 characters',
  })
  password: string;

  @ApiProperty({
    example: '+201550089234',
    description: 'the phone number of the user',
    type: String,
  })
  @IsNotEmpty({ message: 'phone number must be provided' })
  @IsString({ message: 'phone number must be a valid string' })
  phone: string;
}
