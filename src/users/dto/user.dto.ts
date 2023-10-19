import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsNumber, IsBoolean, IsDate } from 'class-validator';
export class UserDto {
  @IsString()
  @IsNotEmpty()
  readonly full_name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;


  @IsNumber()
  readonly phone: number;

  @IsString()
  role: string;

  @IsBoolean()
  readonly is_deleted: boolean;

}

export class UpdateUserDto extends PartialType(UserDto) { }
