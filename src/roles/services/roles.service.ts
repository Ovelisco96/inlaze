import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from '../entity/roles.entity';
import { Repository } from 'typeorm';
import { RolesDto, UpdateRolesDto } from '../dto/roles.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles) private rolesRepository: Repository<Roles>,
  ) { }

  async findAll(): Promise<Roles[]> {
    return await this.rolesRepository.find();
  }

  async createUser(role: RolesDto): Promise<Roles> {
    const roleFound = await this.rolesRepository.findOne({
      where: {
        name: role.name
      },
    });
    if (roleFound) {
      throw new HttpException('role already exits', HttpStatus.CONFLICT);
    }
    const newRole = this.rolesRepository.create(role);
    return await this.rolesRepository.save(newRole);
  }

  async delete(id: number) {
    const roleDelete = await this.rolesRepository.delete(id);
    if (roleDelete.affected == 0) {
      throw new HttpException('Role Not Found', HttpStatus.CONFLICT);
    }

    return { roleDelete, message: `deleted user with id ${id}` };
  }

  async update(id: number, changes: UpdateRolesDto): Promise<Roles> {

    const roleFound = await this.rolesRepository.findOne({ where: { id } });

    if (Object.keys(changes).length === 0 || null || undefined) {
      throw new HttpException('I do not enter any data', HttpStatus.CONFLICT);
    }
    if (!roleFound) {
      throw new HttpException('Role Not Found', HttpStatus.NOT_FOUND);
    }
    const updateRole = Object.assign(roleFound, changes);
    return await this.rolesRepository.save(updateRole);
  }
}
