import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UsersService } from '../services/users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Users } from '../entity/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get()
  @ApiOperation({ summary: 'obtiene todos los usuarios' })
  getUsers(): Promise<Users[]> {

    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'obtiene un usuario por id' })
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log('BY ID', id);
    return this.userService.findOneById(id);
  }

  @Post()
  @ApiOperation({ summary: 'crea un usuario' })
  createUser(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'actualiza un usuario por id' })
  async updateUser(@Param('id') id: number, @Body() changes: UserDto) {
    return this.userService.update(id, changes);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'elimina un usuario por id' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
