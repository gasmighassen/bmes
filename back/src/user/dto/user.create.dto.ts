import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
  @IsOptional()
  phone: string;
  @IsOptional()
  city: string;
  @IsOptional()
  role: string;
}
