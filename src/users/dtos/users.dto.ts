import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class createUserDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;
  @IsString()
  @IsNotEmpty()
  readonly role: string;
}
