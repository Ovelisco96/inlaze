/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesDto } from '../dto/roles.dto';
import { Roles } from '../entity/roles.entity';

@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }

  @Get()
  @ApiOperation({ summary: 'obtiene todos los roles' })
  getUsers(): Promise<Roles[]> {
    return this.rolesService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'crea un rol' })
  createRole(@Body() role: RolesDto) {
    return this.rolesService.createUser(role);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'actualiza un rol por id' })
  async updateUser(@Param('id') id: number, @Body() changes: RolesDto) {
    return this.rolesService.update(id, changes);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'elimina un rol por id' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.rolesService.delete(id);
  }
}
