import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean, } from 'class-validator';
export class RolesDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsBoolean()
  readonly is_deleted: boolean;

}

export class UpdateRolesDto extends PartialType(RolesDto) { }