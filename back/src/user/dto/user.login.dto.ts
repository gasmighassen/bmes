import { IsNotEmpty, IsEmail } from 'class-validator';

export class UseLoginDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  readonly password: string;
  refreshToken?: string;
}
